import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Intro = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        Hi, I’m Ibrahim Ademola Raheem 👋
      </motion.h2>
      <p className="text-lg mb-6">Frontend Developer | React | TypeScript</p>
      <div className="flex gap-4">
        <a href="#projects">
          <Button>View My Work</Button>
        </a>
        <a href="/resume.pdf" download="Raheem_Resume.pdf">
          <Button variant="outline" className="text-gray-900">Download Resume</Button>
        </a>
        
      </div>
    </section>
  );
};

export default Intro;
