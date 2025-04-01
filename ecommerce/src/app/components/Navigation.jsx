import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { FaTrademark } from "react-icons/fa";
export default function Navigation(){
    return(

        <section className="w-full fixed h-10 mt-0 bg-gray-100" id="header">
            <div className="left-nav flex flex-ro justify-between ml-5 mr-5 pt-2">
                <div>
                    <FaTrademark/>
                </div>
                <div className="middle-nav">
                    <input 
                    type="text" 
                    placeholder="searching for"
                    className="w-100 pl-3 border shadow-2*1 rounded-full"

                    />

                </div>
                <div className="right-nav flex flex-row justify-between ">
                    <ul className="list-none text-gray-500 flex flex-row justify-between mr-5">
                        <li className="mr-4"><Link href={"#"}>home</Link></li>
                        <li className="mr-4"><Link href={"#"}>product</Link></li>
                        <li className="mr-4"><Link href={"#"}>blog</Link></li>
                        <li className="mr-4"><Link href={"#"}>shop</Link></li>
                        <li className="mr-4"><Link href={"#"}>about</Link></li>
                        <li className="mr-4"><Link href={"#"}>contact</Link></li>
                        <li className="mr-4 pt-1"><Link href={"#"}><CiShoppingCart/></Link></li>
                    </ul>
                    <div>
                        <button className="w-15 bg-blue-400 rounded">signIn</button>
                    </div>
                </div>

            </div>
        </section>

    )
}