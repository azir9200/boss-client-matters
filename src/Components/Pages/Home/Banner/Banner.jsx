import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../../assets/home/01.jpg'
import img2 from '../../../../assets/home/02.jpg'
import img3 from '../../../../assets/home/03.png'
import img5 from '../../../../assets/home/05.png'
import img6 from '../../../../assets/home/06.png'
import img4 from '../../../../assets/home/04.jpg'




const Banner = () => {
  return (

    <div className=' '>
      <Carousel>
        <div className='h-[550px]'>
          <img src={img1} alt="image" />
        </div>
        <div>
          <img src={img2} alt="image" />
        </div>
        <div>
          <img src={img3} alt="image" />
        </div>
        <div>
          <img src={img4} alt="image" />
        </div>
        <div>
          <img src={img5} alt="image" />
        </div>
        <div>
          <img src={img6} alt="image" />
        </div>


      </Carousel>
    </div>
  );
};

export default Banner;