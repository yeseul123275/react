import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<p>홈</p>} />
          <Route path="/about" element={<p>소개</p>} />
          <Route path="/services" element={<p>서비스</p>} />
          <Route path="/contact" element={<p>문의하기</p>} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
