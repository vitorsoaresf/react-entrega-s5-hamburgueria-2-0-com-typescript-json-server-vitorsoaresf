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
  const { addQuantity } = useCart();
  const [count, setCount] = useState(element.quantity);

  const addCount = (element: Product) => {
    addQuantity(element);
    setCount(count + 1);
  };
  return (
    <Flex w="100%" m="5px 0">
      <Flex alignItems="flex-start">
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
            <Button>-</Button>
            <Text>{count}</Text>
            <Button onClick={() => addCount(element)}>+</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
