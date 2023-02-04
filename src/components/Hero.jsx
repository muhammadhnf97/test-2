export default function Hero(){
    return (
        <section id='hero' className='w-full h-fit md:space-x-10 md:mx-auto md:w-fit md:items-center md:flex md:justify-center md:px-10'>
            <img src="./images/img-1.svg" alt='img-1' className="w-72 h-72 mb-2 mx-auto md:w-[35rem] md:h-[35rem] md:mx-0 md:mb-0" />
            <div className=''>
                <p className="text-2xl md:text-3xl">Amazing employees deserve</p>
                <p className="font-bold text-4xl md:text-6xl">amazing software</p>
                <div className="w-full mt-3 space-x-2 md:mt-10">
                    <button className="w-fit bg-[#6C63FF] px-3 py-1 rounded-md text-white font-semibold hover:bg-[#5a52e7] duration-100 md:text-lg md:px-5 md:py-2">Mulai Sekarang Juga! </button>
                    <button className="w-fit bg-[#6C63FF] px-3 py-1 rounded-md text-white font-semibold hover:bg-[#5a52e7] duration-100 md:text-lg md:px-5 md:py-2">Tanya pakar </button>
                </div>
            </div>
        </section>
    )
} 