import react from "react";
import Aboutexe from "../components/Aboutexe";
import Announcements from "../components/Announcements";
import Domesticprojects from "../components/Domesticprojects";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overseasprojects from "../components/Overseasprojects";
import Projects from "../components/Projects";
import Recruitment from "../components/Recruitment";
import Sharedhouse from "../components/Sharedhouse";
import Slider from "../components/Slider";

//Layout-ийг дуудаж байгаа хэсэг
import MainLayout from "../layout/MainLayout";
import css from "../styles/Home.module.css";




export default function Home() {
  return (
    <MainLayout>
    <Slider/>
    <Aboutexe/>
    <Recruitment/>
    <Overseasprojects/>
    <Projects/>
    <Domesticprojects/>
    <Sharedhouse/>
    <Announcements/>
    


    </MainLayout>
  

  );
}
