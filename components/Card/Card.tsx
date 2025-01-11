export default function Card({ name, image }: { name: string; image: string }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-36 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
}
