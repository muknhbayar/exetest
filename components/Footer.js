import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <div>
      <div className="grid gap-2 grid-cols md:grid-cols-3 bg-blue-800 w-full p-4 md:p-12">
        <div className="max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md">МАНАЙ ХАЯГ:</h2>
          <ul className="text-white font-light pl-4 list-none w-full text-lg">
            <li>Олонлог эгзэ сургуулийн байр,  Чингэлтэй дүүрэг, 5-р хороо, Төмөрчний гудамж 7/1, Улаанбаатар хот 15171, Монгол улс</li><br/>
            <li>(+976) 94197447</li>
            <li>(+976) 94197337</li><br/>
            <li>info@exe.edu.mn</li>
          </ul>
        </div>

        <div className="max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md ">НЭМЭЛТ ЦЭС</h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
          
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">ЗАХИРЛЫН МЭНДЧИЛГЭЭ</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">БАГШ НАРЫН ТАНИЛЦУУЛГА</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">АМЖИЛТЫН БУУХИА</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">СУРГАЛТЫН ОРЧИН</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">ДУГУЙЛАН, СЕКЦ</span>
                </a>
              </Link>
            </li>
           
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">МЭДЭЭ МЭДЭЭЛЭЛ</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="max-w-lg pl-4 pb-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md ">ШУУД ХОЛБООС</h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
          <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">БАЙГАЛИЙН УХААНЫ ЗААХ АРГЫН НЭГДЭЛ</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">НИЙГМИЙН УХААНЫ ЗААХ АРГЫН НЭГДЭЛ</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">БАГА БОЛОВСРОЛЫН ЗААХ АРГЫН НЭГДЭЛ</span>
                </a>
              </Link>
            </li>
           
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">ТӨГСӨГЧДИЙН ХОЛБОО</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">ЭЛСЭЛТИЙН ЖУРАМ</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#!">
                <a className="px-2 py-1 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">ТӨЛБӨРИЙН МЭДЭЭЛЭЛ</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <a className="to-top-button show px-4 py-3 mb-20 mr-8 border text-[14px] bg-cyan-400 rounded-full duration-300 "
        href="#" > <i className="fa-sharp fa-solid fa-arrow-up"></i> </a>

      <div className="text-center text-md font-light bg-blue-900 text-white p-4">
        Copyright © 2022 <span >&emsp; ОЛОНЛОГ ЭГЗЭ СУРГУУЛЬ. </span>
      </div>
    </div>
  );
};

export default Footer;
