import { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import ModalNavbar from './ModalNavbar'
import ModalLogin from './ModalLogin'

export default function Header(){
    const [isMoreNavbar, setIsMoreNavbar] = useState(false)
    const handleClickNavbar = () => {
        setIsMoreNavbar(prev=>!prev)
    }

    const [isModalLogin, setIsModalLogin] = useState(false)
    const handleClickModalLogin = () => {
        setIsModalLogin(prev=>!prev)
    }
    return (
        <>
        <nav className="w-full h-16 fixed top-0 bg-white z-10">
            <div className="flex w-full h-full justify-between px-5">
                <img src='/images/logo.svg' alt='logo' className='w-[4rem]'/>
                <button><AiOutlineMenu className='w-10 h-10  rounded-lg p-1 border hover:bg-gray-50 duration-200 md:hidden' onClick={handleClickNavbar}/></button>
                <div className="hidden h-full w-full md:flex items-center justify-end space-x-10">
                    <a href="#about" className="duration-200 text-lg hover:font-bold w-28 hover:text-[#5a52e7] hover:translate-y-2 hover:pt-[8px] text-center">About</a>
                    <a href="#pricing" className="duration-200 text-lg hover:font-bold w-28 hover:text-[#5a52e7] hover:translate-y-2 hover:pt-[8px] text-center">Pricing</a>
                    <a href="#contact" className="duration-200 text-lg hover:font-bold w-28 hover:text-[#5a52e7] hover:translate-y-2 hover:pt-[8px] text-center">Contact</a>
                    <button className="px-2 py-1 border-2 rounded-lg border-[#5a52e7] font-semibold md:text-lg md:py-2 md:px-5 md:border-2 md:hover:bg-[#efeeff] duration-300" onClick={handleClickModalLogin}>Login</button>
                </div>
            </div>
        </nav>
        {isMoreNavbar &&
        <ModalNavbar 
            handleClickNavbar={handleClickNavbar}
            handleClickModalLogin={handleClickModalLogin} />}
        {isModalLogin && 
        <ModalLogin
        handleClickModalLogin={handleClickModalLogin} />}
        </>
    )
}