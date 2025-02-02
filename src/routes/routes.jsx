import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePost } from "../pages/admin/post";
import { CreatePrices } from "../pages/admin/prices";
import { SignIn } from "../pages/admin/signIn";
import { SettingsAccount } from "../pages/admin/settings";
import { HomePage } from "../pages/home";
import { About } from "../pages/about";
import { ServicesPage } from "../pages/services";
import { Blogs } from "../pages/blogs";
import Page404 from "../pages/404/404";
import Header from "../components/header";
import FooterComponent from "../components/footer";
import AsideManage from "../components/aside";
import PrivateRoutes from "./private";
import { ScrollComponent } from "../components/scroll/index";

const RoutesComponent = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <ScrollComponent />
      {!token && <Header />}

      <main className={token && "mainAside"}>
        {token && <AsideManage />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/admin/create_post" element={<PrivateRoutes Component={CreatePost} />} />
          <Route path="/admin/price" element={<PrivateRoutes Component={CreatePrices} />} />
          <Route path="/admin/settings" element={<PrivateRoutes Component={SettingsAccount} />} />
          <Route path="/admin/signin" element={!token && <SignIn />} />
        </Routes>
      </main>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default RoutesComponent;
