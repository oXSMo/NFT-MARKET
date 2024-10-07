import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Hero() {
  return (
    <section className="mt-3 relative overflow-hidden ">
      <nav className="container max-w-screen-xl mx-auto">
        <Swiper
          className="mySwiper"
          loop={true}
          modules={[Autoplay]}
          speed={1000}
          autoplay={{
            delay: 2500,

            disableOnInteraction: false,
          }}
        >
          {[
            "https://i.ibb.co/PM8HhN8/banner1-min.png",
            "https://i.ibb.co/Ld9WTCm/banner2-min.png",
            "https://i.ibb.co/qRwbdWV/banner3-min.png",
          ].map((img) => (
            <SwiperSlide>
              <img
                src={img}
                className="rounded-md h-60 md:h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>
    </section>
  );
}

export default Hero;
