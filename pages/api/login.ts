// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

type Data = {
  name: string;
};
const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(404);
  }

  return new Promise((resolve) => {
    const handleLoginRes: ProxyResCallback = (proxyRes, req, res) => {
      let data = '';
      proxyRes.on('data', (chunk) => {
        data += chunk;
      });
      proxyRes.on('end', () => {
        try {
          const { accessToken } = JSON.parse(data);
          const cookies = new Cookies(req, res);
          cookies.set('accessToken', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
          });
          (res as NextApiResponse).status(200);
        } catch (error) {
          (res as NextApiResponse).status(500);
        }

        resolve(true);
      });
    };
    req.headers.cookie = '';
    proxy.web(req, res, {
      target: process.env.NEXT_PUBLIC_baseAPI,
      changeOrigin: true,
      selfHandleResponse: true,
    });

    proxy.once('proxyRes', handleLoginRes);
  });
}
