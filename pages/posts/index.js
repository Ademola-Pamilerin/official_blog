import AllPost from "../../component/posts/all-post"
import { getAllPost } from "../../lib/post-util"

const AllPosts = (props) => {

    return <>
        <AllPost posts={props.posts} />
    </>
}
export const getStaticProps = () => {
    const posts = getAllPost()
    return {
        props: {
            posts
        }
    }
}
export default AllPosts