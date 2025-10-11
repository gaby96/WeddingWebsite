import React from "react";
import styled from "styled-components";

const DotsSection = () => {
  return (
    <DotsContainer>
      <h2>Share Your Memories</h2>
      <p className="subtitle">
        Scan the QR code below to upload your favorite wedding photos and videos
        through Dots The App.
      </p>
      <img
        src="/image/qrcodedanny.jpg"
        alt="Dots The App QR Code"
        className="qr-code"
      />

      <p className="fallback">
        Or click{" "}
        <a
          href="https://web.dotstheapp.com/event/abc123"
          target="_blank"
          rel="noopener noreferrer"
        >
          here to open our Dots album
        </a>.
      </p>
    </DotsContainer>
  );
};

export default DotsSection;

const DotsContainer = styled.section`
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(180deg, #fff 0%, #faf3e0 100%);
  font-family: "Poppins", sans-serif;

  h2 {
    font-family: "Alex Brush", cursive;
    color: #cb966a;
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    color: #444;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }

  .qr-code {
    width: 240px;
    height: 240px;
    border-radius: 12px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 1rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .fallback {
    font-size: 0.95rem;
    color: #444;
    margin-top: 1.5rem;

    a {
      color: #cb966a;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #b0784f;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 2.2rem;
    }

    .qr-code {
      width: 200px;
      height: 200px;
    }
  }
`;
