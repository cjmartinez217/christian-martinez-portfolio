import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'

function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='min-h-screen text-center mt-8 flex flex-col justify-center '>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2 mt-12">
          <img src='/Headshot1.jpg' layout="fill" objectFit="cover" />
        </div>
        <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Chrstian Martinez</h1>
        <h3 className='text-xl md:text-2xl'>New Grad Software Engineer</h3>
        <p className='text-md py-5 text-gray-800 md:text-xl'>A fourth-year Computer Engineering major at the University of Florida. I have both professional and academic experience in the field of software engineering through an internship and coursework. These have given me valuable knowledge of many different tech stacks and programming languages which will no doubt prove valuable in industry. I would describe myself as a goal oriented, fast-learning individual who is always excited for the next challenge. </p>
        <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
          <a href="https://www.linkedin.com/in/christian-j-martinez/"><AiFillLinkedin /></a>
          <a href="https://github.com/cjmartinez217"><AiFillGithub /></a>
          <a href="mailto:cjmartinez217@gmail.com"><AiFillMail /></a>
        </div>
    </section>

    <section id="footer" className='mt-5 rounded bg-black py-8 px-8'>
      <div className='text-white md:text-center'>
        <h1 className='font-medium text-lg'>Contact Me</h1>

        <ul className='md:flex justify-center gap-4'>
          <li className='flex items-center gap-2'>
            <AiFillMail />
            <p>cjose.martinez@ufl.edu</p>
          </li>
          <li className='flex items-center gap-2'>
            <AiFillPhone/>
            <p>786-521-3666</p>
          </li>
        </ul>

      </div>
      
    </section>

    </main>
  );
}

export default App;
