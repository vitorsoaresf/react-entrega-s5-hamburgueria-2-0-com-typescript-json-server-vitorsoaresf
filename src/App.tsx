import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { api } from "./services/api";
import { theme } from "./styles/theme";

function App() {
  useEffect(() => {
    api.get("/products").then((response) => console.log(response.data));
  }, []);
  return <Flex theme={theme}>App</Flex>;
}

export default App;
