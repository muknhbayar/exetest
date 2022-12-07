import MainLayout from "../layout/MainLayout";

const teachers = () => {
  return (
    <MainLayout>
      <div>
        <div>
                <h2 className="text-2xl md:text-2xl text-center font-semibold text-blue-700 uppercase mt-12"> ЗААХ АРГЫН НЭГДЛИЙН ТАНИЛЦУУЛГА </h2>
                <div className="flex justify-center"> <hr className="border-b border-1 border-gray-300 w-32 mt-2 mb-6" /></div> 
        <div>
  <ul className="
  nav nav-tabs nav-justified
  flex flex-col
  md:flex-row
  flex-wrap
  list-none
  border-b-0
  pl-0
  mb-4
" id="tabs-tabJustify" role="tablist">
    <li className="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-homeJustify" className="
nav-link
w-full
block
font-medium
text-lg
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
active
    " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab" aria-controls="tabs-homeJustify" aria-selected="true">БАЙГАЛИЙН УХААНЫ ЗААХ АРГЫН НЭГДЭЛ</a>
    </li>
    <li className="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-profileJustify" className="
nav-link
w-full
block
font-medium
text-lg
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    " id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify" role="tab" aria-controls="tabs-profileJustify" aria-selected="false">нийгмийн УХААНЫ ЗААХ АРГЫН НЭГДЭЛ</a>
    </li>
    <li className="nav-item flex-grow text-center" role="presentation">
      <a href="#tabs-messagesJustify" className="
nav-link
w-full
block
font-medium
text-lg
leading-tight
uppercase
border-x-0 border-t-0 border-b-2 border-transparent
px-6
py-3
my-2
hover:border-transparent hover:bg-gray-100
focus:border-transparent
    " id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-messagesJustify" role="tab" aria-controls="tabs-messagesJustify" aria-selected="false">БАГА БОЛОВСРОЛЫН ЗААХ АРГЫН НЭГДЭЛ</a>
    </li>
  </ul>
  <div className="tab-content" id="tabs-tabContentJustify">
    <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel" aria-labelledby="tabs-home-tabJustify">      
        <div className="container my-6 px-6 mx-auto">
            <section className="mb-8">
                  <div className="flex flex-wrap">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12 lg:mb-0">
                      <div className="flex lg:py-16 -mr-16">
                        <img src="https://mdbootstrap.com/img/new/standard/people/072.jpg" className="w-full rounded-lg shadow-lg" id="cta-img-nml-50" style={{zIndex: 10}} alt />
                      </div>
                    </div>
                      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12">
                        <div className="bg-teal-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                          <div className="lg:pl-12">
                            <h2 className="text-3xl font-bold mb-6">БАЙГАЛИЙН УХААНЫ ЗААХ АРГЫН НЭГДЛИЙН ТАНИЛЦУУЛГА</h2>
                            <p className="mb-6 pb-2 lg:pb-0">
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat
                              vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis.
                              Labore itaque illum distinctio eum neque!
                            </p>
                            <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                              <p className="flex items-start mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                  </path>
                                </svg>
                                Математик
                              </p>
                              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                  </path>
                                </svg>
                                Мэдээлэл зүй
                              </p>
                              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                  </path>
                                </svg>
                                Физик
                              </p>
                              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                  </path>
                                </svg>
                                Хими
                              </p>
                              
                            </div>
                            <p>
                              Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet
                              rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc
                              ligula felis, sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                              ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
                              tortor finibus, a eleifend lectus dictum. Cras tempor convallis magna id rhoncus.
                              Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                              tempus aliquet. Phasellus at ex volutpat, varius arcu id, aliquam lectus.
                              Vestibulum mattis felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
                              iaculis est vehicula ut.
                              Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet
                              rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc
                              ligula felis, sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                              ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
                              tortor finibus, a eleifend lectus dictum. Cras tempor convallis magna id rhoncus.
                              Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                              tempus aliquet. Phasellus at ex volutpat, varius arcu id, aliquam lectus.
                              Vestibulum mattis felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
                              iaculis est vehicula ut.
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
            </section>
        </div>

    <div className="container mx-auto w-11/12">
                <h2 className="text-2xl md:text-2xl text-center font-semibold text-blue-700 uppercase mt-12"> БАГШ НАРЫН ТАНИЛЦУУЛГА </h2>
                <div className="flex justify-center"> <hr className="border-b border-1 border-gray-300 w-32 mt-2 mb-6" /></div> 


{/* teachers */}
                <div className="container my-4 px-6 mx-auto">
  <section className="mb-16 text-gray-800 text-center">    
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-2 lg:gap-x-4">
      
    <div className="mb-6 lg:mb-0">  
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">
          <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/18.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                    </a>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                      <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                  <h5 className="text-lg font-bold text-cyan-500 uppercase">А.Цэдэнлхам</h5>
                    <p className="text-blue-800 font-bold">Физикийн багш</p>
                    <p className="text-gray-500 mb-4">Бакалавр, Заах аргач зэрэгтэй </p>
                    <ul className="list-inside flex mx-auto justify-center">
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
          </button>
          {/* Modal */}
          <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                    Амарсайханы ЦЭДЭНЛХАМ
                  </h5>
                  <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="text-justify p-4">
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                  <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                    БУЦАХ
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
    </div>

    <div className="mb-6 lg:mb-0">  
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable2">
          <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/19.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                    </a>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                      <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                  <h5 className="text-lg font-bold text-cyan-500 uppercase">Ж.АРИУНСАРНАЙ</h5>
                    <p className="text-blue-800 font-bold">Мэдээлэл зүйн багш</p>
                    <p className="text-gray-500 mb-4">Бакалавр, Заах аргач зэрэгтэй </p>
                    <ul className="list-inside flex mx-auto justify-center">
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
          </button>
          {/* Modal */}
          <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable2" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                  Жалнамын АРИУНСАРНАЙ
                  </h5>
                  <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="text-justify p-4">
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                  <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                    БУЦАХ
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
   </div>

    <div className="mb-6 lg:mb-0">  
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable3">
          <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                    </a>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                      <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                  <h5 className="text-lg font-bold text-cyan-500 uppercase">Б.ДҮГЭРСҮРЭН</h5>
                    <p className="text-blue-800 font-bold">Мэдээлэл зүйн багш</p>
                    <p className="text-gray-500 mb-4">Магистр, Тэргүүлэх зэрэгтэй </p>
                    <ul className="list-inside flex mx-auto justify-center">
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
          </button>
          {/* Modal */}
          <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable3" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                  Батцэндийн ДҮГЭРСҮРЭН
                  </h5>
                  <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="text-justify p-4">
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                  <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                    БУЦАХ
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
    </div>

    <div className="mb-6 lg:mb-0">  
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable4">
            <div className="bg-white block rounded-lg shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img src="https://mdbootstrap.com/img/new/avatars/3.jpg" className="w-full rounded-t-lg" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                      </a>
                      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                        <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                      </svg>
                    </div>
                    <div className="p-6">
                    <h5 className="text-lg font-bold text-cyan-500 uppercase">Н.МӨНХБАЯР</h5>
                      <p className="text-blue-800 font-bold">Мэдээлэл зүйн багш</p>
                      <p className="text-gray-500 mb-4">Магистр, Тэргүүлэх зэрэгтэй </p>
                      <ul className="list-inside flex mx-auto justify-center">
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                          </svg>
                        </a>
                      </ul>
                    </div>
                  </div>
            </button>
            {/* Modal */}
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable4" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                    Наянтайн МӨНХБАЯР
                    </h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="text-justify p-4">
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                    <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                      БУЦАХ
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
    </div>


    <div className="mb-6 lg:mb-0">  
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable5">
            <div className="bg-white block rounded-lg shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className="w-full rounded-t-lg" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                      </a>
                      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                        <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                      </svg>
                    </div>
                    <div className="p-6">
                    <h5 className="text-lg font-bold text-cyan-500 uppercase">Ц.НАРМАНДАХ</h5>
                      <p className="text-blue-800 font-bold">Математикийн багш</p>
                      <p className="text-gray-500 mb-4">Магистр, МУ-ын зөвлөх багш</p>
                      <ul className="list-inside flex mx-auto justify-center">
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                          </svg>
                        </a>
                      </ul>
                    </div>
                  </div>
            </button>
            {/* Modal */}
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable5" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                    Цандэлэгийн НАРМАНДАХ
                    </h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="text-justify p-4">
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                    <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                      БУЦАХ
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
    </div>


    <div className="mb-6 lg:mb-0">  
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable6">
              <div className="bg-white block rounded-lg shadow-lg">
                      <div className="relative overflow-hidden bg-no-repeat bg-cover">
                        <img src="https://mdbootstrap.com/img/new/avatars/9.jpg" className="w-full rounded-t-lg" />
                        <a href="#!">
                          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                        </a>
                        <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                          <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                          </path>
                        </svg>
                      </div>
                      <div className="p-6">
                      <h5 className="text-lg font-bold text-cyan-500 uppercase">Д.Оюунтуяа</h5>
                        <p className="text-blue-800 font-bold">Математикийн багш</p>
                        <p className="text-gray-500 mb-4">Магистр, Тэргүүлэх зэрэгтэй </p>
                        <ul className="list-inside flex mx-auto justify-center">
                          <a href="#!" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                              <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                            </svg>
                          </a>
                          <a href="#!" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                              <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                          </a>
                          <a href="#!" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                              <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                            </svg>
                          </a>
                        </ul>
                      </div>
                    </div>
              </button>
              {/* Modal */}
              <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable6" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                  <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                        Дугармаагийн ОЮУНТУЯА
                      </h5>
                      <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="text-justify p-4">
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                      <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                      <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                        БУЦАХ
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
    </div>

    </div>
  </section>


  <section className="mb-16 text-gray-800 text-center">    
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-2 lg:gap-x-4">
      
    <div className="mb-6 lg:mb-0">  
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">
          <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/18.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                    </a>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                      <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                  <h5 className="text-lg font-bold text-cyan-500 uppercase">А.Цэдэнлхам</h5>
                    <p className="text-blue-800 font-bold">Физикийн багш</p>
                    <p className="text-gray-500 mb-4">Бакалавр, Заах аргач зэрэгтэй </p>
                    <ul className="list-inside flex mx-auto justify-center">
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
          </button>
          {/* Modal */}
          <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                    Амарсайханы ЦЭДЭНЛХАМ
                  </h5>
                  <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="text-justify p-4">
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                  <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                    БУЦАХ
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
    </div>

    <div className="mb-6 lg:mb-0">  
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable2">
          <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/19.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                    </a>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                      <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                  <h5 className="text-lg font-bold text-cyan-500 uppercase">Ж.АРИУНСАРНАЙ</h5>
                    <p className="text-blue-800 font-bold">Мэдээлэл зүйн багш</p>
                    <p className="text-gray-500 mb-4">Бакалавр, Заах аргач зэрэгтэй </p>
                    <ul className="list-inside flex mx-auto justify-center">
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
          </button>
          {/* Modal */}
          <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable2" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                  Жалнамын АРИУНСАРНАЙ
                  </h5>
                  <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="text-justify p-4">
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                  <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                    БУЦАХ
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
   </div>

    <div className="mb-6 lg:mb-0">  
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable3">
          <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                    </a>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                      <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                  <h5 className="text-lg font-bold text-cyan-500 uppercase">Б.ДҮГЭРСҮРЭН</h5>
                    <p className="text-blue-800 font-bold">Мэдээлэл зүйн багш</p>
                    <p className="text-gray-500 mb-4">Магистр, Тэргүүлэх зэрэгтэй </p>
                    <ul className="list-inside flex mx-auto justify-center">
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
          </button>
          {/* Modal */}
          <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable3" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                  Батцэндийн ДҮГЭРСҮРЭН
                  </h5>
                  <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="text-justify p-4">
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                  <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                    БУЦАХ
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
    </div>

    <div className="mb-6 lg:mb-0">  
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable4">
            <div className="bg-white block rounded-lg shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img src="https://mdbootstrap.com/img/new/avatars/3.jpg" className="w-full rounded-t-lg" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                      </a>
                      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                        <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                      </svg>
                    </div>
                    <div className="p-6">
                    <h5 className="text-lg font-bold text-cyan-500 uppercase">Н.МӨНХБАЯР</h5>
                      <p className="text-blue-800 font-bold">Мэдээлэл зүйн багш</p>
                      <p className="text-gray-500 mb-4">Магистр, Тэргүүлэх зэрэгтэй </p>
                      <ul className="list-inside flex mx-auto justify-center">
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                          </svg>
                        </a>
                      </ul>
                    </div>
                  </div>
            </button>
            {/* Modal */}
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable4" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                    Наянтайн МӨНХБАЯР
                    </h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="text-justify p-4">
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                    <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                      БУЦАХ
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
    </div>


    <div className="mb-6 lg:mb-0">  
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable5">
            <div className="bg-white block rounded-lg shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className="w-full rounded-t-lg" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                      </a>
                      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                        <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                      </svg>
                    </div>
                    <div className="p-6">
                    <h5 className="text-lg font-bold text-cyan-500 uppercase">Ц.НАРМАНДАХ</h5>
                      <p className="text-blue-800 font-bold">Математикийн багш</p>
                      <p className="text-gray-500 mb-4">Магистр, МУ-ын зөвлөх багш</p>
                      <ul className="list-inside flex mx-auto justify-center">
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                          </svg>
                        </a>
                      </ul>
                    </div>
                  </div>
            </button>
            {/* Modal */}
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable5" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                    Цандэлэгийн НАРМАНДАХ
                    </h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="text-justify p-4">
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                    <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                      БУЦАХ
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
    </div>


    <div className="mb-6 lg:mb-0">  
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable6">
              <div className="bg-white block rounded-lg shadow-lg">
                      <div className="relative overflow-hidden bg-no-repeat bg-cover">
                        <img src="https://mdbootstrap.com/img/new/avatars/9.jpg" className="w-full rounded-t-lg" />
                        <a href="#!">
                          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                        </a>
                        <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                          <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                          </path>
                        </svg>
                      </div>
                      <div className="p-6">
                      <h5 className="text-lg font-bold text-cyan-500 uppercase">Д.Оюунтуяа</h5>
                        <p className="text-blue-800 font-bold">Математикийн багш</p>
                        <p className="text-gray-500 mb-4">Магистр, Тэргүүлэх зэрэгтэй </p>
                        <ul className="list-inside flex mx-auto justify-center">
                          <a href="#!" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                              <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                            </svg>
                          </a>
                          <a href="#!" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                              <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                          </a>
                          <a href="#!" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                              <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                            </svg>
                          </a>
                        </ul>
                      </div>
                    </div>
              </button>
              {/* Modal */}
              <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable6" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                  <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                        Дугармаагийн ОЮУНТУЯА
                      </h5>
                      <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="text-justify p-4">
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                      <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                      <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                        БУЦАХ
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
    </div>

    </div>
  </section>

  <section className="mb-16 text-gray-800 text-center">    
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-2 lg:gap-x-4">
      
    <div className="mb-6 lg:mb-0">  
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">
          <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/18.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                    </a>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                      <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                  <h5 className="text-lg font-bold text-cyan-500 uppercase">А.Цэдэнлхам</h5>
                    <p className="text-blue-800 font-bold">Физикийн багш</p>
                    <p className="text-gray-500 mb-4">Бакалавр, Заах аргач зэрэгтэй </p>
                    <ul className="list-inside flex mx-auto justify-center">
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
          </button>
          {/* Modal */}
          <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                    Амарсайханы ЦЭДЭНЛХАМ
                  </h5>
                  <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="text-justify p-4">
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                  <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                    БУЦАХ
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
    </div>

    <div className="mb-6 lg:mb-0">  
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable2">
          <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/19.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                    </a>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                      <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                  <h5 className="text-lg font-bold text-cyan-500 uppercase">Ж.АРИУНСАРНАЙ</h5>
                    <p className="text-blue-800 font-bold">Мэдээлэл зүйн багш</p>
                    <p className="text-gray-500 mb-4">Бакалавр, Заах аргач зэрэгтэй </p>
                    <ul className="list-inside flex mx-auto justify-center">
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
          </button>
          {/* Modal */}
          <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable2" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                  Жалнамын АРИУНСАРНАЙ
                  </h5>
                  <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="text-justify p-4">
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                  <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                    БУЦАХ
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
   </div>

    <div className="mb-6 lg:mb-0">  
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable3">
          <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                    </a>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                      <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                  <h5 className="text-lg font-bold text-cyan-500 uppercase">Б.ДҮГЭРСҮРЭН</h5>
                    <p className="text-blue-800 font-bold">Мэдээлэл зүйн багш</p>
                    <p className="text-gray-500 mb-4">Магистр, Тэргүүлэх зэрэгтэй </p>
                    <ul className="list-inside flex mx-auto justify-center">
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
          </button>
          {/* Modal */}
          <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable3" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                  Батцэндийн ДҮГЭРСҮРЭН
                  </h5>
                  <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="text-justify p-4">
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                  <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                  <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                  <p>This content should appear at the bottom after you scroll.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                    БУЦАХ
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
    </div>

    <div className="mb-6 lg:mb-0">  
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable4">
            <div className="bg-white block rounded-lg shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img src="https://mdbootstrap.com/img/new/avatars/3.jpg" className="w-full rounded-t-lg" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                      </a>
                      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                        <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                      </svg>
                    </div>
                    <div className="p-6">
                    <h5 className="text-lg font-bold text-cyan-500 uppercase">Н.МӨНХБАЯР</h5>
                      <p className="text-blue-800 font-bold">Мэдээлэл зүйн багш</p>
                      <p className="text-gray-500 mb-4">Магистр, Тэргүүлэх зэрэгтэй </p>
                      <ul className="list-inside flex mx-auto justify-center">
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                          </svg>
                        </a>
                      </ul>
                    </div>
                  </div>
            </button>
            {/* Modal */}
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable4" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                    Наянтайн МӨНХБАЯР
                    </h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="text-justify p-4">
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                    <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                      БУЦАХ
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
    </div>


    <div className="mb-6 lg:mb-0">  
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable5">
            <div className="bg-white block rounded-lg shadow-lg">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover">
                      <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" className="w-full rounded-t-lg" />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                      </a>
                      <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                        <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                      </svg>
                    </div>
                    <div className="p-6">
                    <h5 className="text-lg font-bold text-cyan-500 uppercase">Ц.НАРМАНДАХ</h5>
                      <p className="text-blue-800 font-bold">Математикийн багш</p>
                      <p className="text-gray-500 mb-4">Магистр, МУ-ын зөвлөх багш</p>
                      <ul className="list-inside flex mx-auto justify-center">
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </a>
                        <a href="#!" className="px-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                            <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                          </svg>
                        </a>
                      </ul>
                    </div>
                  </div>
            </button>
            {/* Modal */}
            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable5" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                    Цандэлэгийн НАРМАНДАХ
                    </h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="text-justify p-4">
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                    <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                    <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                    <p>This content should appear at the bottom after you scroll.</p>
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                      БУЦАХ
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
    </div>


    <div className="mb-6 lg:mb-0">  
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable6">
              <div className="bg-white block rounded-lg shadow-lg">
                      <div className="relative overflow-hidden bg-no-repeat bg-cover">
                        <img src="https://mdbootstrap.com/img/new/avatars/9.jpg" className="w-full rounded-t-lg" />
                        <a href="#!">
                          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" />
                        </a>
                        <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{left: 0, bottom: 0}}>
                          <path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                          </path>
                        </svg>
                      </div>
                      <div className="p-6">
                      <h5 className="text-lg font-bold text-cyan-500 uppercase">Д.Оюунтуяа</h5>
                        <p className="text-blue-800 font-bold">Математикийн багш</p>
                        <p className="text-gray-500 mb-4">Магистр, Тэргүүлэх зэрэгтэй </p>
                        <ul className="list-inside flex mx-auto justify-center">
                          <a href="#!" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-blue-600">
                              <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                            </svg>
                          </a>
                          <a href="#!" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                              <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                          </a>
                          <a href="#!" className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                              <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                            </svg>
                          </a>
                        </ul>
                      </div>
                    </div>
              </button>
              {/* Modal */}
              <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalScrollable6" tabIndex={-1} aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
                  <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h5 className="text-xl font-bold leading-normal text-blue-800" id="exampleModalScrollableLabel">
                        Дугармаагийн ОЮУНТУЯА
                      </h5>
                      <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-10" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="text-justify p-4">
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ТОВЧ НАМТАР:</h3>
                      <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ТӨГССӨН СУРГУУЛЬ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">АЖИЛЛАСАН БАЙДАЛ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ГАВЬЯА ШАГНАЛ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                      <h3 className="text-cyan-500 text-semibold uppercase text-start">ХЭЛЭХ ДУРТАЙ ҮГ:</h3>
                      <p>This content should appear at the bottom after you scroll.</p>
                    </div>
                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                      <button type="button" className="inline-block px-6 py-2.5 bg-cyan-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                        БУЦАХ
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
    </div>

    </div>
  </section>

</div>

              
                
    </div>















      








    </div>
    <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
    <div className="container my-6 px-6 mx-auto">
  <section className="mb-32">
    
    <div className="flex flex-wrap">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12 lg:mb-0">
        <div className="flex lg:py-16 -mr-16">
          <img src="https://mdbootstrap.com/img/new/standard/people/050.jpg" className="w-full rounded-lg shadow-lg" id="cta-img-nml-50" style={{zIndex: 10}} alt />
        </div>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12">
        <div className="bg-cyan-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
          <div className="lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">НИЙГМИЙН УХААНЫ ЗААХ АРГЫН НЭГДЛИЙН ТАНИЛЦУУЛГА</h2>
            <p className="mb-6 pb-2 lg:pb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat
              vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis.
              Labore itaque illum distinctio eum neque!
            </p>
            <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best team
              </p>
              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best quality
              </p>
              <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best experience
              </p>
            </div>
            <p>
              Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet
              rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc
              ligula felis, sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
              ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
              tortor finibus, a eleifend lectus dictum. Cras tempor convallis magna id rhoncus.
              Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem at neque
              tempus aliquet. Phasellus at ex volutpat, varius arcu id, aliquam lectus.
              Vestibulum mattis felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
              iaculis est vehicula ut.
              Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet
              rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc
              ligula felis, sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
              ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
              tortor finibus, a eleifend lectus dictum. Cras tempor convallis magna id rhoncus.
              Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem at neque
              tempus aliquet. Phasellus at ex volutpat, varius arcu id, aliquam lectus.
              Vestibulum mattis felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
              iaculis est vehicula ut.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </div>
    <div className="tab-pane fade" id="tabs-messagesJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
    <div className="container my-6 px-6 mx-auto">
  <section className="mb-32">
      <div className="flex flex-wrap">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12 lg:mb-0">
        <div className="flex lg:py-12 -mr-16">
          <img src="https://mdbootstrap.com/img/new/standard/people/068.jpg" className="w-full rounded-lg shadow-lg" id="cta-img-nml-50" style={{zIndex: 10}} alt />
        </div>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12">
        <div className="bg-purple-400 h-full rounded-lg p-6 lg:pl-10 text-white flex items-center text-center lg:text-left">
          <div className="lg:pl-16">
            <h2 className="text-3xl font-bold mb-6">БАГА БОЛОВСРОЛЫН ЗААХ АРГЫН НЭГДЛИЙН ТАНИЛЦУУЛГА</h2>
            <p className="mb-6 pb-2 lg:pb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat
              vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis.
              Labore itaque illum distinctio eum neque!
            </p>
            <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best team
              </p>
              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best quality
              </p>
              <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
                Best experience
              </p>
            </div>
            <p>
              Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet
              rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc
              ligula felis, sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
              ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
              tortor finibus, a eleifend lectus dictum. Cras tempor convallis magna id rhoncus.
              Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem at neque
              tempus aliquet. Phasellus at ex volutpat, varius arcu id, aliquam lectus.
              Vestibulum mattis felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
              iaculis est vehicula ut.
              Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet
              rutrum enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc
              ligula felis, sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
              ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
              tortor finibus, a eleifend lectus dictum. Cras tempor convallis magna id rhoncus.
              Suspendisse potenti. Nam mattis faucibus imperdiet. Proin tempor lorem at neque
              tempus aliquet. Phasellus at ex volutpat, varius arcu id, aliquam lectus.
              Vestibulum mattis felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
              iaculis est vehicula ut.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </div>
  </div>
</div>

        </div>
      </div>
    </MainLayout>
  );
};

export default teachers;
