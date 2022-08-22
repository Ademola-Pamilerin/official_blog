import PostItem from "./post-item"
import classes from './posts-grid.module.css'

const PostGrid = props => {
    const { items } = props
    return <ul className={classes.grid}>
        {items.map((el, index) => <PostItem key={index} post={el} />)}
    </ul>
}
export default PostGrid