import Carousel from 'react-bootstrap/Carousel';
import armada1 from './../assets/armada1.jpeg';
import armada2 from './../assets/armada2.jpg';
import armada3 from './../assets/armada3.jpg';
import armada4 from './../assets/armada4.jpg';


const Armada = ()=>{
    return(
        <Carousel>
      <Carousel.Item>
            <img
            className="d-block w-100"
            src={armada1}
            alt="First slide"
            />
        <Carousel.Caption>
          <h3>Pesan Tiket Pesawat Disini</h3>
          <p>Mari Pesan Tiket Pesawat Disini dan dapatkan promo hingga 80% setiap pembelian pertama</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={armada2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Pesan Tiket Bus Disini</h3>
          <p>Mari Pesan Tiket Bus Disini dan dapatkan promo hingga 80% setiap pembelian pertama</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={armada3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Pesan Tiket Kereta Api Disini</h3>
          <p>
          Mari Pesan Tiket Kereta Api Disini dan dapatkan promo hingga 80% setiap pembelian pertama
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={armada4}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Pesan Tiket Travel Disini</h3>
          <p>
          Mari Pesan Tiket Travel Disini dan dapatkan promo hingga 80% setiap pembelian pertama
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}

export default Armada;