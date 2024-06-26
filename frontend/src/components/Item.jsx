import React from "react"
import { Link } from "react-router-dom"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Item = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    })
    return (
        <div className="w-64 text-center bg-white rounded-2xl mb-8 shadow-xl pb-4 hover:drop-shadow-2xl transition-all ease-in-out duration-500" data-aos="fade-up" data-aos-delay={props.delay}>
            <Link to={`/san-pham/${props.id}`} onClick={window.scrollTo(0, 0)} className="hover:text-[#02c4c1] transition-all ease-in duration-200 "><img src={`${process.env.REACT_APP_URL_API}/products/${props.id}/${props.thumbnail}`} alt="nothing" className="rounded-tr-2xl rounded-tl-2xl" /></Link>
            <p className="pt-2"><Link to={`/san-pham/${props.id}`} className="hover:text-[#02c4c1] transition-all ease-in duration-200 font-medium block lowercase first-letter:uppercase min-h-12">{props.name}</Link></p>
            <p className="font-semibold py-2 cursor-default">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price)}</p>
            <div className="flex justify-center gap-2 text-xs">
                <button className="px-1.5 py-0.5 bg-red-400 rounded-md text-white">35cm</button>
                <button className="px-1.5 py-0.5 border-[1px] border-red-500 rounded-md text-black hover:bg-red-400 hover:text-white transition-all ease-in duration-200">45cm</button>
                <button className="px-1.5 py-0.5 border-[1px] border-red-500 rounded-md text-black hover:bg-red-400 hover:text-white transition-all ease-in duration-200">55cm</button>
            </div>
        </div>
    )
}
export default Item