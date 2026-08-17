import { Outlet } from "react-router";
import { Navigation } from "../Components/Navigation/Navigation";


export function MainLayout(){
    return(
        <> 
        <Navigation/>
        <Outlet/>
        </>
    )
}