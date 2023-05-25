import { Container404 } from "./styles";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Container404>
      <div>
        <h1>404</h1>
        <h3>Oops! Page not found</h3>
      </div>
      <p>Sorry but the requested page was not found.</p>
      <Link to="/">Back to home page</Link>
    </Container404>
  );
};

export default Page404;
