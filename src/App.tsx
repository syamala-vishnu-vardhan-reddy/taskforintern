import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./components/slice/slice";
import { RootState } from "./store";

const App = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch action to fetch products
  }, [dispatch]);

  return (
    <div>
      <h1>Product List</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {products.map(
          (product: {
            id: Key | null | undefined;
            image: string | undefined;
            title:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined;
            price:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<unknown, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined;
          }) => (
            <li key={product.id}>
              <img src={product.image} alt={"vishnu"} width="100" />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default App;
