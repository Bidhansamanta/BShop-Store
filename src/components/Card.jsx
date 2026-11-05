function Card({ item }) {
  const { id, title, description, category, price, image, rating } = item;

  return (
    <div className="group max-w-sm bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100 p-5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-red-500 hover:text-white transition">
          ♥
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            {category}
          </span>

          <span className="text-sm text-yellow-500 font-semibold">
            {rating.count} ★ {rating.rate}
          </span>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          <span className="text-xl line-through font-semibold text-gray-500">
            ${Math.round(price*price/100)}
          </span>
        </div>

        {/* Add to Cart */}
        <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 active:scale-95 transition-all duration-300 cursor-pointer">
          + Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
