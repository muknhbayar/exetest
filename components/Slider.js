import React from "react";
import Image from "next/image";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel relative"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={1}
            aria-label="Slide 1"
          />
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to={2}
            aria-label="Slide 1"
          />
        </div>
        {/* Inner */}
        <div className="carousel-inner relative w-full overflow-hidden h-144">
          {/* Single item */}
          <div className="carousel-item active relative float-left w-full">
            <Image
              src="/assets/img/olonlogexe.mp4"
              className="block w-full"
              alt="olonlog exe"
              width={36}
              height={36}
              layout="fixed" 

            />
            <div className="carousel-caption hidden md:block absolute text-left absolute  drop-shadow-xl shadow-black ">
              <h5 className="text-sm sm:text-2xl md:text-3xl xl:text-4xl md:mb-0 md:pb-4 md:max-w-3xl text-white font-bold ">
              ЧАНАРЫГ ЭРХЭМЛЭН БҮТЭЭГЧ МОНГОЛ ИРГЭНИЙГ ТӨЛӨВШҮҮЛНЭ.
              </h5>
              <p className="text-sm md:text-xl md:mb-24 sm:pb-8 md:pb-96"></p>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item relative float-left w-full">
            <Image
              src="/assets/img/mv2.jpg"
              className="block w-full"
              alt="Mountaintop"
              width={36}
              height={36}
              layout="fixed" 
            />
            <div className="carousel-caption hidden md:block absolute text-left ">
              <h5 className="text-sm sm:text-2xl md:text-3xl xl:text-4xl md:mb-0 md:pb-4 md:max-w-3xl text-white font-bold uppercase">
              Боловсролын чанарын үнэлгээгээр Монгол улсын шилдэг 15 сургуулийн нэг
              </h5>
              <p className="text-sm md:text-xl md:mb-24 sm:pb-8 md:pb-96"></p>
            </div>
          </div>
          {/* Single item */}
          <div className="carousel-item relative float-left w-full">
            <Image
              src="/assets/img/olonlogexe.jpg"
              className="block w-full"
              alt="Woman Reading a Book"
              width={36}
              height={36}
              layout="fixed" 
            />
            <div className="carousel-caption hidden md:block absolute text-left">
              {/* <h5 className="text-sm sm:text-2xl md:text-3xl xl:text-4xl md:mb-0 md:pb-4 md:max-w-3xl text-white font-bold uppercase">
              2800 гаруй квадрат талбайтай өөрийн байрандаа 40 гаруй анги, танхимуудтай.
              </h5> */}
              <p className="text-sm md:text-xl md:mb-24 sm:pb-8 md:pb-96"></p>
            </div>
          </div>
        </div>
        {/* Inner */}
        {/* Controls */}
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
