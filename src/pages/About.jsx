function About() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">BShop</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover unique products, amazing quality, and a shopping
            experience designed just for you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="BShop Store"
              className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              Your Trusted Online Shopping Partner
            </h2>

            <p className="text-gray-600 leading-7 mb-4">
              Welcome to BShop! We believe shopping should be simple,
              enjoyable, and affordable. Our goal is to bring quality
              products directly to your doorstep.
            </p>

            <p className="text-gray-600 leading-7 mb-6">
              We focus on quality, customer satisfaction, and providing
              a smooth online shopping experience for everyone.
            </p>

            <button className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Explore Products
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">

          <div className="bg-white p-7 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Quality Products
            </h3>
            <p className="text-gray-600">
              We focus on delivering quality products.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Best Prices
            </h3>
            <p className="text-gray-600">
              Enjoy great products at affordable prices.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Customer Support
            </h3>
            <p className="text-gray-600">
              Your satisfaction is always our priority.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
