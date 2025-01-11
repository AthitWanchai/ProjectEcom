import { fetchProducts } from '../../../../lib/fetchProducts';
import Card from '../../../../components/Card/Card';

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const products = await fetchProducts(params.category);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Explore Category: {params.category}</h1>

      {/* Filter Section */}
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-black text-white rounded-lg">All</button>
        <button className="px-4 py-2 bg-gray-200 text-black rounded-lg">Vegetables</button>
        <button className="px-4 py-2 bg-gray-200 text-black rounded-lg">Fruits</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} name={product.name} image={product.image} />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="mt-6 text-center">
        <button className="px-4 py-2 bg-gray-200 rounded-lg mr-2">&larr; Previous</button>
        <span className="px-4">Page 1 of 5</span>
        <button className="px-4 py-2 bg-gray-200 rounded-lg ml-2">Next &rarr;</button>
      </div>
    </main>
  );
}
