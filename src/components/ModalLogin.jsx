import {RxCross1} from 'react-icons/rx'
export default function ModalLogin ({handleClickModalLogin}) {
    return (
        <>
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
        </>
    )
}