import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useCart } from "../../context/Cart.Context";
import { CardCart } from "../Card/CardCart";

export const CartList = () => {
  const { cart } = useCart();
  return (
    <UnorderedList m="0" w="100%" bg="pink" listStyleType="none">
      {cart.map((element, index) => (
        <ListItem key={index}>
          <CardCart element={element} />
        </ListItem>
      ))}
      <Flex bg="blue" justifyContent="space-between">
        <Text>Total</Text>
        <Text>
          R$
          {cart
            .reduce(
              (acc, element) =>
                (acc += Number(element.price) * element.quantity),
              0
            )
            .toFixed(2)}
        </Text>
      </Flex>
    </UnorderedList>
  );
};
