import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const groceryProducts = [
  {
    id: 1,
    name: "Basmati Rice",
    price: 120,
    category: "Grains",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/basmati-rice-recipe.webp"
    
  },
  {
    id: 2,
    name: "Fresh Milk",
    price: 55,
    category: "Dairy",
    image:
      "https://hbfarms.pk/wp-content/uploads/2017/10/Fresh-Milk.png",
  },
  {
    id: 3,
    name: "Brown Bread",
    price: 40,
    category: "Bakery",
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400",
  },
  {
    id: 4,
    name: "Apple (1 Kg)",
    price: 90,
    category: "Fruits",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400",
  },
  {
    id: 5,
    name: "Tomato (1 Kg)",
    price: 30,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400",
  },
  {
    id: 6,
    name: "Organic Eggs (1 Dozen)",
    price: 80,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400",
  },
  {
    id: 7,
    name: "Peanut Butter",
    price: 150,
    category: "Pantry",
    image:
      "https://images.unsplash.com/photo-1621213048995-709de7d8df98?w=400",
  },
  {
    id: 8,
    name: "Whole Wheat Pasta",
    price: 65,
    category: "Pantry",
    image:
      "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=400",
  },
  {
    id: 9,
    name: "Avocado",
    price: 120,
    category: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400",
  },
  {
    id: 10,
    name: "Green Tea Pack",
    price: 250,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=400",
  },
  {
    id: 11,
    name: "Almonds (500g)",
    price: 450,
    category: "Nuts & Seeds",
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400",
  },
  {
    id: 12,
    name: "Greek Yogurt",
    price: 90,
    category: "Dairy",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
  }
];

const GroceryCard = ({ product }) => {
  const { id, name, price, category, image } = product;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    // Pack exactly as Cart and ItemList expects
    const item = {
      card: {
        info: {
          id: id + "_grocery",
          name: name,
          price: price * 100, // ItemList expects paisa and divides by 100
          description: category,
          imageUrl: image,
        }
      }
    };
    dispatch(addItem(item));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />

      <div className="mt-3">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm text-gray-500">{category}</p>

        <div className="mt-2 flex justify-between items-center">
          <span className="font-bold text-green-600">₹{price}</span>
          <button 
            className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600 active:scale-95 transition"
            onClick={handleAddItem}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const Grocery = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        🛒 Grocery Store – Fresh Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {groceryProducts.map((product) => (
          <GroceryCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Grocery;






