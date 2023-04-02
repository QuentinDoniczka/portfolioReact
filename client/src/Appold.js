import React from 'react';
import './App.css';
import ProjectCard from './ProjectCard';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const projectData = [
  {
    title: 'React nodejs heroku',
    image: 'https://via.placeholder.com/300x200',
    projectLink: 'https://monprojet1.com',
    githubLink: 'https://github.com/user/monprojet1',
    demoVideoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquet nisl nunc eget nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquet nisl nunc eget nisl.',
  },
  {
    title: 'javacript vanilla PHP',
    image: 'https://via.placeholder.com/300x200',
    projectLink: 'https://monprojet1.com',
    githubLink: 'https://github.com/user/monprojet1',
    demoVideoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquet nisl nunc eget nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquet nisl nunc eget nisl.',
  },
  {
    title: 'javacript vanilla PHP',
    image: 'https://via.placeholder.com/300x200',
    projectLink: 'https://monprojet1.com',
    githubLink: 'https://github.com/user/monprojet1',
    demoVideoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquet nisl nunc eget nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquet nisl nunc eget nisl.',
  },
  {
    title: 'javacript vanilla PHP',
    image: 'https://via.placeholder.com/300x200',
    projectLink: 'https://monprojet1.com',
    githubLink: 'https://github.com/user/monprojet1',
    demoVideoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquet nisl nunc eget nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquet nisl nunc eget nisl.',
  },
  {
    title: 'javacript vanilla PHP',
    image: 'https://via.placeholder.com/300x200',
    projectLink: 'https://monprojet1.com',
    githubLink: 'https://github.com/user/monprojet1',
    demoVideoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquet nisl nunc eget nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquet nisl nunc eget nisl.',
  },
  // Ajoutez d'autres projets ici
];
function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Header />
      </header>
      <main className="d-flex flex-column flex-grow-1">
        <div className="d-flex flex-column">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="text-center" style={{ fontSize: '48px' }}>&lt;Frontend&gt;</div>
                <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                  <li>JavaScript</li>
                  <li>Reactjs</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="col-6">
                <div className="text-center" style={{ fontSize: '48px' }}>&lt;Backend&gt;</div>
                <div className="d-flex">
                  <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                    <li>Mysql-sqlite</li>
                    <li>Nodejs</li>
                    <li>PHP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mx-auto d-flex flex-column align-items-start">
            <div className="text-center" style={{ fontSize: '48px', marginRight: 'auto' }}>&lt;developeur&gt;</div>
            <div className="d-flex justify-content-center align-items-center">
              <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                <li>Mysql-sqlite</li>
                <li>Nodejs</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="d-flex justify-content-center align-items-start">
          <div className="container">
            <div className="row">
              <div className="d-flex flex-column align-items-center">
                <div class="mt-3 mb-4">Dernier projet réalisé</div>
                <ProjectCard project={projectData[0]} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;