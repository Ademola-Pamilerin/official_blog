import FeaturedPost from "../component/homepage/featured-post"
import HeroPage from "../component/homepage/hero"
import { getFeturedPost } from '../lib/post-util'

const Homepage = (props) => {
    return <>
        <HeroPage />
        <FeaturedPost posts={props.posts} />
    </>
} 

export const getStaticProps = () => {
    const posts = getFeturedPost()
    return {
        props: { posts }
    }
}


export default Homepage