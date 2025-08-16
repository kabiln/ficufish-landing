'use client'

import Image from "next/image";
import Font from "next/font/google";
import Lottie from "lottie-react";

import Testimonials from "./testimonials";
import FadeInOnScroll from "./FadeInOnScroll";
import ContactForm from "./contact";

import logo from "../public/ficufish.json";
import humancenter from "../public/human_center.svg";
import circular from "../public/circular.svg";
import ai from "../public/ai.svg";
import team from "../public/team.svg";
import cross from "../public/cross-platform.svg";
import communication from "../public/communication.svg";
import product from "../public/product.svg";
import hands from "../public/hands.svg";  



export default function Home() {

  
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen">
      <main className="flex flex-col row-start-2 mt-50 items-center-safe">


        <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row items-center sm:items-center-safe">
          <Lottie
          className="w-32"
          animationData={logo}
          loop={true}
          />
          <div className="flex flex-row row-auto items-center sm:items-start">
          <h1 className="font-montserrat text-5xl font-light tracking-[-.01em] text-center sm:text-left">
            ficufish
          </h1>®
          </div>
        </div>


        <ol className="font-mono list-inside list-none text-sm/6 text-center sm:text-center max-w-2xl">
          <li className="mb-2 tracking-[-.01em]">
            We research and develop innovative solutions empowering people and organizations worldwide to create thriving circular economies.
          </li>
        </ol>
        </div>
        

        <FadeInOnScroll>


        <div className="flex flex-col md:flex-row items-start justify-self-center gap-10 mt-40">
          <div className="flex flex-col items-center max-w-64">
            <Image src={humancenter} alt="Human Focus" className="w-40"/>
            <p className="font-mono text-sm/6 text-center">
              The human being is at the centre of our solutions. We prioritise understanding people’s needs to create user-friendly solutions.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-64">
            <Image src={circular} alt="Circular" className="w-40"/>
            <p className="font-mono text-sm/6 text-center">
              Sustainable development demands circularity, minimizing waste and maximizing resource use in both physical and digital realms.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-64">
            <Image src={ai} alt="Human Focus" className="w-40"/>
            <p className="font-mono text-sm/6 text-center">
              We leverages AI to optimize digital products, predict behaviours, manage resource recovery, and create smarter solutions for a circular and sustainable digital communities.
            </p>
          </div>
        </div>






<hr className="h-px w-md justify-self-center bg-gray-200 border-0 dark:bg-gray-700 mt-20"></hr>

        <div className="flex flex-col items-center justify-self-center-safe gap-2 mt-10 max-w-xl">
          <h2 className="font-montserrat text-2xl font-light tracking-[-.01em] text-center sm:text-left">
            What people say about us:
          </h2>
          <div className="flex flex-col row-auto items-center h-100 sm:items-center max-w-xl">
          <Testimonials />
          </div>
        </div>


<hr className="h-px w-md justify-self-center bg-gray-200 border-0 dark:bg-gray-700"></hr>
<h2 className="font-montserrat text-2xl font-light tracking-[-.01em] justify-self-center-safe mt-20">Services</h2>


        <div className="flex flex-col md:flex-row items-start justify-self-center gap-10 mt-20">

          <div className="flex flex-col gap-5 items-center-safe max-w-64">
            <h2 className="font-sans font-bold  tracking-[-.01em]">Innovation Management</h2>
            <Image src={communication} alt="Human Focus" className="w-40"/>
            <p className="font-mono text-center text-sm/6">
              We provide innovation management services to companies, fostering collaboration and innovation in the digital world.
            </p>
          </div>

          <div className="flex flex-col gap-5 items-center-safe max-w-64">
            <h2 className="font-sans font-bold  tracking-[-.01em]">Product Development</h2>
            <Image src={product} alt="Circular" className="w-40"/>
            <p className="font-mono text-center text-sm/6">
              Research and development services to create innovative solutions and products for companies and organizations.
            </p>
          </div>

          <div className="flex flex-col gap-5 items-center-safe max-w-64">
            <h2 className="font-sans font-bold  tracking-[-.01em]">Circular Business Development</h2>
            <Image src={hands} alt="Human Focus" className="w-40"/>
            <p className="font-mono text-center text-sm/6">
              Our team of experts provides a wide range of services in circular economies and sustainable development.
            </p>
          </div>

        </div>

        
<hr className="h-px w-md justify-self-center bg-gray-200 border-0 dark:bg-gray-700 mt-20"></hr>

        <div className="flex flex-col justify-self-center-safe gap-2 mt-10 max-w-xl">
          <h2 className="font-montserrat text-2xl font-light tracking-[-.01em] text-center">
            Contact us
          </h2>
          <ContactForm />
        </div>
        </FadeInOnScroll>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="font-mono text-sm/6 text-center sm:text-left">
            &copy; <a href="https://ficufish.com">ficufish.com</a>
          </p>
      </footer>
    </div>
  );
}
