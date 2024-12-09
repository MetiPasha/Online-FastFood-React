import React, { useState } from "react";

function Cart({ items, onQuantityChange }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // controle baz boodane module
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  }); //data haye form

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  //modiriate taqirate form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 // ersale form 
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsModalOpen(false); //bastane module
    alert("سفارش شما با موفقیت ثبت شد!"); 
    setFormData({ name: "", phone: "", address: "" }); // delete kardane form
  };

  return (
    <aside className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold mb-4 text-right">سبد خرید</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span className="text-gray-600 text-right">{item.name}</span>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button
                className="bg-orange-500 text-white px-3 py-1 rounded"
                onClick={() => onQuantityChange(item.id, "increase")}
              >
                +
              </button>
              <span>{item.quantity}</span>
              <button
                className="bg-gray-300 text-black px-3 py-1 rounded"
                onClick={() => onQuantityChange(item.id, "decrease")}
              >
                -
              </button>
            </div>

            <span className="font-bold text-orange-500">
              {item.price * item.quantity} تومان
            </span>
          </li>
        ))}
      </ul>

      <p className="font-bold mt-4 text-lg flex justify-between">
        <span>جمع کل:</span>
        <span className="text-orange-500">{totalPrice} تومان</span>
      </p>

      
      <button
        className="bg-orange-500 text-white w-full py-2 mt-4 rounded"
        onClick={() => setIsModalOpen(true)} //baz kardane module
      >
        ثبت سفارش
      </button>

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">ثبت سفارش</h3>
            <form onSubmit={handleSubmitOrder}>
              <div className="mb-4">
                <label className="block mb-2 font-medium">
                  نام و نام خانوادگی:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">شماره تلفن:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">آدرس:</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)} // بستن مدال
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded"
                >
                  ثبت سفارش
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Cart;
