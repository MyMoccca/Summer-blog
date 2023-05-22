import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Articles from "@pages/Articles";
import ArticleDesc from "@pages/ArticleDesc";
import Header from "@components/Header";

function App() {
  return (
    <div className="bg-container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDesc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
