import { PricesContainer } from "./styles";
import { useState } from "react";
import { PriceItems } from "../../../components/priceItems";
import Api from "../../../services/api";

export const CreatePrices = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [updateApi, setUpdateApi] = useState(false);

  const session_token = JSON.parse(localStorage.getItem("token"));

  const handleData = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await Api.post(
        "/manage/price/create",
        { title, price },
        {
          headers: {
            "auth-token": `${session_token.token}`,
            "Content-type": "application/json",
          },
        }
      );

      setTitle("");
      setPrice(0);
      setLoading(false);
      setSuccess(true);
      setInterval(() => setSuccess(false), 3000);
      setUpdateApi(true);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <PricesContainer>
      <form onSubmit={handleData}>
        <h1>Criar Preço</h1>
        <div>
          <label htmlFor="title">Serviço</label>
          <input
            required
            value={title}
            name="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Preço</label>
          <input
            required
            value={price}
            name="price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button disabled={loading}>{loading ? "Aguarde..." : "Postar"}</button>
        {success && (
          <h2 style={{ textAlign: "center", color: "green" }}>
            Preço Criado com sucesso!
          </h2>
        )}
        {error && (
          <h2 style={{ textAlign: "center", color: "red" }}>
            Ops! Ocorreu algum erro, tente novamente.
          </h2>
        )}
      </form>
      <PriceItems updateApi={updateApi} setUpdateApi={setUpdateApi} />
    </PricesContainer>
  );
};
