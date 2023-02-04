import {AiOutlineClose} from 'react-icons/ai'

export default function ModalNavbar ( {handleClickNavbar,handleClickModalLogin} ) {
    return (
        <>
        <button className='fixed w-full h-full bg-black bg-opacity-50'  onClick={handleClickNavbar}></button>
        <nav className='fixed right-0 w-72 h-full top-0 bg-white flex flex-col text-center space-y-2 py-5 md:hidden items-center px-10'>
            <button className="w-7 h-7 border p-1 rounded-md self-end hover:bg-gray-50 duration-100" onClick={handleClickNavbar}><AiOutlineClose  /></button>
            <a href="#about" className="w-full py-2 hover:bg-blue-300 duration-100" onClick={handleClickNavbar}>About</a>
            <a href="#pricing" className="w-full py-2 hover:bg-blue-300 duration-100" onClick={handleClickNavbar}>Pricing</a>
            <a href="#contact" className="w-full py-2 hover:bg-blue-300 duration-100" onClick={handleClickNavbar}>Contact</a>
            <button className="w-full px-2 py-1 border-2 rounded-lg border-blue-300 bg-blue-50 font-semibold duration-100 hover:border-blue-600 hover:bg-blue-100" onClick={handleClickModalLogin}>Login</button>
        </nav>
        </>
    )
}