const QuoteWrapper = ({ quote }) => {
  return (
    <div className="quote-wrapper">
      <p className="quote-text">{quote.quoteText}</p>
    </div>
  );
};

export default QuoteWrapper;
