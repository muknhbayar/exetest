import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ fixed }) {
  let { t } = useTranslation();
  let router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className="relative flex flex-wrap items-center justify-start py-0"
        style={{ backgroundColor: "#120ba4" }}
      >
        <div className="container pl-5 mx-auto flex flex-wrap items-center justify-start ml-0">
          <div className="w-full relative flex justify-start lg:w-auto lg:static lg:block">
            <Link href="/">
              <a className=" font-bold leading-relaxed inline-block pt-1 whitespace-nowrap uppercase text-white">
                <div>
                  <Image
                    src="/assets/img/logo.png"
                    loading="lazy"
                    className="w-10 h-10 pt-2 px-0 mb-2 transition duration-300 ease-linear align-middle"
                  />
                </div>
              </a>
            </Link>

            <button
              className="flex flex-grow justify-end items-center text-white font-light cursor-pointer text-2xl lg:hidden outline-none focus:outline-none mr-8"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow lg:flex-none items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-start">
              <li className="nav-item">
                <Link href="/">
                  <a className="px-2 py-2 flex items-center text-md uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">НҮҮР ХУУДАС</span>
                  </a>
                </Link>
              </li>
              {/* dropdown */}
              <div className="flex justify-start px-2">
                <div>
                  <div className="dropdown relative">
                    <button
                      className="dropdown-toggle text-left px-2 py-2 flex text-md uppercase leading-snug text-white hover:text-sky-300"
                      type="button"
                      id="dropdownMenuButton1tx"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                     БИДНИЙ ТУХАЙ
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="w-2 ml-1 mt-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        />
                      </svg>
                    </button>
                    <ul
                      className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left shadow-lg mt-1 hidden bg-clip-padding border-none"
                      aria-labelledby="dropdownMenuButton1tx"
                    >
                      <li>
                        <Link href="/greetings">
                          <a className="dropdown-item px-12 text-md py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                          ЗАХИРЛЫН МЭНДЧИЛГЭЭ
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/history">
                          <a className="dropdown-item px-12 text-md py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                          ТҮҮХЭН ТОВЧОО
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/success">
                          <a className="dropdown-item px-12 text-md py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                          АМЖИЛТЫН БУУХИА
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/directors">
                          <a className="dropdown-item px-12 text-md py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                          УДИРДЛАГЫН БАГ
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/teachers">
                          <a className="dropdown-item px-12 text-md py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                          БАГШ НАР
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* dropdown */}

              <li className="nav-item">
                <Link href="/trainingprogram">
                  <a className="px-2 py-2 flex items-center text-md uppercase leading-snug text-white hover:text-sky-300">
                    {/* <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i> */}
                    <span className="ml-2">СУРГАЛТЫН ХӨТӨЛБӨР</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/news">
                  <a className="px-2 py-2 flex items-center text-md uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">МЭДЭЭ</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admission">
                  <a className="px-2 py-2 flex items-center text-md uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">ЭЛСЭЛТ</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/gallery">
                  <a className="px-2 py-2 flex items-center text-md uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">ЗУРГИЙН ЦОМОГ</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="px-2 py-2 flex items-center text-md uppercase leading-snug text-white hover:text-sky-300">
                    <span className="ml-2">ХОЛБОО БАРИХ</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

 {/* Language */}
          {/* <div className="flex flex-grow justify-center items-center">
            <div className="dropdown relative -mt-12 lg:mt-2">
              <button
                className="dropdown-toggle text-left py-2 flex text-md uppercase leading-snug text-white hover:text-sky-300"
                type="button"
                id="dropdownMenuButton1tx"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ХЭЛ СОНГОХ
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2 mt-1"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  />
                </svg>
                
              </button>

              <ul
                className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left
    shadow-lg m-8 hidden bg-clip-padding border-none"
                aria-labelledby="dropdownMenuButton1tx"
              >
                
                
                <li>
                  <Link href="/">
                      <a className="dropdown-item px-6 md:px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                          МОНГОЛ
                      </a>
                  </Link>
                </li>
                <li>
                  <Link href="/en">
                      <a className="dropdown-item px-6 md:px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                        ENGLISH
                      </a>
                  </Link>
                </li>
                {router.locales.map((l) => (
                  <li key={l}>
                    <Link href={router.asPath} locale={l}>
                      <a className="dropdown-item px-2 md:px-12 text-sm py-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                        {l}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
        {/* Language */}           
      </nav>
    </>
  );
}
