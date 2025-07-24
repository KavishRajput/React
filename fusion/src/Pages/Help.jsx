import { NavLink } from "react-router"
export const Help=()=>{
    return (
        <>
        <div className="bg-gray-50 text-gray-900 min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            How Can We Help You?
          </h1>
          <p className="mt-4 text-lg text-gray-600 sm:max-w-xl mx-auto">
            We're here to assist you with any questions or issues. Please find answers to common queries below. If you need further assistance, feel free to reach out!
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-12">
          <div className="border-b-2 border-gray-200 pb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              {/* Question 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">How do I place an order?</h3>
                <p className="text-gray-600 mt-2">
                  To place an order, simply browse through our products, add items to your cart, and proceed to checkout. Once you've entered your shipping information and payment details, you can confirm your order.
                </p>
              </div>

              {/* Question 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">What payment methods are accepted?</h3>
                <p className="text-gray-600 mt-2">
                  We accept a variety of payment methods including credit cards (Visa, MasterCard, etc.), PayPal, and other popular payment gateways. You can choose your preferred method at checkout.
                </p>
              </div>

              {/* Question 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">How can I track my order?</h3>
                <p className="text-gray-600 mt-2">
                  Once your order is shipped, you will receive an email with a tracking number. You can use this number to track your order through our delivery partner's website.
                </p>
              </div>

              {/* Question 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">Can I return or exchange my items?</h3>
                <p className="text-gray-600 mt-2">
                  Yes, we offer returns and exchanges within 30 days of receiving your order. Please refer to our Return & Exchange Policy for more details.
                </p>
              </div>

              {/* Question 5 */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">Do you offer international shipping?</h3>
                <p className="text-gray-600 mt-2">
                  Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on your location. Please check the shipping options at checkout.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-semibold text-gray-800">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mt-4">
              If you couldn't find the answer you're looking for, feel free to contact our support team. We are happy to assist you!
            </p>
            <div className="mt-6">
            <NavLink to={"/contacts"}>
            <p className="inline-block px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 transition duration-300">Contact Support</p>
            </NavLink>
          </div>
          </div>
        </div>
      </section>
    </div>
        </>
    )
}