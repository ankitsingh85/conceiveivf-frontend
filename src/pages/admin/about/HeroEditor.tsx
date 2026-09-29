import { ImageIcon, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { EditorCard, ImageField, TextField } from "../../../components/admin/fields";
import { AboutHeroView, AboutPageShell } from "../../../components/about/AboutSections";
import { ABOUT_HERO_KEY, aboutHeroDefaults } from "../../../content/aboutPage";

const crumbs = [{ label: "About", to: "/admin/about" }, { label: "Page Banner" }];

export default function HeroEditor() {
  return (
    <SectionEditor
      contentKey={ABOUT_HERO_KEY}
      defaults={aboutHeroDefaults}
      crumbs={crumbs}
      title="Page Banner"
      description="The heading area at the top of the About page."
      renderPreview={(draft) => (
        <AboutPageShell>
          <AboutHeroView content={draft} />
        </AboutPageShell>
      )}
    >
      {({ draft, set, showError }) => (
        <div className="grid items-start gap-6 xl:grid-cols-2">
          <EditorCard
            title="Background image"
            description="Shown behind the heading, under a dark overlay"
            icon={ImageIcon}
            delay={160}
          >
            <ImageField
              value={draft.backgroundImage}
              alt="About page banner background"
              onChange={(v) => set("backgroundImage", v)}
              onError={showError}
            />
          </EditorCard>

          <EditorCard title="Heading & text" icon={Type} delay={240}>
            <TextField
              label="Small heading"
              value={draft.label}
              maxLength={80}
              placeholder="Conceive IVF Fertility Centre"
              onChange={(v) => set("label", v)}
            />
            <TextField label="Title" required value={draft.title} maxLength={120} onChange={(v) => set("title", v)} />
            <TextField
              label="Highlighted line"
              value={draft.titleHighlight}
              maxLength={80}
              hint="Shown in gold on its own line under the title. Leave empty to hide."
              onChange={(v) => set("titleHighlight", v)}
            />
            <TextField
              label="Description"
              rows={3}
              value={draft.description}
              maxLength={400}
              onChange={(v) => set("description", v)}
            />
          </EditorCard>
        </div>
      )}
    </SectionEditor>
  );
}
