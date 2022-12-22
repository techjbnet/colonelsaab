import { useState } from "react";
import IntroVideo from "../components/Homepage/IntroVideo";
import Layout from "../components/Layout";
import Section1 from "../components/Homepage/Section1";
import Story from "../components/Homepage/Story";
import Section4 from "../components/Homepage/Section4";
import MenuSection from "../components/Homepage/MenuSection";
import PrivateDining from "../components/Homepage/PrivateDining";
import History from "../components/Homepage/History";
import Section7 from "../components/Homepage/Section7";
// import Instagram from "../components/Homepage/Instagram";
import InstaFeeds from "../components/Instagram/InstaFeeds";
// import Brand from "../components/Homepage/Brand";
import BookingModal from "../components/Layout/Modal/BookingModal";
import ChristmasModal from "../components/Layout/Modal/ChristmasModal";

const Homepage = () => {
  const [videoFinish, setVideoFinish] = useState(false);
  // const videoFinish = true;
  const [christmasModal, setChristmasModal] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);

  return (
    <>
      <IntroVideo
        videoFinish={videoFinish}
        setVideoFinish={setVideoFinish}
        setChristmasModal={setChristmasModal}
      />
      {videoFinish && (
        <>
          <Layout>
            <Section1 />
            <Story />
            <Section4 />
            <MenuSection />
            <PrivateDining />
            <History />
            <Section7 />
            {/* <Instagram /> */}
            <InstaFeeds
              token={process.env.REACT_APP_INSTAGRAM_TOKEN}
              limit={6}
            />
            {/* <Brand /> */}
          </Layout>
          {christmasModal && (
            <ChristmasModal
              show={christmasModal}
              onHide={() => setChristmasModal(!christmasModal)}
              setBookingModal={setBookingModal}
            />
          )}
          {bookingModal && (
            <BookingModal
              show={bookingModal}
              onHide={() => setBookingModal(!bookingModal)}
            />
          )}
        </>
      )}
    </>
  );
};

export default Homepage;
