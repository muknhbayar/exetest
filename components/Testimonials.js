import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Testimonials = () => {
  return (
    <div>
       <div className="mx-auto"> 
            <section className="text-gray-800">
                <h2 className="text-2xl md:text-3xl text-center font-semibold text-blue-700 uppercase"> Сэтгэгдлүүд </h2>
                <div className="flex justify-center"> <hr className="border-b border-1 border-gray-300 w-32 mt-2" /></div> 

                
                     <div className="mt-4 text-center relative overflow-hidden bg-no-repeat bg-cover bg-fixed" loading="lazy" style={{ backgroundImage: 'url("/assets/img/exebanner.png")', height: 500 }}>
                            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>

                                <div id="carouselExampleCaptions" className="carousel slide relative carousel-light " data-bs-ride="carousel">
                                            <div className="carousel-inner relative w-full overflow-hidden">
                                            <div className="carousel-item active relative float-left w-full pt-16">
                                                <img className="rounded-full shadow-xl mb-4 mx-auto" src="/assets/img/buyanjargal.jpg" alt="avatar" style={{width: 130}} />
                                                <div className="flex flex-wrap justify-center">
                                                <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3 text-white p-8 rounded-2xl" style={{ backgroundColor: "rgba(23, 45, 208, 0.4)" }}>
                                                    <h5 className="text-2xl font-bold mb-1">Дамдинсүрэнгийн БУЯНЖАРГАЛ</h5>
                                                    <p className="font-bold mb-2 text-xl text-cyan-400">GIRLS CODE Үндэсний хөтөлбөрийн ГРАНПРИ шагналт төгсөгч</p>
                                                    <p className="mb-4 text-xl">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                                                        </path>
                                                    </svg>Олонлог эгзэ сургуулийг суралцаж төгссөндөө баяртай байна. Сурагчдынха эрдэм мэдлэгийн төлөө үнэхээр чин сэтгэлээсээ ханддаг эрхэм багш нартаа чин сэтгэлийн гүн талархал илэрхийлье. Та бүхэндээ хан хорвоогийн хамгийн сайн сайхан бүхнийг хүсэн ерөөе.
                                                    </p>
                                                    <ul className="flex justify-center mb-0">
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    </ul>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item relative float-left w-full pt-16">
                                                <img className="rounded-full shadow-xl mb-4 mx-auto" src="/assets/img/otgonbaatar.jpg" alt="avatar" style={{width: 130}} />
                                                <div className="flex flex-wrap justify-center">
                                                <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3 text-white p-8 rounded-2xl" style={{ backgroundColor: "rgba(23, 45, 208, 0.4)" }}>
                                                    <h5 className="text-2xl font-bold mb-1">Ганболдын ОТГОНБААТАР</h5>
                                                    <p className="font-bold mb-2 text-xl text-orange-300">Харуул занги-2020 Ёсзүйт хакерын улсын аварга NICE COMMIT багийн ахлагч</p>
                                                    <p className="mb-4 text-xl">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                                                        </path>
                                                    </svg>Олонлог эгзэ сургуулийг суралцаж төгссөндөө баяртай байна. Сурагчдынха эрдэм мэдлэгийн төлөө үнэхээр чин сэтгэлээсээ ханддаг эрхэм багш нартаа чин сэтгэлийн гүн талархал илэрхийлье. Та бүхэндээ хан хорвоогийн хамгийн сайн сайхан бүхнийг хүсэн ерөөе.
                                                    </p>
                                                    <ul className="flex justify-center mb-0">
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    </ul>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item relative float-left w-full pt-16">
                                                <img className="rounded-full shadow-xl mb-4 mx-auto" src="/assets/img/khaliun.jpg" alt="avatar" style={{width: 130}} />
                                                <div className="flex flex-wrap justify-center">
                                                <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3 text-white p-8 rounded-2xl" style={{ backgroundColor: "rgba(23, 45, 208, 0.4)" }}>
                                                    <h5 className="text-2xl font-bold mb-1">Ганбатын ХАЛИУН</h5>
                                                    <p className="font-bold mb-2 text-xl text-rose-400">Элсэлтийн ерөнхий шалгалтын Математик-800 оноотой төгсөгч</p>
                                                    <p className="mb-4 text-xl">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
                                                        </path>
                                                    </svg>Олонлог эгзэ сургуулийг суралцаж төгссөндөө баяртай байна. Сурагчдынха эрдэм мэдлэгийн төлөө үнэхээр чин сэтгэлээсээ ханддаг эрхэм багш нартаа чин сэтгэлийн гүн талархал илэрхийлье. Та бүхэндээ хан хорвоогийн хамгийн сайн сайхан бүхнийг хүсэн ерөөе.
                                                    </p>
                                                    <ul className="flex justify-center mb-0">
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    <li>
                                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                        </path>
                                                        </svg>
                                                    </li>
                                                    </ul>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <button className="carousel-control-prev absolute top-0 md:top-48 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-12 bg-gray-400 rounded-full w-16 h-16" style={{ backgroundColor: "rgba(23, 45, 208, 0.4)" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
                                            <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next absolute top-0 md:top-48 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-12 bg-gray-400 rounded-full w-16 h-16" style={{ backgroundColor: "rgba(23, 45, 208, 0.4)" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
                                            <span className="visually-hidden">Next</span>
                                            </button>
                                </div> 

                            </div>
                    </div>
              
            </section>
       </div>     
     </div> 


    
    
  
 
  )
}

export default Testimonials