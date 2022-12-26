import { useState, useEffect } from "react";
import useWindowSize from "../Hook/windowSize";
import IntrogifPC from "../../assets/images/IntroGifPC.gif";
// import StartingVideoMobile from "../../assets/video/IntroVideoForMobile.mp4";
import Introgif from "../../assets/images/Introgif.gif";
import Box from "@mui/material/Box";

const IntroVideo = (props) => {
  const windowSize = useWindowSize();
  const [videoFinish, setVideoFinish] = useState(false);
  // const videoEl = useRef(null);

  // const attemptPlay = () => {
  //   try {
  //     videoEl &&
  //       videoEl.current &&
  //       videoEl.current.play().catch((error) => {
  //         console.error("Error attempting to play", error);
  //       });
  //   } catch (error) {
  //     console.log("error");
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // attemptPlay();
    setTimeout(() => {
      setVideoFinish(true);
      props.setVideoFinish(true);
      // props.setChristmasModal(true);
    }, 5000);
  }, []);

  return (
    <>
      <Box>
        <Box>
          <div className={!videoFinish && "vh-100"}>
            {/* */}
            {/* {windowSize.width >= 992 ? (
              <video
                className={"videoElement"}
                style={{
                  display: videoFinish ? "none" : "block",
                }}
                playsInline
                muted
                alt="Starting Video"
                src={StartingVideo}
                ref={videoEl}
                onEnded={() => {
                  // setVideoFinish(true);
                  // props.setVideoFinish(true);
                  // props.setChristmasModal(true);
                }}
              />
            ) : (
              <img
                src={Introgif}
                className={videoFinish ? "d-none" : "w-100 h-100"}
                alt="Introgif"
              />
            )} */}
            {windowSize.width >= 992 && (
              <img
                src={IntrogifPC}
                className={videoFinish ? "d-none" : "w-100 h-100"}
                alt="Introgif"
              />
            )}
            {windowSize.width < 992 && (
              <img
                src={Introgif}
                className={videoFinish ? "d-none" : "w-100 h-100"}
                alt="Introgif"
              />
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default IntroVideo;
