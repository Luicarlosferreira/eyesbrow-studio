import { useEffect, useState } from "react";
import { FormContainer } from "./styles";
import Api from "../../services/api";
import { ImEye, ImEyeBlocked } from "react-icons/all";
import { SpinnerComponent } from "../spinner/spinner";

export const FormEditAccount = ({ newId, setNewId, handleDataAccount, setSuccess, users }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);

  const session = JSON.parse(localStorage.getItem("token"));

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await Api.put(
        `/user/update/${newId}`,
        { name, email, password },
        {
          headers: {
            "auth-token": session.token,
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      setSuccess(true);
      setInterval(() => setSuccess(false), 4000);
      setNewId(false);
      handleDataAccount();
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    users.users.map((user) => {
      if (user._id === newId) {
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
      }
    });
  }, [newId]);

  useEffect(() => {
    const passAtt = document.getElementById("inputPass");
    if (hidePassword) {
      passAtt.setAttribute("type", "text");
    } else {
      passAtt.setAttribute("type", "password");
    }
  }, [hidePassword]);

  return (
    <>
      {newId && (
        <FormContainer onSubmit={handleUpdateUser}>
          {!loading && (
            <>
              <p>Insira as novas informações.</p>
              <input
                value={name}
                placeholder="Nome"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                value={email}
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <section>
                <input
                  id="inputPass"
                  value={password}
                  placeholder="Senha"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!hidePassword && <ImEye onClick={() => setHidePassword(true)} />}
                {hidePassword && <ImEyeBlocked onClick={() => setHidePassword(false)} />}
              </section>
            </>
          )}
          {loading ? <SpinnerComponent /> : <button>Mudar dados</button>}
          {error && (
            <p style={{ textAlign: "center", color: "red" }}>
              Ocorreu algum erro, tente novamente!
            </p>
          )}
          <button onClick={() => setNewId(null)}>Sair</button>
        </FormContainer>
      )}
    </>
  );
};
