"use client";

import {Button} from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue, } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";  

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />, 
    title: "Phone", 
    description: "(+44) 07508809952"
  }, 
  {
    icon: <FaEnvelope />, 
    title: "Email", 
    description: "hafiz300@outlook.com"
  },
  {
    icon: <FaMapMarkerAlt />, 
    title: "Address", 
    description: "Manchester",
  }
]

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0}}
    animate={{
      opacity: 1, 
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className = "py-6">
      <div className="cointainer mx-auto">
        <div className="flex flex-col xl:flex-roe gap-[30px]">
          {/* form */}
          <div className="xk:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">
              Let's work together 
              </h3>
              <p className="text-white/60">
              I am open to backend roles working with microservices and api's.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First name" />
                <Input type="lastname" placeholder="Last name" />
                <Input type="email" placeholder="Email" />
                <Input type="phonen number" placeholder="Phone Number" />
              </div>
              <Textarea className="h-[200px]"
              placeholder="Type your message here"/>
              {/* btn */}
              <Button size="md" className= "max-w-40">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:ordeer-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                  return <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[62px] bg-[#27272c] text-accent rounded-md flex items-center juustify-centerr">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
              })}
            </ul>
          </div>
        </div>
      
      </div></motion.section>
  )
}

export default Contact