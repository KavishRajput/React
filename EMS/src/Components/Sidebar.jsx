export const Sidebar = () => {
    const links=[
        {name:"Dashboard",path:"/"},
        {name:"Employees",path:"/employee"},
        {name:"Add Employees",path:"/add_employee"}
    ]
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">EMS</h1>
      <hr className="border-gray-700 mb-4" />
      <ul className="space-y-2">
        {
            links.map((link, index) =>(
                <li key={index}>
                  <a href={link.path} className="hover:bg-gray-700 p-2 rounded cursor-pointer">{link.name}</a>
                </li>
            ))
        }
        {/* <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Employee</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Departments</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Setting</li> */}
      </ul>
    </div>
  );
};
