import logo from './lTras.png'
import './NavBar.css'
import {React} from "react";

export const NavBar = (props)=>{
    return (<div id={'NavBar'}>
        <img height={80} alt={'Aluminium Logo'} src={logo}/>
        <h2>AlumiReddit</h2>
    </div>)
}