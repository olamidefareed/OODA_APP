import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./routing";
import { ConfigProvider } from "antd";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ConfigProvider>
              <CustomRouter />
            </ConfigProvider>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
