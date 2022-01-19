import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";

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
  quantity?: number;
  comments?: Comment[];
}

export const Card = ({ product, price, category, img }: CardProps) => {
  return (
    <VStack alignItems="flex-start" flexDirection="column" h="346px" w="300px">
      <Center boxSize="sm" bg="gray.0" w="100%">
        <Image src={img} alt="Dan Abramov" w="177px" h="177px" />
      </Center>
      <Box alignItems="flex-start" spacing="3">
        <Heading
          fontSize="18px"
          m="10px 20px"
          fontWeight="700"
          lineHeight="24px"
        >
          {product}
        </Heading>
        <Text
          m="0px 0px 15px 20px"
          color="gray.300"
          fontWeight="400"
          fontSize="12px"
          lineHeight="16px"
        >
          {category}
        </Text>
        <Text
          m="0px 0px 10px 20px"
          color="green.800"
          fontWeight="600"
          fontSize="16px"
          lineHeight="24px"
        >
          R$ {price}
        </Text>
      </Box>
    </VStack>
  );
};
