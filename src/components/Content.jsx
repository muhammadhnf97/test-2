import {FaMoneyBillWave} from 'react-icons/fa'
import {SiGoogleanalytics} from 'react-icons/si'
import {BiPhoneCall} from 'react-icons/bi'

export default function Content(){
    return (    
        <section id='content' className="bg-[#6C63FF] w-full h-fit text-white p-5 space-y-5 md:flex ">
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
    )
}