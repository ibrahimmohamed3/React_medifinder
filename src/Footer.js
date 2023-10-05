import React from 'react'
import facebook from './images/facebook-app-symbol.png'
import whatsapp from './images/whatsapp.png'
import tiktok from './images/tiktok.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import snapchat from './images/social.png'

function Footer() {
    return (
      <div className='bg-footer flex flex-row justify-between items-center p-4'>
        <div className='text-center'>
          <h1>&copy; 2023 MediFinder. All Rights Reserved.</h1>
        </div>
        <div className='grid grid-cols-3 gap-2'>
            <div className='flex items-center justify-center space-x-4'>
                <img src={facebook} className='h-8 w-8' alt='Facebook Logo' />
            </div>
            <div className='flex items-center justify-center'>
                <img src={whatsapp} className='h-8 w-8' alt='WhatsApp Logo' />
            </div>
            <div className='flex items-center justify-center'>
                <img src={twitter} className='h-8 w-8' alt='Twitter Logo' />
            </div>
            <div className='flex items-center justify-center'>
                <img src={tiktok} className='h-8 w-8' alt='TikTok Logo' />
            </div>
            <div className='flex items-center justify-center'>
                <img src={instagram} className='h-8 w-8' alt='Instagram Logo' />
            </div>
            <div className='flex items-center justify-center'>
                <img src={snapchat} className='h-8 w-8' alt='Snapchat Logo' />
            </div>
        </div>

      </div>
    );
  }
  
export default Footer