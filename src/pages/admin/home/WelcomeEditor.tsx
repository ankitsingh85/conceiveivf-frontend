import { ImageIcon, MousePointerClick, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { ButtonFields, EditorCard, ImageField, TextField } from "../../../components/admin/fields";
import { WelcomeView } from "../../../components/Services";
import { HOME_WELCOME_KEY, homeWelcomeDefaults } from "../../../content/homeSections";

const crumbs = [{ label: "Home", to: "/admin/home" }, { label: "Welcome" }];

export default function WelcomeEditor() {
  return (
    <SectionEditor
      contentKey={HOME_WELCOME_KEY}
      defaults={homeWelcomeDefaults}
      crumbs={crumbs}
      title="Welcome Section"
      description={'The "Welcome a little bundle of joy" block with a photo and button.'}
      renderPreview={(draft) => <WelcomeView content={draft} />}
    >
      {({ draft, set, showError }) => (
        <div className="grid items-start gap-6 xl:grid-cols-2">
          <EditorCard title="Photo" icon={ImageIcon} delay={160}>
            <ImageField
              value={draft.image}
              alt={draft.imageAlt || "Welcome photo"}
              aspectClass="aspect-[9/7]"
              hint="A landscape photo looks best. Remove it to hide the photo."
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

          <div className="space-y-6">
            <EditorCard title="Heading & text" icon={Type} delay={240}>
              <TextField label="Heading" required value={draft.heading} maxLength={150} onChange={(v) => set("heading", v)} />
              <TextField label="Text" rows={7} value={draft.text} maxLength={1500} onChange={(v) => set("text", v)} />
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
