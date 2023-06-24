import { Logoutbtn } from "@/components/Clients";
import Link from "next/link";
import React from "react";


const Header = () => {
    return (
        <div className="header">
            <div>
                <h2>Todo.</h2>
            </div>
            <article>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}> About</Link>
               { /*<Link href={"/login"}> Login</Link>*/}
               <Logoutbtn/>
            </article>
        </div>
    );
};

export default Header;