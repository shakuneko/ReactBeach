import NavBarHome from "./NavBarHome";
import NavBar2 from "./NavBar_2";

import { Link } from "react-router-dom"

export default function Header({title}) {
   return (
      <div className="header">
        
         <NavBar2/>
         
      </div>
   );
}