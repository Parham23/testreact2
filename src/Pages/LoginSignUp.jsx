import React from 'react'
import './CSS/LoginSignUp.css'
export const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>عضو شوید</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='اسم و فامیل' />
          <input type="email" placeholder='ایمیل' />
          <input type="password" placeholder='پسورد' />
        </div>
        <button>ادامه</button>
        <p className="loginsignup-login">ایا قبلا عضو شدید؟ <span>از اینجا وارد شوید</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>با ادامه دادن من تمام شرایط و قوانین را پذیرا هستم</p>
        </div>
      </div>
    </div>
  )
}
