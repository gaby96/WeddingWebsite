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
        {/* 💝 Gifting Info */}
        <div className="card">
          <h3>Gifting Information</h3>
          <p>
            Your presence means the world to us and that's truly the best gift we could ask for! 
            But if you'd like to bless us with a gift, we would be incredibly grateful for a monetary contribution.
          </p>
          <div className="gift-info">
            <p>
              <strong>Mobile Money:</strong> 020 324 2926 Telecel (Daniel Boye)
            </p>
            <p>
              <strong>Bank Account:</strong> Winnie Apenahier{" "}
              <strong>9040004705437 – Stanbic Bank</strong>
            </p>
          </div>
        </div>

        {/* 👗 Dress Code */}
        <div className="card">
          <h3>Event Details</h3>
          <p>
            Let’s keep it elegant and radiant! We invite our guests to dress classy.{" "}
            <strong>Traditional or formal attire</strong> in harmony with
            our wedding palette. <strong>Strictly, No Kids!</strong>
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

// 🎨 Palette
const WeddingPalette = {
  burntOrange: "#CC5500",
  mustardYellow: "#D4A017",
  brown: "#5C4033",
  cream: "#FAF3E0",
  gold: "#C6A664",
};

const DetailsSection = styled.section`
  position: relative;
  background: 
    url("/image/R5PX7392.jpg") center center / cover no-repeat; /* ✅ background image */
  text-align: center;
  padding: 6rem 1rem;
  font-family: "Poppins", sans-serif;
  overflow: hidden;

  /* subtle overlay for readability */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
     background: rgba(0,0,0,0.6);
    backdrop-filter: blur(2px);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  h2 {
    font-family: "Alex Brush", cursive;
    color: ${WeddingPalette.burntOrange};
    font-size: 6rem;
    margin-bottom: 1rem;
  }

  .intro {
    color: ${WeddingPalette.cream};;
    font-size: 1.0rem;
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
    background: rgba(255, 255, 255, 0.9);
    border-radius: 14px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    transition: transform 0.3s ease;
    text-align: left;
    backdrop-filter: blur(4px);

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

    /* 🎨 Color Swatches Section */
    .colors {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 1.5rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .color-swatch {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #fff;
      font-weight: 600;
      font-size: 0.8rem;
      position: relative;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
      box-shadow: inset 0 2px 6px rgba(255, 255, 255, 0.3),
        0 4px 10px rgba(0, 0, 0, 0.15);
      border: 3px solid ${WeddingPalette.gold};
      transition: all 0.3s ease;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: radial-gradient(
          circle at top left,
          rgba(255, 255, 255, 0.5),
          transparent 70%
        );
        pointer-events: none;
      }

      &:hover {
        transform: scale(1.07);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
      }

      span {
        position: relative;
        z-index: 1;
        text-align: center;
        font-size: 0.9rem;
        line-height: 1.2;
        padding: 0 0.5rem;
      }
    }

    .burnt-orange {
      background: ${WeddingPalette.burntOrange};
    }
    .mustard-yellow {
      background: ${WeddingPalette.mustardYellow};
      color: #3a2a00;
    }
    .brown {
      background: ${WeddingPalette.brown};
    }
  }

  /* 📱 Mobile Adjustments */
  @media (max-width: 768px) {
    background: 
      linear-gradient(180deg, rgba(250, 243, 224, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%),
      url("/image/R5PX7392.jpg") center center / cover no-repeat;
    h2 {
      font-size: 2.4rem;
    }
    .card {
      padding: 1.5rem;
    }
  }
`;
