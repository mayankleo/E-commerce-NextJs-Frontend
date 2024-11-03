import { ButtonComponent, CardComponent, CarouselComponent } from '../components/index';
import { ItemMinView } from '../lib/itemType';
import { getItems } from '../services/itemService';

const Page = async () => {

  const items: ItemMinView[] = await getItems();

  return (
    <>
      <div className='container mx-auto px-2 h-[80vh]'>
        <CarouselComponent fade={true} urls={[
          "https://images.unsplash.com/photo-1696858386015-22cea0760a14",
          "https://images.unsplash.com/photo-1720019962117-8d3916d970d7",
          "https://images.unsplash.com/photo-1712624723700-675654270847"
        ]} >
          <h1 className='font-bold text-6xl'>Shop title</h1>
          <p className='text-2xl py-6'>Subheading with description of your shopping site</p>
          <ButtonComponent>Buy Now</ButtonComponent>
        </CarouselComponent>
      </div>
      <div className='container mx-auto px-2 pt-12'>
        <h1 className='text-4xl font-semibold mb-6'>Items</h1>
        <div className='grid grid-cols-3 gap-6'>
          {items.map((item) => (
            <CardComponent
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};


export default Page;