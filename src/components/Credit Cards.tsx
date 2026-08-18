// Imports
import {
  chipCardLogoGrey,
  chipCardLogoWhite,
  creditCardBlue,
  creditCardDecorGrey,
  creditCardDecorWhite,
  creditCardRed,
  creditCardYellow,
} from "../assets/icons";

import CardListItem from "./creditCardPartComponents/Card List";
import CardExpenseStatistics from "./creditCardPartComponents/Card Expense";
import AddNewCard from "./creditCardPartComponents/Add Card";
import CardSetting from "./creditCardPartComponents/Card Settings";

// Credit Card Component
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
      cardType: "Secondary",
      bank: "DBL Bank",
      cardNumber: "**** 1234",
      cardHolder: "William",
      cardColor: "#E7EDFF",
      logo: creditCardBlue,
    },
    {
      cardType: "Secondary",
      bank: "BRC Bank",
      cardNumber: "**** 5678",
      cardHolder: "Michel",
      cardColor: "#FFE0EB",
      logo: creditCardRed,
    },
    {
      cardType: "Secondary",
      bank: "ABM Bank",
      cardNumber: "**** 9012",
      cardHolder: "Edward",
      cardColor: "#FFF5D9",
      logo: creditCardYellow,
    },
  ];

  return (
    <main className="creditcard flex-grow-1">
      <section>
        <h6 className="section-title">My Cards</h6>

        <div className="my-cards">
          {cards.map((card, index) => (
            <div
              className={`credit-card card-${index + 1}`}
              key={index}
            >
              <div className="credit-card-top">
                <div>
                  <small>Balance</small>

                  <div className="credit-card-balance">
                    {card.balance}
                  </div>
                </div>

                <img src={card.chip} alt="" />
              </div>

              <div className="credit-card-details">
                <div>
                  <small>CARD HOLDER</small>
                  <div>{card.cardHolder}</div>
                </div>

                <div>
                  <small>VALID THRU</small>
                  <div>{card.validThru}</div>
                </div>
              </div>

              <div className="card-number">
                <span>{card.number}</span>
                <img src={card.decor} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="creditcard-bottom">
        <section className="card-expense-section">
          <h6 className="section-title">
            Card Expense Statistics
          </h6>

          <div className="creditcard-box card-expense-box">
            <CardExpenseStatistics />
          </div>
        </section>

        <section className="card-list-section">
          <h6 className="section-title">
            Card List
          </h6>

          <div className="card-list-wrapper">
            {cardList.map((card) => (
              <CardListItem
                key={card.cardNumber}
                {...card}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="creditcard-bottom">
        <section className="add-card-section">
          <h6 className="section-title">
            Add New Card
          </h6>

          <div className="creditcard-box">
            <AddNewCard />
          </div>
        </section>

        <section className="card-setting-section">
          <h6 className="section-title">
            Card Setting
          </h6>

          <div className="creditcard-box">
            <CardSetting />
          </div>
        </section>
      </div>
    </main>
  );
};

export default CreditCard;