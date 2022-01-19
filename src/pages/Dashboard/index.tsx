import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { useProduct } from "../../context/Products.Context";
import { ProductsList } from "./ProductsList";

interface Comment {
  userId: number;
  productId: number;
  comment: string;
}

interface CardProps {
  product: string;
  price: string;
  category: string;
  id: number;
  img: string;
  quantity: number;
  comments?: Comment[];
}

export const Dashboard = () => {
  const { productsCopy, loadProducts } = useProduct();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Flex flexDir="column" alignItems="center" mb="20px">
      <Header />
      <ProductsList products={productsCopy} />
    </Flex>
  );
};
