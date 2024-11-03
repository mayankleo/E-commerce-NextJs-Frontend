export interface ItemMinView {
    id: number;
    item_name: string;
    item_description: string;
    item_price: number;
    item_image_url: string;
    item_in_stock: boolean;
    item_slug: string;
    category: number;
}

export interface ItemView {
    id: number;
    item_name: string;
    item_description: string;
    item_price: number;
    item_in_stock: boolean;
    item_slug: string;
    item_image_urls: ItemImage[];
    category: ItemCategory;
    item_quantity: number;
    item_updated: Date;
    item_registered: Date;
};

export interface ItemCategory {
    id: number,
    category_title: string,
    category_description: string
};

export interface ItemImage {
    id: number,
    item_image_url: string,
    item: number
};