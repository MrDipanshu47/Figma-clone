import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";



export default function Header() {
  return (
    
      <header className='text-center' >
        <div className='bg-black flex  '>
          <img src="./img/HorizontalLogo.png" alt="forma" className='w-36 pb-3.5 mr-12' />
          <div className='flex justify-center items-center gap-4 text-stone-50 ml-auto'>
            <a class="lg:block hidden text-sm font-normal" href="https://bridge.forma.art/" target="_blank">BRIDGE</a>
            <a class="lg:block hidden text-sm font-normal" href="https://explorer.forma.art/" target="_blank">EXPLORER</a>
            <div className=' flex justify-center items-center  gap-5 h-24 w-24'>
              <a href="https://x.com/home">
                <FaXTwitter />

              </a>
              <a href="https://discord.com/invite/cfHDU8k7FQ">
                <FaDiscord />

              </a>
            </div>

          </div>


        </div>
        <div class="border-t border-gray-300 my-0.3"></div>

        </header >
      

    
  )
}
