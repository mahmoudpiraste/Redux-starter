/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SlBasket } from "react-icons/sl";


function Header () {
    return (
        <div className="nav-one">
                        <div className="logo-site"><Link href="/"><img className="logo-img" src="/Digikala.svg.png"/></Link></div>

            <div></div>
            <div className="mid-div"></div>
            <div className="basket">
                <a className="a-basket">
                <span className="span-basket"> 0 </span>
                <SlBasket style={{fontSize:25, marginRight:-5}}/>
                </a>
                </div>



        </div>
    )
}

export default Header;