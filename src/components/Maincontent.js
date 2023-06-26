import Armada from "./Armada";
import Pesantiket from "./Pesantiket";
import Promosi from "./Promosi";
import pesantiket1 from './../assets/pesantiket1.jpg';
import pesantiket2 from './../assets/pesantiket2.jpg';
import pesantiket3 from './../assets/pesantiket3.webp';
import pesantiket4 from './../assets/pesantiket4.jpg';
import promosi1 from './../assets/promosi1.webp';
import promosi2 from './../assets/promosi2.png';
import promosi3 from './../assets/promosi3.webp';
import promosi4 from './../assets/promosi4.jpg';

const Maincontent = ()=>{
    return(
        <div>
        <Armada />
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center my-5">
                    <h1>Pemesanan Tiket</h1>
                </div>
                <div className="col-lg-4 col-12">
                    <Pesantiket image={pesantiket1} tiket="Pesawat" deskripsi="Pesan tiket pesawat disini"/>
                </div>
                <div className="col-lg-4 col-12">
                    <Pesantiket image={pesantiket2} tiket="Bus" deskripsi="Pesan tiket bus disini"/>
                </div>
                <div className="col-lg-4 col-12">
                    <Pesantiket image={pesantiket3} tiket="Kereta Api" deskripsi="Pesan tiket kereta api disini"/>
                </div>
                <div className="col-lg-4 my-5 col-12">
                    <Pesantiket image={pesantiket4} tiket="Travel" deskripsi="Pesan tiket travel disini"/>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 text-center my-5">
                    <h1> Promosi </h1>
                </div>
                <div className="col-12 my-3">
                    <Promosi image={promosi1} description="Mendapatkan potongan diskon hingga 80% pada pembelian pertama pada aplikasi ini"/>
                </div>
                <div className="col-12 my-3">
                    <Promosi image={promosi2} description="Jaminan uang kembali jika menjumpai masalah dalam pemesanan tiket"/>
                </div>
                <div className="col-12 my-3">
                    <Promosi image={promosi3} description="Akses pembatalan tiket tanpa adanya denda dan cara pembatalan tiket yang mudah"/>
                </div>
                <div className="col-12 my-3">
                    <Promosi image={promosi4} description="Layanan customer service yang siap membantu anda dalam menyelesaikan masalah my-3"/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Maincontent;