import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { UsersReview } from "./users";

function AvatarSlider() {
  return (
    <section className="w-full max-w-6xl container py-4">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="mySwiper"
      >
        {UsersReview.map(({ img, username }) => (
          <SwiperSlide className=" flex flex-col hover:bg-white/5 p-1 py-12 font-mono items-center border overflow-hidden border-white/20 rounded-md">
            <img src={img} className="rounded-full w-24 h-24" alt="" />
            <h1 className="sm:text-[22px] text-xl mt-5  line-clamp-1 text-ellipsis text-center font-light">
              {username}
            </h1>
            <h2 className=" font-thin text-white/70">calvin_cario</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default AvatarSlider;
