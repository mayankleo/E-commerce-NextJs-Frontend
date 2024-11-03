import AxiosInstance from './service';
import { ItemMinView, ItemView } from '@/lib/itemType';


export const getItems = async (): Promise<ItemMinView[]> => {
    try {
        const response = await AxiosInstance.get(`products/item/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

export const getItemBySlug = async (slug: string): Promise<ItemView> => {
    try {
        const response = await AxiosInstance.get(`products/item/slug/${slug}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching item:', error);
        throw error;
    }
};
