// import { useDispatch, useSelector } from "react-redux"
// import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice";

// const Cart = () => {
// const cartItems = useSelector((store)=> store.cart.items);

// const disptach = useDispatch();
// const handleClearCart = ()=>{
//     disptach(clearCart());
// }
// return (
//         <div className="text-center m-10 p-10">
//            <h1 className="text-xl font-bold bg-gray-300 border border-black"> Cart</h1>
//           <button className="p-2  m-2 bg-black text-white rounded-lg" 
//           onClick={handleClearCart}>Clear Cart</button>
//            {cartItems.length ===0 && 
//            <h1>
//             Please Add Some Items. Cart Is Empty!!
//             </h1>}
//            <div className="w-6/12 m-auto ">
//            <ItemList items={cartItems}/>
//            </div>
//         </div>
//     )
  
// }

// export default Cart



                                 //Tailwind improved code 


import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const disptach = useDispatch();

  const handleClearCart = () => {
    disptach(clearCart());
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* overlay */}
      <div className="min-h-screen bg-white/80 backdrop-blur-sm py-12">

        <div className="max-w-4xl mx-auto px-4">

          {/* Header Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 text-center">

            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              🛒 Your Cart
            </h1>

            <button
              className="px-5 py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition shadow"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

          </div>

          {/* Empty cart message */}
          {cartItems.length === 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <h1 className="text-xl font-semibold text-gray-700">
                Your cart is empty 😕
              </h1>
              <p className="text-gray-500 mt-2">
                Please add some delicious items to your cart!
              </p>
            </div>
          )}

          {/* Items list */}
          {cartItems.length > 0 && (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 w-full md:w-2/3">
                <div className="max-w-2xl mx-auto">
                  <ItemList items={cartItems} isCart={true} />
                </div>
              </div>

              {/* Order Summary */}
              <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 h-fit border border-gray-100 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3 block text-left">Bill Details</h2>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between text-gray-600 text-lg">
                    <span>Item Total</span>
                    <span className="font-semibold text-gray-800">
                      ₹{cartItems.reduce((acc, item) => acc + ((item.card?.info?.price || item.card?.info?.defaultPrice) / 100) * item.quantity, 0).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-lg">
                    <span>Delivery Fee</span>
                    <span className="font-semibold text-gray-800">₹40.00</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-lg">
                    <span>Platform Fee</span>
                    <span className="font-semibold text-gray-800">₹5.00</span>
                  </div>
                  <div className="flex justify-between text-green-600 text-lg">
                    <span>GST & Restaurant Charges</span>
                    <span className="font-semibold">₹25.00</span>
                  </div>
                  <div className="border-t-2 border-black pt-4 mt-6 flex justify-between items-center">
                    <span className="font-bold text-gray-800 text-xl block text-left">To Pay</span>
                    <span className="font-bold text-orange-500 text-2xl">
                      ₹{(cartItems.reduce((acc, item) => acc + ((item.card?.info?.price || item.card?.info?.defaultPrice) / 100) * item.quantity, 0) + 70).toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full mt-8 bg-green-500 text-white font-bold text-lg py-4 rounded-xl shadow-[0_5px_15px_rgba(34,197,94,0.3)] hover:bg-green-600 transition hover:-translate-y-1 block mx-auto">
                    PROCEED TO PAY
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Cart;
