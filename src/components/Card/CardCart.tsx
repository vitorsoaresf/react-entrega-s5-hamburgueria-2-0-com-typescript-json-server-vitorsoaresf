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
      <Flex alignItems="center" w="100%" padding="5px">
        <Center
          boxSize="sm"
          borderRadius="5px"
          bg="gray.100"
          h="80px"
          w="82.26px"
          ml="5px"
        >
          <Image src={element.img} alt="Dan Abramov" w="55px" h="53.49px" />
        </Center>
        <Flex flexDir="column" w="80%">
          <Heading
            fontSize="18px"
            m="0px 5px"
            fontWeight="700"
            lineHeight="20px"
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            color="gray.600"
          >
            {element.product}
            <Button
              bg="none"
              color="gray.300"
              onClick={() => subProducts(element)}
            >
              <FaTrash />
            </Button>
          </Heading>
          <Flex m="0px 5px" alignItems="center">
            <Button
              onClick={() => subCount(element)}
              h="35px"
              w="34px"
              borderRadius="2px"
              color="red"
            >
              -
            </Button>
            <Text
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="35px"
              w="50px"
              borderTop="2px"
              borderBottom="2px"
              borderColor="gray.100"
            >
              {element.quantity}
            </Text>
            <Button
              onClick={() => addCount(element)}
              h="35px"
              w="34px"
              color="red"
              borderRadius="2px"
            >
              +
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
