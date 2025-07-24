import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

export const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content (this will grow to fill space) */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <p className="text-4xl mt-8">Publish your passions, your way</p>
        <p className="text-2xl mt-2">Create a unique and beautiful blog easily.</p>
        <button className="border-2 rounded p-3 bg-white shadow-2xl mt-5 font-bold hover:bg-gray-100 cursor-pointer">
          Create Your Blog
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
