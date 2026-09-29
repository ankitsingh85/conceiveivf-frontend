import { Award, CheckSquare, ImageIcon, MousePointerClick, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import {
  ButtonFields,
  EditorCard,
  ImageField,
  ListEditor,
  ListInput,
  TextField,
} from "../../../components/admin/fields";
import { AboutDoctorView, AboutPageShell } from "../../../components/about/AboutSections";
import { ABOUT_DOCTOR_KEY, aboutDoctorDefaults } from "../../../content/aboutPage";

const crumbs = [{ label: "About", to: "/admin/about" }, { label: "Doctor Profile" }];

export default function DoctorEditor() {
  return (
    <SectionEditor
      contentKey={ABOUT_DOCTOR_KEY}
      defaults={aboutDoctorDefaults}
      crumbs={crumbs}
      title="Doctor Profile"
      description="The doctor's photo, introduction and key strengths."
      renderPreview={(draft) => (
        <AboutPageShell>
          <AboutDoctorView content={draft} />
        </AboutPageShell>
      )}
    >
      {({ draft, set, showError }) => (
        <div className="grid items-start gap-6 xl:grid-cols-2">
          <div className="space-y-6">
            <EditorCard title="Photo" icon={ImageIcon} delay={160}>
              <ImageField
                value={draft.image}
                alt={draft.imageAlt || "Doctor photo"}
                aspectClass="aspect-[4/5] max-w-xs"
                hint="A portrait photo (taller than wide) looks best."
                onChange={(v) => set("image", v)}
                onError={showError}
              />
              <TextField
                label="Photo description"
                value={draft.imageAlt}
                maxLength={120}
                hint="Read aloud by screen readers and used by search engines."
                onChange={(v) => set("imageAlt", v)}
              />
            </EditorCard>

            <EditorCard title="Experience badge" description="The round badge on the photo" icon={Award} delay={240}>
              <div className="grid gap-4 sm:grid-cols-[8rem_1fr]">
                <TextField
                  label="Value"
                  value={draft.badgeValue}
                  maxLength={10}
                  placeholder="15+"
                  hint="Empty hides the badge."
                  onChange={(v) => set("badgeValue", v)}
                />
                <TextField
                  label="Label"
                  rows={2}
                  value={draft.badgeLabel}
                  maxLength={40}
                  placeholder="Years of Experience"
                  onChange={(v) => set("badgeLabel", v)}
                />
              </div>
            </EditorCard>
          </div>

          <div className="space-y-6">
            <EditorCard title="Heading & introduction" icon={Type} delay={200}>
              <TextField label="Small heading" value={draft.label} maxLength={80} onChange={(v) => set("label", v)} />
              <TextField label="Heading" required value={draft.heading} maxLength={150} onChange={(v) => set("heading", v)} />
              <TextField
                label="Highlighted words"
                value={draft.headingHighlight}
                maxLength={60}
                hint="Shown in gold at the end of the heading."
                onChange={(v) => set("headingHighlight", v)}
              />
              <div>
                <p className="mb-2 text-sm font-medium text-gray-700">Paragraphs</p>
                <ListEditor
                  items={draft.paragraphs}
                  max={6}
                  addLabel="Add paragraph"
                  createItem={() => ""}
                  onChange={(paragraphs) => set("paragraphs", paragraphs)}
                  renderItem={(paragraph, update, i) => (
                    <ListInput rows={4} value={paragraph} maxLength={1200} placeholder={`Paragraph ${i + 1}`} onChange={update} />
                  )}
                />
              </div>
            </EditorCard>

            <EditorCard
              title="Key strengths"
              description="Ticked boxes under the introduction (up to 8)"
              icon={CheckSquare}
              delay={280}
            >
              <ListEditor
                items={draft.highlights}
                max={8}
                addLabel="Add strength"
                compact
                createItem={() => ""}
                onChange={(highlights) => set("highlights", highlights)}
                renderItem={(highlight, update, i) => (
                  <ListInput value={highlight} maxLength={80} placeholder={`Strength ${i + 1}`} onChange={update} />
                )}
              />
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
