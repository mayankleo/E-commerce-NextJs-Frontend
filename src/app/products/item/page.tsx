import { CardComponent } from '@/components/index';
import { ItemMinView } from '@/lib/itemType';
import { getItems } from '@/services/itemService';

const Page = async () => {

  const Items: ItemMinView[] = await getItems();

  return (
    <>
      <div className='container mx-auto px-2 pt-12'>
        <h1 className='text-4xl font-semibold mb-6'>Product Items</h1>
        <div className='grid grid-cols-3 gap-6'>
          {Items.map((Item) => (
            <CardComponent
              key={Item.id}
              item={Item}
            />
          ))}
        </div>
      </div>
    </>
  );
};


export default Page;