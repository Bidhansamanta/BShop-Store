import { useState, useEffect } from "react";

function HeroSection() {
  const slides = [
    {
      title: "Upgrade Your Style",
      subtitle: "New Season, New Look",
      description:
        "Discover the latest fashion trends and upgrade your everyday style with our exclusive collection.",
      button: "Shop Now",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    },
    {
      title: "Style That Defines You",
      subtitle: "Trending Collection",
      description:
        "Find your perfect style with premium clothing designed for comfort, confidence, and everyday wear.",
      button: "Explore Collection",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    },
    {
      title: "Exclusive Deals Just For You",
      subtitle: "Limited Time Offers",
      description:
        "Discover amazing products, unbeatable prices, and the best shopping experience in one place.",
      button: "Discover More",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[450px] md:h-[550px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl text-white">

          <p className="text-sm md:text-base uppercase tracking-[3px] mb-4 text-gray-200">
            {slides[currentSlide].subtitle}
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            {slides[currentSlide].title}
          </h1>

          <p className="text-gray-200 text-sm md:text-lg leading-relaxed max-w-lg mb-8">
            {slides[currentSlide].description}
          </p>

          <button className="bg-white text-black px-7 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
            {slides[currentSlide].button}
          </button>

        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40 transition"
      >
        &#10095;
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50"
            }`}
          ></button>
        ))}
      </div>

    </section>
  );
}

export default HeroSection;