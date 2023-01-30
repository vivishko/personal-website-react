// import logo from './logo.svg';
import { useState } from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer'; 
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import './Styles.css'; 

function App() {
  const [page,setPage] = useState('home')
  console.log(page)
  return ( 
    <div class="parent white-background black-text">
      <Header setPage={setPage} /> 
      {/* { page === 'home' && <HomePage setPage={setPage} />}
      { page === 'about' && <AboutPage setPage={setPage} />}
      { page === 'projects' && <ProjectsPage setPage={setPage} />}
      { page === 'blog' && <BlogPage setPage={setPage} />}
      { page === 'contacts' && <ContactPage setPage={setPage} />} */}
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
