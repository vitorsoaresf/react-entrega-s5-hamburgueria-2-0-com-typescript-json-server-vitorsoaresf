import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../context/Cart.Context";

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

interface CardCartProps {
  element: Product;
}

export const CardCart = ({ element }: CardCartProps) => {
  const { addQuantity, subQuantity, subProducts } = useCart();
  const [count, setCount] = useState(false);

  const addCount = (element: Product) => {
    addQuantity(element);
    setCount(!count);
  };

  const subCount = (element: Product) => {
    subQuantity(element);
    setCount(!count);
  };

  return (
    <Flex w="100%" m="5px 0" justifyContent="space-between">
      <Flex bg="red" alignItems="center" w="90%">
        <Center
          boxSize="sm"
          borderRadius="5px"
          bg="gray.0"
          h="80px"
          w="82.26px"
        >
          <Image src={element.img} alt="Dan Abramov" w="55px" h="53.49px" />
        </Center>
        <Flex flexDir="column">
          <Heading
            fontSize="18px"
            m="10px 5px"
            fontWeight="700"
            lineHeight="24px"
          >
            {element.product}
          </Heading>
          <Flex>
            <Button onClick={() => subCount(element)}>-</Button>
            <Text>{element.quantity}</Text>
            <Button onClick={() => addCount(element)}>+</Button>
          </Flex>
        </Flex>
      </Flex>
      <Button onClick={() => subProducts(element)}>
        <FaTrash />
      </Button>
    </Flex>
  );
};
