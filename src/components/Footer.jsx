
function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold text-red-500 mb-4">
              BShop
            </h1>

            <p className="text-gray-400 text-sm leading-7">
              Discover the best products at amazing prices.
              Shop your favorite products with comfort and confidence.
            </p>

            <div className="flex gap-4 mt-5">
              <a href="#" className="hover:text-red-500 transition">Facebook</a>
              <a href="#" className="hover:text-red-500 transition">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-5">Quick Links</h2>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/product" className="hover:text-white">Products</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h2 className="text-lg font-bold mb-5">Customer Support</h2>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Help Center</li>
              <li>Shipping Information</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-bold mb-5">
              Subscribe Newsletter
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              Get updates about new products and special offers.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-red-500"
              />

              <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm text-center">
            © 2026 BShop. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm">
            Made with ❤️ for Shopping Lovers
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
