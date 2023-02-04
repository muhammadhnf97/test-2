import {FaMoneyBillWave} from 'react-icons/fa'
import {SiGoogleanalytics} from 'react-icons/si'
import {BiPhoneCall} from 'react-icons/bi'
import {BsCheckLg} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'

export default function Main(){
    return (
        <div className="w-full h-fit flex flex-col items-center justify-center text-center space-y-10">
            <section id="hero" className='w-full h-fit md:space-x-10 md:mx-auto md:w-fit md:items-center md:flex md:justify-center md:px-10'>
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
            <section id="content" className="bg-[#6C63FF] w-full h-fit text-white p-5 space-y-5 md:flex ">
                <div className='space-y-10 md:max-w-7xl md:mx-auto md:flex md:justify-center md:items-center'>
                    <div>
                        <h2 className="text-lg font-semibold italic">Kemudahan Ditangan Anda !</h2>
                        <div className="grid grid-cols-3  border-2 border-white rounded-lg text-center justify-center items-center md:gap-5">
                            <div className="flex flex-col justify-start items-center border px-2 h-full py-3 md:border-0">
                                <FaMoneyBillWave className='w-14 h-14 md:w-24 md:h-24' />
                                <p>Kelola Keuangan Anda</p>
                            </div>
                            <div className="flex flex-col justify-start items-center border px-2 h-full py-3 md:border-0">
                                <SiGoogleanalytics className='w-14 h-14 md:w-24 md:h-24' />
                                <p>Analisa Hasil Penjualan Anda</p>
                            </div>
                            <div className="flex flex-col justify-start items-center border px-2 h-full py-3 md:border-0">
                                <BiPhoneCall className='w-14 h-14 md:w-24 md:h-24' />
                                <p>Support 24 Jam</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full text-center space-y-3 flex-1'>
                        <img src='./images/img-2.svg' alt='img-2' className='w-36 mx-auto md:w-80' />
                        <p className='px-5'>Memudahkan pengelolaan data oleh karyawan agar mempermudah  pengambilan keputusan yang tepat untuk menyusun strategi perusahaan.</p>
                    </div>
                </div>
            </section>
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
            </section>
            <section id='about' className='w-full h-fit p-5 text-justify bg-[#6C63FF] text-white space-y-10'>
                <div className='md:max-w-7xl md:mx-auto md:flex md:space-x-10 md:text-lg'>
                    <section id='companyProfile' className='md:space-y-5'>
                        <h3 className='font-semibold text-lg text-center md:text-2xl'>Company Profile</h3>
                        <p>Kami merupakan perusahaan penyedia layanan, solusi dan produk inovasi teknologi informasi yang berdiri pada 2015. Kami ini berkantor pusat di Jakarta dan memiliki kantor cabang di Pekanbaru.</p>
                        <p>Berpengalaman setengah dekade, saat ini kami telah melayani 120 klien B2B di seluruh Indonesia. Seiring perkembangan perusahaan, sekarang kami tidak hanya menghadirkan layanan dan produk-produk digital tapi juga menjadi holding company yang melahirkan rintisan startup di bidang teknologi informasi.</p>
                    </section>
                    <section id='visimisi' className='space-y-3'>
                        <h3 className='font-semibold text-lg text-center md:text-2xl'>Visi</h3>
                        <p>Menjadi salah satu perusahaan pengembang teknologi terkemuka di era Society 5.0 2030</p>
                        <h3 className='font-semibold text-lg text-center md:text-2xl'>Misi</h3>
                        <p>Mengembangkan produk aplikasi yang mempunyai potensi recurring revenue. Mengembangkan produk Internet of Thing (IoT) pada sektor bisnis yang terus tumbuh. Mengembangkan kolaborasi dan sinergi dengan pelaku industri lain. Mengembangkan Sumber Daya Manusia agar memiliki kompetensi & karakter untuk berkompetisi di era Society 5.0</p>
                    </section>
                </div>
            </section>
            <section id='contact' className='w-full h-fit p-5  space-y-3 bg-slate-600 text-white'>
                <h3 className='text-lg font-semibold'>Contact Us</h3>
                <div className='text-lg md:max-w-7xl md:mx-auto md:justify-center'>
                    <div className='flex flex-col text-left justify-between items-center space-y-10 md:flex-row md:space-y-0 md:space-x-10'>
                        <div className=''>
                            <p>Phone:+62 82387565</p>
                            <p>Phone:+62 82374627 <span>Pekanbaru</span></p>
                            <p>Fax:+62 82387656565</p>
                            <p>Email:info@ERP.com</p>
                            <div className=''>
                                <p><span className='font-bold'>Head Office </span>Eco Selaras Sahid Sudirman Residence Lt. 2, Jl. Jend. Sudirman </p>
                                <p><span className='font-bold'>Pekanbaru Office </span>Jl. Jend Sudirman Gg. Mesjid No. 102 </p>
                            </div>
                        </div>
                        <p className='font-bold text-6xl px-5 py-3 border-4 rounded-full'>PT. ERP</p>
                    </div>
                </div>
            </section>
        </div>
        
    )
}