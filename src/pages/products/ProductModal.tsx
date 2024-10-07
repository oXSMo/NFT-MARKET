import Modal from "../../components/Modal";
import { openModal, productSlice } from "../../store/useStore";

function ProductModal() {
  const { setOpenBid, openBid } = openModal();
  const { addOrder } = productSlice();


  return (
    <Modal
      open={openBid}
      onClose={setOpenBid}
      className="w-[420px] bg-clip-padding backdrop-filter mx-1  backdrop-blur-sm rounded-3xl  bg-opacity-80 bg-black border border-white/10 p-6"
    >
      <h1 className="text-center sm:text-2xl text-xl mb-6">Place Your Bid</h1>

      {/* USERNAME INPUT  */}

      <article className="my-1.5">
        <h1 className=" ml-1 text-sm">Username</h1>
        <input
          type="text"
          onChange={(e)=>{addOrder(e.target.value,"username")}}
          className="outline-none w-full bg- mb-2 mt-1 rounded-sm text-black py-0.5 px-3 placeholder:text-black/40"
          placeholder="username"
        />
      </article>

      {/* EMAIL INPUT  */}

      <article className="my-1.5">
        <h1 className=" ml-1 text-sm">Email</h1>
        <input
          type="text" onChange={(e)=>{addOrder(e.target.value,"email")}}
          className="outline-none w-full bg- mb-2 mt-1 rounded-sm text-black py-0.5 px-3 placeholder:text-black/40"
          placeholder="your@email.com"
        />
      </article>

      {/* THE BID AMOUNT  */}
      <article className="my-1.5">
        <h1 className=" ml-1 text-sm">Your Bid</h1>
        <input
          type="text" onChange={(e)=>{addOrder(e.target.value,"amount")}}
          className="outline-none w-full bg- mb-2 mt-1 rounded-sm text-black py-0.5 px-3 placeholder:text-black/40"
          placeholder="your best bid"
        />
      </article>

      <button className=" px-4 py-2 mt-3 rounded-md text-sm tracking-wide font-black button-gradient   hover:scale-105  ">
        Submit Bid
      </button>
    </Modal>
  );
} 

type t = { open: boolean; setopen: (t: boolean) => void };

export default ProductModal;
