// ContactForm.jsx
import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Scroll_fade from "../src/hooks/scroll_fade";
 import pic1 from '../src/assets/social-medias-icons/facebook.png'
 import pic2 from '../src/assets/social-medias-icons/instagram.png'
 import pic3 from '../src/assets/social-medias-icons/github.png'

export default function ContactUs() {
  const [state, handleSubmit] = useForm("mrbkkrae");
  const [visible1,ref1] = Scroll_fade({threshold:0.5})
  useEffect(() => {
    if (state.succeeded) {
      alert("✅ Your message has been sent successfully!");
      document.querySelector("form").reset(); 
    }
  }, [state.succeeded]);

  return (
    <>
    <div className="min-h-[100vh] mt-[300px] lg:mt-[100px]  scroll-mt-[100px]"  id="contactus">
     <h1 className=' text-6xl font-bold underline text-center  '>Contact Us</h1>
     <form
      onSubmit={handleSubmit}
      className={`max-w-md mx-auto p-6 space-y-4 shadow-lg  rounded-4xl mt-[10%] h-[500px] w-[300px]  short:w-[500px] scroll-mt-[280px] ${visible1 ?"opacity-100 scale-100" : "opacity-0 scale-50"} transition-all duration-[3s]`}
      ref={ref1}
      style={{
    background: "linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)"
  }}
    >
      <div>
        <label className="block mb-1  font-bold ">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full border px-3 py-2 rounded text-white"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label className="block mb-1 font-bold ">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full border px-3 py-2 rounded  text-white"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label className="block mb-1 font-bold">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full border px-3 py-2 rounded  text-white"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

     <button
  type="submit"
  disabled={state.submitting}
  className={`relative inline-block px-10 py-4 text-[17px] font-medium uppercase rounded-full transition-all duration-200 overflow-hidden group 
    ${state.submitting ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-black hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] active:translate-y-[-3px] active:shadow-[0_8px_15px_rgba(0,0,0,0.2)]'} cursor-pointer`}
>
  <span className="absolute inset-0 z-0 rounded-full bg-white transition-transform duration-400 scale-100 opacity-100 group-hover:scale-150 group-hover:opacity-0"></span>
  <span className="relative z-10 font-bold">{state.submitting ? 'Sending...' : 'Submit'}</span>
</button>

    </form>
     <div className='flex justify-center items-center gap-2.5 mt-2'>
                 <a href='https://www.facebook.com/profile.php?id=61577683704152'>
                 <img src={pic1} className='h-[50px] bg-amber-400 rounded-4xl' />
                 </a>
                 <a href='https://www.instagram.com/xbrocoder/'>
                   <img src={pic2} className='h-[50px] bg-amber-400 rounded-4xl'/>
                 </a>
                 <a href='https://github.com/xbroindia'>
                    <img src={pic3} className='h-[50px] bg-amber-400 rounded-4xl' />
                  </a>
                </div>
    </div>
    </>
  );
}
