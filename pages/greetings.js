import React from "react";
import MainLayout from "../layout/MainLayout";
import LazyLoad from "react-lazy-load";

const greetings = () => {
  return (
    <MainLayout>
      

   <div classname="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto bg-white max-w-7xl md:py-16">
 
  <div className="container my-24 px-6 mx-auto">
    <section className="mb-32 text-gray-800 text-center lg:text-left">
      <style dangerouslySetInnerHTML={{__html: "\n      @media (min-width: 992px) {\n        .rotate-lg-6 {\n          transform: rotate(6deg);\n        }\n      }\n    " }} />
      <div className="md:px-6 py-12 md:px-12">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 flex items-center">
            <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
              <div className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)', zIndex: 1}}>
                <h2 className="text-3xl font-bold mb-2 text-blue-600">Anna Doe</h2>
                <p className="font-semibold mb-4">Graphic designer</p>
                <p className="text-gray-500 mb-6">
                  Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis
                  malesuada. Aenean gravida magna orci, non efficitur est porta id. Donec magna
                  diam.
                </p>
                <p className="text-gray-500 mb-6">
                  Ad, at blanditiis quaerat laborum officia incidunt cupiditate dignissimos
                  voluptates eius aliquid minus praesentium! Perferendis et totam ipsum ex aut earum
                  libero accusamus voluptas quod numquam saepe, consequuntur nihil quia tenetur
                  consequatur. Quis, explicabo deserunt quasi assumenda ea maiores nulla, et dolor
                  saepe praesentium natus error reiciendis voluptas iste. Esse, laudantium ipsum
                  animi, quos voluptatibus atque vero repellat sit eligendi autem maiores quasi cum
                  aperiam. Aperiam rerum culpa accusantium, ducimus deserunt aliquid alias vitae
                  quasi corporis placeat vel maiores explicabo commodi!
                </p>
                <ul className="flex justify-center md:justify-start">
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-blue-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-blue-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-blue-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-blue-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                  <li>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-blue-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                      </path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:mb-12 lg:mb-0">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/080.jpg" className="w-full rounded-lg shadow-lg rotate-lg-6" alt />
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
