import { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'

function App() {
  return (
    <main className='px-8 md:px-20 lg:px-40'>
    
    <Navbar />

    <section id='home' className='min-h-screen text-center mt-8 flex flex-col justify-center '>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img src='/Headshot1.jpg' layout="fill" objectFit="cover" />
        </div>
        <h1 className='text-3xl md:text-5xl font-medium text-teal-500'>Chrstian Martinez</h1>
        <h3 className='text-xl md:text-2xl'>Full Stack Software Engineer</h3>
        <p className='text-md py-1 text-gray-800 md:text-xl'>Enthusiastic and motivated self-learning about information technology. Focused on cloud computing, devsecops, and web development. Now I am looking for more experience in my field. </p>
        <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
            <a href="https://github.com/cjmartinez217"><AiFillLinkedin /></a>
          <AiFillGithub />
          <AiFillMail />
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
