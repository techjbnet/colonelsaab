import React from "react";

const Feed = (props) => {
  const { id, caption, media_type, media_url } = props.feed;
  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
        <video
          width="100%"
          height="auto"
          src={media_url}
          type="video/mp4"
          controls
          playsinline
        ></video>
      );
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <div className="d-flex h-100 bg-white">
          <a href={media_url} target="_blank" rel="noreferrer">
            <img
              width="100%"
              height="100%"
              id={id}
              src={media_url}
              alt={caption}
            />
          </a>
        </div>
      );
      break;
    default:
      post = (
        <div className="d-flex h-100 bg-white">
          <a href={media_url} target="_blank" rel="noreferrer">
            <img
              width="100%"
              height="100%"
              id={id}
              src={media_url}
              alt={caption}
            />
          </a>

          {/* <p className="">{caption}</p> */}
        </div>
      );
  }

  return <React.Fragment>{post}</React.Fragment>;
};

export default Feed;
