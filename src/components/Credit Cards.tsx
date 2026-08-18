// Imports
import {
  chipCardLogoGrey,
  chipCardLogoWhite,
  creditCardDecorGrey,
  creditCardDecorWhite,
} from "../assets/icons";
import CardListItem from "./creditCardPartComponents/Card List";
import CardExpenseStatistics from "./creditCardPartComponents/Card Expense";
import AddNewCard from "./creditCardPartComponents/Add Card";
import CardSetting from "./creditCardPartComponents/Card Settings";

const CreditCard = () => {
  const cards = [
    {
      chip: chipCardLogoWhite,
      decor: creditCardDecorWhite,
      balance: "$5,756",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      number: "3778 **** **** 1234",
    },
    {
      chip: chipCardLogoWhite,
      decor: creditCardDecorWhite,
      balance: "$5,756",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      number: "3778 **** **** 1234",
    },
    {
      chip: chipCardLogoGrey,
      decor: creditCardDecorGrey,
      balance: "$5,756",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      number: "3778 **** **** 1234",
    },
  ];

  const cardList = [
    {
      cardType: "Credit Card",
      cardNumber: "**** 1234",
      cardName: "DBL Bank",
      cardColor: "#E7EDFF",
    },
    {
      cardType: "Credit Card",
      cardNumber: "**** 5678",
      cardName: "BRC Bank",
      cardColor: "#FFE0EB",
    },
    {
      cardType: "Credit Card",
      cardNumber: "**** 9012",
      cardName: "ABM Bank",
      cardColor: "#FFF5D9",
    },
  ];

  // Credit Card Component
  return (
    <main className="creditcard flex-grow-1">
      <section>
        <h6 className="section-title">My Cards</h6>

        <div className="d-flex gap-3">
          {cards.map((card, index) => (
            <div className={`credit-card card-${index + 1}`} key={index}>
              <div className="d-flex justify-content-between">
                <div>
                  <small>Balance</small>
                  <div>{card.balance}</div>
                </div>

                <img src={card.chip} alt="" />
              </div>

              <div className="d-flex gap-5">
                <div>
                  <small>CARD HOLDER</small>
                  <div>{card.cardHolder}</div>
                </div>

                <div>
                  <small>VALID THRU</small>
                  <div>{card.validThru}</div>
                </div>
              </div>

              <div className="card-number d-flex justify-content-between align-items-center">
                <span>{card.number}</span>
                <img src={card.decor} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="row mt-3">
        <section className="col-4">
          <h6 className="section-title">Card Expense Statistics</h6>

          <div className="creditcard-box statistics">
            <CardExpenseStatistics />
          </div>
        </section>

        <section className="col-8">
          <h6 className="section-title">Card List</h6>

          <div className="d-flex flex-column gap-2">
            {cardList.map((card) => (
              <CardListItem key={card.cardNumber} {...card} />
            ))}
          </div>
        </section>
      </div>

      <div className="row mt-3">
        <section className="col-8">
          <h6 className="section-title">Add New Card</h6>

          <div className="creditcard-box">
            <AddNewCard />
          </div>
        </section>

        <section className="col-4">
          <h6 className="section-title">Card Setting</h6>

          <div className="creditcard-box">
            <CardSetting />
          </div>
        </section>
      </div>
    </main>
  );
};

export default CreditCard;
