import { ContainerPost } from "./styles";
import Api from "../../services/api";
import { useEffect, useState } from "react";
import { UpdatePost } from "../update";
export const PostItems = ({ setUpdate, update }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(null);

  const session_token = JSON.parse(localStorage.getItem("token"));

  const handleApi = async () => {
    setLoading(true);
    setError(false);
    try {
      await Api.get("/manage/posts", {
        headers: { "auth-token": session_token.token },
      }).then((res) => setPosts(res.data._posts));
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
    if (update) {
      handleApi();
      setUpdate(false);
    }
  }, [update]);

  const handleDelet = async (id) => {
    setError(false);
    setLoading(true);
    try {
      await Api.delete(`/manage/post/remove/${id}`, {
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
    <ContainerPost>
      <h1>Todos os Posts: </h1>
      {loading && <p>Carregando...</p>}
      <div className="container-posts">
        {posts ? (
          [...posts].map((item) => {
            return (
              <ul key={item._id}>
                <li>
                  <a>{item.title}</a>
                  <img src={item.imageUrl} alt="Image from post" width="100px" height="50px" />
                  <div>
                    <button onClick={() => setId(item._id)}>Editar</button>
                    <button onClick={() => setOpenModal(true)}>Deletar</button>
                  </div>
                </li>
                {item._id === id && (
                  <UpdatePost
                    id={id}
                    setId={setId}
                    handleApi={handleApi}
                    title={item.title}
                    description={item.description}
                  />
                )}
                {openModal && (
                  <div id="modalDelet">
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
    </ContainerPost>
  );
};
