import Link from "next/link";
import classes from "./post-item.module.css"
import Image from "next/image";

const PostItem = (props) => {
    const { title, image, excerpt, date, slug } = props.post;
    const path = `/posts/${slug}`
    const imagePath = `/assets/posts/${(image)}`
    const formatted = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    // href={"/posts/[slug]"}
    return <li className={classes.post}>
        <Link href={path} passHref>
            <a>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={300} height={200} layout={"responsive"} priority />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formatted}</time>
                    <p>{excerpt}</p>
                </div>
            </a>

        </Link>
    </li>
}
export default PostItem