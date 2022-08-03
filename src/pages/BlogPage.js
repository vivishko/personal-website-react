import { Blog } from '../components/blog/Blog';

export function BlogPage({setPage}) {
  return (
    <div class="main"> 
      <Blog setPage={setPage}/>
    </div>
    )
}