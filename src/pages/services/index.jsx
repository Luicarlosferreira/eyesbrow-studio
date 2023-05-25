import { useEffect, useState } from "react";
import { ServicesContainer } from "./styles";
import Api from "../../services/api";

export const ServicesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleApi = async () => {
    setLoading(true);
    setError(false);
    try {
      await Api.get("/manage/prices")
        .then((res) => setData(res.data._prices))
        .catch((err) => setError(err));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    handleApi();
  }, []);

  return (
    <ServicesContainer>
      <section>
        <h1>TABELA DE PREÇOS</h1>
        {loading && <p>Carregando...</p>}

        {data &&
          data.map((item) => {
            return (
              <div key={item._id}>
                <p>{item.title}</p>
                <p>{item.price}€</p>
              </div>
            );
          })}
        {error && (
          <p style={{ color: "red" }}>
            Ocorreu algum erro, por favor, recarregue a página!
          </p>
        )}
      </section>
    </ServicesContainer>
  );
};
