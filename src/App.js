
import React , {useState,useEffect} from 'react';
import './App.css';
import './index.css';
import Me from './assets/me1.JPG';
import About from './assets/about.png';
// import Bg from './assets/bg.gif';

//skill import
import Html from './assets/html.png';
import Css from './assets/css.png';
import Js from './assets/js.png';
import Tailwind from './assets/skills/tailwindcss.png';
import Bootstrap from './assets/skills/bootstrap.png';
import Laravel from './assets/skills/laravel.png';
import Reactjs from './assets/skills/react.png';
import Livewire from './assets/skills/livewire.png';
import Alpine from './assets/skills/alpinejs.svg';


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core"; 
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';

import Freelancers from '././components/portfolio/Freelancers';
import Work from '././components/portfolio/Work';
import Hobby from '././components/portfolio/Hobby';



library.add(fas,fab);

function App() {
  const notify = () => toast.success("Thank You!!");
  const [tab , setTab] = useState(1);
  const [yearWork, setYearWork] = useState(null);
  const [hourWork , setHourWork] = useState(null);
  useEffect(() => {
    setYearWork(new Date().getFullYear() - 2020);
    setHourWork(yearWork * 8765);
  }, [yearWork, hourWork]);

  return (
    <div className="overflow-x-hidden scroll-smooth">
        <Header/>
        <section className="relative grid h-screen grid-cols-12 gap-0 bg-fixed bg-black ">
          <Zoom left>
            <div className="relative col-span-12 bg-center bg-cover sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6 "
              style={{ backgroundImage: `url('https://i.pinimg.com/originals/90/c2/f7/90c2f783397ff969a6d22cc0587f7354.gif')` }}>
                <div className="h-full bg-black bg-opacity-70 md:h-screen">
                  <div className="flex flex-col justify-center h-full px-6 py-5 lg:px-24 md:h-screen">
                      <h1 className="-ml-2 text-5xl font-bold text-white md:text-8xl myfont">SAFWAN</h1>
                      <h1 className="text-2xl font-semibold text-teal-200 md:text-4xl">Front-end Developer</h1>
                      <div className="my-4">
                        <div className="flex items-center mb-2">
                          <FontAwesomeIcon icon={["fas", "street-view"]} color="#9CA3AF" size="lg" />
                          <h1 className="ml-4 text-lg text-gray-400">Kajang,Selangor,Malaysia</h1>
                        </div>

                        <div className="flex items-center">
                          <FontAwesomeIcon icon={["fas", "envelope"]} color="#9CA3AF" size="lg" />
                          <h1 className="ml-4 text-lg text-gray-400">safwanazman017@gmail.com</h1>
                        </div>
                      </div>
                      <div className="py-6">
                        <a href="#contact" className="px-6 py-4 text-lg font-bold text-teal-200 uppercase border-2 border-teal-200 rounded-lg shadow-xl">
                          Contact Me
                        </a>
                      </div>
                  </div>
                  
                <div className="absolute top-0 right-0 z-40 py-6 ">
                    <a href="https://github.com/safwanAzman" className="flex items-center px-2 py-2 border-2 border-teal-200 hover:bg-teal-200">
                        <FontAwesomeIcon icon={["fab", "github"]} color="white" size="lg" />
                    </a>
                    <a href="https://twitter.com/sfwn_azmn" className="flex items-center px-2 py-2 border-2 border-teal-200 hover:bg-teal-200">
                      <FontAwesomeIcon icon={["fab", "twitter"]} color="white" size="lg" />
                    </a>
                    <a href="https://www.instagram.com/safwn_/" className="flex items-center px-2 py-2 border-2 border-teal-200 hover:bg-teal-200">
                      <FontAwesomeIcon icon={["fab", "instagram"]} color="white" size="lg" />
                    </a>
                    <a href="mailto:safwanazman017@gmail.com?subject" className="flex items-center px-2 py-2 border-2 border-teal-200 hover:bg-teal-200">
                      <FontAwesomeIcon icon={["fas", "envelope"]} color="white" size="lg" />
                    </a>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom top>
          <div className="relative col-span-12 p-12 mx-0 my-0 -mt-4 bg-center bg-cover md:ml-2 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6"
            style={{ backgroundImage: `url(${Me})` }}
            >
            <div className="absolute inset-0 transition duration-300 ease-in-out bg-black bg-opacity-30">
              <div className="flex flex-col justify-center h-full px-2 md:px-0 md:justify-end">
                <div className="grid items-center grid-cols-2">
                  <div className="flex justify-center px-4 py-4 bg-teal-200 shadow-xl">
                    <div>
                      <div className="flex justify-center">
                        <FontAwesomeIcon icon={["fas", "laptop-code"]} color="#ffffff" size="3x" />
                      </div>
                      <div className="mt-4">
                        <h1 className="text-4xl text-center text-white myfont">{yearWork}</h1>
                        <h1 className="text-sm text-center text-white myfont md:text-lg">Year of Experience</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center px-4 py-4 bg-black shadow-xl">
                      <div>
                        <div className="flex justify-center">
                          <FontAwesomeIcon icon={["fas", "clock"]} color="#30d5c8" size="3x"/>
                        </div>
                        <div className="mt-4"> 
                          <h1 className="text-4xl text-center text-teal-200 myfont">{hourWork}</h1>
                          <h1 className="text-sm text-center text-teal-200 myfont md:text-lg">Hour of Work</h1>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Zoom>
        </section>

        <section id="about" className="flex justify-center w-full h-full pt-4 bg-fixed bg-black bg-center bg-cover " 
        style={{ backgroundImage: `url(https://c.tenor.com/s03JP-Y_wiAAAAAC/smoke-teal.gif)` }}>
            <div className="container flex items-center justify-start w-full mx-12 lg:mx-32">
              <div className="">
                <div className="container grid items-center justify-center grid-cols-12 gap-6">
                    <Fade left>
                      <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
                        <img className="" src={About} alt='about' />
                      </div>
                    </Fade>
                    <Fade right>
                      <div className="col-span-12 py-0 lg:py-5 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6 ">
                        <h1 className="-ml-2 text-4xl font-bold text-teal-200 myfont">ABOUT <span className="text-white">ME</span></h1>
                        <p className="pb-10 mt-4 text-sm font-semibold text-white lg:text-xl lg:pb-0">
                        I am a highly skilled Frontend Developer with a passion for creating visually stunning and intuitive user interfaces. 
                        I have a strong background in HTML, CSS, and JavaScript, as well as experience with popular frontend frameworks such as React and laravel blade. 
                        I have a keen eye for design and am well-versed in creating responsive layouts and cross-browser compatible web pages. 
                        I am skilled in utilizing design software such as Figma to create mockups and wireframes. 
                        I am also proficient in using CSS preprocessors and CSS frameworks such as Tailwindcss and Bootstrap. 
                        I am a quick learner and am always eager to stay up-to-date with the latest frontend technologies and best practices.
                        I am a team player and am able to work well under pressure, I am confident that I can bring value to any organization.
                          </p>
                      </div>
                    </Fade>
                </div>
              </div>
            </div>
        </section>

        <section id="skills" className="flex justify-center w-full h-full px-10 py-12 bg-black lg:px-32">
          <div className="flex justify-center w-full">
            <div className="container relative grid items-center justify-center grid-cols-12 gap-6 ">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12 ">
                <h1 className="mb-4 text-4xl font-bold text-white myfont">TECHNICAL <span className="text-teal-200">SKILLS</span></h1>
              </div>
                <div className="col-span-12 py-16 overflow-y-hidden sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
                    <div className="box">
                      <span className="box1">
                        <img 
                          src={Tailwind}
                          className="p-4 rounded-lg shadow-xl" 
                          alt="Tailwindcss"
                        />
                      </span>
                      <span className="box2">
                        <img 
                          src={Bootstrap}
                          className="p-4 rounded-lg shadow-xl"
                          alt="Bootstrap" 
                        />
                      </span>
                      <span className="box3">
                        <img 
                          src={Laravel}
                          className="p-4 rounded-lg shadow-xl"
                          alt="Laravel" 
                        />
                      </span>
                      <span className="box4">
                        <img 
                          src={Livewire}
                          className="p-4 rounded-lg shadow-xl"
                          alt="Livewire" 
                        />
                      </span>
                      <span className="box5">
                        <img 
                          src={Alpine}
                          className="p-4 rounded-lg shadow-xl"
                          alt="Alpinejs"
                        />
                      </span>
                      <span className="box6">
                        <img 
                          src={Reactjs} 
                          className="p-4 rounded-lg shadow-xl "
                          alt="React" 
                        />
                      </span>
                    </div>
                </div>
                <Fade right>
                <div className="col-span-12 mt-0 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6 lg:-mt-10">
                  <div className="flex mt-6 space-x-4">
                    <div className="w-32">
                      <CircularProgressbarWithChildren value={60}
                        styles={buildStyles({
                          pathColor: "#30d5c8",
                          trailColor: "white"
                        })}
                      >
                        <img
                          style={{ width: "20%", marginTop: -5 }}
                          src={Html}
                          alt="doge"
                        />

                        <div className="text-xl font-semibold text-center text-white">
                          <p>60%</p>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <div className="w-32">
                      <CircularProgressbarWithChildren value={70}
                        styles={buildStyles({
                          pathColor: "#30d5c8",
                          trailColor: "white"
                        })}
                      >
                        <img
                          style={{ width: "28%", marginTop: -5 }}
                          src={Css}
                          alt="doge"
                        />

                        <div className="text-xl font-semibold text-center text-white">
                          <p>70%</p>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <div className="w-32">
                      <CircularProgressbarWithChildren value={40}
                        styles={buildStyles({
                          pathColor: "#30d5c8",
                          trailColor: "white"
                        })}
                      >
                        <img
                          style={{ width: "18%", marginTop: -5 }}
                          src={Js}
                          alt="doge"
                        />
                        <div className="text-xl font-semibold text-center text-white">
                          <p>40%</p>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>               
                  </div>
                  <div className="pt-4">
                    <p className="text-lg font-semibold text-white">Front-end</p>
                    <div className="w-full bg-white shadow ">
                      <div className="py-1 text-xs leading-none text-center text-white bg-teal-200" style={{ width: '70%' }}>70%</div>
                    </div>
                    <p className="pt-4 text-lg font-semibold text-white ">Back-end</p>
                    <div className="w-full bg-white shadow">
                      <div className="py-1 text-xs leading-none text-center text-white bg-teal-200" style={{ width: '40%' }}>40%</div>
                    </div>
                  </div>
                </div>
                </Fade>
            </div>
          
          </div>
      </section>


      <section id="portfolio" className="flex justify-center w-full h-full px-10 py-12 bg-fixed bg-black bg-center bg-cover lg:px-32"
        style={{ backgroundImage: `url(https://c.tenor.com/s03JP-Y_wiAAAAAC/smoke-teal.gif)` }}
      >
          <div className="flex justify-center w-full">
            <div className="container relative grid items-center justify-center grid-cols-12 gap-8 ">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12 ">
                <h1 className="mb-4 text-4xl font-bold text-teal-200 myfont">MY <span className="text-white">PORTFOLIO</span></h1>
                <div className="">
                  <div className='overflow-x-auto'>
                    <div className="grid grid-cols-3 gap-2 mb-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2" style ={{ width : '28rem'}}>
                        <button className={tab === 1 ? 
                          'flex items-center justify-center p-4 space-x-2 text-white border-2 border-white rounded-md hover:bg-teal-200 bg-teal-200' :
                          'flex items-center justify-center p-4 space-x-2 text-white border-2 border-white rounded-md hover:bg-teal-200 bg-transparent'}
                          onClick={
                            () => {
                              setTab(1);
                            }
                          }>
                          <FontAwesomeIcon icon={["fas", "laptop-code"]} color="#ffffff" />
                          <p>Hobby</p>
                        </button>
                        <button className={tab === 2 ? 
                          'flex items-center justify-center p-4 space-x-2 text-white border-2 border-white rounded-md hover:bg-teal-200 bg-teal-200' :
                          'flex items-center justify-center p-4 space-x-2 text-white border-2 border-white rounded-md hover:bg-teal-200 bg-transparent'}
                          onClick={
                            () => {
                              setTab(2);
                            }
                          }>
                          <FontAwesomeIcon icon={["fas", "briefcase"]} color="#ffffff" />
                          <p>Work</p>
                        </button>
                        <button className={tab === 3 ? 
                          'flex items-center justify-center p-4 space-x-2 text-white border-2 border-white rounded-md hover:bg-teal-200 bg-teal-200' :
                          'flex items-center justify-center p-4 space-x-2 text-white border-2 border-white rounded-md hover:bg-teal-200 bg-transparent'}
                          onClick={
                            () => {
                              setTab(3);
                            }
                          }>
                          <FontAwesomeIcon icon={["fas", "comments-dollar"]} color="#ffffff" />
                          <p>Freelancer</p>
                        </button>
                      
                    </div>
                  </div>
                  <div className="px-4 md:px-0">
                    <>
                      {tab === 1 ? 
                        <Hobby />
                      : null }
                      {tab === 2 ? 
                      <Work />
                      : null }
                      {tab === 3 ? 
                      <Freelancers />
                      : null }
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      
      <section id="contact" className="flex justify-center w-full h-full px-10 py-12 bg-black lg:px-32">
        <div className="flex justify-center w-full">
          <div className="container relative grid items-center justify-center grid-cols-12 gap-6 ">
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xxl:col-span-12">
              <h1 className="text-4xl font-bold text-white myfont">CONTACT <span className="text-teal-200">ME</span></h1>
            </div>
            <Fade left>
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
              <div className="flex items-center space-x-4">
                <div  className="flex items-center px-4 py-4 border-2 border-teal-200 hover:bg-teal-200 ">
                  <FontAwesomeIcon icon={["fas", "envelope"]} color="white" size="2x" />
                </div>
                <p className="text-sm font-semibold text-white md:text-xl">Safwanazman017@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center px-4 py-4 border-2 border-teal-200 hover:bg-teal-200 ">
                  <FontAwesomeIcon icon={["fas", "street-view"]} color="white" size="2x" />
                </div>
                <p className="text-sm font-semibold text-white md:text-xl">Kajang,Selangor,Malaysia</p>
              </div>

              <div className="flex items-center my-6 space-x-4">
                <a href="https://github.com/safwanAzman" className="flex items-center px-2 py-2 border-2 border-teal-200 hover:bg-teal-200">
                  <FontAwesomeIcon icon={["fab", "github"]} color="white" size="lg" />
                </a>
                <a href="https://twitter.com/sfwn_azmn" className="flex items-center px-2 py-2 border-2 border-teal-200 hover:bg-teal-200">
                  <FontAwesomeIcon icon={["fab", "twitter"]} color="white" size="lg" />
                </a>
                <a href="https://www.instagram.com/safwn_/" className="flex items-center px-2 py-2 border-2 border-teal-200 hover:bg-teal-200">
                  <FontAwesomeIcon icon={["fab", "instagram"]} color="white" size="lg" />
                </a>
                <a href="mailto:safwanazman017@gmail.com?subject" className="flex items-center px-2 py-2 border-2 border-teal-200 hover:bg-teal-200">
                  <FontAwesomeIcon icon={["fas", "envelope"]} color="white" size="lg" />
                </a>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xxl:col-span-6">
              <div className="flex items-center w-full h-full rounded-lg ">
                <div className="w-full">
                  <input type="text" name="" id="" placeholder="Your Name" className="w-full p-4 bg-transparent border-2 rounded-lg border-brown-200 text-brown-100"  required/>     
                  <input type="email" name="" id="" placeholder="Your Email" className="w-full p-4 mt-3 bg-transparent border-2 rounded-lg border-brown-200 text-brown-100" />
                  <textarea name="" id="" cols="10" rows="3" placeholder="Tell us about desired property"
                  className="w-full p-4 mt-3 bg-transparent border-2 rounded-lg border-brown-200 text-brown-100"></textarea>
                  <button onClick={notify} className="w-full px-4 py-4 mt-4 text-lg font-bold text-teal-200 uppercase border-2 border-teal-200 rounded-lg shadow-xl">
                    Contact Me
                  </button>
                  <ToastContainer 
                      position="bottom-right"
                  />
                </div>      
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
