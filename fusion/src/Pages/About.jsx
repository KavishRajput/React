import { NavLink } from "react-router"
import about_img from "../assets/about1.jpg"

export const About=()=>{
    return (
        <>
         <div className="bg-gray-50 text-gray-900 min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 sm:max-w-xl mx-auto">
            Welcome to Fusion — where innovation meets excellence. Our mission is simple: to provide solutions that truly make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <img
              src={about_img}
              alt="About us"
              className="rounded-lg shadow-lg w-full h-full"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600">
              Fusion was founded with a vision to blend creativity, technology, and expertise to deliver innovative solutions to businesses globally. Our journey began with a small team of dreamers, and today, we’re a dynamic force in the industry. Despite our growth, we remain committed to our core values: **Integrity**, **Passion**, and **Excellence**.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Our mission is to empower businesses by providing smart, reliable, and impactful solutions that drive success. We combine innovation with practical application to ensure that our solutions exceed expectations.
            </p>

            <h2 className="text-3xl font-bold text-gray-800">Why Choose Fusion?</h2>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>Innovative thinking</li>
              <li>Experienced team</li>
              <li>Personalized attention</li>
              <li>Transparent and honest service</li>
              <li>Commitment to quality</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700">
            "At Fusion, we don't just work for you — we work *with* you."
          </p>
          <div className="mt-6">
            <NavLink to={"/contacts"}>
            <p className="inline-block px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 transition duration-300">Contact Us</p>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
        </>
    )
}