import { useSiteContent } from "../hooks/useSiteContent";
import {
  AboutCtaView,
  AboutDoctorView,
  AboutHeroView,
  AboutPageShell,
  AboutQualificationsView,
} from "../components/about/AboutSections";
import {
  ABOUT_CTA_KEY,
  ABOUT_DOCTOR_KEY,
  ABOUT_HERO_KEY,
  ABOUT_QUALIFICATIONS_KEY,
  aboutCtaDefaults,
  aboutDoctorDefaults,
  aboutHeroDefaults,
  aboutQualificationsDefaults,
} from "../content/aboutPage";

export default function About() {
  const hero = useSiteContent(ABOUT_HERO_KEY, aboutHeroDefaults);
  const doctor = useSiteContent(ABOUT_DOCTOR_KEY, aboutDoctorDefaults);
  const qualifications = useSiteContent(ABOUT_QUALIFICATIONS_KEY, aboutQualificationsDefaults);
  const cta = useSiteContent(ABOUT_CTA_KEY, aboutCtaDefaults);

  return (
    <AboutPageShell>
      {/* Hero */}
      <AboutHeroView content={hero} />

      {/* About Doctor */}
      <AboutDoctorView content={doctor} />

      {/* Qualifications */}
      <AboutQualificationsView content={qualifications} />

      {/* CTA */}
      <AboutCtaView content={cta} />
    </AboutPageShell>
  );
}
