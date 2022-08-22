import MainHeader from "./main-navigation"

const Layout = props => {
    return <>
        <MainHeader />
        <main>{props.children}</main>
    </>
}
export default Layout