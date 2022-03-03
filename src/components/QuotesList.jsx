import React, { useContext } from "react";
import QuoteContext from "../context/QuoteContext";
import Loading from "./Loading";
import QuoteWrapper from "./QuoteWrapper";

const QuotesList = () => {
  const quoteCtx = useContext(QuoteContext);
  const { isLoading, authorName, quoteListItems } = quoteCtx;

  if(isLoading){
    return <Loading />
  }else{
    return (
      <div className="container">
        <div className="quote-preview">
          <h3>{authorName}</h3>
        </div>
        {quoteListItems.map((quote) => (
          <div className="quote-preview" key={quote._id}>
            <QuoteWrapper quote={quote} />
          </div>
        ))}
      </div>
    );
  }

};

export default QuotesList;
