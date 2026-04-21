import { useAuth } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 flex items-center">
        <li>
          <details>
            <summary>{user?.name}</summary>
            <ul className="bg-base-100 rounded-t-none p-2 ">
              <li>
                <button className="btn w-full" onClick={() => handleLogout()}>
                  Logout
                </button>
              </li>
              <li></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
