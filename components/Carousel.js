import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptionsFull"
        className="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button type="button" data-bs-target="#carouselExampleCaptionsFull" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptionsFull" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptionsFull" data-bs-slide-to={2} aria-label="Slide 3" />
  </div> */}

        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full bg-no-repeat bg-cover bg-center ">
            <video
              className="w-full -my-8 sm:-my-12 md:-my-24 lg:-my-28 xl:-my-32 2xl:-my-36 3xl:-my-40"
              playsInline
              autoPlay
              muted
              loop
            >
              <source
                className
                src="/assets/img/olonlogexe.mp4"
                type="video/mp4"
              />
            </video>
            {/* <img src="/assets/img/bottom.svg" className='-mt-80 w-full -mb-32'  ></img> */}
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
              <div className="flex justify-start items-center h-full">
                <div className="text-white text-center px-14 px-md-0">
                  {/* <h2 className="text-3xl font-semibold mb-4">Learn Tailwind Elements</h2>
            <h5 className="text-lg font-semibold mb-6">Best &amp; free guide of responsive web design</h5> */}
                  <div className="md:space-x-2">
                    {/* <a type="button" className="inline-block px-6 py-2 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">БҮРТГҮҮЛЭХ</a>
              <a type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">MICROSFOT </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item relative float-left w-full h-screen bg-no-repeat bg-cover bg-center">
      <video className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0" playsInline autoPlay muted loop>
        <source className src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
        <div className="flex justify-center items-center h-full">
          <div className="text-white text-center px-14 px-md-0">
            <h2 className="text-3xl font-semibold mb-4">You can place here any content</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full h-screen bg-no-repeat bg-cover bg-center">
      <video className="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0" playsInline autoPlay muted loop>
        <source className src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{background: 'linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)'}}>
        <div className="flex justify-center items-center h-full">
          <div className="text-white text-center px-14 px-md-0">
            <h2 className="text-3xl font-semibold mb-4">And cover it with any mask</h2>
            <a type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" href="#!" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Learn more</a>
          </div>
        </div>
      </div>
    </div> */}
        </div>
        {/* <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCaptionsFull" data-bs-slide="prev">
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCaptionsFull" data-bs-slide="next">
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button> */}
      </div>
    </div>
  );
};

export default Carousel;
