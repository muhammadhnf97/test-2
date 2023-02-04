import {BsCheckLg} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'

export default function Pricing(){
    return(
        <section id='pricing' className='w-full h-fit'>
            <div className='md:max-w-7xl md:mx-auto'>
                <h2 className='text-lg font-semibold text-[#5a52e7] md:text-4xl '>Pilih Paket Layanan</h2>
                <div className='w-full flex flex-col p-5 space-y-8 md:flex-row md:space-y-0 md:p-10'>
                    <div className='max-w-[21rem] h-fit mx-auto hover:shadow-lg duration-150 border border-[#6c63ff] rounded-lg p-5 text-left space-y-2 hover:border-[#5a52e7] hover:bg-[#dfddff]  hover:translate-y-2 hover:scale-105  md:text-lg'>
                        <h3 className='text-center font-semibold text-2xl text-[#6C63FF] md:text-3xl'>Tier 1 / BASIC</h3>
                        <p className='text-sm text-center italic font-semibold'>Ideal untuk Pemula</p>
                        <p className=' pb-5 text-4xl text-center font-semibold text-[#3e38a1]'>Rp. 499.000</p>
                        <button className='bg-[#6C63FF] hover:bg-[#5049d3] duration-100 px-10 py-4 w-full rounded-lg shadow-xl text-white font-semibold text-xl'>Tambah ke cart</button>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Mencatat barang masuk</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Mencatat barang keluar</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Mencatat Keuntungan</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RxCross2 className='text-red-600 w-5'/><p className='flex-1'>Dapat menganalisa hasil penjualan dengan CHART</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RxCross2 className='text-red-600 w-5'/><span className='flex-1'>Support 7x24 Jam</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RxCross2 className='text-red-600 w-5'/><span className='flex-1'>Export data ke Excel</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RxCross2 className='text-red-600 w-5'/><span className='flex-1'>AI Prediksi penghasilan</span>
                        </div>
                    </div>
                    <div className='max-w-[21rem] h-fit mx-auto hover:shadow-lg duration-150 border border-[#6c63ff] rounded-lg p-5 text-left space-y-2 hover:border-[#5a52e7] hover:bg-[#dfddff]  hover:translate-y-2 hover:scale-105 relative md:text-lg'>
                        <div className='flex flex-col absolute -top-3 -left-3 w-fit justify-center text-center items-center bg-red-50 border-red-800 border-2 rounded-2xl p-1 md:-top-9 md:-left-9'>
                            <img src='./images/best-seller.png' alt='best-seller' className='w-12' />
                            <p className='text-red-500 text-base'>Best Seller</p>
                        </div>
                        <h3 className='text-center font-semibold text-2xl text-[#6C63FF] md:text-3xl'>Tier 2 / Business</h3>
                        <p className='text-sm text-center italic font-semibold'>Untuk bisnis menengah</p>
                        <p className=' pb-5 text-4xl text-center font-semibold text-[#3e38a1]'>Rp. 999.000</p>
                        <button className='bg-[#6C63FF] hover:bg-[#5049d3] duration-100 px-10 py-4 w-full rounded-lg shadow-xl text-white font-semibold text-xl'>Tambah ke cart</button>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Mencatat barang masuk</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Mencatat barang keluar</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Mencatat Keuntungan</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><p className='flex-1'>Dapat menganalisa hasil penjualan dengan CHART</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Support 7x24 Jam</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RxCross2 className='text-red-600 w-5'/><span className='flex-1'>Export data ke Excel</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RxCross2 className='text-red-600 w-5'/><span className='flex-1'>AI Prediksi penghasilan</span>
                        </div>
                    </div>
                    <div className='max-w-[21rem] h-fit mx-auto hover:shadow-lg duration-150 border border-[#6c63ff] rounded-lg p-5 text-left space-y-2 hover:border-[#5a52e7] hover:bg-[#dfddff]  hover:translate-y-2 hover:scale-105 md:text-lg'>
                        <h3 className='text-center font-semibold text-2xl text-[#6C63FF] md:text-3xl'>Tier 3 / Entrepreneur</h3>
                        <p className='text-sm text-center italic font-semibold'>Untuk bisnis besar</p>
                        <p className=' pb-5 text-4xl text-center font-semibold text-[#3e38a1]'>Rp. 1.499.000</p>
                        <button className='bg-[#6C63FF] hover:bg-[#5049d3] duration-100 px-10 py-4 w-full rounded-lg shadow-xl text-white font-semibold text-xl'>Tambah ke cart</button>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Mencatat barang masuk</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Mencatat barang keluar</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Mencatat Keuntungan</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><p className='flex-1'>Dapat menganalisa hasil penjualan dengan CHART</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Support 7x24 Jam</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>Export data ke Excel</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <BsCheckLg className='text-green-600 w-5'/><span className='flex-1'>AI Prediksi penghasilan</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}