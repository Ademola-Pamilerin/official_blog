import PostContent from "../../component/post_detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/post-util";
import Head from 'next/head'


const DeatilEvent = (props) => {

    return <>
        <Head>
            <title>{props.posts.title}</title>
        </Head>
        <PostContent posts={props.posts} />
    </>

}
export const getStaticProps = (context) => {
    const { slug } = context.params
    const postData = getPostData(slug)
    return {
        props: {
            posts: postData
        },
        revalidate: 600
    }
}

export const getStaticPaths = () => {
    const allFeaturedPosts = getPostsFiles()
    const paths = allFeaturedPosts.map(el => ({ params: { slug: el.replace(/\.md$/, "") } }))
    return {
        paths: paths,
        fallback: false
    }
}

export default DeatilEvent;