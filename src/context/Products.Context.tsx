import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

import img_hamburguer from "../assets/h_hamburguer.svg";
import img_xburguer from "../assets/h_xburguer.svg";
import img_bigkenzie from "../assets/h_bigkenzie.svg";
import img_combokenzie from "../assets/h_combokenzie.svg";
import img_fantaguarana from "../assets/h_fantaguarana.svg";
import img_cocacola from "../assets/h_cocacola.svg";
import img_mcshake1 from "../assets/h_mckenzie1.svg";
import img_mcshake2 from "../assets/h_mckenzie.svg";

import { api } from "../services/api";

interface ProductsProviderProps {
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
  comments: Comment[];
}

interface ProductsContextData {
  products: Product[];
  productsCopy: Product[];
  loadProducts: () => void;
  searchProducts: (search: string) => void;
}

const ProductContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within an AuthProvider");
  }

  return context;
};

const ProductProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsCopy, setProductsCopy] = useState<Product[]>([]);

  const imgs = [
    img_hamburguer,
    img_xburguer,
    img_bigkenzie,
    img_combokenzie,
    img_fantaguarana,
    img_cocacola,
    img_mcshake1,
    img_mcshake2,
  ];

  const loadProducts = useCallback(async () => {
    await api
      .get("/products")
      .then((response) => {
        response.data.map(
          (element: Product, index: number) => (element.img = imgs[index])
        );
        setProducts([...response.data]);
        setProductsCopy([...response.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchProducts = (search: string) => {
    const elementsCopy = [...products];
    setProductsCopy(
      elementsCopy.filter((element) =>
        element.product.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        productsCopy,
        loadProducts,
        searchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct };
