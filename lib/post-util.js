// import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'


const postDir = path.join(process.cwd(), "posts");



export const getPostsFiles = () => {
    return fs.readdirSync(postDir);
}

export const getPostData = (fileIdentifier) => {
    const postSlug = fileIdentifier.replace(/\.md$/, "");
    const contentVal = fs.readFileSync(path.join(postDir, `${postSlug}.md`), "utf-8")
    const { data, content } = matter(contentVal)
    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData
}


export const getAllPost = () => {
    const postFiles = getPostsFiles()
    const allPost = postFiles.map(post => getPostData(post))
    const sortedPost = allPost.sort((a, b) => a.date > b.data ? -1 : 1)
    return sortedPost
}

export const getFeturedPost = () => {
    const allPosts = getAllPost()
    const filteredPost = allPosts.filter(posts => posts.isFeatured === true)
    return filteredPost
}

const getSinglePost = () => {

}