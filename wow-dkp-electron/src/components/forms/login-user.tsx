import { useState } from "react";
import { api } from "@/lib/api-handler";
import { useToast } from "@/context/toast-context";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  // TODO: frontend axios token storage
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await api.post("/auth/login", {
        name,
        password,
      });
      console.log(data);
      showToast({
        message: "Login Sucessfully",
        type: "success",
      });

      navigate("/guilds");
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
