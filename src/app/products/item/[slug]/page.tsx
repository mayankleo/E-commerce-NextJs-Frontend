import { ButtonComponent, CarouselComponent } from "@/components/index";
import { getItemBySlug } from "@/services/itemService";
import { ItemView } from "@/lib/itemType";

type ItemPropsType = {
  slug: string;
}

const Item = async ({ params: { slug } }: { params: ItemPropsType }) => {

  const items: ItemView = await getItemBySlug(slug);
  const itemImageUrls = items.item_image_urls.map(item_image_url => item_image_url.item_image_url)
  console.log('item :>> ', items);
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-2 gap-24">
        <div className="aspect-[1.5/1]">
          <CarouselComponent urls={itemImageUrls} ></CarouselComponent>
          {/* {item.item_images.map((item_image) => (
            <Image key={item_image.item_image} src={item_image.item_image || "/No_img.png"} alt={item.item_name} width={100} height={100} className="aspect-[1.5/1] rounded-lg object-cover w-full" />
          ))} */}
        </div>
        <div className="w-full flex flex-col gap-4">
          <h1 className="font-semibold text-5xl capitalize">{items.item_name}</h1>
          <p className="text-yellow-500 bg-yellow-100 w-fit px-2 rounded-full">{items.category.category_title}</p>
          <div>
            <p className="text-2xl font-semibold">₹{items.item_price} <span className="text-sm"> +18%GST</span></p>
            {items.item_in_stock ?
              <p className="text-green-500 bg-green-100 w-fit px-2 rounded-full">In Stock</p> :
              <p className="text-red-500 bg-red-100 w-fit px-2 rounded-full">Out Of Stock</p>
            }
          </div>
          <div className="flex gap-8">
            <ButtonComponent className="flex-1">Buy Now</ButtonComponent>
            <ButtonComponent className="flex-1">Add To Cart</ButtonComponent>
          </div>
          <p className="text-gray-800"><span className="text-black font-medium text-lg">Description</span> <br />{items.item_description}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;



