import { useEffect, type FormEvent } from "react";
import { useSiteContent } from "../hooks/useSiteContent";
import { digitsOnly, useLeadForm } from "../hooks/useLeadForm";
import { resolveMediaUrl } from "../lib/api";
import { withLineBreaks } from "../utils/text";
import {
  HOME_BANNER_KEY,
  homeBannerDefaults,
  type HomeBannerContent,
} from "../content/homeBanner";

export default function Hero() {
  const content = useSiteContent(HOME_BANNER_KEY, homeBannerDefaults);
  return <HeroView content={content} />;
}

/*
 * Pure banner markup — also used by the admin panel for the live preview.
 * `content` is null while the first load is in flight. In `preview` mode the
 * enquiry form doesn't create a lead.
 */
export function HeroView({ content, preview = false }: { content: HomeBannerContent | null; preview?: boolean }) {
  const form = useLeadForm(
    "home-banner",
    { name: "", phone: "", treatment: "", message: "" },
    preview
  );

  // Show the "submitted" state briefly, then let visitors send another request
  const { status, reset } = form;
  useEffect(() => {
    if (status !== "sent") return;
    const t = setTimeout(reset, 4000);
    return () => clearTimeout(t);
  }, [status, reset]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    form.submit(form.values);
  };

  const backgroundImage = content?.backgroundImage
    ? `url("${resolveMediaUrl(content.backgroundImage).replace(/"/g, "%22")}")`
    : undefined;

  return (
    <>
      <style>{`
        /* =========================================
           HERO
        ========================================= */

        .conceive-hero {
          position: relative;
          width: 100%;
          min-height: 600px;
          overflow: hidden;
          background: #3B2940;
          color: #fff;
          isolation: isolate;
        }

        /* =========================================
           FAMILY BACKGROUND IMAGE
        ========================================= */

        .conceive-hero-image {
          position: absolute;
          inset: 0;
          z-index: -2;

          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        /* =========================================
           TEAL OVERLAY
        ========================================= */

        .conceive-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;

          background:
            linear-gradient(
              90deg,
              rgba(59, 41, 64, 1) 0%,
              rgba(59, 41, 64, 0.99) 20%,
              rgba(59, 41, 64, 0.94) 37%,
              rgba(59, 41, 64, 0.78) 52%,
              rgba(59, 41, 64, 0.45) 65%,
              rgba(59, 41, 64, 0.16) 78%,
              rgba(59, 41, 64, 0.02) 100%
            );
        }

        /* =========================================
           CONTAINER
        ========================================= */

        .conceive-hero-container {
          position: relative;
          z-index: 2;

          /* FORM WIDTH INCREASED */
          width: min(1280px, calc(100% - 70px));

          min-height: 600px;

          margin: 0 auto;

          display: grid;

          /* FORM COLUMN: 360px → 430px */
          grid-template-columns: minmax(0, 1fr) 430px;

          align-items: center;

          gap: 65px;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .conceive-hero-content {
          width: 100%;
          padding: 50px 0;
        }

        /* EYEBROW */

        .conceive-eyebrow {
          display: block;

          margin-bottom: 18px;

          font-family: Arial, sans-serif;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 3px;

          color: rgba(255, 255, 255, 0.72);
        }

        /* =========================================
           BIG HEADING
        ========================================= */

        .conceive-hero-title {
          margin: 0;

          max-width: 650px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(58px, 6vw, 86px);

          line-height: 0.91;

          font-weight: 400;

          letter-spacing: -3.5px;

          color: #ffffff;
        }

        .conceive-hero-title em {
          font-style: italic;
          font-weight: 400;
        }

        /* =========================================
           DESCRIPTION
        ========================================= */

        .conceive-description {
          max-width: 570px;

          margin: 28px 0 22px;

          font-family: Arial, sans-serif;

          font-size: 14px;

          line-height: 1.7;

          color: rgba(255, 255, 255, 0.82);
        }

        /* =========================================
           BUTTONS
        ========================================= */

        .conceive-buttons {
          display: flex;

          align-items: center;

          gap: 11px;

          margin-top: 20px;
        }

        .conceive-btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          min-height: 42px;

          padding: 0 19px;

          border-radius: 24px;

          text-decoration: none;

          font-family: Arial, sans-serif;

          font-size: 13px;

          font-weight: 700;

          transition: all 0.3s ease;
        }

        .conceive-btn-primary {
          background: #C6A15B;

          color: #fff;

          box-shadow:
            0 8px 22px rgba(220, 63, 115, 0.24);
        }

        .conceive-btn-primary:hover {
          background: #B08B48;

          transform: translateY(-2px);
        }

        .conceive-btn-outline {
          background: rgba(255, 255, 255, 0.04);

          border: 1px solid rgba(255, 255, 255, 0.46);

          color: #fff;
        }

        .conceive-btn-outline:hover {
          background: rgba(255, 255, 255, 0.13);
        }

        /* =========================================
           TAGLINE
        ========================================= */

        .conceive-tagline {
          margin-top: 22px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 15px;

          font-style: italic;

          font-weight: 600;

          color: #fff;
        }

        /* =========================================
           STATS
        ========================================= */

        .conceive-stats {
          display: flex;

          width: 500px;

          margin-top: 22px;

          padding-top: 17px;

          border-top:
            1px solid rgba(255, 255, 255, 0.2);
        }

        .conceive-stat {
          min-width: 135px;

          padding-right: 25px;

          margin-right: 25px;

          border-right:
            1px solid rgba(255, 255, 255, 0.2);
        }

        .conceive-stat:last-child {
          border-right: none;
        }

        .conceive-stat strong {
          display: block;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 23px;

          line-height: 1.1;

          font-weight: 400;

          color: #ffffff;
        }

        .conceive-stat span {
          display: block;

          margin-top: 6px;

          font-family: Arial, sans-serif;

          font-size: 10px;

          line-height: 1.45;

          font-weight: 600;

          letter-spacing: 1px;

          color: rgba(255, 255, 255, 0.62);
        }

        /* =========================================
           ENQUIRY FORM
        ========================================= */

        .conceive-enquiry {
          width: 100%;

          /* FORM SIZE INCREASED */
          padding: 34px 32px 30px;

          background: rgba(255, 255, 255, 0.97);

          border-radius: 18px;

          box-shadow:
            0 20px 55px rgba(0, 0, 0, 0.22);

          color: #3B2940;
        }

        .conceive-enquiry-top {
          margin-bottom: 22px;
        }

        .conceive-enquiry-label {
          display: block;

          margin-bottom: 6px;

          font-family: Arial, sans-serif;

          /* 8px → 11px */
          font-size: 11px;

          font-weight: 800;

          letter-spacing: 2.5px;

          color: #C6A15B;
        }

        .conceive-enquiry-title {
          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          /* 28px → 34px */
          font-size: 30px;

          line-height: 1.1;

          font-weight: 400;

          color: #3B2940;
        }

        .conceive-enquiry-subtitle {
          margin: 9px 0 0;

          font-family: Arial, sans-serif;

          /* 11px → 14px */
          font-size: 14px;

          line-height: 1.5;

          color: #777;
        }

        /* =========================================
           FORM
        ========================================= */

        .conceive-form {
          display: flex;

          flex-direction: column;

          gap: 12px;
        }

        .conceive-input,
        .conceive-select,
        .conceive-textarea {
          width: 100%;

          border: 1px solid #E8DFD2;

          border-radius: 8px;

          background: #ffffff;

          /* FONT + PADDING INCREASED */
          padding: 14px 15px;

          outline: none;

          font-family: Arial, sans-serif;

          /* 11px → 14px */
          font-size: 14px;

          color: #333;

          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .conceive-input,
        .conceive-select {
          min-height: 42px;
        }

        .conceive-input:focus,
        .conceive-select:focus,
        .conceive-textarea:focus {
          border-color: #C6A15B;

          box-shadow:
            0 0 0 3px rgba(198, 161, 91, 0.12);
        }

        .conceive-textarea {
          min-height: 80px;

          resize: vertical;
        }

        .conceive-submit {
          width: 100%;

          min-height: 52px;

          margin-top: 3px;

          border: 0;

          border-radius: 26px;

          background: #C6A15B;

          color: #ffffff;

          font-family: Arial, sans-serif;

          /* 12px → 15px */
          font-size: 15px;

          font-weight: 700;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        .conceive-submit:hover {
          background: #B08B48;

          transform: translateY(-1px);
        }

        .conceive-success {
          margin-top: 8px;

          padding: 10px;

          border-radius: 6px;

          background: #F8F4EE;

          color: #3B2940;

          font-family: Arial, sans-serif;

          font-size: 11px;

          text-align: center;
        }

        .conceive-form-note {
          margin: 10px 0 0;

          font-family: Arial, sans-serif;

          /* 8px → 11px */
          font-size: 11px;

          line-height: 1.4;

          text-align: center;

          color: #999;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {

          .conceive-hero-container {
            width: calc(100% - 50px);

            grid-template-columns:
              minmax(0, 1fr)
              390px;

            gap: 35px;
          }

          .conceive-hero-title {
            font-size: 62px;
          }

          .conceive-description {
            font-size: 12px;
          }

          .conceive-enquiry {
            padding: 28px 24px;
          }

          .conceive-enquiry-title {
            font-size: 30px;
          }

          .conceive-enquiry-subtitle {
            font-size: 13px;
          }

          .conceive-input,
          .conceive-select,
          .conceive-textarea {
            font-size: 14px;

            padding: 13px 14px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 768px) {

          .conceive-hero {
            min-height: auto;
          }

          .conceive-hero-image {
            background-position: center center;
          }

          .conceive-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(59, 41, 64, 0.96) 0%,
                rgba(59, 41, 64, 0.91) 38%,
                rgba(59, 41, 64, 0.72) 68%,
                rgba(59, 41, 64, 0.45) 100%
              );
          }

          .conceive-hero-container {
            width: calc(100% - 30px);

            min-height: auto;

            padding: 20px 0 30px;

            display: flex;

            flex-direction: column;

            gap: 28px;
          }

          .conceive-hero-content {
            width: 100%;

            padding: 20px 0 0;
          }

          .conceive-eyebrow {
            font-size: 7px;

            letter-spacing: 2px;
          }

          .conceive-hero-title {
            max-width: 100%;

            font-size: 48px;

            line-height: 0.95;

            letter-spacing: -2px;
          }

          .conceive-description {
            max-width: 100%;

            margin-top: 20px;

            font-size: 11px;

            line-height: 1.6;
          }

          .conceive-buttons {
            flex-wrap: wrap;
          }

          .conceive-btn {
            min-height: 38px;

            padding: 0 14px;

            font-size: 9px;
          }

          .conceive-tagline {
            font-size: 13px;
          }

          .conceive-stats {
            width: 100%;

            margin-top: 18px;

            padding-top: 14px;
          }

          .conceive-stat {
            min-width: 0;

            flex: 1;

            padding-right: 7px;

            margin-right: 7px;
          }

          .conceive-stat strong {
            font-size: 17px;
          }

          .conceive-stat span {
            font-size: 5.5px;

            letter-spacing: .7px;
          }

          /* =====================================
             MOBILE FORM
          ===================================== */

          .conceive-enquiry {
            width: 100%;

            padding: 26px 20px;

            border-radius: 15px;
          }

          .conceive-enquiry-top {
            margin-bottom: 20px;
          }

          .conceive-enquiry-label {
            font-size: 10px;
          }

          .conceive-enquiry-title {
            font-size: 28px;
          }

          .conceive-enquiry-subtitle {
            font-size: 13px;

            line-height: 1.5;
          }

          .conceive-form {
            gap: 11px;
          }

          .conceive-input,
          .conceive-select,
          .conceive-textarea {
            font-size: 14px;

            padding: 13px 14px;

            border-radius: 8px;
          }

          .conceive-input,
          .conceive-select {
            min-height: 50px;
          }

          .conceive-textarea {
            min-height: 95px;
          }

          .conceive-submit {
            min-height: 50px;

            font-size: 14px;
          }

          .conceive-form-note {
            font-size: 10px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {

          .conceive-hero-title {
            font-size: 42px;
          }

          .conceive-description {
            font-size: 10px;
          }

          .conceive-stat strong {
            font-size: 15px;
          }

          .conceive-enquiry {
            padding: 24px 17px;
          }

          .conceive-enquiry-title {
            font-size: 25px;
          }

          .conceive-enquiry-subtitle {
            font-size: 12px;
          }

          .conceive-input,
          .conceive-select,
          .conceive-textarea {
            font-size: 13px;

            padding: 12px 13px;
          }

          .conceive-submit {
            font-size: 13px;
          }
        }
      `}</style>

      <section
        id="home"
        className="conceive-hero"
      >

        {/* Background */}
        <div
          className="conceive-hero-image"
          style={{ backgroundImage }}
        />

        {/* Overlay */}
        <div className="conceive-hero-overlay" />

        {content && (
        <div className="conceive-hero-container animate-fade-in">

          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="conceive-hero-content">

            {content.eyebrow && (
              <span className="conceive-eyebrow">
                {content.eyebrow}
              </span>
            )}

            <h1 className="conceive-hero-title">
              {withLineBreaks(content.title)}
              {content.titleHighlight && (
                <>
                  <br />
                  <em>{content.titleHighlight}</em>
                </>
              )}
            </h1>

            {content.description && (
              <p className="conceive-description">
                {content.description}
              </p>
            )}

            {(content.primaryButton.label || content.secondaryButton.label) && (
              <div className="conceive-buttons">

                {content.primaryButton.label && (
                  <a
                    href={content.primaryButton.link || "#contact"}
                    className="conceive-btn conceive-btn-primary"
                  >
                    {content.primaryButton.label}
                    <span>→</span>
                  </a>
                )}

                {content.secondaryButton.label && (
                  <a
                    href={content.secondaryButton.link || "#"}
                    className="conceive-btn conceive-btn-outline"
                  >
                    {content.secondaryButton.label}
                    <span>→</span>
                  </a>
                )}

              </div>
            )}

            {content.tagline && (
              <div className="conceive-tagline">
                {content.tagline}
              </div>
            )}

            {/* STATS */}

            {content.stats.length > 0 && (
              <div className="conceive-stats">
                {content.stats.map((stat, i) => (
                  <div key={i} className="conceive-stat">
                    <strong>{stat.value}</strong>

                    <span>
                      {withLineBreaks(stat.label)}
                    </span>
                  </div>
                ))}
              </div>
            )}

          </div>


          {/* =====================================
              ENQUIRY FORM
          ===================================== */}

          <div className="conceive-enquiry">

            <div className="conceive-enquiry-top">

              {content.enquiry.label && (
                <span className="conceive-enquiry-label">
                  {content.enquiry.label}
                </span>
              )}

              <h2 className="conceive-enquiry-title">
                {content.enquiry.title}
              </h2>

              {content.enquiry.subtitle && (
                <p className="conceive-enquiry-subtitle">
                  {content.enquiry.subtitle}
                </p>
              )}

            </div>


            <form
              className="conceive-form"
              onSubmit={handleSubmit}
              style={{ position: "relative" }}
            >
              {form.honeypot}

              <input
                type="text"
                className="conceive-input"
                placeholder="Your Name"
                value={form.values.name}
                onChange={(e) => form.set("name", e.target.value)}
                minLength={2}
                maxLength={80}
                required
              />

              <input
                type="tel"
                className="conceive-input"
                placeholder="Mobile Number"
                inputMode="numeric"
                pattern="[0-9]{10}"
                title="Please enter a 10-digit mobile number"
                value={form.values.phone}
                onChange={(e) => form.set("phone", digitsOnly(e.target.value))}
                required
              />

              <select
                className="conceive-select"
                value={form.values.treatment}
                onChange={(e) => form.set("treatment", e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Treatment
                </option>

                {content.enquiry.treatments.map((treatment) => (
                  <option key={treatment} value={treatment}>
                    {treatment}
                  </option>
                ))}
              </select>

              <textarea
                className="conceive-textarea"
                placeholder="Tell us about your requirement"
                value={form.values.message}
                onChange={(e) => form.set("message", e.target.value)}
                maxLength={2000}
              />

              <button
                type="submit"
                className="conceive-submit"
                disabled={form.status === "sending"}
              >
                {form.status === "sent"
                  ? "Request Submitted ✓"
                  : form.status === "sending"
                    ? "Sending..."
                    : `${content.enquiry.submitText} →`}
              </button>

              {form.error && (
                <p role="alert" style={{ margin: 0, color: "#b91c1c", fontSize: 13, textAlign: "center" }}>
                  {form.error}
                </p>
              )}

            </form>

            {content.enquiry.note && (
              <p className="conceive-form-note">
                {content.enquiry.note}
              </p>
            )}

          </div>

        </div>
        )}

      </section>
    </>
  );
}
