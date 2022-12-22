import { useState } from "react";
import ImageGallery from "react-image-gallery";
import Layout from "../components/Layout";
import GalleryModal from "../components/Layout/Modal/GalleryModal";
import Gallery from "react-photo-gallery";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { photos } from "../photos";
import AfternoonTeaHolbornCoventGardenBloomsbury from "../../src/assets/images/shopimages/afternoon-tea-holborn-covent-garden-bloomsbury.webp";
import IndianBestRestaurantCoventGarden1 from "../../src/assets/images/shopimages/indian-best-restaurant-covent-garden-1.webp";
import IndianBestRestaurantCoventGarden4 from "../../src/assets/images/shopimages/indian-best-restaurant-covent-garden-4.webp";
import MothersDayMenuCoventGardenHolbornBloomsbury from "../../src/assets/images/shopimages/mothers-day-menu-covent-garden-holborn-bloomsbury.webp";
import RestaurantCoventGarden1 from "../../src/assets/images/shopimages/restaurant-covent-garden-1.webp";
import RestaurantCoventGarden2 from "../../src/assets/images/shopimages/restaurant-covent-garden-2.webp";
import RestaurantCoventGarden3 from "../../src/assets/images/shopimages/restaurant-covent-garden-3.webp";
import RestaurantCoventGarden4 from "../../src/assets/images/shopimages/restaurant-covent-garden-4.webp";
import RestaurantCoventGarden5 from "../../src/assets/images/shopimages/restaurant-covent-garden-5.webp";
import RestaurantCoventGarden6 from "../../src/assets/images/shopimages/restaurant-covent-garden-6.webp";
import RestaurantCoventGarden7 from "../../src/assets/images/shopimages/restaurant-covent-garden-7.webp";
import RestaurantCoventGarden8 from "../../src/assets/images/shopimages/restaurant-covent-garden-8.webp";
import RestaurantCoventGarden9 from "../../src/assets/images/shopimages/restaurant-covent-garden-9.webp";
import RestaurantCoventGarden10 from "../../src/assets/images/shopimages/restaurant-covent-garden-10.webp";
import RestaurantCoventGarden11 from "../../src/assets/images/shopimages/restaurant-covent-garden-11.webp";
import RestaurantCoventGarden13 from "../../src/assets/images/shopimages/restaurant-covent-garden-13.webp";
import RestaurantCoventGarden15 from "../../src/assets/images/shopimages/restaurant-covent-garden-15.webp";
import RestaurantCoventGarden16 from "../../src/assets/images/shopimages/restaurant-covent-garden-16.webp";
import RestaurantCoventGarden17 from "../../src/assets/images/shopimages/restaurant-covent-garden-17.webp";
import IndianBestRestaurantBarCoventGarden9 from "../../src/assets/images/shopimages/indian-best-restaurant-bar-covent-garden-9.webp";
import IndianBestRestaurantBarCoventGarden10 from "../../src/assets/images/shopimages/indian-best-restaurant-bar-covent-garden-10.webp";
import IndianBestRestaurantBarCoventGarden11 from "../../src/assets/images/shopimages/indian-best-restaurant-bar-covent-garden-11.webp";
import IndianBestRestaurantCoventGarden2 from "../../src/assets/images/shopimages/indian-best-restaurant-covent-garden-2.webp";
import IndianBestRestaurantCoventGarden3 from "../../src/assets/images/shopimages/indian-best-restaurant-covent-garden-3.webp";
import IndianBestRestaurantCoventGarden5 from "../../src/assets/images/shopimages/indian-best-restaurant-covent-garden-5.webp";
import IndianBestRestaurantCoventGarden6 from "../../src/assets/images/shopimages/indian-best-restaurant-covent-garden-6.webp";
import IndianBestRestaurantCoventGarden7 from "../../src/assets/images/shopimages/indian-best-restaurant-covent-garden-7.webp";
import PrivateDiningRoomHolborn1 from "../../src/assets/images/shopimages/private-dining-room-holborn-1.webp";
import PrivateDiningRoomHolborn2 from "../../src/assets/images/shopimages/private-dining-room-holborn-2.webp";
import PrivateDiningRoomHolborn3 from "../../src/assets/images/shopimages/private-dining-room-holborn-3.webp";
import PrivateDiningRoomHolborn4 from "../../src/assets/images/shopimages/private-dining-room-holborn-4.webp";
import PrivateDiningRoomHolborn5 from "../../src/assets/images/shopimages/private-dining-room-holborn-5.webp";
import PrivateDiningRoomHolborn6 from "../../src/assets/images/shopimages/private-dining-room-holborn-6.webp";
import PrivateDiningRoomHolborn7 from "../../src/assets/images/shopimages/private-dining-room-holborn-7.webp";
import PrivateDiningRoomHolborn8 from "../../src/assets/images/shopimages/private-dining-room-holborn-8.webp";
import PrivateDiningRoomHolborn9 from "../../src/assets/images/shopimages/private-dining-room-holborn-9.webp";
import PrivateDiningRoomHolborn10 from "../../src/assets/images/shopimages/private-dining-room-holborn-10.webp";
// import RestaurantCoventGarden12 from "../../assets/images/shopimages/restaurant-covent-garden-12.webp";

const Gallery1 = () => {
  const [galleryModal, setGalleryModal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  // const [slicedIndex, setSlicedIndex] = useState(10);

  const imageArray = [
    {
      original: RestaurantCoventGarden13,
      category: "food",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden4,
      category: "drinks",
      width: 4,
      height: 6,
    },
    {
      original: RestaurantCoventGarden16,
      category: "interior",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden6,
      category: "interior",
      width: 2,
      height: 3,
    },
    // {
    //   original:
    //     "https://ik.imagekit.io/sbj8bzmjnl4/colonelsaab/shopimages/products/normal/restaurant-covent-garden-14.jpg?tr=f-webp,q-87,w-435,fo-custom",
    //   category: "food",
    //   width: 5,
    //   height: 3,
    // },
    {
      original: AfternoonTeaHolbornCoventGardenBloomsbury,
      category: "food",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden11,
      category: "interior",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden10,
      category: "interior",
      width: 4,
      height: 3,
    },
    {
      original: IndianBestRestaurantBarCoventGarden10,
      category: "interior",
      width: 4,
      height: 3,
    },
    {
      original: IndianBestRestaurantCoventGarden1,
      category: "food",
      width: 4,
      height: 4,
    },
    {
      original: RestaurantCoventGarden5,
      category: "food",
      width: 4,
      height: 8,
    },
    {
      original: IndianBestRestaurantBarCoventGarden9,
      category: "interior",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden2,
      category: "interior",
      width: 4,
      height: 8,
    },
    {
      original: IndianBestRestaurantCoventGarden6,
      category: "food",
      width: 4,
      height: 3,
    },
    {
      original: PrivateDiningRoomHolborn4,
      category: "private-dining",
      width: 4,
      height: 3,
    },
    {
      original: PrivateDiningRoomHolborn1,
      category: "private-dining",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden9,
      category: "interior",
      width: 4,
      height: 6,
    },
    {
      original: IndianBestRestaurantCoventGarden3,
      category: "interior",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden8,
      category: "food",
      width: 4,
      height: 6,
    },
    {
      original: PrivateDiningRoomHolborn3,
      category: "private-dining",
      width: 4,
      height: 3,
    },
    {
      original: PrivateDiningRoomHolborn2,
      category: "private-dining",
      width: 4,
      height: 3,
    },
    {
      original: IndianBestRestaurantCoventGarden4,
      category: "interior",
      width: 4,
      height: 3,
    },
    {
      original: PrivateDiningRoomHolborn6,
      category: "private-dining",
      width: 4,
      height: 3,
    },
    {
      original: PrivateDiningRoomHolborn7,
      category: "private-dining",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden7,
      category: "interior",
      width: 4,
      height: 6,
    },
    {
      original: RestaurantCoventGarden1,
      category: "interior",
      width: 4,
      height: 6,
    },
    {
      original: IndianBestRestaurantBarCoventGarden11,
      width: 4,
      height: 3,
    },
    {
      original: IndianBestRestaurantCoventGarden5,
      category: "interior",
      width: 4,
      height: 4,
    },
    {
      original: PrivateDiningRoomHolborn10,
      category: "private-dining",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden15,
      category: "drinks",
      width: 4,
      height: 6,
    },
    {
      original: IndianBestRestaurantCoventGarden2,
      category: "food",
      width: 4,
      height: 3,
    },
    {
      original: PrivateDiningRoomHolborn9,
      category: "private-dining",
      width: 4,
      height: 3,
    },
    {
      original: PrivateDiningRoomHolborn5,
      category: "private-dining",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden3,
      category: "drinks",
      width: 4,
      height: 6,
    },
    {
      original: PrivateDiningRoomHolborn8,
      category: "private-dining",
      width: 4,
      height: 3,
    },
    {
      original: IndianBestRestaurantCoventGarden6,
      category: "interior",
      width: 4,
      height: 3,
    },
    {
      original: IndianBestRestaurantCoventGarden7,
      category: "food",
      width: 4,
      height: 3,
    },
    {
      original: RestaurantCoventGarden17,
      category: "interior",
      width: 4,
      height: 3,
    },
    {
      original: AfternoonTeaHolbornCoventGardenBloomsbury,
      category: "interior",
      width: 5,
      height: 3,
    },
    {
      original: MothersDayMenuCoventGardenHolbornBloomsbury,
      category: "food",
      width: 4,
      height: 3,
    },
  ];

  // const [filteredImageArray, setFilteredImageArray] = useState(imageArray);
  // const [buttonState, setButtonState] = useState("All");

  return (
    <Layout>
      <div className="container-fluid px-5 py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mt-3 text-warning">Gallery</h2>
            <p>Food, drink and interior photos.</p>
            {/* <button
              type="button"
              className={
                buttonState === "All"
                  ? "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor"
                  : "btn text-light m-2 rounded-0 bg-success border border-warning rounded-0 custom-cursor"
              }
              onClick={() => {
                setFilteredImageArray(imageArray);
                setButtonState("All");
              }}
            >
              ALL
            </button>
            <button
              type="button"
              className={
                buttonState === "Interior"
                  ? "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor"
                  : "btn text-light m-2 rounded-0 bg-success border border-warning rounded-0 custom-cursor"
              }
              onClick={() => {
                setFilteredImageArray(
                  imageArray.filter((item) => item.category === "interior")
                );
                setButtonState("Interior");
              }}
            >
              INTERIOR
            </button>
            <button
              type="button"
              className={
                buttonState === "Food"
                  ? "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor"
                  : "btn text-light m-2 rounded-0 bg-success border border-warning rounded-0 custom-cursor"
              }
              onClick={() => {
                setFilteredImageArray(
                  imageArray.filter((item) => item.category === "food")
                );
                setButtonState("Food");
              }}
            >
              FOOD
            </button>
            <button
              type="button"
              className={
                buttonState === "Drinks"
                  ? "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor"
                  : "btn text-light m-2 rounded-0 bg-success border border-warning rounded-0 custom-cursor"
              }
              onClick={() => {
                setFilteredImageArray(
                  imageArray.filter((item) => item.category === "drinks")
                );
                setButtonState("Drinks");
              }}
            >
              DRINKS
            </button>
            <button
              type="button"
              className={
                buttonState === "PrivateDining"
                  ? "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor"
                  : "btn text-light m-2 rounded-0 bg-success border border-warning rounded-0 custom-cursor"
              }
              onClick={() => {
                setFilteredImageArray(
                  imageArray.filter(
                    (item) => item.category === "private-dining"
                  )
                );
                setButtonState("PrivateDining");
              }}
            >
              PRIVATE DINING
            </button> */}
          </div>
        </div>
      </div>

      {/* <div className="container-fluid px-2 py-5  overflow-hidden">
        <div className="row">
          <div className="d-flex">
            <img
              // className="rounded-top-end w-100 p-2"
              src={imageArray[0].original}
              alt=""
            />
            <img
              // className="rounded-top-end w-100 p-2"
              src={imageArray[1].original}
              alt=""
            />
            <img
              // className="rounded-top-end w-100 p-2"
              src={imageArray[2].original}
              alt=""
            />
            <img
              // className="rounded-top-end w-100 p-2"
              src={imageArray[3].original}
              alt=""
            />
          </div>
        </div>
      </div> */}

      {/* <div className="container-fluid px-2 py-5  overflow-hidden">
        {filteredImageArray.length > 0 &&
          filteredImageArray.slice(0, slicedIndex).map((item, index) => {
            if (index % 10 === 0) {
              return (
                <div className="row d-flex flex-row" key={index}>
                  <div className="col-0 col-lg-1"></div>
                  <div className="col-12 col-lg-2">
                    {index < filteredImageArray.length && (
                      <div className="border rounded-top-end border-warning m-4 mx-lg-0 my-lg-2">
                        <img
                          className="rounded-top-end w-100 p-2"
                          src={item.original}
                          alt=""
                          onClick={() => {
                            setGalleryModal(true);
                            setGalleryIndex(index);
                          }}
                        />
                      </div>
                    )}

                    {index + 1 < filteredImageArray.length && (
                      <div className="border rounded-4 border-success m-4 mx-lg-0 my-lg-2">
                        <img
                          className="rounded-4 w-100 p-2"
                          src={filteredImageArray[index + 1].original}
                          alt=""
                          onClick={() => {
                            setGalleryModal(true);
                            setGalleryIndex(index + 1);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-lg-2 mt-5">
                    {index + 2 < filteredImageArray.length && (
                      <div className="border rounded-4 border-success m-4 mx-lg-0 my-lg-2">
                        <img
                          className="rounded-4 w-100 p-2"
                          src={filteredImageArray[index + 2].original}
                          alt=""
                          onClick={() => {
                            setGalleryModal(true);
                            setGalleryIndex(index + 2);
                          }}
                        />
                      </div>
                    )}
                    {index + 3 < filteredImageArray.length && (
                      <div className="border rounded-4 border-success m-4 mx-lg-0 my-lg-2">
                        <img
                          className="rounded-4 w-100 p-2"
                          src={filteredImageArray[index + 3].original}
                          alt=""
                          onClick={() => {
                            setGalleryModal(true);
                            setGalleryIndex(index + 3);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-lg-2">
                    {index + 4 < filteredImageArray.length && (
                      <div className="border rounded-4 border-success m-4 mx-lg-0 my-lg-2">
                        <img
                          className="rounded-4 w-100 p-2"
                          src={filteredImageArray[index + 4].original}
                          alt=""
                          onClick={() => {
                            setGalleryModal(true);
                            setGalleryIndex(index + 4);
                          }}
                        />
                      </div>
                    )}
                    {index + 5 < filteredImageArray.length && (
                      <div className="border rounded-bottom-end border-warning m-4 mx-lg-0 my-lg-2">
                        <img
                          className="rounded-bottom-end w-100 p-2"
                          src={filteredImageArray[index + 5].original}
                          alt=""
                          onClick={() => {
                            setGalleryModal(true);
                            setGalleryIndex(index + 5);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-lg-2 mt-5">
                    {index + 6 < filteredImageArray.length && (
                      <div className="border rounded-4 border-success m-4 mx-lg-0 my-lg-2">
                        <img
                          className="rounded-4 w-100 p-2"
                          src={filteredImageArray[index + 6].original}
                          alt=""
                          onClick={() => {
                            setGalleryModal(true);
                            setGalleryIndex(index + 6);
                          }}
                        />
                      </div>
                    )}
                    {index + 7 < filteredImageArray.length && (
                      <div className="border rounded-4 border-success m-4 mx-lg-0 my-lg-2">
                        <img
                          className="rounded-4 w-100 p-2"
                          src={filteredImageArray[index + 7].original}
                          alt=""
                          onClick={() => {
                            setGalleryModal(true);
                            setGalleryIndex(index + 7);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-lg-2">
                    {index + 8 < filteredImageArray.length && (
                      <div className="border rounded-top-end border-warning m-4 mx-lg-0 my-lg-2">
                        <img
                          className="rounded-top-end w-100 p-2"
                          src={filteredImageArray[index + 8].original}
                          alt=""
                          onClick={() => {
                            setGalleryModal(true);
                            setGalleryIndex(index + 8);
                          }}
                        />
                      </div>
                    )}
                    {index + 9 < filteredImageArray.length && (
                      <div className="border rounded-4 border-success m-4 mx-lg-0 my-lg-2">
                        <img
                          className="rounded-4 w-100 p-2"
                          src={filteredImageArray[index + 9].original}
                          alt=""
                          onClick={() => {
                            setGalleryModal(true);
                            setGalleryIndex(index + 9);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-0 col-lg-1"></div>
                </div>
              );
            } else {
              return <div key={index}></div>;
            }
          })}
      </div> */}

      {/* <Gallery photos={photos} margin={4} /> */}
      {/* <InfiniteScroll
        dataLength={filteredImageArray.length}
        next={() => {
          setFilteredImageArray(imageArray);
        }}
        hasMore={true}
        loader={
          <div className="text-center">
            <p>Loading...</p>
          </div>
        }
      >
        <Gallery
          // photos={filteredImageArray.slice(0, slicedIndex).map(function (item) {
          photos={filteredImageArray.map(function (item) {
            delete item.category;
            item.src = item.original;
            return item;
          })}
          margin={4}
          onClick={(event, { index }) => {
            setGalleryModal(true);
            setGalleryIndex(index);
          }}
        />
      </InfiniteScroll> */}
      <Gallery
        // photos={filteredImageArray.slice(0, slicedIndex).map(function (item) {
        photos={imageArray.map(function (item) {
          delete item.category;
          item.src = item.original;
          return item;
        })}
        margin={4}
        onClick={(event, { index }) => {
          setGalleryModal(true);
          setGalleryIndex(index);
        }}
      />

      {/* <div className="container-fluid px-2 py-5 overflow-hidden">
        <div className="text-center">
          <button
            type="button"
            className={
              slicedIndex < filteredImageArray.length
                ? "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor"
                : "btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor d-none"
            }
            onClick={() => {
              setSlicedIndex(slicedIndex + 10);
            }}
          >
            Archive
          </button>
        </div>
      </div> */}

      {galleryModal && (
        <GalleryModal
          show={galleryModal}
          onHide={() => setGalleryModal(!galleryModal)}
        >
          <ImageGallery
            // items={filteredImageArray
            items={imageArray
              // .slice(0, slicedIndex)
              .map(function (item) {
                delete item.category;
                return item;
              })}
            showFullscreenButton={false}
            showThumbnails={false}
            showPlayButton={false}
            startIndex={galleryIndex}
          />
        </GalleryModal>
      )}
    </Layout>
  );
};

export default Gallery1;
