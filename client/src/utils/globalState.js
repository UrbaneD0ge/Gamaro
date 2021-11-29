import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const Store = createContext();

const { Provider } = Store;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStore = () => {
  return useContext(Store);
};

export { StoreProvider, useStore };
