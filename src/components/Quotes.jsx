import { useContext } from "react";
import QuoteContext from "../context/QuoteContext";
import AuthorInfo from "./AuthorInfo";
import Loading from "./Loading";
import QuoteWrapper from "./QuoteWrapper";


const Quotes = () => {
  const quoteCtx = useContext(QuoteContext);
  const { randomQuote, isLoading } = quoteCtx;

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        randomQuote.map((quote) => (
          <div className="quote-preview" key={quote._id}>
            <QuoteWrapper quote={quote} />
            <AuthorInfo quote={quote} />
          </div>
        ))
      )}
    </div>
  );
};

export default Quotes;
