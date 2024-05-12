import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  return (
    <header>
      <div>
        <img src="/plane-logo.png" />
        <h3>uçuş radarı</h3>
      </div>

      {isLoading ? (
        <p>"uçuşlar hesaplanıyor"</p>
      ) : error ? (
        <p className="error">"oups bir sorunumuz var!!" {error}</p>
      ) : (
        <p>{flights.length} "uçuş bulundu"</p>
      )}
    </header>
  );
};

export default Header;
