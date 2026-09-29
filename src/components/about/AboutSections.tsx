import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import SmartLink from "../SmartLink";
import { resolveMediaUrl } from "../../lib/api";
import { withLineBreaks } from "../../utils/text";
import { aboutStyles } from "./aboutStyles";
import type {
  AboutCtaContent,
  AboutDoctorContent,
  AboutHeroContent,
  AboutQualificationsContent,
} from "../../content/aboutPage";

/*
 * Each About page section as a pure component, used by the public page and
 * by the admin panel's live previews. `content` is null while loading.
 */

const cssUrl = (url: string) => `url("${resolveMediaUrl(url).replace(/"/g, "%22")}")`;

// Wraps sections with the page's scoped styles
export function AboutPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="about-page">
      <style>{aboutStyles}</style>
      {children}
    </div>
  );
}

// Holds the section's space while its content loads
const Placeholder = ({ height }: { height: number }) => (
  <section className="about-section" style={{ minHeight: height }} />
);

/* ---------------------------------------------------------------- */

export function AboutHeroView({ content }: { content: AboutHeroContent | null }) {
  const style = content?.backgroundImage
    ? {
        backgroundImage: `linear-gradient(90deg, rgba(59, 41, 64, 0.96), rgba(47, 32, 53, 0.88)), ${cssUrl(content.backgroundImage)}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : undefined;

  return (
    <section className="about-hero" style={style}>
      <div className="about-container">
        {content && (
          <div className="about-hero-content animate-fade-in">
            {content.label && <span className="about-hero-label">{content.label}</span>}

            <h1>
              {content.title}
              {content.titleHighlight && (
                <>
                  <br />
                  <span>{content.titleHighlight}</span>
                </>
              )}
            </h1>

            {content.description && <p className="about-hero-text">{content.description}</p>}

            <div className="about-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

export function AboutDoctorView({ content }: { content: AboutDoctorContent | null }) {
  if (!content) return <Placeholder height={640} />;

  return (
    <section className="about-section animate-fade-in">
      <div className="about-container">
        <div className="about-intro-grid">
          <div className="doctor-image-wrap">
            {content.image && (
              <img src={resolveMediaUrl(content.image)} alt={content.imageAlt} className="doctor-image" />
            )}

            {content.badgeValue && (
              <div className="experience-badge">
                <strong>{content.badgeValue}</strong>
                {content.badgeLabel && <span>{withLineBreaks(content.badgeLabel)}</span>}
              </div>
            )}
          </div>

          <div>
            {content.label && <span className="section-label">{content.label}</span>}

            <h2 className="section-heading">
              {content.heading}
              {content.headingHighlight && (
                <>
                  {" "}
                  <span>{content.headingHighlight}</span>
                </>
              )}
            </h2>

            {content.paragraphs.map((paragraph, i) => (
              <p key={i} className="about-copy">
                {paragraph}
              </p>
            ))}

            {content.highlights.length > 0 && (
              <div className="doctor-highlights">
                {content.highlights.map((highlight, i) => (
                  <div key={i} className="doctor-highlight">
                    <span className="highlight-icon">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {content.button.label && (
              <SmartLink to={content.button.link || "/contact"} className="about-button">
                {content.button.label}
              </SmartLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

export function AboutQualificationsView({ content }: { content: AboutQualificationsContent | null }) {
  if (!content) return <Placeholder height={560} />;

  return (
    <section className="about-section qualification-section animate-fade-in">
      <div className="about-container">
        <div className="qualification-header">
          {content.label && <span className="section-label">{content.label}</span>}

          <h2 className="section-heading">
            {content.heading}
            {content.headingHighlight && (
              <>
                {" "}
                <span>{content.headingHighlight}</span>
              </>
            )}
          </h2>

          {content.description && <p className="about-copy">{content.description}</p>}
        </div>

        {content.items.length > 0 && (
          <div
            className={content.items.length < 5 ? "qualification-grid is-short" : "qualification-grid"}
            style={{ "--count": content.items.length } as CSSProperties}
          >
            {content.items.map((item, index) => (
              <div className="qualification-card" key={index}>
                <div className="qualification-number">{String(index + 1).padStart(2, "0")}</div>

                {item.year && <div className="qualification-year">{item.year}</div>}

                <h3>{item.degree}</h3>

                {item.institute && <p>{item.institute}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */

export function AboutCtaView({ content }: { content: AboutCtaContent | null }) {
  if (!content) return <Placeholder height={420} />;

  return (
    <section className="care-section animate-fade-in">
      <div className="about-container">
        <div className="care-box">
          <div className="care-content">
            {content.label && <span className="care-label">{content.label}</span>}

            <h2 className="care-heading">{content.heading}</h2>

            {content.text && <p className="care-text">{content.text}</p>}
          </div>

          <div className="hours-card">
            {content.hoursLabel && <span className="hours-card-label">{content.hoursLabel}</span>}

            {content.hoursTitle && <h3>{withLineBreaks(content.hoursTitle)}</h3>}

            {content.hoursTime && <div className="hours-time">{withLineBreaks(content.hoursTime)}</div>}

            {content.hoursNote && <p className="hours-note">{content.hoursNote}</p>}

            {content.button.label && (
              <SmartLink to={content.button.link || "/contact"} className="about-button">
                {content.button.label}
              </SmartLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
