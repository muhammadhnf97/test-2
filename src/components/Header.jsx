import { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'

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
        {isMoreNavbar && <>
        <button className='fixed w-full h-full bg-black bg-opacity-50'  onClick={handleClickNavbar}></button>
        <nav className='fixed right-0 w-72 h-full top-0 bg-white flex flex-col text-center space-y-2 py-5 md:hidden items-center px-10'>
            <button className="w-7 h-7 border p-1 rounded-md self-end hover:bg-gray-50 duration-100" onClick={handleClickNavbar}><AiOutlineClose  /></button>
            <a href="" className="w-full py-2 hover:bg-blue-300 duration-100">About</a>
            <a href="" className="w-full py-2 hover:bg-blue-300 duration-100">Pricing</a>
            <a href="" className="w-full py-2 hover:bg-blue-300 duration-100">Contact</a>
            <button className="w-full px-2 py-1 border-2 rounded-lg border-blue-300 bg-blue-50 font-semibold duration-100 hover:border-blue-600 hover:bg-blue-100" onClick={handleClickModalLogin}>Login</button>
        </nav>
        </>}
        {isModalLogin && <>
        <button className='w-full h-full fixed top-0 left-0 bg-black z-20 bg-opacity-70' onClick={handleClickModalLogin}></button>
        <div id='modalLogin' className='w-full h-96 fixed bg-white z-30 transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:rounded-lg p-5 space-y-3 justify-center items-center flex flex-col md:w-96'>
            <RxCross1 className='border rounded-full w-7 h-7 p-1 hover:bg-[#928dff] duration-200'  onClick={handleClickModalLogin}/>
            <div className='w-full space-y-1'>
                <span className='font-semibold text-lg'>User ID</span>
                <input id='userid' name='userid' type={'text'}  className='w-full border-2 px-2 py-1 rounded-md border-[#bdbbff] focus:border-[#332dad] outline-none'></input>
            </div>
            <div className='w-full space-y-1'>
                <span className='font-semibold text-lg'>Password</span>
                <input id='password' name='password' type={'password'}  className='w-full border-2 px-2 py-1 rounded-md border-[#bdbbff] focus:border-[#332dad] outline-none'></input>
            </div>
            <div className='w-full flex justify-between items-center'>
                <button className='w-32 border px-2 py-1 rounded-md bg-[#928dff] hover:bg-[#5a52e7] duration-150 font-semibold text-white'>Login</button>
                <a href='/'><p>Lupa password ?</p></a>
            </div>
            <img src='./images/img-3.svg' alt='img-3' className='w-28' />
        </div>
        </>}
        </>
    )
}