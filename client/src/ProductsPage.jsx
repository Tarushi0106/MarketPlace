import React from "react";
import "./ProductsPage.css";

const products = [
  {
    name: "Acronis Cyber Protect",
    desc: "Advanced backup, disaster recovery, and cyber protection solution.",
    logo: "/acronis.png",
  },
  {
    name: "Tally on Cloud",
    desc: "Access Tally securely from anywhere with cloud hosting.",
    logo: "/tally.png",
  },
  {
    name: "Microsoft 365",
    desc: "Productivity suite with Outlook, Teams, Word, Excel & more.",
    logo: "/microsoft365.png",
  },
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <section className="products-hero">
        <h1>Products</h1>
        <p>Trusted software solutions for your business.</p>
      </section>

      <section className="products-grid-section">
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.logo} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <button className="btn-primary">View Details</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
