import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, GraduationCap, User, Download, ExternalLink } from 'lucide-react';
import alcoholismoImg from './alcoholismo.png'; 
import splitPayImg from './split-pay.png';
import bikeTrackImg from './bikeTrack.png';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'JavaScript', level: 90, color: '#f7df1e', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'  },
    { name: 'C++', level: 85, color: '#61dafb' , image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg'},
    { name: 'C', level: 60, color: '#68a063', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
    { name: 'Python', level: 75, color: '#3776ab', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'CSS/SCSS', level: 70, color: '#e831c2', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'SQL', level: 88, color: '#f05032', image: 'https://cdn-icons-png.flaticon.com/512/2772/2772165.png'},
  ];

  const projects = [
    {
      title: 'AlcoholimetroIoT',
      description: 'Este proyecto es un sistema IoT que monitorea los niveles de alcohol en tiempo real utilizando un sensor MQ-3 y envía alertas a través de Telegram cuando se supera un umbral predefinido.',
      technologies: ['C++', 'C', 'Ruby', 'Python','Java'],
      image: alcoholismoImg,
      github: 'https://github.com/alex50026/AlcoholimetroIoT',
      demo: '#'
    },
    {
      title: 'SplitPay',
      description: 'Este proyecto permite gestionar de forma sencilla los gastos compartidos entre grupos de personas, proporcionando funcionalidades de seguimiento, facturación, distribución de deudas y más.',
      technologies: ['Java', 'PLSQL'],
      image: splitPayImg ,
      github: 'https://github.com/alex50026/SplitPay',
      demo: '#'
    },
    {
      title: 'BikeTrack',
      description: 'El proyecto "BikeTrack" consiste en una aplicación móvil que funcione como red social y una aplicación de navegación para ciclistas, basándose en redes sociales actuales y modelos de navegación similares como ocurre con el caso de "waze".',
      technologies: ['Kotlin'],
      image: bikeTrackImg,
      github: 'https://github.com/ICM2530/BikeTrack',
      demo: '#'
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#111827',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(17, 24, 39, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 50,
      borderBottom: '1px solid #374151',
      padding: '1rem 0'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navMenu: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navItem: {
      cursor: 'pointer',
      transition: 'color 0.3s',
      color: '#d1d5db'
    },
    navItemActive: {
      color: '#60a5fa'
    },
    mobileMenuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      fontSize: '1.5rem'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
      padding: '2rem'
    },
    heroAvatar: {
      width: '128px',
      height: '128px',
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #60a5fa, #a855f7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '2rem'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(45deg, #60a5fa, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      marginBottom: '3rem',
      maxWidth: '600px'
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    primaryButton: {
      padding: '0.75rem 2rem',
      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
      border: 'none',
      borderRadius: '0.5rem',
      color: 'white',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'transform 0.3s, box-shadow 0.3s',
      textDecoration: 'none',
      display: 'inline-block'
    },
    secondaryButton: {
      padding: '0.75rem 2rem',
      background: 'transparent',
      border: '1px solid #6b7280',
      borderRadius: '0.5rem',
      color: 'white',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'border-color 0.3s, color 0.3s'
    },
    section: {
      padding: '5rem 1rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '4rem',
      background: 'linear-gradient(45deg, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    grid: {
      display: 'grid',
      gap: '2rem'
    },
    gridCols2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    card: {
      backgroundColor: '#1f2937',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      transition: 'transform 0.3s'
    },
    skillBar: {
      width: '100%',
      height: '12px',
      backgroundColor: '#374151',
      borderRadius: '6px',
      overflow: 'hidden',
      marginTop: '0.5rem'
    },
    projectCard: {
      backgroundColor: '#1f2937',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      transition: 'transform 0.3s'
    },
    projectImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    projectContent: {
      padding: '1.5rem'
    },
    techTag: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      color: '#60a5fa',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      margin: '0.25rem'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem'
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    input: {
      padding: '0.75rem',
      backgroundColor: '#1f2937',
      border: '1px solid #374151',
      borderRadius: '0.5rem',
      color: 'white',
      fontSize: '1rem'
    },
    textarea: {
      padding: '0.75rem',
      backgroundColor: '#1f2937',
      border: '1px solid #374151',
      borderRadius: '0.5rem',
      color: 'white',
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical'
    },
    contactInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      margin: '1rem 0'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem'
    },
    socialLink: {
      padding: '0.75rem',
      backgroundColor: '#1f2937',
      borderRadius: '0.5rem',
      color: 'white',
      textDecoration: 'none',
      transition: 'backgroundColor 0.3s'
    },
    footer: {
      padding: '2rem 1rem',
      backgroundColor: '#0f172a',
      borderTop: '1px solid #374151',
      textAlign: 'center',
      color: '#6b7280'
    },
    alternateSection: {
      backgroundColor: '#1f2937'
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>Mi Portafolio</div>
          <ul style={styles.navMenu}>
            {['home', 'about', 'skills', 'education', 'projects', 'contact'].map((section) => (
              <li
                key={section}
                style={{
                  ...styles.navItem,
                  ...(activeSection === section ? styles.navItemActive : {})
                }}
                onClick={() => scrollToSection(section)}
              >
                {section === 'home' ? 'Inicio' : 
                 section === 'about' ? 'Sobre mí' :
                 section === 'skills' ? 'Habilidades' :
                 section === 'education' ? 'Educación' :
                 section === 'projects' ? 'Proyectos' : 'Contacto'}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroAvatar}>
          <User size={60} color="white" />
        </div>
        
        <h1 style={styles.heroTitle}>Alexander Aponte Largacha</h1>
        
        <p style={styles.heroSubtitle}>
          Soy un Ingenierío apasionado por crear experiencias digitales excepcionales
        </p>
        
        <div style={styles.buttonContainer}>
          <button
            style={styles.primaryButton}
            onClick={() => scrollToSection('projects')}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Ver Proyectos
          </button>
          <button
            style={styles.secondaryButton}
            onClick={() => scrollToSection('contact')}
            onMouseOver={(e) => {
              e.target.style.borderColor = '#60a5fa';
              e.target.style.color = '#60a5fa';
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = '#6b7280';
              e.target.style.color = 'white';
            }}
          >
            Contactar
          </button>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          style={{
            position: 'absolute',
            bottom: '2rem',
            background: 'none',
            border: 'none',
            color: '#6b7280',
            cursor: 'pointer',
            animation: 'bounce 2s infinite'
          }}
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
<section id="about" style={styles.section}>
  <h2 style={styles.sectionTitle}>Sobre Mí</h2>

  <div style={{ ...styles.grid, ...styles.gridCols2, alignItems: 'center' }}>
    <div>
      <p style={{ fontSize: '1.125rem', color: '#d1d5db', marginBottom: '1.5rem' }}>
        Ingeniero de Sistemas con sólida base técnica y marcado interés en la gestión de proyectos tecnológicos. 
        Mi formación académica me ha preparado para comprender múltiples aspectos técnicos como en desarrollo de software, análisis de sistemas y metodologías ágiles, entre otras.
        Busco integrarme a un equipo donde pueda aplicar metodologías ágiles, coordinar recursos técnicos y contribuir al éxito de iniciativas tecnológicas estratégicas.
      </p>
      <p style={{ fontSize: '1.125rem', color: '#d1d5db', marginBottom: '1.5rem' }}>
        Mi pasión es resolver problemas complejos a través del código y crear interfaces de usuario intuitivas que brinden experiencias excepcionales.
      </p>

      <div>
        <a
          href={process.env.PUBLIC_URL + '/AlexanderAponteLargachaResume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
          <button
            style={{
              ...styles.primaryButton,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Download size={20} />
            Descargar CV
          </button>
        </a>
      </div>
    </div>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
            <div style={{...styles.card, textAlign: 'center'}}>
              <Code size={32} style={{color: '#60a5fa', margin: '0 auto 1rem'}} />
              <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>4+</h3>
              <p style={{color: '#6b7280'}}>Proyectos</p>
            </div>
            <div style={{...styles.card, textAlign: 'center'}}>
              <Briefcase size={32} style={{color: '#a855f7', margin: '0 auto 1rem'}} />
              <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>3+</h3>
              <p style={{color: '#6b7280'}}>Cursos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
        <section id="skills" style={{ ...styles.section, ...styles.alternateSection }}>
          <h2 style={styles.sectionTitle}>Habilidades</h2>

          <div style={{ ...styles.grid, ...styles.gridCols2 }}>
            {skills.map((skill, index) => (
              <div key={index} style={styles.card}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    style={{ width: '24px', height: '24px' }}
                  />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', margin: 0 }}>{skill.name}</h3>
                  <span style={{ color: '#6b7280', marginLeft: 'auto' }}>{skill.level}%</span>
                </div>

                <div style={styles.skillBar}>
                  <div
                    style={{
                      height: '100%',
                      backgroundColor: skill.color,
                      width: `${skill.level}%`,
                      transition: 'width 1s ease-out',
                      borderRadius: '6px'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* Education Section */}
      <section id="education" style={styles.section}>
        <h2 style={styles.sectionTitle}>Educación</h2>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <div style={styles.card}>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
              <GraduationCap size={24} style={{color: '#60a5fa', marginTop: '0.25rem'}} />
              <div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Ingeniería en Sistemas</h3>
                <p style={{color: '#60a5fa', marginBottom: '0.5rem'}}>Pontificia Univerisas Javeriana</p>
                <p style={{color: '#6b7280', marginBottom: '0.75rem'}}>2023 - 2027</p>
                <p style={{color: '#d1d5db'}}>
                  Graduado con honores. Especialización en desarrollo de software y arquitectura de sistemas.
                </p>
              </div>
            </div>
          </div>
          
          <div style={styles.card}>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
              <GraduationCap size={24} style={{color: '#a855f7', marginTop: '0.25rem'}} />
              <div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>Tecnico Automotriz</h3>
                <p style={{color: '#a855f7', marginBottom: '0.5rem'}}>Centro Don Bosco</p>
                <p style={{color: '#6b7280', marginBottom: '0.75rem'}}>2022</p>
                <p style={{color: '#d1d5db'}}>
                  Un bachiller técnico industrial enfocada en la especilidad de mecánica automotriz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{...styles.section, ...styles.alternateSection}}>
        <h2 style={styles.sectionTitle}>Proyectos</h2>

        <p style={{color: '#d1d5db', marginBottom: '3rem', maxWidth: '800px',  marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
         A lo largo de mi formación universitaria he desarrollado diversos proyectos, aquí encontrarás algunos de los más representativos. Puedes explorar más en mi perfil de GitHub.
        </p>
        
        <div style={{...styles.grid, ...styles.gridCols3}}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={styles.projectCard}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                ssrc={project.image}  
                alt={project.title}
                style={styles.projectImage}
              />
              <div style={styles.projectContent}>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem'}}>{project.title}</h3>
                <p style={{color: '#d1d5db', marginBottom: '1rem'}}>{project.description}</p>
                
                <div style={{marginBottom: '1rem'}}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{display: 'flex', gap: '1rem'}}>
                  <a
                    href={project.github}
                    style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', textDecoration: 'none'}}
                    onMouseOver={(e) => e.target.style.color = 'white'}
                    onMouseOut={(e) => e.target.style.color = '#6b7280'}
                  >
                    <Github size={20} />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', textDecoration: 'none'}}
                    onMouseOver={(e) => e.target.style.color = 'white'}
                    onMouseOut={(e) => e.target.style.color = '#6b7280'}
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contacto</h2>
        
        <div style={styles.contactGrid}>
          <div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>¡Trabajemos juntos!</h3>
            <p style={{color: '#d1d5db', marginBottom: '2rem'}}>
              Estoy siempre interesado en nuevas oportunidades y proyectos emocionantes. 
              No dudes en contactarme si quieres colaborar o simplemente charlar sobre tecnología.
            </p>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={styles.contactInfo}>
                <Mail size={24} style={{color: '#60a5fa'}} />
                <span>alexanderaponte109@gmail.com</span>
              </div>
              <div style={styles.contactInfo}>
                <Phone size={24} style={{color: '#60a5fa'}} />
                <span>+57 318 7328517</span>
              </div>
              <div style={styles.contactInfo}>
                <MapPin size={24} style={{color: '#60a5fa'}} />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
            
            <div style={styles.socialLinks}>
              <a href="https://github.com/alex50026" 
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              >
                <Github size={24} />
              </a>


              <a href="https://www.linkedin.com/in/alexander-aponte-largacha-8a3360348" 
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
              >
                <Linkedin size={24} />
              </a>


              <a href="mailto:alexanderaponte109@gmail.com" 
               style={styles.socialLink}
               >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
         <form
              action="https://formspree.io/f/xvgrbbzv"
              method="POST"
              style={styles.contactForm}
            >
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                required
                style={styles.input}
              />
              <textarea
                name="message"
                placeholder="Tu mensaje"
                required
                style={styles.textarea}
              ></textarea>

              {/* Campos ocultos opcionales */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://tusitio.com/gracias.html" />

              <button
                type="submit"
                style={styles.primaryButton}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                Enviar Mensaje
              </button>
            </form>

        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Alexander. Todos los derechos reservados.</p>
      </footer>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% {
              transform: translate3d(0,0,0);
            }
            40%, 43% {
              transform: translate3d(0,-30px,0);
            }
            70% {
              transform: translate3d(0,-15px,0);
            }
            90% {
              transform: translate3d(0,-4px,0);
            }
          }
          
          @media (max-width: 768px) {
            .nav-menu { display: none !important; }
            .mobile-menu-button { display: block !important; }
          }
        `}
      </style>
    </div>
  );
};

export default App;