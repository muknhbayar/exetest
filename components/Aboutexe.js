import React from "react";
import Link from "next/link";
import Image from "next/image";

const Aboutexe = () => {
  return (
    <div className="flex justify-center m-0 md:py-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 p-6">

      <div>
          <Image
            src="/assets/img/olonlog-exe.jpg"
            className="w-full transition duration-300 ease-linear align-middle ml-4 "
            loading="lazy"
            alt="banner"
            width={600}
            height={360}
            layout="responsive" 
          />
        </div>


        <div className="mx-auto">
          <h2 className="font-serif text-2xl text-blue-700 font-semibold text-center mb-8"> СУРГАЛТЫН ОРЧИН </h2>
          <p className="font-light mt-4 text-gray-800 max-w-2xl text-justify text-lg">
          Олонлог Эгзэ Сургууль нь 2017 онд үүсгэн байгуулагдаж, мэргэжлээс үл хамааран хүн бүрийн зайлшгүй эзэмших шаардлагатай мэдээллийн технологийн салбарын ур чадвар, боловсрол, мэдлэгийг дунд сургуулийн сурагчдад олгож, эзэмшүүлэхийг тэргүүн зорилгоо болгон хүүхдийн төлөө сэтгэлтэй хамт олныг бүрдүүлэн ажиллаж байна. <br/> <br/> Олонлог Эгзэ Сургууль нь 2017 онд үүсгэн байгуулагдаж, мэргэжлээс үл хамааран хүн бүрийн зайлшгүй эзэмших шаардлагатай мэдээллийн технологийн салбарын ур чадвар, боловсрол, мэдлэгийг дунд төлөө сэтгэлтэй хамт олныг бүрдүүлэн ажиллаж байна.
          </p>

          <Link href="/greetings">
            <a
              className="inline-block px-6 py-2 mt-8 bg-blue-700 text-white font-light text-sm leading-snug uppercase rounded-full hover:bg-blue-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Дэлгэрэнгүй
            </a>
          </Link>
        </div>

      
      </div>
    </div>
  );
};

export default Aboutexe;
