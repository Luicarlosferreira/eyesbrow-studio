import { useEffect, useState } from "react";
import { UpdatePriceContainer } from "./styles";
import Api from "../../../services/api";

export const UpdatePrice = ({ handleApi, id, setId, currPrice, currTitle }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  const session = JSON.parse(localStorage.getItem("token"));

  const handleUpdatePrice = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      await Api.put(
        `/manage/price/update/${id}`,
        { title: newTitle, price: newPrice },
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
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    setNewPrice(currPrice);
    setNewTitle(currTitle);
  }, [id]);
  return (
    <UpdatePriceContainer>
      <h1>Novos dados para o Preço selecionado</h1>
      <br />
      {!loading && (
        <form onSubmit={handleUpdatePrice}>
          <input
            value={newTitle}
            placeholder="Título"
            type="text"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            value={newPrice}
            placeholder="Preço"
            type="number"
            onChange={(e) => setNewPrice(e.target.value)}
          />
          <div className="buttons">
            <button>Update</button>
            <button onClick={() => setId(null)}>Sair</button>
          </div>
        </form>
      )}
      {error && <p style={{ color: "red" }}>Ocorreu um erro, tente novamente.</p>}
      {loading && <p>Aguarde a atualização dos dados...</p>}
    </UpdatePriceContainer>
  );
};
