import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./Auth.Context";
import { ProductProvider } from "./Products.Context";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <ProductProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ProductProvider>
  </AuthProvider>
);
