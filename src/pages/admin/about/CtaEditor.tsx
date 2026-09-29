import { Clock, Megaphone, MousePointerClick } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { ButtonFields, EditorCard, TextField } from "../../../components/admin/fields";
import { AboutCtaView, AboutPageShell } from "../../../components/about/AboutSections";
import { ABOUT_CTA_KEY, aboutCtaDefaults } from "../../../content/aboutPage";

const crumbs = [{ label: "About", to: "/admin/about" }, { label: "Call to Action" }];

export default function CtaEditor() {
  return (
    <SectionEditor
      contentKey={ABOUT_CTA_KEY}
      defaults={aboutCtaDefaults}
      crumbs={crumbs}
      title="Call to Action"
      description="The closing box at the bottom of the About page, with working hours."
      renderPreview={(draft) => (
        <AboutPageShell>
          <AboutCtaView content={draft} />
        </AboutPageShell>
      )}
    >
      {({ draft, set }) => (
        <div className="grid items-start gap-6 xl:grid-cols-2">
          <EditorCard title="Message" description="Left side of the box" icon={Megaphone} delay={160}>
            <TextField label="Small heading" value={draft.label} maxLength={60} onChange={(v) => set("label", v)} />
            <TextField
              label="Heading"
              required
              rows={2}
              value={draft.heading}
              maxLength={200}
              onChange={(v) => set("heading", v)}
            />
            <TextField label="Text" rows={4} value={draft.text} maxLength={600} onChange={(v) => set("text", v)} />
          </EditorCard>

          <div className="space-y-6">
            <EditorCard title="Working hours card" description="Right side of the box" icon={Clock} delay={240}>
              <TextField
                label="Small heading"
                value={draft.hoursLabel}
                maxLength={40}
                onChange={(v) => set("hoursLabel", v)}
              />
              <TextField
                label="Card title"
                rows={2}
                value={draft.hoursTitle}
                maxLength={80}
                hint="Press Enter to start a new line."
                onChange={(v) => set("hoursTitle", v)}
              />
              <TextField
                label="Days & time"
                rows={2}
                value={draft.hoursTime}
                maxLength={80}
                placeholder={"Monday – Sunday\n10:00 AM – 6:00 PM"}
                onChange={(v) => set("hoursTime", v)}
              />
              <TextField label="Note" rows={3} value={draft.hoursNote} maxLength={300} onChange={(v) => set("hoursNote", v)} />
            </EditorCard>

            <EditorCard title="Button" icon={MousePointerClick} delay={320}>
              <ButtonFields value={draft.button} onChange={(v) => set("button", v)} />
            </EditorCard>
          </div>
        </div>
      )}
    </SectionEditor>
  );
}
