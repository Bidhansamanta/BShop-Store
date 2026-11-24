import { useContext } from "react";
import Card from "../components/Card";
import { ProductContext } from "../context/ProductContext";
import HeroSection from "../components/HeroSection";

function Home() {
  const product = useContext(ProductContext);
  return (
    <>
      <HeroSection />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {product?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Home;
