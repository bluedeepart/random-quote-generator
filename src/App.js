import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quotes from "./components/Quotes";
import QuotesList from "./components/QuotesList";
import RandomQuoteBtn from "./components/RandomQuoteBtn";
import { QuoteContextProvider } from "./context/QuoteContext";
import Footer from "./layout/Footer";

function App() {
  return (
    <QuoteContextProvider>
      <Router>
        <RandomQuoteBtn />
        <main>
          <Routes>
            <Route path="/random-quote-generator" element={<Quotes />} />
            <Route path="/:author" element={<QuotesList />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </QuoteContextProvider>
  );
}

export default App;
