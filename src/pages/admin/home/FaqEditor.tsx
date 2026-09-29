import { HelpCircle, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { EditorCard, ListEditor, TextField } from "../../../components/admin/fields";
import { FaqView } from "../../../components/FAQ";
import { HOME_FAQ_KEY, homeFaqDefaults } from "../../../content/homeSections";

const crumbs = [{ label: "Home", to: "/admin/home" }, { label: "FAQ" }];

export default function FaqEditor() {
  return (
    <SectionEditor
      contentKey={HOME_FAQ_KEY}
      defaults={homeFaqDefaults}
      crumbs={crumbs}
      title="FAQ Section"
      description="Frequently asked questions. The first one starts open."
      renderPreview={(draft) => <FaqView content={draft} />}
    >
      {({ draft, set }) => (
        <div className="grid items-start gap-6 xl:grid-cols-[2fr_3fr]">
          <EditorCard title="Heading" icon={Type} delay={160}>
            <TextField label="Small heading" value={draft.label} maxLength={40} onChange={(v) => set("label", v)} />
            <TextField label="Heading" required value={draft.heading} maxLength={150} onChange={(v) => set("heading", v)} />
          </EditorCard>

          <EditorCard title="Questions" description="Up to 20" icon={HelpCircle} delay={240}>
            <ListEditor
              items={draft.items}
              max={20}
              addLabel="Add question"
              createItem={() => ({ question: "", answer: "" })}
              onChange={(items) => set("items", items)}
              renderItem={(item, update) => (
                <div className="space-y-3">
                  <TextField
                    label="Question"
                    required
                    value={item.question}
                    maxLength={200}
                    onChange={(question) => update({ ...item, question })}
                  />
                  <TextField
                    label="Answer"
                    required
                    rows={4}
                    value={item.answer}
                    maxLength={1500}
                    onChange={(answer) => update({ ...item, answer })}
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
