// Credit Card - Add Card Component
const AddNewCard = () => {
  return (
    <div className="content-box d-flex flex-column h-100">
      <p className="form-description">
        Credit Card generally means a plastic card issued by Scheduled Commercial Banks
        assigned to a Cardholder, with a credit limit, that can be used to purchase goods
        and services on credit or obtain cash advances.
      </p>

      <form className="d-flex flex-column flex-grow-1">
        <div className="row g-3">
          <div className="col-6">
            <label className="form-label">Card Type</label>
            <input
              type="text"
              className="form-control"
              placeholder="Classic"
            />
          </div>

          <div className="col-6">
            <label className="form-label">Name On Card</label>
            <input
              type="text"
              className="form-control"
              placeholder="My Cards"
            />
          </div>

          <div className="col-6">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="**** **** **** ****"
            />
          </div>

          <div className="col-6">
            <label className="form-label">Expiration Date</label>
            <input
              type="text"
              className="form-control"
              placeholder="25 January 2025"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-auto align-self-start">
          Add Card
        </button>
      </form>
    </div>
  );
};

export default AddNewCard;