import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import useForm from "./userForm";
import validate from "./validateInfo";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const RSVP = () => {
  const { handleChange, handleSubmit, values, error } = useForm(validate);
  const [showCard, setShowCard] = useState(false);

  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    if (values.name && !error.name) setShowCard(true);
  };

const downloadInvite = async () => {
    const el = document.getElementById("invite-card");

    const canvas = await html2canvas(el, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#fff",
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    const yOffset = (pdfHeight - imgHeight) / 2;

    pdf.addImage(imgData, "PNG", 0, yOffset, imgWidth, imgHeight);
    pdf.save(`${values.name}-WeddingInvite.pdf`);
  };

  return (
    <>
      <Container>
        <Box>
          <div className="form__box">
            <h2>Will You Attend?</h2>
            <div className="title">R.S.V.P</div>

            <form className="form" onSubmit={handleRSVPSubmit}>
              <FormDiv>
                <label htmlFor="name">
                  Name<span>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </FormDiv>

              <FormDiv>
                <label htmlFor="guest">Guest</label>
                <input
                  id="guest"
                  type="text"
                  name="guest"
                  value={values.guest}
                  onChange={handleChange}
                  placeholder="Guest name (optional)"
                />
              </FormDiv>

              <FormDiv>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Leave a note for the couple"
                ></textarea>
              </FormDiv>

              <Button type="submit">Confirm Attendance</Button>
            </form>
          </div>
        </Box>
      </Container>

      {showCard && (
        <ModalOverlay>
          <InviteCard id="invite-card">
            <img
                src="/image/formwed.jpg"
                alt=""
                className="bg-image"
                crossOrigin="anonymous"
                aria-hidden="true"
            />

            <div className="content">
                <h2>You're Invited!</h2>
                <p className="names">Daniel & Winnie</p>
                
                <div className="details">
                <p><strong>Guest:</strong> {values.name}{values.guest && ` & ${values.guest}`}</p>
                <p><strong>Message:</strong> {values.message || "We can’t wait to celebrate with you!"}</p>
                <p className="date">November 15, 2025</p>
                <p className="venue">Labadi Beach Hotel, Accra</p>
                </div>
            </div>
        </InviteCard>
          <div className="modal-buttons">
            <button onClick={downloadInvite}>Download Invite</button>
            <button onClick={() => setShowCard(false)}>Close</button>
          </div>
        </ModalOverlay>
      )}
    </>
  );
};

export default RSVP;

/* ---------------- STYLES ---------------- */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url("image/banner/banner-2.jpg") center/cover no-repeat;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    backdrop-filter: blur(4px);
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .form__box {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 2rem;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    text-align: center;
    animation: ${fadeIn} 0.7s ease forwards;

    h2 {
      font-family: "Alex Brush", cursive;
      color: #f2d5a0;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .title {
      color: white;
      font-size: 1.6rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-bottom: 0.5rem;
      display: inline-block;
    }
  }
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: left;

  label {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: white;

    span {
      color: #ffcccb;
    }
  }

  input,
  textarea {
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 8px;
    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.85);
    color: #333;
    transition: box-shadow 0.3s;

    &:focus {
      box-shadow: 0 0 0 3px rgba(203, 150, 106, 0.5);
    }
  }

  textarea {
    resize: none;
    height: 100px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #cb966a, #a97b4f);
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #d4aa72, #8b623b);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(17, 17, 17, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.4s ease;

  .modal-buttons {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;

    button {
      padding: 0.8rem 1.4rem;
      border: none;
      border-radius: 8px;
      background: linear-gradient(135deg, #cb966a, #a97b4f);
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: linear-gradient(135deg, #d4aa72, #8b623b);
        transform: scale(1.05);
      }
    }
  }
`;

const InviteCard = styled.div`
  position: relative;
  width: 90vw; /* responsive width */
  max-width: 1000px;
  aspect-ratio: 10 / 7; /* maintain landscape shape */
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.3);
  background-color: #fffaf4;
  margin: 0 auto;

  /* Background image */
  .bg-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    height: 100%;
    padding: clamp(1.5rem, 3vw, 4rem) clamp(1.5rem, 5vw, 6rem);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    transform: translateX(-2vw);

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
      transform: translateX(0);
    }
  }

  h2 {
    font-family: "Alex Brush", cursive;
    font-size: clamp(2rem, 5vw, 3.8rem);
    color: #b4884d;
    margin-bottom: 0.8rem;
  }

  .names {
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 700;
    color: #4b2e15;
    margin-bottom: 1.4rem;
  }

  .details {
    font-size: clamp(1rem, 2vw, 1.4rem);
    color: #3e2a1f;
    line-height: clamp(1.4rem, 3vw, 2rem);
    max-width: 70%;

    @media (max-width: 768px) {
      max-width: 90%;
    }

    @media (max-width: 480px) {
      max-width: 95%;
    }
  }

  .details p {
    margin: 0.5rem 0;
  }

  .date,
  .venue {
    font-weight: 600;
    color: #593b27;
    margin-top: 0.8rem;
  }

  .date::before {
    content: "📅 ";
  }

  .venue::before {
    content: "📍 ";
  }
`;




