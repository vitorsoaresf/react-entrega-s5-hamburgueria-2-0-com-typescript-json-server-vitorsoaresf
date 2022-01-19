import { useToast } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface CartProviderProps {
  children: ReactNode;
}

interface Comment {
  userId: number;
  productId: number;
  comment: string;
}

interface Product {
  product: string;
  price: string;
  category: string;
  id: number;
  img: string;
  quantity: number;
  comments?: Comment[];
}

interface CartContextData {
  cart: Product[];
  addCart: (product: Product) => void;
  addQuantity: (product: Product) => void;
  removeAll: () => void;
  subQuantity: (product: Product) => void;
  subProducts: (product: Product) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useProduct must be used within an AuthProvider");
  }

  return context;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>(
    JSON.parse(localStorage.getItem("@Hamburgueria:cart") || "[]")
  );

  const addCart = (newProduct: Product) => {
    const find = cart.find((element) => element.product === newProduct.product);

    if (!find) {
      newProduct.quantity = 1;
      setCart([...cart, newProduct]);
    } else {
      addQuantity(newProduct);
    }
  };

  const subProducts = (searchProduct: Product) => {
    let copyArr = [...cart];
    setCart(
      copyArr.filter((element) => element.product !== searchProduct.product)
    );
  };

  const addQuantity = (searchProduct: Product) => {
    cart.find((element) => {
      if (element.product === searchProduct.product) {
        element.quantity++;
      }
    });
    setCart([...cart]);
  };

  const subQuantity = (searchProduct: Product) => {
    let copyArr = [...cart];
    cart.find((element) => {
      if (element.product === searchProduct.product) {
        if (searchProduct.quantity > 0) {
          element.quantity--;
          if (element.quantity === 0) {
            copyArr = copyArr.filter(
              (element) => element.product !== searchProduct.product
            );
          }
        }
      }
    });
    setCart([...copyArr]);
  };

  const removeAll = () => {
    setCart([]);
  };

  localStorage.setItem("@Hamburgueria:cart", JSON.stringify(cart));
  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        addQuantity,
        removeAll,
        subQuantity,
        subProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
