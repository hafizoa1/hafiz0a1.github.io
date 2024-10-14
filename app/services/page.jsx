"use client"; 

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link"
import { motion } from "framer-motion";

const services = [
  {
    num: "01", 
    title: "Backend Development",
    description: "Building robust backend systems using Java and Spring Boot, with a focus on scalable APIs and microservices.",
    href: ""
  },
  {
    num: "02", 
    title: "API Development",
    description: "Designing and developing RESTful APIs, enabling seamless communication between applications with technologies like Java and Python.",
    href: ""
  },
  {
    num: "03", 
    title: "Database Management",
    description: "Working with relational databases such as PostgreSQL, and ensuring efficient data storage and retrieval with Liquibase migrations.",
    href: ""
  },
  {
    num: "04", 
    title: "Cloud Integration & Deployment",
    description: "Deploying applications using containerization and exposing services to cloud environments with modern tools.",
    href: ""
  },
  {
    num: "05", 
    title: "Test-Driven Development (TDD)",
    description: "Ensuring high-quality code by writing unit tests using frameworks like JUnit and Mockito for backend services.",
    href: ""
  }
]



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"> 
      <div className="container mx-auto">
       <motion.div initial={{opacity:0}} animate={{opacity: 1, transition: {delay: 2.4,
      duration: 0.4, ease:"easeIn"}, 
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
          {services.map((service, index) => {
            return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline
                text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex
                jusrify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* title */}
              <h2 className = "text-[42px] font-bold leadig-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* description */}
              <p className="tetx-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
            );
          })}
       </motion.div>
      </div>
    </section>
  )
}

export default Services