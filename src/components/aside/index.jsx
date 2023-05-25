import { Link } from "react-router-dom";
import { AsideComponent } from "./styles";
import { MdPostAdd, ImPriceTag, MdLogout, FiSettings } from "react-icons/all";
const AsideManage = () => {
  const logout = () => {
    localStorage.clear();
    location.replace("/");
  };

  return (
    <AsideComponent>
      <div>
        <h1> Admin</h1>
        <ul>
          <li>
            <Link to="/admin/create_post">
              <MdPostAdd />
            </Link>{" "}
          </li>
          <li>
            <Link to="/admin/price">
              <ImPriceTag />
            </Link>
          </li>

          <li>
            <Link to="/admin/settings">
              <FiSettings />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <MdLogout onClick={logout} />
      </div>
    </AsideComponent>
  );
};

export default AsideManage;
