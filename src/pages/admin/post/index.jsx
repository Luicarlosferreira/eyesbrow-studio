import { useEffect, useState } from "react";
import UploadAndGetValue from "../../../db/firebase";
import { PostContainer } from "./styles";
import Api from "../../../services/api";
import { PostItems } from "../../../components/postItems";
import { FcAddImage } from "react-icons/all";
import { SpinnerComponent } from "../../../components/spinner/spinner";






export const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [updateApi, setUpdateApi] = useState(false);

  const session_token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    //Verify if Image Url has been arrived
    if (image === null) return;
    setImageLoading(true);
    UploadAndGetValue({ image, setImageList: setImageUrl });
  }, [image]);

  useEffect(() => {
    //Loading while imageUrl isn't ready
    if (imageUrl !== "") {
      setImageLoading(false);
    }
  }, [imageUrl]);

  const handleData = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (imageUrl !== "") {
        await Api.post(
          "/manage/post/create",
          { title, description, imageUrl },
          {
            headers: {
              "auth-token": `${session_token.token}`,
              "Content-type": "application/json",
            },
          }
        );
        setTitle("");
        setDescription("");
        setImage(null);
        setImageUrl("");
        setLoading(false);
        setSuccess(true);
        setInterval(() => setSuccess(false), 3000);
        setUpdateApi(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <PostContainer>
      <form onSubmit={handleData}>
        <h1>Criar Post</h1>
        <div>
          <label htmlFor="title">Título</label>
          <input
            required
            value={title}
            name="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <input
            required
            value={description}
            name="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label id="labelImg" htmlFor="image">
            {imageLoading ? <SpinnerComponent /> : <FcAddImage />}
            {!imageLoading && "Seleciona uma imagem JPEG/PNG"}
          </label>
          <input
            required
            id="image"
            name="imagem"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setImage(e.target.files[0])}
          />

          {imageLoading ? (
            <p>Carregando a imagem, aguarde antes de enviar os dados...</p>
          ) : null}
        </div>
        <button disabled={loading || imageUrl === ""}>
          {!loading ? "Enviar" : "Aguarde..."}
        </button>
        {success && (
          <h2 style={{ textAlign: "center", color: "green" }}>
            Post Criado com sucesso!
          </h2>
        )}
        {error && (
          <h2 style={{ textAlign: "center", color: "red" }}>
            Ops! Ocorreu algum erro, tente novamente.
          </h2>
        )}
      </form>
      <PostItems setUpdate={setUpdateApi} update={updateApi} />
    </PostContainer>
  );
};
