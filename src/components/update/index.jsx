import { useState } from "react";
import { UpdatePostContainer } from "./styles";
import Api from "../../services/api";

export const UpdatePost = ({ handleApi, id, setId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [desc, setDesc] = useState("");

  const session = JSON.parse(localStorage.getItem("token"));

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await Api.put(
        `/manage/post/update/${id}`,
        { title: newTitle, description: desc },
        {
          headers: {
            "auth-token": session.token,
            "Content-Type": "application/json",
          },
        }
      );
      setId(null);
      handleApi();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <UpdatePostContainer>
      <h1>Novos dados para o post selecionado</h1>
      <br />
      {!loading && (
        <form onSubmit={handleUpdatePost}>
          <input
            value={newTitle}
            placeholder="Título"
            type="text"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            value={desc}
            placeholder="Descrição"
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="buttons">
            <button>Update</button>
            <button onClick={() => setId(null)}>Sair</button>
          </div>
        </form>
      )}
      {error && (
        <p style={{ color: "red" }}>Ocorreu um erro, tente novamente.</p>
      )}
      {loading && <p>Aguarde a atualização dos dados...</p>}
    </UpdatePostContainer>
  );
};
