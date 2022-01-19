import { Button, ModalFooter } from "@chakra-ui/react";
import { useCart } from "../../context/Cart.Context";

export const ModalFooterC = () => {
  const { removeAll } = useCart();
  return (
    <ModalFooter>
      <Button
        onClick={removeAll}
        bg="gray.100"
        color="gray.300"
        w="100%"
        h="60px"
      >
        Remover todos{" "}
      </Button>
    </ModalFooter>
  );
};
