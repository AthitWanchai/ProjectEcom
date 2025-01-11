import HomePage from './HomePage';
import { fetchProducts } from '../../lib/fetchProducts';

export default async function Page() {
  const products = await fetchProducts('all');

  return <HomePage products={products} />;
}
