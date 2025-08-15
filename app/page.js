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
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-center-safe">



        <div className="flex flex-row row-auto items-center mt-100 sm:items-center-safe">
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

        

        <FadeInOnScroll className="flex flex-col sm:flex-col gap-10 row-auto items-center sm:items-center-safe">


        <div className="flex md:flex-row sm:flex-col row-auto col-auto items-center gap-6 mt-40 sm:items-start">
          <div className="flex flex-col row-auto items-center sm:items-center max-w-64">
            <Image src={humancenter} alt="Human Focus" className="w-40"/>
            <p className="font-mono text-sm/6 text-center sm:text-center">
              The human being is at the centre of our solutions. We prioritise understanding people’s needs to create user-friendly solutions.
            </p>
          </div>
          <div className="flex flex-col row-auto items-center sm:items-center max-w-64">
            <Image src={circular} alt="Circular" className="w-40"/>
            <p className="font-mono text-sm/6 text-center sm:text-center">
              Sustainable development demands circularity, minimizing waste and maximizing resource use in both physical and digital realms.
            </p>
          </div>
          <div className="flex flex-col row-auto items-center sm:items-center max-w-64">
            <Image src={ai} alt="Human Focus" className="w-40"/>
            <p className="font-mono text-sm/6 text-center sm:text-center">
              We leverages AI to optimize digital products, predict behaviours, manage resource recovery, and create smarter solutions for a circular and sustainable digital communities.
            </p>
          </div>
        </div>



        <div className="flex flex-col row-auto items-center gap-2 mt-10 sm:items-center max-w-2xl">
          <div className="flex flex-row row-auto items-space-evenly gap-2">
            <Image src={cross} alt="Team" className="w-30"/>
            <div className="flex flex-col row-auto items-start ml-10 justify-around">
            <h2 className="font-sans font-bold  tracking-[-.01em] text-center sm:text-left">Inspired by Nature</h2>
            <p>By observing nature and its inexhaustible source of inspiration, we develop high-efficiency circular solutions to achieve a sustainable use of resources.</p>
          </div>
          </div>
        </div>

        <div className="flex flex-col row-auto items-center gap-2 mt-10 sm:items-center max-w-2xl">
          <div className="flex flex-row row-auto items-space-evenly gap-2">
            <div className="flex flex-col row-auto items-start ml-10 justify-around">
            <h2 className="font-sans font-bold  tracking-[-.01em] text-center sm:text-left">Diversity at the core</h2>
            <p className="text-left">We find circular patterns in different ecosystems, they all share collaborative diversity as one of the core principles. Team diversity is our dna, to maximize perspective and find innovative and armonic solutions.</p>
          </div>
          <Image src={team} alt="Team" className="w-30"/>
          </div>
        </div>



<hr className="h-px w-full bg-gray-200 border-0 dark:bg-gray-700 mt-20"></hr>
<h2 className="font-montserrat text-2xl font-light tracking-[-.01em] text-center sm:text-left"></h2>

        <div className="flex flex-col row-auto items-center gap-2 mt-10 sm:items-center max-w-2xl">
          <h2 className="font-montserrat text-2xl font-light tracking-[-.01em] text-center sm:text-left">
            What people say about us:
          </h2>
          <div className="flex flex-col row-auto items-center min-h-32 sm:items-center max-w-2xl">
          <Testimonials />
          </div>
        </div>




<hr className="h-px w-full bg-gray-200 border-0 dark:bg-gray-700"></hr>
<h2 className="font-montserrat text-2xl font-light tracking-[-.01em] text-center sm:text-left">Services</h2>


        <div className="flex md:flex-row sm:flex-col row-auto col-auto items-center gap-6 mt-20 sm:items-start">
          <div className="flex flex-col row-auto gap-5 items-center sm:items-center max-w-64">
            <Image src={communication} alt="Human Focus" className="w-40"/>
            <p className="font-mono text-sm/6 text-center sm:text-center">
              We provide innovation management services to companies, fostering collaboration and innovation in the digital world.
            </p>
          </div>
          <div className="flex flex-col row-auto gap-5 items-center sm:items-center max-w-64">
            <Image src={product} alt="Circular" className="w-40"/>
            <p className="font-mono text-sm/6 text-center sm:text-center">
              Research and development services to create innovative solutions and products for companies and organizations.
            </p>
          </div>
          <div className="flex flex-col row-auto gap-5 items-center sm:items-center max-w-64">
            <Image src={hands} alt="Human Focus" className="w-40"/>
            <p className="font-mono text-sm/6 text-center sm:text-center">
              Our team of experts provides a wide range of services in circular economies and sustainable development.
            </p>
          </div>
        </div>

        <div className="flex flex-col row-auto items-center gap-2 mt-10 sm:items-center max-w-2xl">
          <h2 className="font-montserrat text-2xl font-light tracking-[-.01em] text-center sm:text-left">
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
