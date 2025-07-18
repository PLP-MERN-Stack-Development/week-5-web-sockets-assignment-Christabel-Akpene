import { useState } from "react"
import { useNavigate } from "react-router";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setUserName(e.target.value);
  }

  const handleLogin = () => {
  if (userName.trim() === ""){
    return;
  }
  else{
    localStorage.setItem("username", userName);
    navigate("/chat");
  }
  }
  return (
    <div className="text-center my-9">
        <h1 className="text-3xl font-semibold mb-10">Login</h1>
        <input className="border rounded-md px-1 w-4/12 py-4 " type="text" placeholder="enter name" value={userName} id="userName" onChange={onInputChange} />
        <button onClick={handleLogin} className="border py-4 w-20 mx-10 rounded-md  cursor-pointer bg-gray-400 hover:scale-105 transition duration-300 ease-in-out" >Login</button>
    </div>
  )
}
