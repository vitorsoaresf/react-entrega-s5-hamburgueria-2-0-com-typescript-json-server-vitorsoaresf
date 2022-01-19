import {
  Button,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { Card } from "../../components/Card";
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

interface ProductListProps {
  products: Product[];
}

export const ProductsList = ({ products }: ProductListProps) => {
  const { addCart } = useCart();
  const toast = useToast();
  return (
    <UnorderedList
      m="30px 0px 0px 0px"
      overflowX={["scroll", "scroll", "unset", "unset"]}
      display="flex"
      flexWrap={["nowrap", "nowrap", "wrap", "wrap"]}
      w="100vw"
      maxW="1280px"
      justifyContent={["unset", "unset", "center", "center"]}
    >
      {products.length > 0 ? (
        products.map((element) => (
          <ListItem
            border="2px"
            borderColor="gray.100"
            borderRadius="5px"
            listStyleType="none"
            m="5px"
            _hover={{
              borderColor: "green.800",
            }}
            key={element.product}
          >
            <Card
              product={element.product}
              price={element.price}
              category={element.category}
              id={element.id}
              img={element.img}
              quantity={element.quantity}
              comments={element.comments}
            />
            <Button
              onClick={() => {
                addCart(element);
                toast({
                  title: "Produto adicionado ao carrinho",
                  status: "success",
                  duration: 1000,
                  isClosable: true,
                  position: "top",
                });
              }}
              m="0px 0px 10px 20px"
              bg="gray.400"
              color="white"
              borderRadius="8px"
              _hover={{
                bg: "green.800",
              }}
            >
              Adicionar
            </Button>
          </ListItem>
        ))
      ) : (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading textAlign="center" fontSize="4xl" color="gray.800">
            Não foram encontrados nenhum item
          </Heading>

          <Text fontSize="2xl">Tente Novamente</Text>
        </Flex>
      )}
    </UnorderedList>
  );
};
