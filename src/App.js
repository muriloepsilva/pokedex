import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routesConfig";
import { QueryClient, QueryClientProvider } from "react-query";
import { FavoriteProvider } from "./favorites/context/favoriteContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FavoriteProvider>
          <Router>
            <RoutesConfig />
          </Router>
        </FavoriteProvider>
      </QueryClientProvider>
    </>
  );
}
