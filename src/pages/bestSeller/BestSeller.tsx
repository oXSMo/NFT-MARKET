import { BsChevronRight } from "react-icons/bs";
import AvatarSlider from "./AvatarSlider";

function BestSeller() {
  return (
    <section className="p-4 py-24 text-white bg2 ">
      <nav id="market" className="container max-w-6xl mx-auto overflow-hidden">
        <article className="">
          <h1 className="text-2xl md:text-3xl font-medium">
            Best Creators & Sellers
          </h1>
          <aside className="flex justify-between pt-12 items-center">
            <p className="text-gray-400 font-thin sm:text-base text-sm sm:tracking-normal tracking-tight">
              Best sellers of the week's NFTs
            </p>
            <div className="flex gap-1.5 cursor-pointer text-nowrap items-center bg-[length:250%]  bg-[0_50%] hover:bg-[100%_50%] p-2 sm:text-lg text-base duration-1000 hover:gap-4  relative bg-clip-text text-transparent  text-gradient">
              <div className="peer absolute  w-full h-full"></div>
              See More
              <BsChevronRight className="text-orange-400 " size={16} />
            </div>
          </aside>
        </article>
        <AvatarSlider />
      </nav>
    </section>
  );
}

export default BestSeller;
