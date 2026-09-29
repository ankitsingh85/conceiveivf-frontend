import { GraduationCap, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { EditorCard, ListEditor, TextField } from "../../../components/admin/fields";
import { AboutPageShell, AboutQualificationsView } from "../../../components/about/AboutSections";
import { ABOUT_QUALIFICATIONS_KEY, aboutQualificationsDefaults } from "../../../content/aboutPage";

const crumbs = [{ label: "About", to: "/admin/about" }, { label: "Qualifications" }];

export default function QualificationsEditor() {
  return (
    <SectionEditor
      contentKey={ABOUT_QUALIFICATIONS_KEY}
      defaults={aboutQualificationsDefaults}
      crumbs={crumbs}
      title="Qualifications"
      description="Degrees, fellowships and training, shown as numbered cards."
      renderPreview={(draft) => (
        <AboutPageShell>
          <AboutQualificationsView content={draft} />
        </AboutPageShell>
      )}
    >
      {({ draft, set }) => (
        <div className="grid items-start gap-6 xl:grid-cols-[2fr_3fr]">
          <EditorCard title="Heading & text" icon={Type} delay={160}>
            <TextField label="Small heading" value={draft.label} maxLength={80} onChange={(v) => set("label", v)} />
            <TextField label="Heading" required value={draft.heading} maxLength={150} onChange={(v) => set("heading", v)} />
            <TextField
              label="Highlighted words"
              value={draft.headingHighlight}
              maxLength={60}
              hint="Shown in gold at the end of the heading."
              onChange={(v) => set("headingHighlight", v)}
            />
            <TextField
              label="Description"
              rows={4}
              value={draft.description}
              maxLength={600}
              onChange={(v) => set("description", v)}
            />
          </EditorCard>

          <EditorCard
            title="Qualifications"
            description="Numbered automatically in this order (up to 10)"
            icon={GraduationCap}
            delay={240}
          >
            <ListEditor
              items={draft.items}
              max={10}
              addLabel="Add qualification"
              createItem={() => ({ year: "", degree: "", institute: "" })}
              onChange={(items) => set("items", items)}
              renderItem={(item, update, i) => (
                <div className="space-y-3">
                  <p className="text-xs font-bold tracking-wider text-plum">{String(i + 1).padStart(2, "0")}</p>
                  <div className="grid gap-3 sm:grid-cols-[9rem_1fr]">
                    <TextField
                      label="Year"
                      value={item.year}
                      maxLength={30}
                      placeholder="Jun, 2011"
                      onChange={(year) => update({ ...item, year })}
                    />
                    <TextField
                      label="Degree / course"
                      required
                      value={item.degree}
                      maxLength={120}
                      onChange={(degree) => update({ ...item, degree })}
                    />
                  </div>
                  <TextField
                    label="Institute"
                    rows={2}
                    value={item.institute}
                    maxLength={200}
                    onChange={(institute) => update({ ...item, institute })}
                  />
                </div>
              )}
            />
          </EditorCard>
        </div>
      )}
    </SectionEditor>
  );
}
