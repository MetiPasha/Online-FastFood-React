function ProductCard({
  id,
  image,
  name,
  description,
  price,
  quantity,
  onAddToCart,
}) {
  return (
    <div className="border rounded-lg p-4 shadow-md text-right">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-orange-500 font-bold mt-2">
        {price.toLocaleString()} تومان
      </p>

      <div className="flex justify-start items-center mt-4 space-x-4 rtl:space-x-reverse">
        <button
          className="bg-orange-500 text-white px-3 py-1 rounded"
          onClick={() => onAddToCart({ id, name, price }, "increase")}
        >
          +
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-300 text-black px-3 py-1 rounded"
          onClick={() => onAddToCart({ id, name, price }, "decrease")}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
