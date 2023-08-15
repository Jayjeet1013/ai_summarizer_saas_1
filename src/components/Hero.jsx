import React from 'react'
import {logo} from '../assets';

const Hero = () => {
  return (
   <header className='flex flex-col  w-full justify-center items-center'>
        <nav className='flex  justify-between w-full mb-10 pt-3'>
         <img src={logo} alt='sumz_log' className='w-28 object-contain'/>

        <button type='button'
        onClick={() => window.open('')} className='black_btn'>
                Github
        </button>
        </nav>
        <h1 className='head_text'>
                Summarize Aritcles with <br className='max-md:hidden' />
                <span className='orange_gradient'>Open AI Gpt-4</span>
        </h1>
        <h2 className='desc'>
                Simplify Your reading with Summize, an open-source articles summarizer that transforms lengthy articles into clear and concise summaries  
        </h2>
   </header>
  )
}

export default Hero