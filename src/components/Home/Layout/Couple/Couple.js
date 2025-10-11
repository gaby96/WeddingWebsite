import React from "react";
import styled from "styled-components";

const Couple = () => {
  return (
    <CoupleSection>
      {/* 🌸 Floating Flower accent */}
      <Flower>
        <img src="/image/gif/flowers.gif" alt="Flowers" />
      </Flower>

      {/* 💑 Couple Information */}
      <CoupleContainer>
        <Box>
          <Bride>
            <div className="info">
              <h2>Winnie Nuerki Apenahier</h2>
              <h4>The Bride</h4>
            </div>
            <div className="image">
              <img src="/image/Winnie.png" alt="The Bride" />
            </div>
          </Bride>

          <Groom>
            <div className="image">
              <img src="/image/Danny.jpg" alt="The Groom" />
            </div>
            <div className="info">
              <h2>Daniel Nii Adjei Boye</h2>
              <h4>The Groom</h4>
            </div>
          </Groom>
        </Box>
      </CoupleContainer>
    </CoupleSection>
  );
};

export default Couple;

/* ---------------- STYLES ---------------- */

/* 🌿 Main Section (Background + Flower Layer) */
const CoupleSection = styled.section`
  position: relative;
  background: url("/image/dannywinniesit.jpg") no-repeat center 25% / cover;
  padding: 6rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  /* darker overlay for better text visibility */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55); /* increased from 0.45 → 0.55 */
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

/* 🌸 Flower animation layer */
const Flower = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  img {
    width: 180px;
    max-width: 40%;
    animation: float 6s ease-in-out infinite;
    opacity: 0.9;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

/* 💞 Couple Content Box */
const CoupleContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Box = styled.div`
  display: grid;
  grid-gap: 2em;

  @media (min-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }

  h4 {
    font-family: "Alex Brush", cursive;
    color: #ffd7a8; /* elegant gold accent */
    font-size: 1.8rem;
    margin: 0.6rem 0 1rem 0;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6); /* glow for visibility */
  }

  h2 {
    color: #fff; /* bright white for better visibility */
    font-size: 1.7rem;
    font-weight: 600;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6); /* adds contrast on dark bg */
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6rem;
    color: #f8f8f8;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  }
`;

/* 👰 Bride block */
const Bride = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;

  .image {
    margin-left: 20px;

    img {
      width: 160px;
      border-radius: 50%;
      border: 4px solid #f3d6c6;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 1020px) {
    flex-direction: column;
    text-align: center;

    .image {
      margin: 0;
      order: -1;
    }
  }
`;

/* 🤵 Groom block */
const Groom = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  .image {
    margin-right: 20px;

    img {
      width: 160px;
      border-radius: 50%;
      border: 4px solid #f3d6c6;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 1020px) {
    flex-direction: column;
    text-align: center;

    .image {
      margin: 0;
    }
  }
`;
