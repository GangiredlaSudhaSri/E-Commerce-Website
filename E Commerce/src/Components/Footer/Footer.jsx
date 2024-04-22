import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='footer-1'>
     <h3>Home</h3>
     <p>Ecommerce website is your digital storefront on the internet</p>
     <p>It facilitates the transaction between a buyer and seller.</p>
    </div>
      
      <div className='footer-2'>
      <h3>About-Us</h3>
      </div>
      <div className='footer-3'>
      <h3>Contact-Us</h3>
            <p>123 Main Street</p>
            <p>Hyderabad,Telengana</p>
            <p>Email: ecom@.com</p>
            <p>Phone: 123-456-7890</p>
      </div>
      <div className='footer-4'>
      <h3>Payment-Methods</h3>
      {/* <ul>
              <li><img src="/images/payment/visa.png" alt="Visa" /></li>
              <li><img src="/images/payment/mastercard.png" alt="Mastercard" /></li>
              <li><img src="/images/payment/paypal.png" alt="PayPal" /></li>
              <li><img src="/images/payment/amazon-pay.png" alt="Amazon Pay" /></li>
             
      </ul> */}

<ul>
              <li><a href="/">Home</a></li>
              <li><img src="/images/payment/mastercard.png" alt="Mastercard" /></li>
              <li><img src="/images/payment/paypal.png" alt="PayPal" /></li>
              <li><img src="/images/payment/amazon-pay.png" alt="Amazon Pay" /></li>
             
      </ul>
      </div>
      <div className='footer-5'>
      <h3>Follow-us</h3>
      </div>
      </>
  )
}

export default Footer