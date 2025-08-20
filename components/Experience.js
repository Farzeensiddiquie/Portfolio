'use client'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "./TitleHeader";
gsap.registerPlugin(ScrollTrigger);
const expCards = [
  {
   logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "August 2024 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "December 2024 - July 2025",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
   logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "August 2025 - Present",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="relative items center flex justify-center mt-20 md:mt-40 px-5 pt-10 pb-30 md:px-10 xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="flex  justify-center w-full h-full z-10" >
        <div className="mt-32 pt-10 relative">
          <div className="relative z-30 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div
                key={card.title}
                className="flex  flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-center"
              >
           

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    {/* Timeline line */}
                    <div className="absolute top-0 xl:left-[14rem] md:left-[2.2vw] left-5 h-full flex justify-center">
                      <div className="timeline absolute z-30 h-[110%] -top-10 w-14 md:w-28 " />
                      <div className="w-[2px] h-full bg-[linear-gradient(0deg,rgba(69,222,196,0)_0%,#62e0ff_25%,#52aeff_37.51%,#fd5c79_62.83%,#6d45ce_92.91%)]" />
                    </div>

                    {/* Experience Text */}
                    <div className="expText flex xl:gap-25 md:gap-10 gap-5 relative z-20">
                      <div className="md:size-15 p-3 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-6 border border-black/50 bg-black/80">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-white text-3xl">{card.title}</h1>
                        <p className="my-5 text-white/50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#14827ec1] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white/70">
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
export default Experience;