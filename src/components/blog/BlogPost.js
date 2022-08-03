import './Styles.css';
import data from './blog_posts.json'
console.log(data)

export const BlogPosts = () => {
    return (
        <div className="blog-container">
            {data.posts.map((post) => {
                return (
                    <article class="blog_card">
                        <a class="blog_card-image-link" href={post.link}>
                            <img src={post.image} />
                        </a>
                        <div class="blog_card-content">
                            <a class="blog_card-content-link" href={post.link}>
                                <header class="blog_card-header">
                                    <div class="blog_card-tags">
                                        {post.tags.map((tag) => {
                                            return(
                                                <div class="blog_card-tag">{tag}</div>
                                            );
                                        })}
                                    </div>
                                    <div class="blog_card-title">{post.title}</div>
                                </header>
                                <section class="blog_card-text">
                                    <p>{post.text}</p>
                                </section>
                            </a>
                            <footer class="blog_card-meta">
                                <div class="blog_card-date">{post.datetime}</div>
                                <div class="blog_card-minutes">{post.minutes}</div>
                            </footer>
                        </div>
                    </article>
                );
            })}
        </div>
    );
  };