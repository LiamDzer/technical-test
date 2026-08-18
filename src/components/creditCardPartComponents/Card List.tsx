// Props
interface CardListItemProps {
  cardType: string;
  bank: string;
  cardNumber: string;
  cardHolder: string;
  cardColor: string;
  logo: string;
}

// Credit Card - Card List Component
const CardListItem = ({
  cardType,
  bank,
  cardNumber,
  cardHolder,
  cardColor,
  logo,
}: CardListItemProps) => {
  return (
    <div className="card-list-item d-flex align-items-center">
      <div
        className="card-list-icon d-flex align-items-center justify-content-center"
        style={{ backgroundColor: cardColor }}
      >
        <img src={logo} alt="" />
      </div>

      <div className="card-list-info">
        <div className="card-list-field">
          <span className="card-list-label">Card Type</span>
          <span className="card-list-value">{cardType}</span>
        </div>

        <div className="card-list-field">
          <span className="card-list-label">Bank</span>
          <span className="card-list-value">{bank}</span>
        </div>

        <div className="card-list-field">
          <span className="card-list-label">Card Number</span>
          <span className="card-list-value">{cardNumber}</span>
        </div>

        <div className="card-list-field">
          <span className="card-list-label">Name on Card</span>
          <span className="card-list-value">{cardHolder}</span>
        </div>
      </div>

      <span className="card-list-details">View Details</span>
    </div>
  );
};

export default CardListItem;