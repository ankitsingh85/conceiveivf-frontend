import { ImageIcon, MessageSquareQuote, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { EditorCard, ImageField, ListEditor, TextField } from "../../../components/admin/fields";
import { TestimonialsView } from "../../../components/Testimonials";
import { HOME_TESTIMONIALS_KEY, homeTestimonialsDefaults } from "../../../content/homeSections";

const crumbs = [{ label: "Home", to: "/admin/home" }, { label: "Testimonials" }];

export default function TestimonialsEditor() {
  return (
    <SectionEditor
      contentKey={HOME_TESTIMONIALS_KEY}
      defaults={homeTestimonialsDefaults}
      crumbs={crumbs}
      title="Testimonials Section"
      description="Patient success stories, shown one at a time and rotating every 5 seconds."
      renderPreview={(draft) => <TestimonialsView content={draft} />}
    >
      {({ draft, set, showError }) => (
        <div className="grid items-start gap-6 xl:grid-cols-2">
          <div className="space-y-6">
            <EditorCard title="Heading" icon={Type} delay={160}>
              <TextField label="Small heading" value={draft.label} maxLength={60} onChange={(v) => set("label", v)} />
              <TextField label="Heading" required value={draft.heading} maxLength={150} onChange={(v) => set("heading", v)} />
            </EditorCard>

            <EditorCard title="Photo" icon={ImageIcon} delay={240}>
              <ImageField
                value={draft.image}
                alt={draft.imageAlt || "Testimonials photo"}
                aspectClass="aspect-[8/5]"
                hint="Remove it to hide the photo."
                onChange={(v) => set("image", v)}
                onError={showError}
              />
              <TextField label="Photo description" value={draft.imageAlt} maxLength={120} onChange={(v) => set("imageAlt", v)} />
              <TextField
                label="Quote on the photo"
                value={draft.imageQuote}
                maxLength={80}
                hint="Leave empty to hide."
                onChange={(v) => set("imageQuote", v)}
              />
            </EditorCard>
          </div>

          <EditorCard title="Stories" description="At least 1, up to 12" icon={MessageSquareQuote} delay={200}>
            <ListEditor
              items={draft.items}
              max={12}
              addLabel="Add story"
              createItem={() => ({ name: "", city: "", text: "" })}
              onChange={(items) => set("items", items)}
              renderItem={(item, update) => (
                <div className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <TextField
                      label="Name(s)"
                      required
                      value={item.name}
                      maxLength={80}
                      placeholder="Neha & Rohan"
                      onChange={(name) => update({ ...item, name })}
                    />
                    <TextField
                      label="City"
                      value={item.city}
                      maxLength={60}
                      onChange={(city) => update({ ...item, city })}
                    />
                  </div>
                  <TextField
                    label="Story"
                    required
                    rows={4}
                    value={item.text}
                    maxLength={800}
                    onChange={(text) => update({ ...item, text })}
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
