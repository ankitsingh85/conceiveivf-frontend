import { Footprints, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { EditorCard, ListEditor, TextField } from "../../../components/admin/fields";
import { ProcessView } from "../../../components/Process";
import { HOME_PROCESS_KEY, homeProcessDefaults } from "../../../content/homeSections";

const crumbs = [{ label: "Home", to: "/admin/home" }, { label: "Process Steps" }];

export default function ProcessEditor() {
  return (
    <SectionEditor
      contentKey={HOME_PROCESS_KEY}
      defaults={homeProcessDefaults}
      crumbs={crumbs}
      title="Process Steps Section"
      description="The numbered steps from first consultation to your miracle."
      renderPreview={(draft) => <ProcessView content={draft} />}
    >
      {({ draft, set }) => (
        <div className="grid items-start gap-6 xl:grid-cols-[2fr_3fr]">
          <EditorCard title="Heading" icon={Type} delay={160}>
            <TextField label="Small heading" value={draft.label} maxLength={60} onChange={(v) => set("label", v)} />
            <TextField
              label="Heading"
              required
              value={draft.heading}
              maxLength={150}
              hint={`Tip: if the heading mentions a number of steps, update it when you add or remove steps (you have ${draft.steps.length}).`}
              onChange={(v) => set("heading", v)}
            />
          </EditorCard>

          <EditorCard title="Steps" description="Shown left to right in this order (1 to 6 steps)" icon={Footprints} delay={240}>
            <ListEditor
              items={draft.steps}
              max={6}
              addLabel="Add step"
              createItem={() => ({ title: "", description: "" })}
              onChange={(steps) => set("steps", steps)}
              renderItem={(step, update, i) => (
                <div className="grid gap-3 sm:grid-cols-[2.5rem_1fr]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#C6A15B] to-[#B08B48] font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="space-y-3">
                    <TextField
                      label="Title"
                      required
                      value={step.title}
                      maxLength={60}
                      onChange={(title) => update({ ...step, title })}
                    />
                    <TextField
                      label="Description"
                      rows={2}
                      value={step.description}
                      maxLength={300}
                      onChange={(description) => update({ ...step, description })}
                    />
                  </div>
                </div>
              )}
            />
          </EditorCard>
        </div>
      )}
    </SectionEditor>
  );
}
