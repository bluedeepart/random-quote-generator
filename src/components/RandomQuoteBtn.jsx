import { useContext } from "react";
import { MdOutlineAutorenew } from "react-icons/md";
import { Link } from "react-router-dom";
import QuoteContext from "../context/QuoteContext";

const RandomQuoteBtn = () => {
  const quoteCtx = useContext(QuoteContext);
  const { getRandomQuote } = quoteCtx;

  return (
    <header>
      <div className="container">
        <button className="random-quotes" onClick={getRandomQuote}>
          <Link to="/random-quote-generator">
            random <MdOutlineAutorenew />
          </Link>
        </button>
      </div>
    </header>
  );
};

export default RandomQuoteBtn;
