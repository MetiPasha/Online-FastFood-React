import ProductCard from "./productCard";

function Menu({ onAddToCart, cartItems }) {
  const products = [
    {
      id: 1,
      image: "/img/sibzamini.png",
      name: "سیب زمینی سرخ شده",
      description: "خوشمزه و ترد",
      price: 50000,
    },
    {
      id: 2,
      image: "/img/berger clasic.png",
      name: "برگر آبدار با نان تازه",
      description: "بهترین برگر سال",
      price: 120000,
    },
    {
      id: 3,
      image: "/img/pizza peperoni.png",
      name: "پیتزا پپرونی",
      description: "پیتزای لذیذ با پنیر اضافه",
      price: 150000,
    },
    {
      id: 4,
      image: "/img/pizza sabzijat.png",
      name: "پیتزای سبزیجات",
      description: "پیتزای سالم",
      price: 130000,
    },
    {
      id: 5,
      image: "/img/tako mexici.png",
      name: "تاکو مکزیکی",
      description: "خوشمزه و ترد",
      price: 90000,
    },
    {
      id: 6,
      image: "/img/hotdog vizhe.png",
      name: "هات داگ ویژه",
      description: "با سس مخصوص و نان گرم",
      price: 80000,
    },
    {
      id: 7,
      image: "/img/pizza 4fasl.png",
      name: "پیتزا چهار فصل",
      description: "خوشمزه و تازه",
      price: 160000,
    },
    {
      id: 8,
      image: "/img/nooshabe.png",
      name: "نوشابه",
      description: "نوشابه گازدار",
      price: 20000,
    },
    {
      id: 9,
      image: "/img/pizza makhsoos.jpg",
      name: "پیتزا مخصوص",
      description: "با پنیر فراوان و ژامبون گوشت تازه",
      price: 150000,
    },
    {
      id: 10,
      image: "/img/berger vizhe.jpg",
      name: "برگر ویژ",
      description: "با گوشت تازه گوساله و فلفل",
      price: 115000,
    },
  ];

  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div>
      <h1 className="text-right mr-9 text-3xl">منو</h1>
      <section className="grid grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            quantity={getQuantity(product.id)}
            onAddToCart={onAddToCart}
          />
        ))}
      </section>
    </div>
  );
}

export default Menu;
