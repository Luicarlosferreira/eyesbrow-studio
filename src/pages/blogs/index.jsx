import { useEffect, useState } from "react";
import { BlogContainer } from "./styles";
import Api from "../../services/api";
import ReadMoreComponent from "../../components/read_more/index";
export const Blogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const handleDataApi = async () => {
    setLoading(true);
    setError(false);
    try {
      await Api.get("/manage/posts")
        .then((res) => {
          setData(res.data._posts);
        })
        .catch((Err) => setError(Err));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    handleDataApi();
  }, []);

  return (
    <BlogContainer>
      {loading && <p>Carregando dados...</p>}
      {error && (
        <p style={{ color: "red" }}>
          Ops! Ocorreu algum erro. Por favor, Recarregue a página.
        </p>
      )}
      <section>
        {data &&
          data.map((item) => {
            const newTitle = item.description;

            return (
              <div className="content-post" key={item._id}>
                <img src={item.imageUrl} alt="Publication image" />
                <h1>{item.title}</h1>
                <ReadMoreComponent
                  lessText={item.description}
                  moreText={newTitle}
                />
              </div>
            );
          })}
      </section>
    </BlogContainer>
  );
};
