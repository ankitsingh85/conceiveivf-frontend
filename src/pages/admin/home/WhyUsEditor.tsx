import { ListChecks, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { EditorCard, ListEditor, TextField } from "../../../components/admin/fields";
import { WhyUsView } from "../../../components/WhyUs";
import { HOME_WHY_US_KEY, homeWhyUsDefaults } from "../../../content/homeSections";

const crumbs = [{ label: "Home", to: "/admin/home" }, { label: "Why Choose Us" }];

export default function WhyUsEditor() {
  return (
    <SectionEditor
      contentKey={HOME_WHY_US_KEY}
      defaults={homeWhyUsDefaults}
      crumbs={crumbs}
      title="Why Choose Us Section"
      description="The dark section with numbered reasons to choose the clinic."
      renderPreview={(draft) => <WhyUsView content={draft} />}
    >
      {({ draft, set }) => (
        <div className="grid items-start gap-6 xl:grid-cols-[2fr_3fr]">
          <EditorCard title="Heading & text" icon={Type} delay={160}>
            <TextField label="Small heading" value={draft.label} maxLength={60} onChange={(v) => set("label", v)} />
            <TextField label="Heading" required value={draft.heading} maxLength={150} onChange={(v) => set("heading", v)} />
            <TextField
              label="Description"
              rows={6}
              value={draft.description}
              maxLength={800}
              hint="Wrap words in **double asterisks** to show them in gold bold."
              onChange={(v) => set("description", v)}
            />
          </EditorCard>

          <EditorCard title="Reasons" description="Numbered cards (up to 9)" icon={ListChecks} delay={240}>
            <ListEditor
              items={draft.items}
              max={9}
              addLabel="Add reason"
              createItem={() => ({ title: "", description: "" })}
              onChange={(items) => set("items", items)}
              renderItem={(item, update, i) => (
                <div className="space-y-3">
                  <p className="text-xs font-bold tracking-wider text-plum">{String(i + 1).padStart(2, "0")}</p>
                  <TextField
                    label="Title"
                    required
                    value={item.title}
                    maxLength={100}
                    onChange={(title) => update({ ...item, title })}
                  />
                  <TextField
                    label="Description"
                    rows={3}
                    value={item.description}
                    maxLength={400}
                    onChange={(description) => update({ ...item, description })}
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
