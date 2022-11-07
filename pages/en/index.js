import react from "react";
import Aboutexe from "../../components/en/Aboutexe";
import Footer from "../../components/en/Footer";
import Navbar from "../../components/en/Navbar";
import Slider from "../../components/en/Slider";

//Layout-ийг дуудаж байгаа хэсэг
import MainLayoutEn from "../../layout/MainLayoutEn";
import css from "../../styles/Home.module.css";




export default function Home() {
  return (
    <MainLayoutEn>
    <Slider/>
    <Aboutexe/>
    <Overseasprojects/>
    <Projects/>
    <Domesticprojects/>
    <Sharedhouse/>
    


    </MainLayoutEn>
  

  );
}
