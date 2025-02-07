import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <header className="text-center my-6">
        <h1 className="text-4xl font-bold">Pruthviraj Butiya</h1>
        <p className="text-lg text-gray-400">Software Engineer | AI & ML Enthusiast</p>
      </header>

      <section className="max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-300">
          I am a passionate software engineer with expertise in **backend development, AI, and cloud computing**. 
          With a strong foundation in **Python, Java, and modern web technologies**, I enjoy building scalable applications that solve real-world problems.
        </p>
      </section>

      <section className="max-w-3xl text-center mt-8">
        <h2 className="text-2xl font-semibold mb-3">Technical Skills</h2>
        <p className="text-gray-300">
          **Languages:** Python, Java, JavaScript, C++, C#, TypeScript, SQL, Scala <br/>
          **Frameworks:** Django, React, Node.js, Spring Boot, FastAPI <br/>
          **Databases:** PostgreSQL, MySQL, MongoDB, NoSQL <br/>
          **Cloud & Tools:** AWS, Docker, Kubernetes, Jenkins, Git
        </p>
      </section>

      <section className="max-w-3xl text-center mt-8">
        <h2 className="text-2xl font-semibold mb-3">Experience</h2>
        <ul className="text-gray-300 text-left">
          <li><strong>Software Developer</strong> - Saint Louis University (May 2023 – Dec 2024)</li>
          <li><strong>Full Stack Engineer</strong> - Param Carbon Papers (March 2019 – May 2023)</li>
          <li><strong>Web Developer</strong> - Brainybeam Technologies (Oct 2018 – March 2019)</li>
        </ul>
      </section>

      <section className="max-w-3xl text-center mt-8">
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>
        <ul className="text-gray-300 text-left">
          <li><strong>FaceNet</strong>: Real-time face recognition using OpenCV, PostgreSQL, and RabbitMQ.</li>
          <li><strong>TaskEase</strong>: Task Management App with Spring Boot, React, and AWS.</li>
          <li><strong>Sensurround</strong>: AI-powered Android app for visually impaired users.</li>
        </ul>
      </section>

      <footer className="flex gap-4 mt-10">
        <a href="https://github.com/pruthvirajbutiya" className="text-2xl text-gray-400 hover:text-white"><FaGithub /></a>
        <a href="https://linkedin.com/in/pruthvirajbutiya" className="text-2xl text-gray-400 hover:text-white"><FaLinkedin /></a>
        <a href="mailto:butiyapruthviraj@gmail.com" className="text-2xl text-gray-400 hover:text-white"><FaEnvelope /></a>
      </footer>
    </div>
  );
};

export default Portfolio;
