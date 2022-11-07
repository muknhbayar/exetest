import React from "react";
import MainLayout from "../layout/MainLayout";
import LazyLoad from "react-lazy-load";

const greetings = () => {
  return (
    <MainLayout>
      <div classname="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto bg-white ">
        <div className="container mx-auto max-w-7xl">
                <h2 className="text-2xl md:text-2xl text-center font-semibold text-blue-700 uppercase mt-12"> ЗАХИРЛЫН МЭНДЧИЛГЭЭ </h2>
                <div className="flex justify-center"> <hr className="border-b border-1 border-gray-300 w-32 mt-2" /></div> 
          <section className="mb-32 text-gray-800 text-center lg:text-left">
            <div className="md:px-6 py-12 md:px-12">
              <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-3 flex gap-4">
                  <div className="">
                    <img
                      src="/assets/img/enkhbayar.jpg"
                      className="w-96 rounded-2xl shadow-lg-6"
                      alt
                    />
                    <h2 className="text-2xl font-bold mt-6 text-blue-600 text-center">
                      Б.ЭНХБАЯР
                    </h2>
                    <p className="font-semibold mb-4 text-center">
                      ТӨЛӨӨЛӨН УДИРДАХ ЗӨВЛӨЛИЙН ДАРГА, <br /> ЕРӨНХИЙ ЗАХИРАЛ
                    </p>
                  </div>
                  <div className="lg:mt-0 mb-6 lg:mb-0 col-span-2">
                    <div
                      className="relative block rounded-lg shadow-lg px-6 md:px-12 lg:-mr-4"
                      style={{
                        background: "hsla(0, 0%, 100%, 0.55)",
                        backdropFilter: "blur(30px)",
                        zIndex: 1,
                      }}
                    >
                      <p className="text-gray-700 text-lg text-justify">
                        Nunc tincidunt vulputate elit. Mauris varius purus
                        malesuada neque iaculis malesuada. Aenean gravida magna
                        orci, non efficitur est porta id. Donec magna diam.
                      </p>
                      <p className="text-gray-700 mb-6 text-lg text-justify">
                        Ad, at blanditiis quaerat laborum officia incidunt
                        cupiditate dignissimos voluptates eius aliquid minus
                        praesentium! Perferendis et totam ipsum ex aut earum
                        libero accusamus voluptas quod numquam saepe,
                        consequuntur nihil quia tenetur consequatur. Quis,
                        explicabo deserunt quasi assumenda ea maiores nulla, et
                        dolor saepe praesentium natus error reiciendis voluptas
                        iste. Esse, laudantium ipsum animi, quos voluptatibus
                        atque vero repellat sit eligendi autem maiores quasi cum
                        aperiam. Aperiam rerum culpa accusantium, ducimus
                        deserunt aliquid alias vitae quasi corporis placeat vel
                        maiores explicabo commodi!
                      </p>
                      <p className="text-gray-700 mb-6 text-lg text-justify">
                        Ad, at blanditiis quaerat laborum officia incidunt
                        cupiditate dignissimos voluptates eius aliquid minus
                        praesentium! Perferendis et totam ipsum ex aut earum
                        libero accusamus voluptas quod numquam saepe,
                        consequuntur nihil quia tenetur consequatur. Quis,
                        explicabo deserunt quasi assumenda ea maiores nulla, et
                        dolor saepe praesentium natus error reiciendis voluptas
                        iste. Esse, laudantium ipsum animi, quos voluptatibus
                        atque vero repellat sit eligendi autem maiores quasi cum
                        aperiam. Aperiam rerum culpa accusantium, ducimus
                        deserunt aliquid alias vitae quasi corporis placeat vel
                        maiores explicabo commodi!
                      </p>
                      <p className="text-gray-700 pb-16 text-lg text-justify">
                        Ad, at blanditiis quaerat laborum officia incidunt
                        cupiditate dignissimos voluptates eius aliquid minus
                        praesentium! Perferendis et totam ipsum ex aut earum
                        libero accusamus voluptas quod numquam saepe,
                        consequuntur nihil quia tenetur consequatur. Quis,
                        explicabo deserunt quasi assumenda ea maiores nulla, et
                        dolor saepe praesentium natus error reiciendis voluptas
                        iste. Esse, laudantium ipsum animi, quos voluptatibus
                        atque vero repellat sit eligendi autem maiores quasi cum
                        aperiam. Aperiam rerum culpa accusantium, ducimus
                        deserunt aliquid alias vitae quasi corporis placeat vel
                        maiores explicabo commodi!
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default greetings;
