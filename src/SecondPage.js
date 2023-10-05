import React from 'react'

import SearchBar from './SearchBar'
import Footer from './Footer'
import img2 from './images/second page.jpeg (2).jpeg'
import MenuDropdown from './DropDown'

function SecondPage() {
  return (
    <div>
        <div className='grid grid-cols-1'>
            <SearchBar/>
            <div className='grid grid-cols-2 grid-rows-1'>
                
                <div className='col-span-1 ml-3' >
                    <MenuDropdown />
                </div>

                
                <div className='col-span-1'>
                    <img src={img2} />
                </div>
            </div>

        </div> 
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <Footer />
        </div>

    </div>
  )
}

export default SecondPage