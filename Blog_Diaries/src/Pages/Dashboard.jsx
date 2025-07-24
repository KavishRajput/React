// Dashboard.jsx
import { Outlet } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { useState } from 'react';

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className={`bg-white shadow-md z-20 md:relative absolute md:translate-x-0 transition-transform duration-300 h-full w-64 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-auto min-w-0 mt-7">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};