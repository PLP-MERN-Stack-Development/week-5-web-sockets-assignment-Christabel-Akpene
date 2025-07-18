import { useNavigate } from "react-router";


export const ChatHeader = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("username");

  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  }

  return (
    <div>
      {
        <div className="flex justify-between mb-5 border-b pb-3">
            <p className="italic">{user}</p>
            <button onClick={logout}><p className="cursor-pointer font-semibold">Logout</p></button>
        </div>
      }

    </div>
  )
}
