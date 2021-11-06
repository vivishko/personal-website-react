import { About } from '../components/about/About';
import { Works } from '../components/works/Works';
import { Resume } from '../components/resume/Resume';
import { Blog } from '../components/blog/Blog'; 

export function HomePage({setPage}) {
  return ( 
      <div class="main">
        <About setPage={setPage}/>
        <Works setPage={setPage}/>
        <Resume setPage={setPage}/>
        <Blog setPage={setPage}/>
      </div>  
  )
}