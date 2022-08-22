import classes from './all-posts.module.css';
import PostGrid from './post-grid'


const AllPost = (props) => {
    return <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostGrid items={props.posts}/>
    </section>
}
export default AllPost