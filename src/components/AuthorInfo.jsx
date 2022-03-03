import { useContext } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import QuoteContext from "../context/QuoteContext";

const AuthorInfo = ({ quote }) => {
  const quoteCtx = useContext(QuoteContext);
  const { getQuotesListOfAuthor } = quoteCtx;

  const authoeNameInLink = `/quote-list-by-${quote.quoteAuthor
    .toLowerCase()
    .split(" ")
    .join("-")}`;

  return (
    <div className="author-info">
      <Link
        to={authoeNameInLink}
        onClick={() => {
          getQuotesListOfAuthor(quote.quoteAuthor);
        }}
      >
        <div className="author-info-wrapper">
          <p className="author-name">{quote.quoteAuthor}</p>
          <p className="author-genre">{quote.quoteGenre}</p>
        </div>
        <MdOutlineArrowRightAlt />
      </Link>
    </div>
  );
};

export default AuthorInfo;
