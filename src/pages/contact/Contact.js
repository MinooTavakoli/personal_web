import React from 'react';
import { Card } from '../../components/card';
import './Contact.css'

function Contact() {
  return (
    <Card className="custom-card-contact">
    <div dir="ltr" className="card-inner animated active" id="about-card">
    <div className="card-wrap">
      <div className="content">
        <div className="title">
          <div className="first-word-wrapper">
            <div className="first-word">Get</div> <div> in Touch </div>
          </div>
        </div>
      </div>

      <div className="row about-title-responsive">
        {/* <div className="line-center" /> */}

        <div className="col col-d-6 col-t-6 col-m-12 border-line-v contact-section">
          <div className="info-list info-list-contact">
            <ul>
              <li>
                <strong>Address</strong> Tehran, Iran
              </li>
              <li>
              <strong>Phone</strong> (+98)9127862917
              </li>
              <li>
              <strong>Email</strong> Pedramaghaii@gmail.com

              </li>
              <li>
                <strong>Freelance</strong> Available
              </li>
            </ul>
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <br />
      <br />
      <div className="content">
        <div className="title">
          <div className="first-word-wrapper">
            <div className="first-word">Contact</div> <div> Form </div>
          </div>
        </div>
      </div>
      <div className="contact-wrapper" style={{ }}>
          <div className='contact-name'>

          <input className="contact-input" placeholder='Full Name' />
          </div>
          <div className='contact-email'>

          <input className="contact-input" placeholder='Email Address' />
          </div>
  
          <div className='contact-message' >
          <textarea className="contact-textarea" placeholder='Your Message' />
          </div>
      </div>
<div>
    <button className='contact-btn' disabled={true}>
        SEND MESSAGE
    </button>
</div>
    </div>
  </div>
  </Card>
  )
}

export default Contact