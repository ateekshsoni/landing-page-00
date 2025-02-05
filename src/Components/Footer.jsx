import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='h-[60vh] flex items-center bg-blue-200 mt-10  justify-evenly w-full'>
        <div className='w-[15%] flex flex-col  gap-2'> 
            <h2 className='text-2xl font-semibold '>Phone Store</h2>
            <p className='text-sm text-gray-500'>Shop No. 311,Level 3,
                unimall(block 15A)
                Lovely, Phagwara,
                Punjab 144411
            </p>
            <p className='text-lg'><i className="ri-phone-line"></i>XXXXXXXXXX</p>
            <p className='text-lg'><i className="ri-mail-line"></i>phonestore@gmail.com</p>
        </div>
        <div className='w-[15%] flex flex-col justify-between gap-2'>
            <h4>Useful Links</h4>
            <ul className='text-sm text-gray-500'>
                <li>Home</li>
                <li>About Us</li>
                <li>Shop</li>
                <li>Privacy Policy</li>
                <li>Shiping and deliviry policy</li>
            </ul>
        </div>
        <div className='w-[15%] flex flex-col gap-2'>
            <h4>Support</h4>
            <ul className='text-sm text-gray-500'>
                <li>Contact us</li>
                <li>Price Calculator</li>
                <li>Terms & Conditions</li>
                <li>Cancilation and refund policy</li>
            </ul>
        </div>
        <div className='w-[15%] flex flex-col gap-2'>
            <h4 className='underline'>other info</h4>
            <p className='text-xs text-gray-500'>At phonestore, we're redefining brining you innovative solutions that make printing at home as seamless and professional as it can be. Our mission you turn to for all your printing needs, providing top qualtiy results right at your doorstep. </p>
        </div>
    </footer> 
    </>
  )
}

export default Footer
