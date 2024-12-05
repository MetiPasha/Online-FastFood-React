import React from "react";
import ProductCard from "./productCard";

function Menu({ onAddToCart }) {
  const products = [
    {
      id: 1,
      image: "./src/img/sibzamini.png",
      name: "سیب زمینی سرخ شده ",
      description: "خوشمزه و ترد",
      price: "50,000",
    },
    {
      id: 2,
      image: "./src/img/berger clasic.png",
      name: "برگر آبدار با نان تازه",
      description: "بهترین برگر سال",
      price: "120,000",
    },
    {
      id: 3,
      image: "./src/img/pizza peperoni.png",
      name: "پیتزا پپرونی",
      description: "پیتزای لذیذ با پنیر اضافه",
      price: "150,000",
    },
    {
      id: 4,
      image: "./src/img/pizza sabzijat.png",
      name: "پیتزای سبزیجات",
      description: "پیتزای سالم",
      price: "130,000",
    },
    {
      id: 5,
      image: "./src/img/tako mexici.png",
      name: "تاکو مکزیکی",
      description: "خوشمزه و ترد",
      price: "90,000",
    },
    {
      id: 6,
      image: "./src/img/hotdog vizhe.png",
      name: "هات داگ ویژه",
      description: "با سس مخصوص و نان گرم",
      price: "80,000",
    },
    {
      id: 7,
      image: "./src/img/pizza 4fasl.png",
      name: "پیتزا چهار فصل",
      description: "خوشمزه و تازه",
      price: "160,000",
    },
    {
      id: 8,
      image: "./src/img/nooshabe.png",
      name: "نوشابه",
      description: "نوشابه گازدار",
      price: "20,000",
    },
  ];

  return (
    <>
      <h1 className="text-right mr-9 text-3xl">منو</h1>
      <section className="grid grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={onAddToCart}
          />
        ))}
      </section>
    </>
  );
}

export default Menu;
