import Image from 'next/image'
import classes from './hero.module.css'
const HeroPage = (props) => {
    return (<section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/assets/site/page.jpg" alt="Ademola Ade-akanfe" width={300} height={300} />
        </div>
        <h1>I&apos; m Ade-akanfe Ademola Pamilerin</h1>
        <p>
            This is my official Blog, created using Nextjs official React js FrameWork
        </p>
    </section>)
}
export default HeroPage
