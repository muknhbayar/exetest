import React from "react";
import Image from "next/image";

const Post = () => {
  return (
    <div>

<div className="container mx-auto max-w-2xl py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

  <section className="mt-6 text-gray-800">
  <h2 className="text-2xl md:text-3xl text-center font-semibold text-blue-700 uppercase"> Мэдээ мэдээлэл </h2>
        <div className="flex justify-center"> <hr className="border-b border-1 border-gray-300 w-32 mt-2" /></div>
    <div className="grid lg:grid-cols-3 gap-6 mt-6">
      <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" style={{backgroundPosition: '50%'}} data-mdb-ripple="true" data-mdb-ripple-color="light">
        <Image src="/assets/img/news/news01.jpg" className=" h-full" alt="news01" />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
              <p className="text-right">
                  <small>2022-10-27</small> 
                </p>
                <h5 className="font-normal text-md mb-1 uppercase story-title h-6 hover:mb-6">Мэдээллийн технологийн мэргэжлээр АНУ-д сурч, ажиллаж, амьдрах боломж сэдвээр ярилцлаа амьдрах боломж сэдвээр ярилцлаа.</h5>
             
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <Image src="https://mdbootstrap.com/img/new/standard/nature/044.jpg" className="w-full" alt="news01"/>
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
              <p className="text-right">
                  <small>2022-11-06</small> 
                </p>
                <h5 className="font-normal text-md mb-1 uppercase story-title h-6 hover:mb-6 ">НАЙДАНГИЙН НАМЖИЛ багшийн нэрэмжит Өсвөрийн шатарчдын тэмцээнд  1б ангийн сурагчид амжилттай оролцож, сурагч Эркин мөнгөн медаль, сурагч Мөнхтулга хүрэл медаль тус тус авсан байна.</h5>
             
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <Image src="https://mdbootstrap.com/img/new/standard/nature/045.jpg" className="w-full" alt="news01"/>
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
              <p className="text-right">
                  <small>2022-10-19</small> 
                </p>
                <h5 className="font-normal text-md mb-1 uppercase story-title h-6 hover:mb-6 ">Ирланд улсын их, дээд сургуулийн төлөөлөл Олонлог Эгзэ сургуулиар зочилж, сургуулийн үйл ажиллагаатай танилцлаа.</h5>
             
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <Image src="https://mdbootstrap.com/img/new/standard/nature/047.jpg" className="w-full" alt="news01"/>
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
              <p className="text-right">
                  <small>2022-10-10</small> 
                </p>
                <h5 className="font-normal text-md mb-1 uppercase story-title h-6 hover:mb-6 ">ОЛОН УЛСЫН ЗАЛУУ РОБОТ БҮТЭЭГЧДИЙН  ТЭМЦЭЭН-д  4б ангийн сурагч Б.Тэмүүлэн  амжилттай оролцон, АЛТАН МЕДАЛийн эзэн боллоо. </h5>
             
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <Image src="https://mdbootstrap.com/img/new/standard/nature/028.jpg" className="w-full" alt="news01" />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
              <p className="text-right">
                  <small>2022-10-05</small> 
                </p>
                <h5 className="font-normal text-md mb-1 uppercase story-title h-6 hover:mb-6 ">Боловсролын салбарт бие сэтгэл, оюун бодол, хүч хөдөлмөр, хичээл зүтгэлээ зориулсан Монголынхоо бүх багш нарт болон ОЛОНЛОГ ЭГЗЭ СУРГУУЛИЙН ХАМТ ОЛОНДОО БАГШ НАРЫН БАЯРЫН МЭНД ХҮРГЭЕ.</h5>
             
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <Image src="https://mdbootstrap.com/img/new/standard/nature/049.jpg" className="w-full" alt="news01"/>
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{backgroundColor: 'rgba(0, 0, 0, 0.15)'}}>
            <div className="flex justify-start items-end h-full">
              <div className="text-white m-6">
              <p className="text-right">
                  <small>2022-11-06</small> 
                </p>
                <h5 className="font-normal text-md mb-1 uppercase story-title h-6 hover:mb-6 ">Мэдээллийн технологийн мэргэжлээр АНУ-д сурч, ажиллаж, амьдрах боломж сэдвээр ярилцлаа амьдрах боломж сэдвээр ярилцлаа.</h5>
             
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>

</div>

    </div>
  );
};

export default Post;
