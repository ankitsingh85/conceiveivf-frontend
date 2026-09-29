import { Award, ImageIcon, MousePointerClick, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import {
  ButtonFields,
  EditorCard,
  ImageField,
  ListEditor,
  ListInput,
  TextField,
} from "../../../components/admin/fields";
import { AboutView } from "../../../components/About";
import { HOME_ABOUT_KEY, homeAboutDefaults } from "../../../content/homeAbout";
import doctorImage from "../../../images/doctor.webp";

const crumbs = [{ label: "Home", to: "/admin/home" }, { label: "About Us" }];

export default function AboutEditor() {
  return (
    <SectionEditor
      contentKey={HOME_ABOUT_KEY}
      defaults={homeAboutDefaults}
      crumbs={crumbs}
      title="About Us Section"
      description="The introduction to the clinic that follows the banner on the home page."
      renderPreview={(draft) => <AboutView content={draft} />}
    >
      {({ draft, set, showError }) => (
        <div className="grid items-start gap-6 xl:grid-cols-2">
          <div className="space-y-6">
            <EditorCard title="Main photo" icon={ImageIcon} delay={160}>
              <ImageField
                value={draft.image}
                fallbackSrc={doctorImage}
                alt={draft.imageAlt || "Main photo"}
                aspectClass="aspect-[4/3]"
                hint="A landscape photo looks best."
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

            <EditorCard
              title="Small photo"
              description="Overlaps the corner of the main photo (hidden on phones)"
              icon={ImageIcon}
              delay={240}
            >
              <ImageField
                value={draft.smallImage}
                alt={draft.smallImageAlt || "Small photo"}
                aspectClass="aspect-square max-w-[14rem]"
                hint="A square photo looks best. Remove it to hide the small photo."
                onChange={(v) => set("smallImage", v)}
                onError={showError}
              />
              <TextField
                label="Photo description"
                value={draft.smallImageAlt}
                maxLength={120}
                onChange={(v) => set("smallImageAlt", v)}
              />
            </EditorCard>

            <EditorCard
              title="Experience badge"
              description="The box on the top-left corner of the photo"
              icon={Award}
              delay={320}
            >
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
                  value={draft.badgeLabel}
                  maxLength={40}
                  placeholder="Years of trusted care"
                  onChange={(v) => set("badgeLabel", v)}
                />
              </div>
            </EditorCard>
          </div>

          <div className="space-y-6">
            <EditorCard title="Heading & text" icon={Type} delay={200}>
              <TextField
                label="Small heading"
                value={draft.label}
                maxLength={60}
                placeholder="About Us"
                onChange={(v) => set("label", v)}
              />
              <TextField
                label="Heading"
                required
                value={draft.heading}
                maxLength={150}
                onChange={(v) => set("heading", v)}
              />
              <div>
                <p className="mb-1 text-sm font-medium text-gray-700">Paragraphs</p>
                <p className="mb-3 text-xs text-gray-500">
                  Wrap words in <code className="rounded bg-gray-100 px-1">**double asterisks**</code> to
                  make them bold.
                </p>
                <ListEditor
                  items={draft.paragraphs}
                  max={8}
                  addLabel="Add paragraph"
                  createItem={() => ""}
                  onChange={(paragraphs) => set("paragraphs", paragraphs)}
                  renderItem={(paragraph, update, i) => (
                    <ListInput
                      rows={4}
                      value={paragraph}
                      maxLength={1500}
                      placeholder={`Paragraph ${i + 1}`}
                      onChange={update}
                    />
                  )}
                />
              </div>
            </EditorCard>

            <EditorCard title="Button" icon={MousePointerClick} delay={280}>
              <ButtonFields
                value={draft.button}
                labelPlaceholder="Talk to a Specialist"
                onChange={(v) => set("button", v)}
              />
            </EditorCard>
          </div>
        </div>
      )}
    </SectionEditor>
  );
}
