import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Pagination } from "swiper/modules";
import { Navigation } from 'swiper/modules';
import { reviews } from "../../utils/reviews";
import Rating from "../../components/Rating"
import "../../index.css"

const Testimonials = () => {
  return (
    <section className="section-container px-8">
      <div className="text-center mb-12 space-y-3 mb-20">
        <h3 className="uppercase text-lg text-primary ">Testimonials</h3>
        <h2 className="capitalize text-3xl font-bold ">Our Client Reviews</h2>
      </div>

      {/* reviews carts */}
      <Swiper
      
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {reviews.map((review, index) => {
            return (
                <SwiperSlide
                    key={index}
                    style={{ background: `url(${review.coverImg})` }}
                    className="bg-no-repeat bg-cover rounded-lg"
                >
                    <div className="md:h-[480px] flex justify-center items-center mb-4">
                        <div className="relative mt-16 mb-5 bg-white rounded-xl w-full md:w-4/5 p-4">
                            <img src={review.image} alt=""  className=" absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-full p-2"/>
                            <div className="text-center mt-16 space-y-3">
                                <h3 className="text-lg font-semibold dark:text-black">
                                    {review.name}
                                </h3>
                                <p className="text-primary">Verified Customer</p>
                                <p>{review.review}</p>
                                <div className="w-full mx-auto flex items-center justify-center text-center mb-2">
                                    <Rating rating={review.rating} />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
