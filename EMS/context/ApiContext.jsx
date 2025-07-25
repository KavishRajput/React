import axios from 'axios';
import { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [department, setDepartment] = useState("departments");
  const[deleteempdata,setDeleteempdata]=useState("");

  const getEmpdata = async () => {  
    try {
      const getresponse = await axios.get("https://ems-hiur.onrender.com/employees");
      setEmployee(getresponse.data);
      setFilterdata(getresponse.data);
    } catch (err) {
      console.error("Error fetching employee data:", err);
    }
  };

  const handleDeleteEmpData = async (id) => {
    try {
      const check = confirm("Are You Sure You Want To Delete This Employee?");
      if (check) {
        const response = await axios.delete(`https://ems-hiur.onrender.com/employees/${id}`);
        console.log(response);
        setDeleteempdata(response.data);
        getEmpdata();
      }
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  useEffect(() => {
    getEmpdata();
  }, [filterdata]);

  const filterbydepartment = (e) => {
  setDepartment(e.target.value);
  // setPage(1); 
};


  useEffect(() => {
    if (department && department !== "departments") {
      const filtered = employee.filter((item) => item.department === department);
      setFilterdata(filtered);
    } else {
      setFilterdata(employee);
    }
  }, [department, employee]);

  return (
    <ApiContext.Provider value={{ employee,filterdata,setFilterdata,setEmployee,filterbydepartment, handleDeleteEmpData}}>
      {children}
    </ApiContext.Provider>
  );
};