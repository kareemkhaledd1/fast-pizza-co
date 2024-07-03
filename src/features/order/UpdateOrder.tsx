import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export async function action({ params }: { params: any }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  console.log('update');
  return null;
}

export default UpdateOrder;
