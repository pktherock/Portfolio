import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import SideNav from "./Side-Nav/SideNav";
import Footer from "./Footer/Footer";
import { Container } from "./ui";

function Layout() {
  return (
    <div className="flex  h-screen overflow-hidden">
      <SideNav />
      <div className="w-full min-h-screen overflow-y-auto bg-slate-100 dark:bg-gray-800">
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
