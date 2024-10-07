import { useState } from "react";
import { TNft } from "../../data/nfts";
import { FaEthereum, FaHeart, FaRegHeart } from "react-icons/fa";
import { BsHammer } from "react-icons/bs";
import { openModal, productSlice } from "../../store/useStore";

function Product({ img, likes, price, sale, title }: TNft) {
  const [heart, setheart] = useState(sale);
  const { setOpenBid } = openModal();
  const { addOrder } = productSlice();

  return (
    <article className="rounded-md card relative overflow-hidden border border-white/20 bg-white/5  bg-clip-padding backdrop-filter backdrop-blur-md  ">
      {/* PLACE A BID  */}
      <button
        className="absolute place-a-bid translate-x-1/2 translate-y-1/2  z-20   right-1/2 bottom-[45%]  bg-white opacity-0  !duration-500 sm:scale-100 scale-90
        rounded-md text-[16px] font-serif font-thin button-gradient px-4 py-2 text-nowrap items-center flex gap-1   sm:hover:scale-105 hover:opacity-100 hover:bottom-1/2
      "
        onClick={() => {
          setOpenBid(true);
          addOrder(title, "product");
        }}
      >
        <BsHammer />
        PLACE A BID
      </button>
      <img src={img} className="object-cover" />
      <h1 className=" sm:text-[15px] text-sm ml-3 my-6  line-clamp-1 white">
        {title}
      </h1>
      <aside className="flex justify-between px-2 sm:text-sm text-[11px] items-center mb-6">
        <h2 className="flex gap-0.5 text-secondary items-center font-black  ">
          <FaEthereum /> {price} ETH
        </h2>
        <h3
          onClick={() => {
            setheart(!heart);
          }}
          className="flex gap-2.5 items-center text-gray-400 cursor-pointer"
        >
          {!heart ? (
            <FaRegHeart className="" />
          ) : (
            <FaHeart className="text-red-500" />
          )}
          {heart ? likes + 1 : likes}{" "}
        </h3>
      </aside>
    </article>
  );
}

export default Product;
