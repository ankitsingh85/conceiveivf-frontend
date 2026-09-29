import { LayoutGrid, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { EditorCard, ImageThumbField, ListEditor, ListInput, TextField } from "../../../components/admin/fields";
import { ParenthoodJourneyView } from "../../../components/ParenthoodJourney";
import { HOME_TREATMENTS_KEY, homeTreatmentsDefaults } from "../../../content/homeSections";

const crumbs = [{ label: "Home", to: "/admin/home" }, { label: "Treatments" }];

export default function TreatmentsEditor() {
  return (
    <SectionEditor
      contentKey={HOME_TREATMENTS_KEY}
      defaults={homeTreatmentsDefaults}
      crumbs={crumbs}
      title="Treatments Section"
      description={'The "Your Journey to Parenthood" grid of treatment cards.'}
      renderPreview={(draft) => <ParenthoodJourneyView content={draft} />}
    >
      {({ draft, set, showError }) => (
        <div className="grid items-start gap-6 xl:grid-cols-[2fr_3fr]">
          <EditorCard title="Heading & text" icon={Type} delay={160}>
            <TextField label="Small heading" value={draft.label} maxLength={80} onChange={(v) => set("label", v)} />
            <TextField label="Heading" required value={draft.heading} maxLength={150} onChange={(v) => set("heading", v)} />
            <TextField
              label="Description"
              rows={3}
              value={draft.description}
              maxLength={400}
              onChange={(v) => set("description", v)}
            />
          </EditorCard>

          <EditorCard
            title="Treatment cards"
            description="Numbered automatically in this order (up to 24)"
            icon={LayoutGrid}
            delay={240}
          >
            <ListEditor
              items={draft.items}
              max={24}
              addLabel="Add treatment"
              createItem={() => ({ title: "", image: "", link: "" })}
              onChange={(items) => set("items", items)}
              renderItem={(item, update, i) => (
                <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
                  <ImageThumbField
                    value={item.image}
                    alt={item.title}
                    onChange={(image) => update({ ...item, image })}
                    onError={showError}
                  />
                  <div className="space-y-2">
                    <ListInput
                      value={item.title}
                      maxLength={80}
                      placeholder={`Treatment ${i + 1} name`}
                      onChange={(title) => update({ ...item, title })}
                    />
                    <input
                      className="w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-sm text-plum outline-none placeholder:text-gray-400 focus:border-plum focus:ring-2 focus:ring-plum/20"
                      value={item.link}
                      maxLength={500}
                      placeholder="Link: /egg-freezing, #contact or https://..."
                      onChange={(e) => update({ ...item, link: e.target.value })}
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
