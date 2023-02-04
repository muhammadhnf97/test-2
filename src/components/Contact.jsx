export default function Contact(){
    return(
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
    )
}