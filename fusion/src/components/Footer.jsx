import { Facebook, Instagram, Twitter} from "lucide-react";

export const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-bold text-lime-300">Fusion</h2>
            </div>
            <p className="text-gray-400 mt-3">
              Your one-stop shop for the latest trends and exclusive deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Shop</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
              <li className="hover:text-white cursor-pointer">Shipping Info</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-pink-500">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-lime-300 mt-8 border-t border-gray-700 pt-4">
          <p>© {new Date().getFullYear()} Fusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};
