import { createContext, useEffect, useState } from "react";

const QuoteContext = createContext();

export const QuoteContextProvider = ({ children }) => {
  const [randomQuote, setRandomQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quoteListItems, setQuoteListItems] = useState([]);
  const [authorName, setAuthorName] = useState("");
  const randomQuoteUrl = "https://quote-garden.herokuapp.com/api/v3/quotes";
  //   const url2 = `https://quote-garden.herokuapp.com/api/v3/quotes/random?author=${author}&count=${count}`;

  useEffect(() => {
    getRandomQuote();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRandomQuote = async () => {
    setIsLoading(true);
    const res = await fetch(`${randomQuoteUrl}/random`);
    const quote = await res.json();
    setRandomQuote(quote.data);
    setIsLoading(false);
  };

  const getQuotesListOfAuthor = async (quoteAuthor) => {
    setIsLoading(true);
    setAuthorName("");
    setQuoteListItems([]);
    const res = await fetch(
      `${randomQuoteUrl}/random?author=${quoteAuthor}&count=${5}`
    );
    const data = await res.json();
    setQuoteListItems(data.data);
    setAuthorName(quoteAuthor);
    setIsLoading(false);
    // console.log(data.data);
  };

  return (
    <QuoteContext.Provider
      value={{
        randomQuoteUrl,
        randomQuote,
        isLoading,
        quoteListItems,
        authorName,
        getRandomQuote,
        getQuotesListOfAuthor,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContext;
