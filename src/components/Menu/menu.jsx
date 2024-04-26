import React, { useRef } from "react";
import "./menu.css";
import Lab_list from "../My_lab/Lab_list/Lab_list";
const Menu= ({children}) =>{
    const [isOpen,setOpen]=React.useState(false);
    const menuRef = useRef(null)
    return(
        <div>
        <button onClick={()=>setOpen(!isOpen)}>
        </button>
        <nav className={`Menu $isOpen ? "active" : ""}`}ref={menuRef}>
            {children}
            <Lab_list />
            </nav>
        </div>
    )
}
export default Menu
