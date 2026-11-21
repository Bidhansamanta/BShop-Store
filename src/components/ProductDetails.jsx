import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function ProductDetails() {
  const product = useContext(ProductContext);
  const { id } = useParams();

  const item = product?.find((curElem) => curElem.id == id);

  if (!item) {
    return <h2 className="text-center mt-10">Product Not Found</h2>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        <div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-96 object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{item.title}</h1>

          <h2 className=" bg-blue-200 px-4 py-2 max-w-35 rounded-full mt-4 text-center">
            {item.category}
          </h2>

          <h2 className="text-2xl font-bold mt-4">
            ${item.price}{" "}
            <span className="text-xl line-through font-semibold text-gray-500">
              ${Math.round((item.price * item.price) / 100)}
            </span>
          </h2>

          <p className="mt-5 text-gray-600">{item.description}</p>
          <p className="mt-4">⭐ {item.rating?.rate}</p>

          <button className="bg-black text-white px-6 py-3 rounded-lg mt-5 mr-30">
            Add to Cart
          </button>
          <NavLink to="/product">
            <button className="bg-black text-white px-6 py-3 rounded-lg mt-5">
            Go Back
          </button>
          </NavLink>
        </div>
        
      </div>
    </>
  );
}

export default ProductDetails;
