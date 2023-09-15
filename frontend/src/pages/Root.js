import { Outlet } from "react-router-dom";
import {Navbar} from "../components"
import {Footer} from "../components";

const Root = () => {
    return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
}

export default Root;