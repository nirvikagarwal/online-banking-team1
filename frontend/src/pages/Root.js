import { Outlet } from "react-router-dom";
import {Navbar,Footer} from "../components"

const Root = () => {
    return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
}

export default Root;