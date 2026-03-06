import { useState } from 'react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Remote Interview Platform',
      shortName: 'Virtual interview system with video calls, screen sharing, and coding tests.',
      description: 'A web-based solution that enables employers and candidates to conduct interviews virtually, without the need for physical presence.The platform integrates real-time video/audio calls, screen sharing, recording, and coding assessments to streamline the hiring process.It eliminates travel costs, increases efficiency, and supports collaborative decision-making by allowing multiple interviewers to participate or review recorded sessions..',
      images: ['/rip1.jpeg', '/rip2.jpeg', '/rip3.jpeg', '/rip4.jpeg']
    },
    {
      id: 2,
      title: 'EasyMeet',
      shortName: 'Automated meeting scheduler with calendar integration and conflict prevention.',
      description: 'An innovative scheduling solution designed to eliminate the challenges of organizing and booking meetings. The platform automatesscheduling, avoids double-booking, and integrates with third-party calendars like Google Calendar to improve productivity and time management.',
      images: ['/ey1.jpeg', '/ey2.jpeg', '/ey3.jpeg', '/ey4.jpeg']
    },
   
    {
      id: 3,
      title: 'WAKEANDBAKE',
      shortName: 'Responsive website for a cake business showcasing products and customer details.',
      description: 'Developed a responsive and user-friendly website for a home-based cake business. The site showcases products, blogs, customer reviews, and contact details, enabling better customer engagement and online presence.',
      link: 'https://hilarious-sfogliatella-eab007.netlify.app/'
    },
    {
      id: 4,
      title: 'Quiz Application Microservices',
      shortName: 'Spring Boot–based quiz app built using scalable microservices and REST APIs.',
      description: 'Developing a scalable application using Spring Boot Microservices architecture, with REST APIs, service discovery, and database integration. Focus on modular design and inter-service communication.',
      link: 'https://github.com/Sahil2078?tab=repositories'
    }
  ];

  const displayedProjects = viewAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>

      {selectedProject ? (
        <div className="project-detail">
          <button className="back-btn" onClick={() => setSelectedProject(null)}>← Back</button>
          <h3>{projects[selectedProject - 1].title}</h3>
          <p>{projects[selectedProject - 1].description}</p>
          
          {projects[selectedProject - 1].images && (
            <div className="project-images">
              {projects[selectedProject - 1].images.map((img, idx) => (
                <img key={idx} src={img} alt={`${projects[selectedProject - 1].title} ${idx + 1}`} />
              ))}
            </div>
          )}

          {projects[selectedProject - 1].link && (
            <div className="project-link">
              <a href={projects[selectedProject - 1].link} target="_blank" rel="noopener noreferrer" className="visit-btn">
                Visit Project →
              </a>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="project-grid">
            {displayedProjects.map((project) => (
              <div 
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project.id)}
              >
                <h3>{project.title}</h3>
                <p>{project.shortName}</p>
              </div>
            ))}
          </div>

          {!viewAll && (
            <button className="primary-btn" onClick={() => setViewAll(true)}>View All Projects</button>
          )}
          {viewAll && (
            <button className="primary-btn" onClick={() => setViewAll(false)}>Show Less</button>
          )}
        </>
      )}
    </section>
  );
}

export default Projects;
