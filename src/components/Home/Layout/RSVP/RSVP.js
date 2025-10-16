import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import useForm from "./userForm";
import validate from "./validateInfo";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
      scale: 5,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    // A4 in portrait (you can switch to 'landscape' if needed)
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // PDF page dimensions (portrait)
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Image dimensions (from HTML canvas)
    const imgWidthPx = canvas.width;
    const imgHeightPx = canvas.height;

    // Convert pixels → millimeters (approx. 96 DPI)
    const pxToMm = 0.264583;
    const imgWidthMm = imgWidthPx * pxToMm;
    const imgHeightMm = imgHeightPx * pxToMm;

    // Scale image proportionally to fit inside PDF
    const ratio = Math.min(pdfWidth / imgWidthMm, pdfHeight / imgHeightMm);
    const finalWidth = imgWidthMm * ratio;
    const finalHeight = imgHeightMm * ratio;

    // Center the image on the PDF
    const xOffset = (pdfWidth - finalWidth) / 2;
    const yOffset = (pdfHeight - finalHeight) / 2;

    // Add to PDF with correct scaling
    pdf.addImage(imgData, "PNG", xOffset, yOffset, finalWidth, finalHeight);

    // Save the file
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
                <label htmlFor="side">
                  Who are you responding for?<span>*</span>
                </label>
                <select
                  id="side"
                  name="side"
                  value={values.side}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="bride">Bride</option>
                  <option value="groom">Groom</option>
                </select>
              </FormDiv>
              {/* <FormDiv>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Leave a note for the couple"
                ></textarea>
              </FormDiv> */}

              <Button type="submit">Confirm Attendance</Button>
            </form>

            {/* ✅ NEW CONTACT SECTION */}
            <ContactSection>
              <p>Prefer to RSVP directly?</p>
              <p>
                Contact <strong>Mavis</strong> at{" "}
                <a href="tel:+233542592262">+233 54 259 2262</a>
              </p>
            </ContactSection>
          </div>
        </Box>
      </Container>

      {showCard && (
        <ModalOverlay>
          <InviteCard id="invite-card">
            <img
              src="/image/wedform.png"
              alt=""
              className="bg-img "
              crossOrigin="anonymous"
              aria-hidden="true"
            />

            <div className="content">

              <div className="details">
                <p>
                  <strong>Name:</strong> {values.name}
                  {values.guest && ` & ${values.guest}`}
                </p>
                <p>
                  <strong>RSVP for:</strong>{" "}
                  {values.side
                    ? values.side.charAt(0).toUpperCase() + values.side.slice(1)
                    : "—"}
                </p>

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
  background: url("image/dannywinniesit.jpg") no-repeat center 30% / cover;
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
  textarea,
  select {
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
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.75);
  backdrop-filter: blur(6px); /* ✨ subtle glass effect */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.4s ease;
  padding: 3rem 2rem; /* increased spacing on sides */

  /* 💡 Wider layout for large screens */
  @media (min-width: 1024px) {
    padding: 5rem 6rem;
  }

  /* allow children (InviteCard + buttons) to align nicely */
  & > * {
    max-width: 100%;
  }

  .modal-buttons {
    margin-top: 2rem;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    button {
      padding: 1rem 2rem;
      border: none;
      border-radius: 10px;
      background: linear-gradient(135deg, #cb966a, #a97b4f);
      color: white;
      font-weight: 600;
      font-size: 1.05rem;
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
  width: 720px;
  height: 500px;
  max-width: 850px;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.35);
  background-color: #fffaf4;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;

  /* --- Background Image --- */
  .bg-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
    pointer-events: none;
    opacity: 0.9;
    filter: brightness(0.98) contrast(1.05);
  }

  /* --- Inner Content --- */
  .content {
    position: relative;
    z-index: 1;
    padding: clamp(1.5rem, 4vw, 3rem);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  /* --- Heading --- */
  h2 {
    font-family: "Alex Brush", cursive;
    font-size: clamp(2rem, 5vw, 3.8rem);
    color: #b4884d;
    margin-bottom: 1rem;
  }

  /* --- Names --- */
  .names {
    font-family: "Alex Brush", cursive;
    font-size: clamp(1.8rem, 4.5vw, 2.8rem);
    font-weight: 700;
    color: #4b2e15;
    margin-bottom: 1.2rem;
  }

  /* --- Details --- */
  .details {
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    color: #3e2a1f;
    line-height: clamp(1.4rem, 3vw, 2.2rem);
    width: 85%;
    max-width: 90%;
    margin: 0 auto;
  }

  .details p {
    margin: 0.8rem 0;
  }

  /* ----------------- RESPONSIVE BREAKPOINTS ----------------- */

  /* Tablets / small laptops */
  @media (max-width: 1024px) {
    aspect-ratio: 4 / 5;
    max-width: 720px;
  }

  /* Standard mobile sizes (e.g., iPhone 12, Galaxy S) */
  @media (max-width: 768px) {
    aspect-ratio: 3 / 4.2;
    max-width: 92vw;
    border-radius: 20px;

    .content {
      padding: 2rem;
    }

    h2 {
      font-size: clamp(1.8rem, 6vw, 3rem);
    }

    .names {
      font-size: clamp(1.6rem, 6vw, 2.4rem);
    }

    .details {
      width: 90%;
      font-size: clamp(0.95rem, 4vw, 1.2rem);
    }
  }

  /* ✅ iPhone 6/7/8 Plus (414 px × 736 px) */
  @media (max-width: 430px) and (max-height: 750px) {
    aspect-ratio: 2.9 / 4; /* slightly taller */
    width: 500px;
    height: 250px;
    border-radius: 16px;

    .content {
      padding: 1.5rem;
      justify-content: space-evenly;
    }

    h2 {
      font-size: 1.9rem;
      margin-bottom: 0.6rem;
    }

    .names {
      font-size: 1.6rem;
      margin-bottom: 0.8rem;
    }

    .details p {
        margin: 0.3rem 0; /* default smaller spacing */
        }
  }

  /* Very small devices (iPhone SE 2, XR in zoom mode) */
  @media (max-width: 380px) {
    aspect-ratio: 2.8 / 4;
    border-radius: 14px;

    .content {
      padding: 1.2rem;
    }

    h2 {
      font-size: 1.7rem;
    }

    .names {
      font-size: 1.4rem;
    }

    .details {
      font-size: 0.7rem;
      width: 96%;
    }
  }
`;



const ContactSection = styled.div`
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  line-height: 1.6;
  backdrop-filter: blur(8px);

  p {
    margin: 0.3rem 0;
  }

  a {
    color: #f2d5a0;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #d4aa72;
    }
  }
`;
