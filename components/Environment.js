import React from "react";

const Environment = () => {
  return (
    <div>
      <div class="bg-gray-50">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 ">
            {/* <span class="block">Мэдээ мэдээллийг цаг алдалгүй авахыг хүсэж байна уу?</span> */}
            <span class="block text-cyan-400 sm:text-2xl">
             МЭДЭЭЛЛИЙН ТЕХНОЛОГИЙН ИРЭЭДҮЙГ ТОДОРХОЙЛОХ <br/><span className="text-cyan-600 text-4xl">  БҮТЭЭЛЧ МОНГОЛ ИРГЭНИЙГ БИД БЭЛТГЭНЭ. </span>
            </span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow" >
              <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-16 py-3 text-base font-medium text-white hover:bg-cyan-700"> БҮРТГҮҮЛЭХ </a>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
