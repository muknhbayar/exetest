import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUmbrella,
  faShieldHeart,
  faPersonDrowning,
  faPeopleGroup,
  faRocket,
  faPeopleRobbery,
} from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  return (
    <div className='bg-amber-50 p-8 my-8'>
       <h2 className="text-2xl md:text-3xl text-center font-semibold text-blue-700 uppercase"> Тоон тойм </h2>
      <div className="flex justify-center"> <hr className="border-b border-1 border-gray-300 w-32 mt-2" /></div>
        <div className="container mx-auto mt-6">


{/* <section className="text-gray-800 ">
<h2 className="text-2xl md:text-3xl text-center font-semibold text-blue-700 uppercase"> Тоон тойм </h2>
      <div className="flex justify-center"> <hr className="border-b border-1 border-gray-300 w-32 mt-2" /></div>
            <div className='flex w-full h-64 justify-center'>
                <div className='flex justify-around max-w-6xl text-center'> 
                        <div className='border rounded-2xl border gray-100 w-48 h-56 m-4 justify-end ' > 
                        <img src="/assets/img/svg/puzzle.svg" className="h-16" />
                            <h2> НИЙТ СУРАГЧИД</h2>
                            <p>805</p>
                        </div>
                        <div className='border rounded-2xl border gray-100 w-48 h-56 m-4'> 2 </div>
                        <div className='border rounded-2xl border gray-100 w-48 h-56 m-4'> 3 </div>
                        <div className='border rounded-2xl border gray-100 w-48 h-56 m-4'> 4 </div>
                        <div className='border rounded-2xl border gray-100 w-48 h-56 m-4'> 5 </div>
                        <div className='border rounded-2xl border gray-100 w-48 h-56 m-4'> 6 </div>
                </div>
            </div>

      </section> */}

<section className="text-gray-800 text-center flex flex-grow justify-center items-center">
    
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6 max-w-7xl">
            
              <Link href="/design">
                <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(249,115,22,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#f97316] md:py-6">
                  <FontAwesomeIcon
                    icon={faUmbrella}
                    style={{ fontSize: 48, color: "#f97316" }}
                  />
                  <h5 className="text-xl font-light m-4">СУРАЛЦАГЧИД</h5>
                  <p className="md:mb-2 text-md font-light">
                    <strong className="text-[#f97316] font-bold text-4xl">
                      480+ <br/>
                    </strong>
                    1-12-р анги
                  </p>
                </a>
              </Link>

              <Link href="/lifestyle">
                <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(111,148,252,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#6f94fc] md:py-12">
                  <FontAwesomeIcon
                    icon={faShieldHeart}
                    style={{ fontSize: 60, color: "#6f94fc" }}
                  />
                  <h5 className="text-xl font-light m-4">БАГШ НАР</h5>
                  <p className="md:mb-6 text-md font-light">
                    <strong className="text-[#6f94fc] font-bold text-4xl">
                      50+<br/>
                    </strong>
                    Багш нар
                  </p>
                </a>
              </Link>

              <Link href="/spinnig">
                <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(197,161,255,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#c5a1ff] md:py-12">
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    style={{ fontSize: 60, color: "#c5a1ff" }}
                  />
                  <h5 className="text-xl font-light m-4">ТӨГСӨГЧИД</h5>
                  <p className="md:mb-6 text-md font-light">
                    <strong className="text-[#c5a1ff] font-bold text-4xl">
                      50+<br/>
                    </strong>
                    Төгсөгчид
                  </p>
                </a>
              </Link>

              <Link href="/yoga">
                <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(255,184,66,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#ffb842] md:py-12">
                  <FontAwesomeIcon
                    icon={faPersonDrowning}
                    style={{ fontSize: 60, color: "#ffb842" }}
                  />
                  <h5 className="text-xl font-light m-4">ГАДААДЫН ТЭТГЭЛЭГ</h5>
                  <p className="md:mb-6 text-md font-light">
                    <strong className="text-[#ffb842] font-bold text-4xl">                      
                      8+<br/>
                    </strong>
                    Сурагч
                  </p>
                </a>
              </Link>

              <Link href="/marketing">
                <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(117,215,114,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#75d772] md:py-12">
                  <FontAwesomeIcon
                    icon={faRocket}
                    style={{ fontSize: 60, color: "#75d772" }}
                  />
                  <h5 className="text-xl font-light m-4">БАГА БОЛОВСРОЛ</h5>
                  <p className="md:mb-6 text-md font-light">
                    <strong className="text-[#75d772] font-bold text-4xl">
                      40+<br/>
                    </strong>
                    Видео хичээл
                  </p>
                </a>
              </Link>

              <Link href="/dance">
                <a className="lg:mb-0 hover:shadow-[2px_3px_15px_5px_rgba(250,113,131,0.25)] rounded-xl shadow-gray-200 p-4 border border-[#fa7183] md:py-12">
                  <FontAwesomeIcon
                    icon={faPeopleRobbery}
                    style={{ fontSize: 60, color: "#fa7183" }}
                  />
                  <h5 className="text-xl font-light m-4">ДУГУЙЛАН</h5>
                  <p className="md:mb-6 text-md font-light">
                    <strong className="text-[#fa7183] font-bold text-4xl">
                      15+<br/>
                    </strong>
                    Долоо хоногт 2-3 удаа
                  </p>
                </a>
              </Link>
            </div>
          </section>
      </div>
    </div>
  )
}

export default Counter