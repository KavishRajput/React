import { Link } from "react-router"

export const Services_Sidebar=()=>{
    return(
        <>
            {/* Sidebar Container */}
        <div className="w-64 bg-gray-950 border-r border-gray-200 h-auto p-4 shadow-md ">
          <h2 className="text-xl font-bold mb-4 text-white">Our Services</h2>

          <nav className="space-y-2">
            <div className="flex items-center px-3 py-2 text-gray-100 hover:bg-gray-900 rounded-md">
              <Link to={"Product_Sourcing"}>📦 Product Sourcing</Link>
            </div>
            <div className="flex items-center px-3 py-2 text-gray-100 hover:bg-gray-900 rounded-md">
              <Link to={"Custom_Branding"}>🏷️ Custom Branding</Link>
            </div>
            <div className="flex items-center px-3 py-2 text-gray-100 hover:bg-gray-900 rounded-md">
              <Link to={"Fast_Shipping"}>🚚 Fast Shipping</Link>
            </div>
            <div className="flex items-center px-3 py-2 text-gray-100 hover:bg-gray-900 rounded-md">
              <Link to={"Inventary_Management"}>📊 Inventory Management</Link>
            </div>
            <div className="flex items-center px-3 py-2 text-gray-100 hover:bg-gray-900 rounded-md">
              <Link to={"Support"}>🕐 24/7 Support</Link>
            </div>
          </nav>

          <div className="mt-6">
            <h3 className="text-md font-semibold text-white mb-2">Help & Support</h3>
            <ul className="space-y-4 text-sm text-white ms-4 mt-6">
              <li><div className="hover:underline"><Link to={"Faq"}>FAQs</Link></div></li>
              <li><div className="hover:underline"><Link to={"Livechat"}>Live Chat</Link></div></li>
              <li><div className="hover:underline"><Link to={"Request_callback"}>Request Callback</Link></div></li>
              <li><div className="hover:underline"><Link to={"Emailsupport"}>Email Support</Link></div></li>
            </ul>
          </div>
        </div>

        </>
    )
}