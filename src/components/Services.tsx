import {
  accountVector,
  creditCardBlue,
  graphVector,
  lifeInsuranceVector,
  loansVector,
  shieldVector,
  shoppingBadVector,
} from "../assets/icons";

const Services = () => {
  const featuredServices = [
    {
      icon: lifeInsuranceVector,
      title: "Life Insurance",
      description: "Unlimited protection",
      backgroundColor: "#E7EDFF",
    },
    {
      icon: shoppingBadVector,
      title: "Shopping",
      description: "Buy. Think. Grow.",
      backgroundColor: "#FFF5D9",
    },
    {
      icon: shieldVector,
      title: "Safety",
      description: "We are your allies",
      backgroundColor: "#DDF7F5",
    },
  ];

  const bankServices = [
    {
      icon: loansVector,
      title: "Business loans",
      description: "It is a long established",
      iconBackground: "#FFE0EB",
      item1: "Lorem Ipsum",
      item1Description: "Many publishing",
      item2: "Lorem Ipsum",
      item2Description: "Many publishing",
      item3: "Lorem Ipsum",
      item3Description: "Many publishing",
    },
    {
      icon: accountVector,
      title: "Checking accounts",
      description: "It is a long established",
      iconBackground: "#FFF5D9",
      item1: "Lorem Ipsum",
      item1Description: "Many publishing",
      item2: "Lorem Ipsum",
      item2Description: "Many publishing",
      item3: "Lorem Ipsum",
      item3Description: "Many publishing",
    },
    {
      icon: graphVector,
      title: "Savings accounts",
      description: "It is a long established",
      iconBackground: "#FFE0EB",
      item1: "Lorem Ipsum",
      item1Description: "Many publishing",
      item2: "Lorem Ipsum",
      item2Description: "Many publishing",
      item3: "Lorem Ipsum",
      item3Description: "Many publishing",
    },
    {
      icon: creditCardBlue,
      title: "Debit and credit cards",
      description: "It is a long established",
      iconBackground: "#E7EDFF",
      item1: "Lorem Ipsum",
      item1Description: "Many publishing",
      item2: "Lorem Ipsum",
      item2Description: "Many publishing",
      item3: "Lorem Ipsum",
      item3Description: "Many publishing",
    },
    {
      icon: lifeInsuranceVector,
      title: "Life Insurance",
      description: "It is a long established",
      iconBackground: "#DDF7F5",
      item1: "Lorem Ipsum",
      item1Description: "Many publishing",
      item2: "Lorem Ipsum",
      item2Description: "Many publishing",
      item3: "Lorem Ipsum",
      item3Description: "Many publishing",
    },
    {
      icon: loansVector,
      title: "Business loans",
      description: "It is a long established",
      iconBackground: "#FFE0EB",
      item1: "Lorem Ipsum",
      item1Description: "Many publishing",
      item2: "Lorem Ipsum",
      item2Description: "Many publishing",
      item3: "Lorem Ipsum",
      item3Description: "Many publishing",
    },
  ];

  return (
    <main className="services-page flex-grow-1">
      <section className="services-featured">
        {featuredServices.map((service) => (
          <div className="featured-service" key={service.title}>
            <div
              className="featured-service-icon"
              style={{ backgroundColor: service.backgroundColor }}
            >
              <img src={service.icon} alt="" />
            </div>

            <div className="featured-service-content">
              <span className="featured-service-title">
                {service.title}
              </span>

              <span className="featured-service-description">
                {service.description}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="services-list-section">
        <h6 className="section-title">Bank Services List</h6>

        <div className="services-list">
          {bankServices.map((service, index) => (
            <div className="service-list-item" key={`${service.title}-${index}`}>
              <div className="service-list-main">
                <div
                  className="service-list-icon"
                  style={{ backgroundColor: service.iconBackground }}
                >
                  <img src={service.icon} alt="" />
                </div>

                <div className="service-list-title">
                  <span>{service.title}</span>
                  <small>{service.description}</small>
                </div>
              </div>

              <div className="service-list-column">
                <span>{service.item1}</span>
                <small>{service.item1Description}</small>
              </div>

              <div className="service-list-column">
                <span>{service.item2}</span>
                <small>{service.item2Description}</small>
              </div>

              <div className="service-list-column">
                <span>{service.item3}</span>
                <small>{service.item3Description}</small>
              </div>

              <button type="button" className="service-view-button">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;