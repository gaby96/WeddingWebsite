import React from "react";
import styled from "styled-components";

const WeddingDetails = () => {
  return (
    <DetailsSection>
      <h2>Wedding Details</h2>
      <p className="intro">
        We’re excited to share this special day with you. Here’s everything you
        need to know to celebrate with us.
      </p>

      <div className="cards">
        <div className="card">
          <h3>Gifting Information</h3>
          <p>
            Your presence means the world to us and that's truly the best gift we could ask for! but
            if you'd like to bless us with a gift, we would be incredibly grateful for a monetary contribution
          </p>
          <div className="gift-info">
            <p>
              <strong>Mobile Money:</strong> 024 123 4567 (Daniel Boye)
            </p>
            <p>
              <strong>Bank Account:</strong> 987654321 – GCB Bank
            </p>
          </div>
        </div>

        {/* 👗 Dress Code */}
        <div className="card">
          <h3>Dress Code</h3>
          <p>
            Let’s keep it elegant and radiant! We invite our guests to wear{" "}
            <strong>traditional or semi-formal attire</strong> in harmony with
            our wedding palette.
          </p>
          <p className="note">Please, no white — let the bride shine! 🤍</p>
        </div>

        {/* 🎨 Wedding Colors */}
        <div className="card">
          <h3>Wedding Colors</h3>
          <p>Our color theme for the day is warm and timeless:</p>

          <div className="colors">
            <div className="color-swatch burnt-orange">
              <span>Burnt Orange</span>
            </div>
            <div className="color-swatch mustard-yellow">
              <span>Mustard Yellow</span>
            </div>
            <div className="color-swatch brown">
              <span>Chocolate Brown</span>
            </div>
          </div>
        </div>
      </div>
    </DetailsSection>
  );
};

export default WeddingDetails;

// ----------------------
// 💄 STYLES
// ----------------------
const WeddingPalette = {
  burntOrange: "#CC5500",
  mustardYellow: "#D4A017",
  brown: "#5C4033",
  cream: "#FAF3E0",
};

const DetailsSection = styled.section`
  background: linear-gradient(180deg, ${WeddingPalette.cream} 0%, #fff 100%);
  text-align: center;
  padding: 5rem 1rem;
  font-family: "Poppins", sans-serif;

  h2 {
    font-family: "Alex Brush", cursive;
    color: ${WeddingPalette.burntOrange};
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .intro {
    color: #444;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto 3rem auto;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .card {
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    transition: transform 0.3s ease;
    text-align: left;

    &:hover {
      transform: translateY(-5px);
    }

    h3 {
      color: ${WeddingPalette.brown};
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }

    p {
      color: #555;
      line-height: 1.6;
      margin-bottom: 0.8rem;
    }

    .note {
      font-style: italic;
      color: ${WeddingPalette.burntOrange};
    }

    .gift-info {
      background: ${WeddingPalette.cream};
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
      p {
        margin: 0.4rem 0;
        font-size: 0.95rem;
      }
    }

    .colors {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 1.5rem;
      flex-wrap: wrap;
    }

    .color-swatch {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      color: #fff;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 0.8rem;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      margin: 0.5rem;
    }

    .burnt-orange {
      background: ${WeddingPalette.burntOrange};
    }
    .mustard-yellow {
      background: ${WeddingPalette.mustardYellow};
    }
    .brown {
      background: ${WeddingPalette.brown};
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.4rem;
    }

    .card {
      padding: 1.5rem;
    }
  }
`;
