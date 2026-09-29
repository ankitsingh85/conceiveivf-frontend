import { BarChart3, ClipboardList, ImageIcon, MousePointerClick, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import {
  ButtonFields,
  EditorCard,
  ImageField,
  ListEditor,
  ListInput,
  TextField,
} from "../../../components/admin/fields";
import { HeroView } from "../../../components/Hero";
import { HOME_BANNER_KEY, homeBannerDefaults, type HomeBannerContent } from "../../../content/homeBanner";

const crumbs = [{ label: "Home", to: "/admin/home" }, { label: "Banner" }];

export default function BannerEditor() {
  return (
    <SectionEditor
      contentKey={HOME_BANNER_KEY}
      defaults={homeBannerDefaults}
      crumbs={crumbs}
      title="Banner Section"
      description="The first section visitors see on the home page. Edit it below and check the live preview."
      renderPreview={(draft) => <HeroView content={draft} preview />}
    >
      {({ draft, set, update, showError }) => {
        const setEnquiry = (patch: Partial<HomeBannerContent["enquiry"]>) =>
          update((d) => ({ ...d, enquiry: { ...d.enquiry, ...patch } }));

        return (
          <div className="grid items-start gap-6 xl:grid-cols-2">
            <div className="space-y-6">
              <EditorCard title="Background image" description="Shown behind the banner text" icon={ImageIcon} delay={160}>
                <ImageField
                  value={draft.backgroundImage}
                  alt="Banner background"
                  onChange={(v) => set("backgroundImage", v)}
                  onError={showError}
                />
              </EditorCard>

              <EditorCard title="Headline & text" icon={Type} delay={240}>
                <TextField
                  label="Small heading"
                  value={draft.eyebrow}
                  maxLength={80}
                  placeholder="CONCEIVE IVF FERTILITY CENTRE"
                  onChange={(v) => set("eyebrow", v)}
                />
                <TextField
                  label="Main title"
                  required
                  rows={2}
                  value={draft.title}
                  maxLength={200}
                  hint="Press Enter to start a new line."
                  onChange={(v) => set("title", v)}
                />
                <TextField
                  label="Highlighted line"
                  value={draft.titleHighlight}
                  maxLength={80}
                  hint="Shown in italics after the main title. Leave empty to hide."
                  onChange={(v) => set("titleHighlight", v)}
                />
                <TextField
                  label="Description"
                  rows={4}
                  value={draft.description}
                  maxLength={600}
                  onChange={(v) => set("description", v)}
                />
                <TextField
                  label="Tagline"
                  value={draft.tagline}
                  maxLength={100}
                  placeholder="Creating Little Miracles."
                  onChange={(v) => set("tagline", v)}
                />
              </EditorCard>

              <EditorCard title="Buttons" icon={MousePointerClick} delay={320}>
                <p className="text-sm font-semibold text-gray-800">Main button</p>
                <ButtonFields
                  value={draft.primaryButton}
                  labelPlaceholder="Book a free first visit"
                  onChange={(v) => set("primaryButton", v)}
                />
                <div className="border-t border-line/70 pt-4">
                  <p className="text-sm font-semibold text-gray-800">Second button (optional)</p>
                </div>
                <ButtonFields value={draft.secondaryButton} onChange={(v) => set("secondaryButton", v)} />
              </EditorCard>
            </div>

            <div className="space-y-6">
              <EditorCard
                title="Highlights"
                description="Short facts shown under the tagline (up to 3)"
                icon={BarChart3}
                delay={200}
              >
                <ListEditor
                  items={draft.stats}
                  max={3}
                  addLabel="Add highlight"
                  createItem={() => ({ value: "", label: "" })}
                  onChange={(stats) => set("stats", stats)}
                  renderItem={(stat, updateStat) => (
                    <div className="grid gap-3 sm:grid-cols-[8rem_1fr]">
                      <TextField
                        label="Value"
                        required
                        value={stat.value}
                        maxLength={20}
                        placeholder="15+"
                        onChange={(value) => updateStat({ ...stat, value })}
                      />
                      <TextField
                        label="Label"
                        required
                        rows={2}
                        value={stat.label}
                        maxLength={50}
                        placeholder="YEARS OF CARE"
                        onChange={(label) => updateStat({ ...stat, label })}
                      />
                    </div>
                  )}
                />
              </EditorCard>

              <EditorCard
                title="Consultation form"
                description="Text on the booking form beside the banner"
                icon={ClipboardList}
                delay={280}
              >
                <TextField
                  label="Small heading"
                  value={draft.enquiry.label}
                  maxLength={40}
                  onChange={(label) => setEnquiry({ label })}
                />
                <TextField
                  label="Form title"
                  required
                  value={draft.enquiry.title}
                  maxLength={80}
                  onChange={(title) => setEnquiry({ title })}
                />
                <TextField
                  label="Subtitle"
                  rows={2}
                  value={draft.enquiry.subtitle}
                  maxLength={200}
                  onChange={(subtitle) => setEnquiry({ subtitle })}
                />
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-700">
                    Treatment options <span className="text-plum">*</span>
                  </p>
                  <ListEditor
                    items={draft.enquiry.treatments}
                    max={12}
                    addLabel="Add treatment"
                    compact
                    createItem={() => ""}
                    onChange={(treatments) => setEnquiry({ treatments })}
                    renderItem={(treatment, updateTreatment, i) => (
                      <ListInput
                        value={treatment}
                        maxLength={60}
                        placeholder={`Treatment ${i + 1}`}
                        onChange={updateTreatment}
                      />
                    )}
                  />
                </div>
                <TextField
                  label="Submit button text"
                  required
                  value={draft.enquiry.submitText}
                  maxLength={40}
                  onChange={(submitText) => setEnquiry({ submitText })}
                />
                <TextField
                  label="Note under the form"
                  value={draft.enquiry.note}
                  maxLength={160}
                  onChange={(note) => setEnquiry({ note })}
                />
              </EditorCard>
            </div>
          </div>
        );
      }}
    </SectionEditor>
  );
}
