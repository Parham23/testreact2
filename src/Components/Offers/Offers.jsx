import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>اختصاصی ترین</h1>
            <h1>پیشنهادها برای شما</h1>
            <p>فقط در پرفروش ترین محصولات</p>
            <button>کلیک کنید</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
            
        </div>
    </div>
  )
}
