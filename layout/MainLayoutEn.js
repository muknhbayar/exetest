import Aboutexe from "../components/en/Aboutexe";
import Footer from "../components/en/Footer";
import Navbar from "../components/en/Navbar";
import Slider from "../components/en/Slider";


const MainLayout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default MainLayout