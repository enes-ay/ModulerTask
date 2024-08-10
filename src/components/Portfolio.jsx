import React, { useState, useEffect } from 'react';
import img_project1 from "../assets/images/project-1.jpg";
import img_project2 from "../assets/images/project-2.jpg";
import img_project3 from "../assets/images/project-3.jpg";

const ProjectCard = ({ image, name, description, moveX }) => {
  return (
    <div
      className="relative w-full md:w-2/3 lg:w-1/2 mx-auto mb-10 overflow-hidden shadow-lg"
      style={{
        height: '400px',
        transform: `translateX(${moveX}px)`,
        transition: 'transform 0.9s ease-out',
      }}
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-lg text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 = aşağı, -1 = yukarı

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const direction = currentScrollY > scrollY ? 1 : -1; // Aşağı kaydırma = 1, yukarı kaydırma = -1
    setScrollDirection(direction);
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const projects = [
    {
      image: img_project1,
      name: 'Project Name 1',
      description: 'Frontend Development / Digital Design',
      direction: 1, // Başlangıç yönü sağ
    },
    {
      image: img_project2,
      name: 'Project Name 2',
      description: 'Frontend Development / Digital Design',
      direction: -1, // Başlangıç yönü sol
    },
    {
      image: img_project3,
      name: 'Project Name 3',
      description: 'Frontend Development / Digital Design',
      direction: 1, // Başlangıç yönü sağ
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-dark text-light">
      <div className="container mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            description={project.description}
            moveX={Math.min(Math.max(scrollY * 0.05 * project.direction * scrollDirection, -30), 30)} // Hareket 30px ile sınırlandırılmış
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
