import { useState, Fragment } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");
  return (
    <Fragment>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <h1>star wars info</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === "planets" ? <Planets /> : <People />}
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </div>
    </Fragment>
  );
}

export default App;
