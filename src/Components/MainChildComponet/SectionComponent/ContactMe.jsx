import '../../../assets/Style/contactme.css';
import pic from '../../../assets/Images/transparentfrontpic.png'

import { FaTelegram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import {useState} from 'react'

function ContactMe()
{

  const [name,setName]=useState('');
  const[email, setEmail]=useState('');
  const [message,setMessage]=useState('');


  return <section className="contactme">
    <h1 className="section-title">Contact Me</h1>

    <div className="front-end-promotion">
      <p>
         Partner with me to boost your social impact - explore how my custom front-end solutions can elevate your mission
     </p>
     <img src={pic} alt="frontend development picture" />
    </div>

    <div className='form-container'>
      <form action="" onSubmit={(e)=>{
        e.preventDefault();
        if(!name){
           setName("please enter your name")
        }
        if(name==="please enter your name")
        {
          return;
        }
        if(!email)
        {
          setEmail("please Enter Your email")
        }
        if(email==="please Enter Your email")
        {
          return;
        }
        
        if(!message){
          setMessage("please enter your message")
        }
        if(message==="please enter your message")
        {
          return;
        }

        else{
          e.submit()
        }

      }}>
        <label htmlFor="fullname">Your Name</label>
        <input type="text" id="fullname" onChange={(e)=>setName(e.target.value)} value={name}/>

        <label htmlFor="email">Your email</label>
        <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} />

        <label htmlFor="message" >Your message</label>
        <textarea name="" id="message"maxlength="500" onChange={(e)=>setMessage(e.target.value)} value={message}>Leave your message here</textarea>
        <button>Send</button>
      </form>
    </div>
    
  </section>

}
export default ContactMe;