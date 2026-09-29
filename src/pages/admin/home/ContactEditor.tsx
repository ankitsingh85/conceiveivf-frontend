import { ClipboardList, MapPin, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { EditorCard, ListEditor, ListInput, TextField } from "../../../components/admin/fields";
import { ContactView } from "../../../components/Contact";
import { HOME_CONTACT_KEY, homeContactDefaults } from "../../../content/homeSections";

const crumbs = [{ label: "Home", to: "/admin/home" }, { label: "Contact" }];

export default function ContactEditor() {
  return (
    <SectionEditor
      contentKey={HOME_CONTACT_KEY}
      defaults={homeContactDefaults}
      crumbs={crumbs}
      title="Contact Section"
      description="Contact details and the consultation request form at the bottom of the home page."
      renderPreview={(draft) => <ContactView content={draft} preview />}
    >
      {({ draft, set }) => (
        <div className="grid items-start gap-6 xl:grid-cols-2">
          <div className="space-y-6">
            <EditorCard title="Heading & text" icon={Type} delay={160}>
              <TextField label="Small heading" value={draft.label} maxLength={60} onChange={(v) => set("label", v)} />
              <TextField label="Heading" required value={draft.heading} maxLength={150} onChange={(v) => set("heading", v)} />
              <TextField
                label="Description"
                rows={3}
                value={draft.description}
                maxLength={400}
                onChange={(v) => set("description", v)}
              />
            </EditorCard>

            <EditorCard title="Contact details" description="Empty fields are hidden" icon={MapPin} delay={240}>
              <TextField
                label="Address"
                rows={3}
                value={draft.address}
                maxLength={300}
                hint="Press Enter to start a new line."
                onChange={(v) => set("address", v)}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                  label="Phone"
                  value={draft.phone}
                  maxLength={30}
                  placeholder="+91 92552 78000"
                  onChange={(v) => set("phone", v)}
                />
                <TextField label="Email" value={draft.email} maxLength={120} onChange={(v) => set("email", v)} />
              </div>
              <TextField
                label="Opening hours"
                value={draft.hours}
                maxLength={100}
                placeholder="Mon – Sun: 10:00 AM – 6:00 PM"
                onChange={(v) => set("hours", v)}
              />
            </EditorCard>
          </div>

          <EditorCard title="Request form" icon={ClipboardList} delay={200}>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-700">
                Treatment options <span className="text-plum">*</span>
              </p>
              <ListEditor
                items={draft.treatments}
                max={12}
                addLabel="Add treatment"
                compact
                createItem={() => ""}
                onChange={(treatments) => set("treatments", treatments)}
                renderItem={(treatment, update, i) => (
                  <ListInput value={treatment} maxLength={60} placeholder={`Option ${i + 1}`} onChange={update} />
                )}
              />
            </div>
            <TextField
              label="Submit button text"
              required
              value={draft.submitText}
              maxLength={40}
              onChange={(v) => set("submitText", v)}
            />
            <div className="border-t border-line/70 pt-4">
              <p className="text-sm font-semibold text-gray-800">After the form is sent</p>
              <p className="text-xs text-gray-500">Submit the form in the preview above to see this message.</p>
            </div>
            <TextField
              label="Thank-you title"
              required
              value={draft.successTitle}
              maxLength={80}
              onChange={(v) => set("successTitle", v)}
            />
            <TextField
              label="Thank-you message"
              rows={3}
              value={draft.successText}
              maxLength={300}
              onChange={(v) => set("successText", v)}
            />
          </EditorCard>
        </div>
      )}
    </SectionEditor>
  );
}
