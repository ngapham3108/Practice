// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';

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
  return new Promise((resolve) => {
    req.headers.cookie = '';
    proxy.web(req, res, {
      target: process.env.NEXT_PUBLIC_baseAPI,
      changeOrigin: true,
      selfHandleResponse: false,
    });

    proxy.once('proxyRes', () => resolve(true));
  });
}
