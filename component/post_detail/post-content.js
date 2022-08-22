import PostHeader from "./post-header"
import classes from './post-content.module.css'
import ReactMarkDown from 'react-markdown'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
// import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const PostContent = (props) => {
    const { posts } = props
    const imagePath = `/assets/posts/${posts.image}`


    // const customRenderers = {
    //     image: ({node,...props}) => <Image />
    // }

    return <article className={classes.content}>
        <PostHeader title={posts.title} image={imagePath} />
        <ReactMarkDown components={{
            img(val) {
                return (<div className={classes.image}>
                    <Image src={val.src} alt={val.alt} height={300} width={600} />
                </div>)
            },
            code(code) {
                const { children, node, className } = code
                console.log(className)
                return <SyntaxHighlighter
                    language={className.replace("language-", "")}
                    style={atomDark}
                >{children[0]}</SyntaxHighlighter>
            },
            p({ node, children }) {
                if (node.children[0].type = "element") {
                    return <div>{children}</div>
                }
                return <p>{children}</p>
            }
        }}>{posts.content}</ReactMarkDown>
    </article>
}
export default PostContent
