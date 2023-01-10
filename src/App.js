import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@fontsource/rubik";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-phone-number-input/style.css";


import Homepage from "./pages/Homepage";
import Story from "./pages/Story";
import Menu from "./pages/Menu";
import AboutArt from "./pages/AboutArt";
import PrivateDining from "./pages/PrivateDining";
import WhatsOn from "./pages/WhatsOn";
import Subscribe from "./pages/Subscribe";
import Gallery1 from "./pages/Gallery";
import Press from "./pages/Press";
import Privacy from "./pages/Privacy";
import ReservationsPolicy from "./pages/ReservationsPolicy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog1";
import Blog1Inner from "./pages/Blog1Inner";
import Blog2Inner from "./pages/Blog2Inner";
import WhatsOnInner from "./pages/WhatsOnInner";
import Blog2 from "./pages/Blog2";
import Test from "./pages/Test";
import Sitemap from "./pages/Sitemap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/story" element={<Story />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-the-art" element={<AboutArt />} />
        <Route path="/private-dining-rooms" element={<PrivateDining />} />
        <Route path="/whats-on" element={<WhatsOn />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/reservations-policy" element={<ReservationsPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/press" element={<Press />} />
        <Route path="/gallery" element={<Gallery1 />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog1/:id" element={<Blog1Inner />} />
        <Route path="/a/:serialNumber/:title" element={<WhatsOnInner />} />
        <Route path="/whats-on/:title" element={<WhatsOnInner />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog2/:id" element={<Blog2Inner />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;