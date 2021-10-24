import { About } from '../components/about/About';
import { Works } from '../components/works/Works';
import { Resume } from '../components/resume/Resume';
import { Blog } from '../components/blog/Blog'; 

export function HomePage() {
  return ( 
      <div class="main">
        <About />
        <Works />
        <Resume />
        <Blog />
      </div>  
  )
}