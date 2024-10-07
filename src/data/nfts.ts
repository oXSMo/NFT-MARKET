export const nfts: TNft[] = [
  {
    img: "https://i.ibb.co/QQnKzsz/nft1.jpg",
    title: "Deep Sea Phantasy",
    price: 20.5,
    likes: 22,
    sale: true,
  },
  {
    img: "https://i.ibb.co/DVJSQKF/nft2.jpg",
    title: "CyberPrimal 042 LAN",
    price: 40.5,
    likes: 220,
    sale: false,
  },
  {
    img: "https://i.ibb.co/qkKj83C/nft3.jpg",
    title: "Crypto Egg Stamp",
    price: 10.5,
    likes: 122,
    sale: false,
  },
  {
    img: "https://i.ibb.co/T4rbC0F/nft8.jpg",
    title: "Color Abstract Painting",
    price: 4.3,
    likes: 54,
    sale: false,
  },
  {
    img: "https://i.ibb.co/k43TmVs/nft4.jpg",
    title: "Liquid Forest Princess",
    price: 2.9,
    likes: 99,
    sale: false,
  },
  {
    img: "https://i.ibb.co/2sMDLCN/nft5.jpg",
    title: "Spider Eyes Modern Art",
    price: 7.7,
    likes: 73,
    sale: false,
  },
  {
    img: "https://i.ibb.co/vjYJ6wv/nft6.jpg",
    title: "Synthwave Painting",
    price: 3.4,
    likes: 43,
    sale: false,
  },
  {
    img: "https://i.ibb.co/ZY82svP/nft7.jpg",
    title: "Contemporary Abstract",
    price: 30.2,
    likes: 91,
    sale: false,
  },
];

export interface TNft {
  img: string;
  title: string;
  price: number;
  likes: number;
  sale: boolean;
  i?: number;
}
