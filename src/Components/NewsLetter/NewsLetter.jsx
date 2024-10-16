import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>پیشنهادهای ویژه مارا در ایمیلتان دریافت کنید</h1>
        <p>در جدبد ترین اخبار سایت بروز باشید</p>
        <div>
            <input type="email" placeholder='ورودی ایمیل' />
            <button>عضو شدن</button>
        </div>
    </div>
  )
}
