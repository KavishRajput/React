import { NavLink,useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function Sidebar() {

    const navigate = useNavigate();
    const {user} = useSelector((state) =>state.auth)
    const handleSelectChange = (e) => {
    const value = e.target.value;
    console.log(e)
    if (value !== "") {
      navigate(value);
      e.target.selectedIndex = 0;
    }};

  return (
    <>
    <div className="w-fit h-full shadow-2xl fixed">
        <ul>
            <NavLink to={`/dashboard/${user.userId}`}>
            <li  className="bg-gray-200 ms-5 mt-10 text-xl hover:bg-gray-200 rounded w-50 p-3">Dashboard</li>
            </NavLink>
            <li>
                <select name="posts" id="posts" className="bg-gray-200 ms-5 mt-2 text-xl hover:bg-gray-300 rounded p-3 outline-0 w-50" onChange={handleSelectChange}>
                    <option className="bg-white text-gray-600" value="posts">View Posts</option>
                    <option className="bg-white" value="published">Published</option>
                    <option className="bg-white" value="draft">Draft</option>
                    <option className="bg-white" value="both">Both</option>
                </select>
            </li>
            <NavLink to="createpost">
                <li className="bg-gray-200 mx-5 mt-2 text-xl hover:bg-gray-300 rounded w-50 p-3">Create Posts</li>
            </NavLink>
        </ul>
    </div>
    </>
  )
}
