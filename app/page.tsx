import Header from "./components/Header/header";
import Hero from "./components/hero/hero";
import Footer from "./components/Footer/footer";
import Services from './Services/services'; 
import Image from "next/image";
 import Menu from './Menu/menu'; 
 
import Link from 'next/link';
import { url } from "inspector";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import burg from "../../image/burg.jpg"

export default function Home() {
  return (
    <>
      <div
        className="bg-cover  bg-center h-screen flex items-center justify-center"
        style={{ background: "url('/images/burg.jpg')" }}
      >
        <Header />
        <Services />
        <Hero/>
        <Footer/>
      </div>
    </>
  );
}

