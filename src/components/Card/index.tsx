import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";

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
  comments: Comment[];
}

export const Card = ({
  product,
  price,
  category,
  comments,
  img,
}: CardProps) => {
  return (
    <Center flexDirection="column" border="1px" h="450px" w="310px">
      <Center boxSize="sm">
        <Image src={img} alt="Dan Abramov" />
      </Center>
      <Heading>{product}</Heading>
      <Heading>{price}</Heading>
      <Heading>{category}</Heading>
    </Center>
  );
};
