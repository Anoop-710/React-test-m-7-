import React from 'react'
import './Footer2.css'
import Footer3 from './Footer3'
function Footer2() {
    const [email, setEmail] = React.useState('')

    const handleEmail = () => {
        if(email == '')
        {
            alert('Please enter your email address')
            return;
        }
        
        fetch('https://module-7-test-ee771-default-rtdb.asia-southeast1.firebasedatabase.app/Subscription.json',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then(res=>res.json()
        .then(data=>{
            console.log(data);
            setEmail('')
            // setGetEmail(true)
        }))
    }
  return (
    <div className='footer-middle-container'>
        <div className='f-m-left-container'>
                <ul>
                    <li>Company Info</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                </ul>
            <ul>
                <li>Legal</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>We are hiring</li>
                <li>Blog</li>
            </ul>
            <ul>
                <li>Features</li>
                <li>Business Marketing</li>
                <li>User Analytics</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
            </ul>
            <ul>
                <li>Resources</li>
                <li>iOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
            </ul>
        </div>
        <div className='f-m-right-container'>
            <h5>Get In Touch</h5>
            <span>
                <input type='text' placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={handleEmail}>Subscribe</button>
            </span>
            <p>Lorem impsum dolor amit</p>
        </div>
       
    <Footer3 />
    </div>
  )
}

export default Footer2