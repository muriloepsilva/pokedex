import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routesConfig";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <RoutesConfig />
        </Router>
      </QueryClientProvider>
    </>
  );
}
