import { useNavigate } from "react-router-dom";
import UserMenu from "./user-menu";
import { useAuth } from "@/context/auth-context";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <button onClick={() => navigate("/")} className="btn btn-ghost text-xl">
          DKP
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li>
            <details>
              <summary>Guild</summary>
              <ul className="bg-base-100 rounded-t-none p-2 ">
                <li>
                  <button
                    className="btn w-full"
                    onClick={() => navigate("/guilds")}
                  >
                    Guilds
                  </button>
                </li>
                {user && (
                  <>
                    <li>
                      <button
                        className="btn w-full"
                        onClick={() => navigate("/guilds/me")}
                      >
                        My Guilds
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn w-full"
                        onClick={() => navigate("/guilds/new")}
                      >
                        New
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </details>
          </li>

          <li>
            {user ? (
              <UserMenu />
            ) : (
              <button
                className="btn btn-ghost"
                onClick={() => navigate("/auth")}
              >
                Register/Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
