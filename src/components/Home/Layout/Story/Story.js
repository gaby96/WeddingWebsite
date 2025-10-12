import React from "react";
import styled from "styled-components";

const Story = () => {
  return (
    <StorySection>
      {/* 🌸 Floating Flower Accent */}
      <Flower>
        <img src="/image/gif/flowers2.gif" alt="Flowers" />
      </Flower>

      {/* 💌 Centered Story Info */}
      <StoryContainer>
        <div className="info">
          <h4>Wedding Invitation</h4>
          <p>
            Together with their families, <br />
            <strong>Daniel Nii Adjei Boye</strong> &{" "}
            <strong>Winnie Nuerki Apenahier</strong> <br />
            request the honor of your presence <br />
            at their marriage ceremony.
          </p>
        </div>
      </StoryContainer>
    </StorySection>
  );
};

export default Story;

/* ---------------- STYLES ---------------- */

/* 🌿 Full Story Section with Background */
const StorySection = styled.section`
  position: relative;
  background: url("/image/dannywinniesit.jpg") no-repeat center 46% / cover;
  padding: clamp(4rem, 6vw, 8rem) 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  /* dark overlay for better visibility */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 0;
  }

  /* bring content above overlay */
  > * {
    position: relative;
    z-index: 1;
  }

  /* ✅ Mobile (Phones & small tablets) */
  @media (max-width: 768px) {
    background: url("/image/danniesitwin.jpg") no-repeat center center / cover;
  }

  /* ✅ Large desktops (Full HD and up) */
  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    background: url("/image/dannywinniesit.jpg") no-repeat center 46.5% / cover;
  }

  /* ✅ Ultra-wide screens (4K and beyond) */
  @media screen and (min-width: 1921px) {
    background: url("/image/dannywinniesit.jpg") no-repeat center 43.4% / cover;
  }
`;

/* 🌸 Floating Flower */
const Flower = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  img {
    width: 150px;
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

/* 💞 Centered Text Container */
const StoryContainer = styled.div`
  max-width: 800px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.8rem;

  .info {
    text-align: center;
  }

  h4 {
    font-family: "Alex Brush", cursive;
    color: #ffd7a8;
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: 1rem;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    font-weight: 300;
    color: #fff;

    strong {
      color: #ffe8c2;
      font-weight: 600;
    }
  }
`;
