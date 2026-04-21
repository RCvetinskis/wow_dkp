import { useState } from "react";
import { api } from "@/lib/api-handler";
import { useToast } from "@/context/toast-context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/auth-context";

const LoginUser = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { setUser } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/auth/login", {
        name,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      showToast({
        message: "Login Sucessfully",
        type: "success",
      });

      navigate("/");
    } catch (err: any) {
      showToast({
        message: err.message,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h2 className="card-title">Login</h2>
      <div className="space-x-6">
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="card-actions justify-end">
        <button disabled={loading} className="btn btn-primary" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default LoginUser;
