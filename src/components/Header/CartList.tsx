import { Divider, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useCart } from "../../context/Cart.Context";
import { CardCart } from "../Card/CardCart";

export const CartList = () => {
  const { cart } = useCart();
  return (
    <UnorderedList m="0" p="0" w="100%" listStyleType="none">
      {cart.map((element, index) => (
        <ListItem key={index}>
          <CardCart element={element} />
        </ListItem>
      ))}
      <Divider border="1px" orientation="horizontal" w="90%" m="0 auto" />
      <Flex m="10px 0px" justifyContent="space-between">
        <Text ml="15px" fontWeight="700">
          Total
        </Text>
        <Text mr="20px" letterSpacing="2px" color="gray.300" fontWeight="600">
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
