import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import { Card } from "../../components/Card";

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
  comments: Comment[];
}

interface ProductListProps {
  products: Product[];
}

export const ProductsList = ({ products }: ProductListProps) => {
  return (
    <UnorderedList
      m="30px 0px 0px 0px"
      overflow-x="scroll"
      display="flex"
      flexDirection="row"
    >
      {products.length > 0 &&
        products.map((element, index) => (
          <ListItem listStyleType="none" key={element.product}>
            <Card
              product={element.product}
              price={element.price}
              category={element.category}
              id={element.id}
              img={element.img}
              comments={element.comments}
            />
          </ListItem>
        ))}
    </UnorderedList>
  );
};
