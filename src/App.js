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
    <div class="parent">
      <Header setPage={setPage} /> 
      { page === 'home' && <HomePage />}
      { page === 'about' && <AboutPage />}
      { page === 'projects' && <ProjectsPage />}
      { page === 'blog' && <BlogPage />}
      { page === 'contacts' && <ContactPage />}
      <Footer />
    </div>
  );
}

export default App;
