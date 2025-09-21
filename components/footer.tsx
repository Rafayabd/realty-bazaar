export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Realty Websites */}
          <div>
            <h3 className="font-semibold mb-4">REALTY WEBSITES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Realty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Advertise
                </a>
              </li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="font-semibold mb-4">DISCOVER</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Miami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Los Angeles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chicago
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  New York
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Real Estate App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Realty Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rent Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  See Neighborhoods
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  For Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Recently Sold
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Price Reduced
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Foreclosures
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">PROGRAMS</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  iBuyer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instant Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Realty Cash
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Brokerage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Others
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Download Our Mobile App</h3>
            <p className="text-gray-300 mb-6">
              Find everything you need to know about buying, selling and renting on the go.
            </p>
            <div className="flex justify-center gap-4">
              <img src="/download-on-app-store-button.jpg" alt="Download on App Store" className="h-12" />
              <img src="/get-it-on-google-play-button.png" alt="Get it on Google Play" className="h-12" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 Realty Bazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
