import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Chat />} />
          </Routes>
        </AppBody>
      </div>
    </BrowserRouter>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
