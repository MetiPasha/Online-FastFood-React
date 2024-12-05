import React from "react";

function Cart({ items, onRemoveFromCart }) {
  // jame koll mohasebash
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <aside className="p-4 border rounded-lg shadow-md bg-white text-right">
      <h2 className="text-lg font-bold mb-4">سبد خرید</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            
            <span className="text-orange-500 font-bold">
              {item.price * item.quantity} تومان
            </span>

            
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button
                className="bg-orange-500 text-white px-3 py-1 rounded"
                onClick={() => onRemoveFromCart(item.id, "increase")}
              >
                +
              </button>
              <span>{item.quantity}</span>
              <button
                className="bg-gray-300 text-black px-3 py-1 rounded"
                onClick={() => onRemoveFromCart(item.id, "decrease")}
              >
                -
              </button>
            </div>

            
            <span className="text-gray-600">{item.name}</span>
          </li>
        ))}
      </ul>

      
      <div className="font-bold mt-4 text-lg flex justify-end space-x-2">
        <span className="text-orange-500">{totalPrice} تومان</span>
        <span>جمع کل</span>
      </div>

      
      <button className="bg-orange-500 text-white w-full py-2 mt-4 rounded">
        ثبت سفارش
      </button>
    </aside>
  );
}

export default Cart;
