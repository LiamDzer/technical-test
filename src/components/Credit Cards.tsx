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

      <div className="row mt-3 align-items-stretch">
        <section className="col-4 d-flex flex-column">
          <h6 className="section-title">Card Expense Statistics</h6>

          <div className="creditcard-box statistics flex-grow-1">
            <CardExpenseStatistics />
          </div>
        </section>

        <section className="col-8">
          <h6 className="section-title">Card List</h6>

          <div className="card-list-wrapper">
            {cardList.map((card) => (
              <CardListItem key={card.cardNumber} {...card} />
            ))}
          </div>
        </section>
      </div>

      <div className="row mt-3 align-items-stretch">
        <section className="col-8 d-flex flex-column ">
          <h6 className="section-title">Add New Card</h6>

          <div className="creditcard-box flex-grow-1">
            <AddNewCard />
          </div>
        </section>

        <section className="col-4 d-flex flex-column">
          <h6 className="section-title">Card Setting</h6>

          <div className="creditcard-box flex-grow-1">
            <CardSetting />
          </div>
        </section>
      </div>
    </main>
  );
};

export default CreditCard;
