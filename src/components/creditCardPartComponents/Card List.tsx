import { creditCardVector } from "../../assets/icons";

interface CardListItemProps {
  cardType: string;
  cardNumber: string;
  cardName: string;
  cardColor: string;
}


const CardListItem = ({
  cardType,
  cardNumber,
  cardName,
  cardColor,
}: CardListItemProps) => {
  return (
    <div className="card-list-item d-flex align-items-center">
      <div
        className="card-list-icon d-flex align-items-center justify-content-center"
        style={{ backgroundColor: cardColor }}
      >
        <img src={creditCardVector} />
      </div>

      <div className="card-list-info">
        <span className="card-list-name">{cardName}</span>
        <span className="card-list-number">{cardNumber}</span>
      </div>

      <span className="card-list-type ms-auto">{cardType}</span>
    </div>
  );
};

export default CardListItem;
