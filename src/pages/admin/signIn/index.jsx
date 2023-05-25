import { useState } from "react";
import { SignInContainer } from "./styles";
import Api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../../hooks/useAuth";

export const SignIn = () => {
  const { setAuth } = UseAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email === "" || password === "") {
      alert("Preencha os campos por favor!");
    }

    if (email !== "" && password !== "") {
      try {
        const data = await Api.post(
          "/user/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const token = { token: data.data.token };

        localStorage.setItem("token", JSON.stringify(token));

        if (token) {
          setAuth(true);
          setLoading(false);
          navigate("/admin/create_post");
          location.reload();
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
    setLoading(false);
  };

  return (
    <SignInContainer>
      <h1>Login Admin</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <input
            required
            value={email}
            placeholder="E-mail"
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            required
            value={password}
            placeholder="Password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Aguarde..." : "Login"}
        </button>
        {error && (
          <h3 style={{ color: "red", textAlign: "center" }}>
            {error && "Ops! Erro ao tentar logar. Tente novamente."}
          </h3>
        )}
      </form>
    </SignInContainer>
  );
};
