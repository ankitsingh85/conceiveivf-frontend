import React, { useEffect, useState } from "react";

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    service: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Mobile number - only numbers, max 10 digits
    if (name === "number") {
      const onlyNumbers = value.replace(/\D/g, "");

      if (onlyNumbers.length <= 10) {
        setFormData({
          ...formData,
          number: onlyNumbers,
        });
      }

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mobile number validation
    if (formData.number.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    console.log("Appointment:", formData);

    alert("Appointment request submitted successfully!");

    setFormData({
      name: "",
      number: "",
      service: "",
      date: "",
      time: "",
    });

    onClose();
  };

  return (
    <>
      <div
        className="appointment-overlay"
        onClick={onClose}
      >
        <div
          className="appointment-modal"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            className="appointment-close"
            onClick={onClose}
            aria-label="Close appointment popup"
          >
            ×
          </button>

          {/* Header */}
          <div className="appointment-header">
            <span className="appointment-small-title">
              BOOK YOUR VISIT
            </span>

            <h2>
              Book an Appointment
            </h2>

            <p>
              Choose your preferred service, date and time for
              your consultation.
            </p>
          </div>

          {/* Form */}
          <form
            className="appointment-form"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="appointment-field">
              <label htmlFor="appointment-name">
                Your Name
              </label>

              <input
                id="appointment-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mobile Number */}
            <div className="appointment-field">
              <label htmlFor="appointment-number">
                Mobile Number
              </label>

              <input
                id="appointment-number"
                type="tel"
                name="number"
                placeholder="Enter 10-digit mobile number"
                value={formData.number}
                onChange={handleChange}
                inputMode="numeric"
                maxLength={10}
                pattern="[0-9]{10}"
                required
              />
            </div>

            {/* Service */}
            <div className="appointment-field">
              <label htmlFor="appointment-service">
                Select Service
              </label>

              <select
                id="appointment-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select a service
                </option>

                <option value="IVF">
                  IVF
                </option>

                <option value="IUI">
                  IUI
                </option>

                <option value="ICSI">
                  ICSI
                </option>

                <option value="Egg Freezing">
                  Egg Freezing
                </option>

                <option value="Semen / Sperm Freezing">
                  Semen / Sperm Freezing
                </option>

                <option value="Male Infertility Assessment">
                  Male Infertility Assessment
                </option>

                <option value="Female Infertility Assessment">
                  Female Infertility Assessment
                </option>

                <option value="CASA">
                  CASA
                </option>

                <option value="Other Consultation">
                  Other Consultation
                </option>
              </select>
            </div>

            {/* Date */}
            <div className="appointment-field">
              <label htmlFor="appointment-date">
                Select Date
              </label>

              <input
                id="appointment-date"
                type="date"
                name="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* Time */}
            <div className="appointment-field">
              <label htmlFor="appointment-time">
                Select Time
              </label>

              <input
                id="appointment-time"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="appointment-submit"
            >
              Book Appointment

              <span>
                →
              </span>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        /* =========================================
           APPOINTMENT OVERLAY
        ========================================= */

        .appointment-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 20px;

          background: rgba(47, 32, 53, 0.76);

          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);

          animation: appointmentFadeIn 0.25s ease;
        }


        /* =========================================
           MODAL
        ========================================= */

        .appointment-modal {
          position: relative;

          width: 100%;
          max-width: 620px;

          background: #f8f4ee;

          border: 1px solid #e8dfd2;
          border-radius: 22px;

          padding: 38px;

          box-shadow:
            0 25px 80px rgba(47, 32, 53, 0.30);

          max-height: 90vh;

          overflow-y: auto;

          box-sizing: border-box;

          animation: appointmentSlideUp 0.3s ease;
        }


        /* =========================================
           CLOSE BUTTON
        ========================================= */

        .appointment-close {
          position: absolute;

          top: 18px;
          right: 18px;

          width: 38px;
          height: 38px;

          border: 1px solid #e8dfd2;
          border-radius: 50%;

          background: #ffffff;

          color: #3b2940;

          font-size: 25px;
          line-height: 1;

          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          transition: all 0.25s ease;
        }

        .appointment-close:hover {
          background: #3b2940;
          color: #ffffff;
          border-color: #3b2940;
        }


        /* =========================================
           HEADER
        ========================================= */

        .appointment-header {
          text-align: center;

          margin-bottom: 28px;

          padding: 0 25px;
        }

        .appointment-small-title {
          display: inline-block;

          margin-bottom: 8px;

          color: #c6a15b;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 2px;

          text-transform: uppercase;
        }

        .appointment-header h2 {
          margin: 0 0 9px;

          color: #3b2940;

          font-family:
            "Playfair Display",
            serif;

          font-size: 32px;

          line-height: 1.2;

          font-weight: 700;
        }

        .appointment-header p {
          margin: 0;

          color: #5f5660;

          font-size: 14px;

          line-height: 1.6;
        }


        /* =========================================
           FORM
        ========================================= */

        .appointment-form {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 18px;
        }

        .appointment-field {
          display: flex;

          flex-direction: column;
        }

        .appointment-field label {
          margin-bottom: 8px;

          color: #3b2940;

          font-size: 13px;

          font-weight: 700;
        }


        /* =========================================
           INPUTS
        ========================================= */

        .appointment-field input,
        .appointment-field select {
          width: 100%;

          height: 52px;

          padding:
            0 15px;

          border:
            1px solid #e0d5c7;

          border-radius: 10px;

          background: #ffffff;

          color: #3b2940;

          font-family: inherit;

          font-size: 14px;

          outline: none;

          box-sizing: border-box;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .appointment-field input::placeholder {
          color: #9b929b;
        }

        .appointment-field input:focus,
        .appointment-field select:focus {
          border-color: #c6a15b;

          box-shadow:
            0 0 0 3px
            rgba(198, 161, 91, 0.12);
        }


        /* =========================================
           DATE / TIME
        ========================================= */

        .appointment-field input[type="date"],
        .appointment-field input[type="time"] {
          cursor: pointer;

          color-scheme: light;
        }

        .appointment-field
          input[type="date"]::-webkit-calendar-picker-indicator,
        .appointment-field
          input[type="time"]::-webkit-calendar-picker-indicator {
          cursor: pointer;

          opacity: 0.75;

          width: 18px;
          height: 18px;
        }


        /* =========================================
           SUBMIT
        ========================================= */

        .appointment-submit {
          grid-column: 1 / -1;

          width: 100%;

          height: 54px;

          margin-top: 5px;

          border: none;

          border-radius: 10px;

          background: #3b2940;

          color: #ffffff;

          font-family: inherit;

          font-size: 14px;

          font-weight: 800;

          cursor: pointer;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .appointment-submit span {
          color: #e0c98a;

          font-size: 18px;

          transition:
            transform 0.25s ease;
        }

        .appointment-submit:hover {
          background: #2f2035;

          transform: translateY(-1px);

          box-shadow:
            0 10px 25px
            rgba(59, 41, 64, 0.18);
        }

        .appointment-submit:hover span {
          transform: translateX(4px);
        }


        /* =========================================
           SCROLLBAR
        ========================================= */

        .appointment-modal::-webkit-scrollbar {
          width: 5px;
        }

        .appointment-modal::-webkit-scrollbar-track {
          background: transparent;
        }

        .appointment-modal::-webkit-scrollbar-thumb {
          background: #c6a15b;

          border-radius: 10px;
        }


        /* =========================================
           ANIMATIONS
        ========================================= */

        @keyframes appointmentFadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes appointmentSlideUp {
          from {
            opacity: 0;

            transform:
              translateY(25px)
              scale(0.97);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .appointment-overlay {
            padding: 12px;
          }

          .appointment-modal {
            width: 100%;

            max-width: 100%;

            padding:
              28px 20px 22px;

            border-radius: 18px;

            max-height: 94vh;
          }

          .appointment-close {
            top: 12px;
            right: 12px;

            width: 34px;
            height: 34px;

            font-size: 22px;
          }

          .appointment-header {
            margin-bottom: 22px;

            padding-left: 8px;
            padding-right: 35px;
          }

          .appointment-header h2 {
            font-size: 25px;
          }

          .appointment-header p {
            font-size: 13px;
          }

          .appointment-form {
            grid-template-columns: 1fr;

            gap: 15px;
          }

          .appointment-submit {
            grid-column: 1;

            height: 52px;
          }
        }
      `}</style>
    </>
  );
};

export default BookAppointmentModal;