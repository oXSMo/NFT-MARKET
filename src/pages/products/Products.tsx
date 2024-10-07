import { nfts } from "../../data/nfts";
import { productSlice } from "../../store/useStore";
import Product from "./Product";

function Products() {
  const { order } = productSlice();

  console.log({ order });

  return (
    <section className="pb-24  bg1">
      <nav className="container max-w-6xl mx-auto overflow-hidden ">
        <h1 className="text-2xl text-center md:text-3xl font-medium">
          Explore Hot Products
        </h1>
        <p className="text-gray-400 md:tracking-wider  mt-12 mb-10 md:w-9/12 w-full line-clamp-2 mx-auto md:text-base text-sm text-center font-thin">
          We are a huge marketplace dedicated to connecting great artists of all
          Techwind with their fans and unique token collectors!
        </p>
        <aside className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  justify-center sm:gap-5 gap-3 px-2">
          {nfts.map((product, i) => (
            <Product {...product} i={i} />
          ))}
        </aside>
      </nav>
    </section>
  );
}

export default Products;
