export default function About(){
    return(
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
    )
}