import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
export const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>محصولات</p>
            <p>تیتر</p>
            <p>قیمت</p>
            <p>تعداد</p>
            <p>جمع کل</p>
            <p>حذف</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if (cartItems[e.id]>0) 
            {
                return <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price*cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
                
            }
            return null;

        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>کلیه مبالغ</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>قیمت کل محصولات</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                      <p>هزینه ارسال</p>
                      <p>رایگان</p>  
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>هزینه کل</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>ادامه برای تکمیل خرید</button>
            </div>
            <div className="cartitems-promocode">
                <p>اگر کد تخفیفی دارید اینجا وارد نمایید</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='کد تخفیف' />
                    <button>ثبت</button>
                </div>
            </div>
        </div>
    </div>
  )
}
