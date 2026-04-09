import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy, isCart }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          <div className="w-8/12 pr-4">
            <div className="py-2">
              <span className="font-semibold text-gray-800">{item.card.info.name}</span>
              <span className="ml-2 font-medium">
                - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500 line-clamp-2">{item.card.info.description}</p>
          </div>
          <div className="w-4/12 p-4 relative flex flex-col items-center">
            {(item.card.info.imageId || item.card.info.imageUrl) && (
              <img
                src={item.card.info.imageUrl || (CDN_URL + item.card.info.imageId)}
                className="w-full h-28 object-cover rounded-xl shadow-sm"
                alt={item.card.info.name}
              />
            )}
            <div className="absolute -bottom-2 flex justify-center w-full">
              {isCart ? (
                <div className="flex bg-white items-center gap-3 px-3 py-1 rounded-lg border border-gray-200 shadow-md">
                  <button
                    className="text-red-500 text-xl font-bold px-2 hover:bg-gray-100 rounded"
                    onClick={() => handleRemoveItem(item)}
                  >
                    -
                  </button>
                  <span className="font-bold text-gray-800">{item.quantity}</span>
                  <button
                    className="text-green-500 text-xl font-bold px-2 hover:bg-gray-100 rounded"
                    onClick={() => handleAddItems(item)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="px-6 py-2 rounded-lg bg-white text-green-600 font-bold shadow-md hover:shadow-lg transition border border-gray-100"
                  onClick={() => handleAddItems(item)}
                >
                  ADD +
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;





