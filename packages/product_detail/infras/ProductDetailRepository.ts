import axiosClient from '@web-core/utils/axiosClient';

interface Data {
  id: string;
  category: string;
  checked: boolean;
  content: string;
  createdAt: string;
  description: string;
  image: { fileName: string; url: string };
  price: number;
  product_id: string;
  sold: number;
  title: string;
}
export interface ProductDetailData {
  success: boolean;
  status: number;
  data?: Data;
  message?: string | string[];
  errorCode?: string;
}
export default {
  getProducts: async (id: string): Promise<ProductDetailData> => {
    try {
      const res = await axiosClient.get(`product/${id}`);

      if (res) {
        return {
          success: true,
          status: res.status,
          data: {
            id: res.data.product._id,
            category: res.data.product.category,
            checked: res.data.product.checked,
            content: res.data.product.content,
            createdAt: res.data.product.createdAt,
            description: res.data.product.description,
            image: {
              fileName: res.data.product.image.filename,
              url: res.data.product.image.publicUrl,
            },
            price: res.data.product.price,
            product_id: res.data.product.product_id,
            sold: res.data.product.sold,
            title: res.data.product.title,
          },
        };
      }
      throw new Error();
    } catch (error: any) {
      console.log(error);
      return {
        status: error?.response?.data?.statusCode,
        success: false,
        message: error?.response?.data?.message || 'Something went wrong!',
        errorCode: error?.code,
      };
    }
  },
};
