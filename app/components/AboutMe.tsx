import { motion } from "framer-motion";
import { fadeIn, zoomIn, staggerContainer, TypingText } from "@/utils/motion";

export default function AboutMe() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center justify-center xs:px-8 sm:px-16 pt-32 lg:flex-row lg:pt-20 lg:flex lg:px-28 xl:pt-32 max-w-[1400px] xs:pb-10 md:pb-16 lg:pb-0"
    >
      <img
        src="/about_me.png"
        alt="about me image"
        className="md:max-w-[80%] lg:max-w-[60%] pointer-events-none"
      />
      <div className="flex flex-col items-start justify-start w-full text-black gap-y-5">
        <h1 className="text-[18px] font-bold text-black mt-[30px]">
          <TypingText title="| About Me" textStyles="text-start" />
        </h1>
        <div className="flex flex-col gap-y-5">
          <motion.h1
            variants={fadeIn("right", "tween", 1, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-[24px] md:text-[30px]"
          >
            ASPIRING WEB DEVELOPER
          </motion.h1>
          <motion.p
            variants={fadeIn("right", "tween", 1.25, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            I am <span className="font-bold">Samy Hamlat</span>, 2nd year
            HETIC student with a{" "}
            <span className="font-bold">strong passion</span> for web
            development and a thirst for{" "}
            <span className="font-bold">continuous learning.</span>
          </motion.p>
          <motion.p
            variants={fadeIn("right", "tween", 1.25, 2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            As a student, I am constantly seeking out opportunities to expand my
            knowledge and hone my skills in web development. My commitment to
            quality and attention to detail ensure that the websites and
            applications I develop are always user-friendly, responsive, and
            visually appealing.
          </motion.p>
          <div className="flex flex-col-reverse items-start justify-start gap-y-5 md:gap-y-0 md:flex-row gap-x-5">
            <motion.button
              variants={fadeIn("right", "tween", 1.25, 2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="w-full md:w-[30%] lg:w-[50%] text-[12px] lg:text-[14px] border-2 border-black py-2 font-bold hover:text-[#f2f2f4] hover:bg-black hover:border-white"
            >
              <a href={"https://acrobat.adobe.com/link/file/?size=68683&uri=urn%3Aaaid%3Asc%3AUS%3A2fef63f6-a9b6-4888-8c9b-18c2b492844e&filetype=application%2Fpdf&viewer%21megaVerb=group-discover"} target={"_blank"}>DOWNLOAD CV</a>
            </motion.button>
            <motion.div variants={zoomIn(2, 2)} className="flex gap-x-2">
              <a href="https://www.linkedin.com/in/samy-hamlat-ab9220231/">
                <img src="/linkedin-logo-thin.svg" alt="fb-icon" className="w-[40px]" />
              </a>

              <a href="https://github.com/Samy951">
                <img
                  src="/github-icon.svg"
                  alt="github-icon"
                  className="w-[38px]"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
