import Navbar from "./Navbar";
import Footer from "./Footer";
import Cookie from "./Cookie";

const Layout = (props) => {
  return (
    <div style={{ backgroundColor: "#F3F1E2" }}>
      <Navbar />
      {props.children}
      <Footer />
      <Cookie />
    </div>
  );
};

export default Layout;
