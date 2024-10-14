"use client"

import { 
  FaJava, 
  FaDocker,
  FaPython, 
  FaDatabase 
} from "react-icons/fa";

import { 
  SiSpring, 
  SiCplusplus, 
  SiCsharp, 
  SiPostgresql, 
  SiLiquibase 
} from "react-icons/si";

import {Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area"

import {motion} from "framer-motion"

import { useState } from "react";






//about data 
const about = {
  title: "About me",
  description: "I am a passionate Backend Software Engineer with over 3 years of experience in designing, developing, and maintaining robust backend systems. I specialize in Java and Python, focusing on scalable API development and microservices architecture. With hands-on experience in database management, cloud deployments, and writing efficient, test-driven code, I excel at delivering high-quality software solutions. Beyond coding, I enjoy running, writing, and boxing, and I am always eager to learn and apply new technologies.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Hafiz Abdulkareem"
    }, 
    {
      fieldName: "Phone",
      fieldValue: "+44 (0)7508809952"
    }, 
    {
      fieldName: "Email",
      fieldValue: "hafiz300@outlook.com"
    }, 
    {
      fieldName: "Experience",
      fieldValue: "3+ years work experience"
    }, 
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian"
    }, 
    {
      fieldName: "Hobbies", 
      fieldValue: "running, writing, boxing"
    }
  ]
}


//experience date 
const experience = {
  icon: "",  // You can add an icon path here if needed
  title: "Backend Software Engineer | Java, Python, API Development",
  description: "Experienced in building robust and scalable backend systems, proficient in Java and Python with a strong focus on API development and microservices architecture. Skilled in database management and cloud deployments.",

  items: [
    {
      company: "THG",
      position: "Graduate Software Engineer",
      duration: "September 2023 - October 2024", 
      responsibilities: [
        "Developed and maintained backend systems using Java and Spring Boot.",
        "Worked on API design and development for microservices.",
        "Contributed to key projects like Self-Replenishment and D2C Daily Forecast.",
        "Implemented unit tests using Mockito and JUnit to ensure code quality.",
        "Engaged in debugging, testing, and supporting backend applications."
      ]
    },
    {
      company: "Silicon Grid",
      position: "Power Analyst",
      duration: "March 2023 - September 2023",
      responsibilities: [
        "Designed in-house tools using Python to streamline data processing tasks.",
        "Assisted in processing and handling requests efficiently with custom-built tools.",
        "Analyzed power system performance and optimized energy distribution.",
        "Generated reports on power usage and advised clients on optimizing energy consumption."
      ]
    },
    {
      company: "Caterpillar",
      position: "Placement Year - Engineering",
      duration: "July 2021 - July 2022",
      responsibilities: [
        "Supported engineering teams with research and analysis during the design and manufacturing process.",
        "Assisted in the development of mechanical systems, ensuring quality and compliance with industry standards.",
        "Worked closely with senior engineers to improve production workflows and efficiency.",
        "Contributed to technical documentation and reports to support project milestones."
      ]
    }
  ]
}

const skills = {
  title: "My Skills",
  description: "Experienced in backend development with a focus on building robust, scalable systems using a variety of technologies and tools. Proficient in Java, Python, API development, database management, and containerization.",

  skillsList: [
    {
      icon: <FaJava />,  // Java icon
      name: "Java"
    },
    {
      icon: <FaPython />,  
      name: "Python"
    },
    {
      icon: <SiSpring />, 
      name: "Spring Framework"
    },
    {
      icon: <SiPostgresql />,  
      name: "PostgreSQL"
    },
    {
      icon: <FaDocker />,  
      name: "Docker"
    },
    {
      icon: <SiLiquibase />,  
      name: "Liquibase"
    },
    {
      icon: <SiCplusplus />,  
      name: "C++"
    },
    {
      icon: <SiCsharp />,  
      name: "C#"
    },
    {
      icon: <FaDatabase />,  
      name: "Database Management"
    }
  ]
}



const Resume = () => {

  const [expandedItems, setExpandedItems] = useState([]);

  const handleToggle = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((i) => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };



  return (
    <motion.div initial = {{opacity:0}} animate={{opacity:1, transition: {delay:
    2.4, duration: 0.4, ease: "easeIn" }}}
    className = "min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap [60px]"
        >
          <TabsList className= "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value = "experience">Experience</TabsTrigger>
            <TabsTrigger value = "skills">Skills</TabsTrigger>
            <TabsTrigger value = "about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full"> 
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      const isExpanded = expandedItems.includes(index);
                      return (
                        <li key={index} className="bg-[#232329] h-auto py-6 px-10 rounded-xl flex flex-col justify-start items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>

                          {/* Toggle Responsibilities Button */}
                          <button
                            className="text-accent mt-4 underline hover:no-underline"
                            onClick={() => handleToggle(index)}
                          >
                            {isExpanded ? "Hide Responsibilities" : "View Responsibilities"}
                          </button>

                          {/* Responsibilities List */}
                          {isExpanded && (
                            <ul className="mt-3 text-white/70 list-disc list-inside">
                              {item.responsibilities.map((responsibility, i) => (
                                <li key={i}>{responsibility}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>




            {/* skills */}
            <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className = "flex flex-col gap-[30px] tex-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]" >
                {skills.skillsList.map((skill, index)=> {
                  return<li key ={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="=text-6xl group-hover:text-accent transition-all durattion-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    </li>
                })}
              </ul>
            </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:left-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
};

export default Resume;