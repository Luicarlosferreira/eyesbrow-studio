import { ContainerPrices } from "./styles";
import Api from "../../services/api/index";
import { useEffect, useState } from "react";
import { UpdatePrice } from "../update/update-price/";
export const PriceItems = ({ updateApi, setUpdateApi }) => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(null);

  const session_token = JSON.parse(localStorage.getItem("token"));

  const handleApi = async () => {
    setLoading(true);
    setError(false);
    try {
      await Api.get("/manage/prices", {
        headers: { "auth-token": session_token.token },
      }).then((res) => setPrices(res.data._prices));
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setError(false);
  };

  useEffect(() => {
    setLoading(true);
    handleApi();
  }, []);

  useEffect(() => {
    if (updateApi) {
      handleApi();
      setUpdateApi(false);
    }
  }, [updateApi]);

  const handleDelet = async (id) => {
    setError(false);
    setLoading(true);
    try {
      await Api.delete(`/manage/price/remove/${id}`, {
        headers: {
          "auth-token": session_token.token,
        },
      });
      setOpenModal(false);
      setLoading(false);
      handleApi();
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <ContainerPrices>
      <h1>Todos os Preços: </h1>
      {loading && <p>Carregando...</p>}
      <div className="container-prices">
        {prices ? (
          prices.map((item) => {
            return (
              <ul key={item._id}>
                <li>
                  <a>{item.title}</a>
                  <span>€{item.price}</span>

                  <div>
                    <button onClick={() => setId(item._id)}>Editar</button>
                    <button onClick={() => setOpenModal(true)}>Delete</button>
                  </div>
                </li>
                {item._id === id && (
                  <UpdatePrice
                    id={id}
                    setId={setId}
                    handleApi={handleApi}
                    currPrice={item.price}
                    currTitle={item.title}
                  />
                )}
                {openModal && (
                  <div id="modalDelete">
                    <h1>Tem certeza que deseja deletar esse post?</h1>
                    <div>
                      <button onClick={() => handleDelet(item._id)}>Sim</button>
                      <button onClick={() => setOpenModal(false)}>Não</button>
                    </div>
                  </div>
                )}
              </ul>
            );
          })
        ) : (
          <p>Não há posts disponíveis</p>
        )}
      </div>
      {error && <p>Ocorreu algum erro. Recarregue a página.</p>}
    </ContainerPrices>
  );
};
