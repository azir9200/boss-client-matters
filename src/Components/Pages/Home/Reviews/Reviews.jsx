import { useEffect } from "react";
import { useState } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])


  return (
    <div>


      <h3 className="text-center font-semibold text-2xl mt-12 border-b-8 border-black w-4/12 mx-auto "> Our customer Feedbacks</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        {
          reviews.map(review => <SwiperSlide
            key={review._id} >

            <div className=" flex flex-col items-center border shadow-xl rounded-xl p-8" >
              <p className="text-center">{review.details} </p>
              <h3 className="text-2xl">{review.name}</h3>



              <Rating
                className=' flex justify-center items-center '
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />


            </div>
          </SwiperSlide>)
        }

      </Swiper>

    </div>
  );
};

export default Reviews;