import axiosClient from '@web-core/utils/axiosClient';
import { Product } from '../models';

interface Data {
  productList: string[];
  data: { [key: string]: Product };
  total: number;
}
export interface ProductsData {
  success: boolean;
  status: number;
  data?: Data;
  message?: string | string[];
  errorCode?: string;
}
export default {
  getProducts: async (): Promise<ProductsData> => {
    try {
      const res = await axiosClient.get('product');
      if (res) {
        const productList: string[] = [];
        const data: { [key: string]: Product } = {};

        res.data.products.forEach((item: any) => {
          productList.push(item._id);
          data[item._id as string] = {
            id: item._id,
            category: item.category,
            checked: item.checked,
            content: item.content,
            createdAt: item.createdAt,
            description: item.description,
            image: { fileName: item.image.filename, url: item.image.publicUrl },
            price: item.price,
            product_id: item.product_id,
            sold: item.sold,
            title: item.title,
          };
        });
        return {
          success: true,
          status: res.status,
          data: { productList, data, total: res.data.products.length },
        };
      }
      throw new Error();
    } catch (error: any) {
      return {
        status: error?.response?.data?.statusCode,
        success: false,
        message: error?.response?.data?.message || 'Something went wrong!',
        errorCode: error?.code,
      };
    }
  },
};
