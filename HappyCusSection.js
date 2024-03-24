import React from 'react'
import ts1 from '../assests/ts1.svg';
import ts2 from '../assests/ts2.svg';
import ts3 from '../assests/ts3.svg';
import star from '../assests/star.svg';
import "./HappyCusSection.css";
const HappyCusSection = () => {
  return (
    <div>
      
      <div className="container mx-auto">
      <p className="text-3xl font-semibold text-center">Trusted by Thousands of <br /> Happy Customer</p>
      <p className="text-center pb-16 pt-3">These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.</p>
      <div className="grid grid-cols-3 gap-16">
        <div className="space-y-4 px-4 py-4 border-2 border-gray-400 rounded-xl hover:border-primary">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
             
              <img src={ts1} alt="ts1" />
              <div>
                <p className="text-lg font-semibold">Viezh </p>
                <p className="text-xs text-gray-400">Warsaw</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p>4.0</p>
              
              <img src={star} alt="" />
            </div>
          </div>
          <p className="font-medium">"After browsing through countless VPN options, I stumbled upon this 
          landing page, and I'm glad I did. Right off the bat, the layout is inviting and user-friendly,
           with a perfect balance of text and visuals. The color scheme is pleasing to the eye and instills a 
           sense of trustworthiness. What really stood out to me was the emphasis on privacy and security throughout
            the page. The detailed explanations of encryption protocols and no-logs policies reassured me that my online
             activities would be protected. Additionally, the variety of server locations and connection speeds cater to 
             different user needs, whether for streaming or browsing. The pricing options are flexible and affordable, making 
             it accessible to a wide range of users. Overall, this VPN landing page impressed me with its clarity,
           transparency, and commitment to user privacy."
            .</p>
        </div>
        {/* Similarly, add the remaining two customer testimonial sections */}

        <div className="space-y-4 px-4 py-4 border-2 border-gray-400 rounded-xl hover:border-primary">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <img src={ts2} alt="ts2" />
              <div>
                <p className="text-lg font-semibold"> Robert</p>
                <p className="text-xs text-gray-400"> Poland</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p>3.5</p>
              <img src={star} alt="" />
            </div>
          </div>
          <p className="font-medium">"I had high expectations when I landed on this VPN website, 
          and I'm happy to say that it exceeded them all. The first thing that caught my eye was the stunning 
          visual design – it's modern, eye-catching, and immediately instills trust in the service. As I scrolled down,
           I was impressed by the comprehensive breakdown of features and benefits offered by the VPN. From encryption
            protocols to server speeds, everything was clearly explained, making it easy for even a non-tech-savvy person 
            to understand. The pricing plans were also transparent and competitive, offering great value for money. Overall,
             this VPN landing page sets a high standard for usability 
          and information presentation, making it a top contender in the VPN market.".</p>
        </div>

        <div className="space-y-4 px-4 py-4 border-2 border-gray-400 rounded-xl hover:border-primary">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <img src={ts3} alt="ts3" />
              <div>
                <p className="text-lg font-semibold">VeeRa</p>
                <p className="text-xs text-gray-400">India</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <p>4.5</p>
             
              <img src={star} alt="" />
            </div>
          </div>
          <p className="font-medium">
          "I recently visited this VPN landing page,
           and I must say, I was thoroughly impressed. The layout is clean and intuitive, 
           making it easy to navigate and understand the features offered. 
           The design is modern and sleek, which instantly gives off a professional vibe. What I appreciated most 
           was the detailed information provided about the VPN service, including its security features, 
           server locations, and pricing plans. Additionally, the call-to-action buttons were strategically placed, 
           making it convenient for users to sign up or learn more. Overall, a fantastic experience,
            and I wouldn't hesitate to recommend this VPN service to anyone looking for reliable online security."
          </p>
        </div>

      </div>
    </div>
  

    </div>
  )
}

export default HappyCusSection;
