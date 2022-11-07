import react from "react";
import Aboutexe from "../components/Aboutexe";
import Carousel from "../components/Carousel";
import Counter from "../components/Counter";
import Domesticprojects from "../components/Domesticprojects";
import Environment from "../components/Environment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overseasprojects from "../components/Overseasprojects";
import Post from "../components/Post";
import Projects from "../components/Projects";
import Sharedhouse from "../components/Sharedhouse";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";
import Trainingprograms from "../components/Trainingprograms";

//Layout-ийг дуудаж байгаа хэсэг
import MainLayout from "../layout/MainLayout";
import css from "../styles/Home.module.css";




export default function Home() {
  return (
    <MainLayout>
      <Carousel/>
      <Trainingprograms/>
      
    <Aboutexe/>
    <Post/>
    <Counter/>
    <Testimonials/>

    <Environment/>
   
    


    </MainLayout>
  

  );
}
