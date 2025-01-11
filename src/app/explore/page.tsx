import Link from 'next/link';

const categories = [
  { name: 'Vegetables', slug: 'vegetables' },
  { name: 'Fruits', slug: 'fruits' },
  { name: 'All', slug: 'all' },
];

export default function ExplorePage() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Explore by Vegetable & Fruit</h1>
      <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
        {categories.map((category) => (
          <Link key={category.slug} href={`/explore/${category.slug}`}>
            <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
              {category.name}
            </button>
          </Link>
        ))}
      </div>
      <p>Select a category to explore products!</p>
    </main>
  );
}
