import { SettingsContainer } from "./styles";
import { FormEditAccount } from "../../../components/accountSettings";
import { useEffect, useState } from "react";
import Api from "../../../services/api";

export const SettingsAccount = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newId, setNewId] = useState(null);
  const [success, setSuccess] = useState(false);

  const session = JSON.parse(localStorage.getItem("token"));
  const handleDataAccount = async () => {
    setLoading(true);
    setError(false);
    try {
      await Api.get("/users", {
        headers: {
          "auth-token": session.token,
        },
      }).then((response) => setUsers(response.data));
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleDataAccount();
  }, []);

  return (
    <SettingsContainer>
      <h1>Editar dados da conta</h1>
      <h1>Dados atuais</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>Houve algum erro na busca de dados. Recarregue a página!</p>}
      {users.users
        ? users.users.map((user) => {
            return (
              <div key={user._id}>
                <div>
                  <p>
                    Nome: <b style={{ color: "red" }}>{user.name}</b>
                  </p>
                  <p>
                    Email: <b style={{ color: "red" }}>{user.email}</b>
                  </p>
                </div>
                {!newId && (
                  <button onClick={() => setNewId(user._id)}>
                    Editar dados
                  </button>
                )}
              </div>
            );
          })
        : null}
      {success && (
        <p style={{ color: "green", textAlign: "center" }}>
          Dados Atualizados com sucesso!
        </p>
      )}
      {newId && (
        <FormEditAccount
          setNewId={setNewId}
          newId={newId}
          handleDataAccount={handleDataAccount}
          setSuccess={setSuccess}
          users={users}
        />
      )}
    </SettingsContainer>
  );
};
