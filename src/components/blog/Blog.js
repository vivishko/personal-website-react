import './Styles.css';
import {BlogPosts} from './BlogPost';

export function Blog({setPage}) {
    return(
        <div class="blog">
          <BlogPosts />
        </div>
    )
}