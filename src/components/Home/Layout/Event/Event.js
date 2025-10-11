import React from 'react';
import styled from 'styled-components';

const Event = () => {
  return (
    <EventContainer>
      <h1>Wedding</h1>
      <h4>VENUE INFORMATION</h4>

      <VenueCard>
        <div className="overlay" />
        <div className="content">
          <h2>Wedding Ceremony</h2>
          <p className="venue">M&S Eden Event Centre</p>
          <p className="address">
             34 Haatso-Atomic Rd, Accra, Ghana
          </p>
          <p className="datetime">Saturday, 15th November 2025 @ 2:00 PM</p>

          <a
            href="https://maps.app.goo.gl/rA71TmkLwAyhvvFdA"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            View on Google Maps
          </a>
        </div>
      </VenueCard>
    </EventContainer>
  );
};

export default Event;

const EventContainer = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1rem;
  text-align: center;

  h1 {
    font-family: 'Alex Brush', cursive;
    color: #cb966a;
    font-size: 2.8rem;
    margin: 0.5rem 0 0.5rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 2rem;
    letter-spacing: 0.08em;
  }
`;

const VenueCard = styled.div`
  position: relative;
  background: url('image/R5PX7221.jpg') no-repeat center 33%/cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 4px 20px;
  overflow: hidden;
  padding: 3rem 2rem;
  color: #fff;

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
    text-align: center;
  }

  h2 {
    font-family: 'Alex Brush', cursive;
    color: #cb966a;
    font-size: 2.2rem;
    font-weight: 700; /* ⬅️ Made thicker */
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
    margin-bottom: 1rem;
  }

  .venue {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    margin-bottom: 0.5rem;
  }

  .address {
    font-size: 1rem;
    color: #f5f5f5;
    margin-bottom: 1rem;
  }

  .datetime {
    font-size: 1rem;
    font-weight: 500;
    color: #f5f5f5;
    margin-bottom: 2rem;
  }

  .map-btn {
    display: inline-block;
    background: #cb966a;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 0.7rem 1.5rem;
    border-radius: 4px;
    transition: background 0.3s ease;

    &:hover {
      background: #b07c52;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;

    h2 {
      font-size: 1.8rem;
    }

    .venue {
      font-size: 1.2rem;
    }
  }
`;
