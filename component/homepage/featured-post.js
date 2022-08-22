import PostGrid from "../posts/post-grid"
import classes from './featured-posts.module.css'


const FeaturedPost = (props) => {
    return <section className={classes.latest}>
        <h2>Featured Post</h2>
        <PostGrid items={props.posts} />
    </section>
}

export default FeaturedPost