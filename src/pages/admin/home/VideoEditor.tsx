import { PlayCircle, Type } from "lucide-react";
import SectionEditor from "../../../components/admin/SectionEditor";
import { EditorCard, ImageField, TextField } from "../../../components/admin/fields";
import { VideoView } from "../../../components/Video";
import { HOME_VIDEO_KEY, homeVideoDefaults } from "../../../content/homeSections";

const crumbs = [{ label: "Home", to: "/admin/home" }, { label: "Video" }];

export default function VideoEditor() {
  return (
    <SectionEditor
      contentKey={HOME_VIDEO_KEY}
      defaults={homeVideoDefaults}
      crumbs={crumbs}
      title="Video Section"
      description="A cover image with a play button that opens your video."
      renderPreview={(draft) => <VideoView content={draft} />}
    >
      {({ draft, set, showError }) => (
        <div className="grid items-start gap-6 xl:grid-cols-2">
          <EditorCard title="Video" icon={PlayCircle} delay={160}>
            <TextField
              label="Video link"
              value={draft.videoUrl}
              maxLength={500}
              placeholder="https://www.youtube.com/watch?v=..."
              hint="Opens in a new tab when the play button is clicked. Leave empty to hide the play button."
              onChange={(v) => set("videoUrl", v)}
            />
            <ImageField
              value={draft.posterImage}
              alt={draft.posterAlt || "Video cover image"}
              hint="Shown behind the play button. A wide image looks best."
              onChange={(v) => set("posterImage", v)}
              onError={showError}
            />
            <TextField
              label="Cover image description"
              value={draft.posterAlt}
              maxLength={120}
              onChange={(v) => set("posterAlt", v)}
            />
          </EditorCard>

          <EditorCard title="Heading & text" icon={Type} delay={240}>
            <TextField label="Small heading" value={draft.label} maxLength={60} onChange={(v) => set("label", v)} />
            <TextField label="Title" required value={draft.title} maxLength={120} onChange={(v) => set("title", v)} />
            <TextField
              label="Highlighted words"
              value={draft.titleHighlight}
              maxLength={60}
              hint="Shown in gold at the end of the title."
              onChange={(v) => set("titleHighlight", v)}
            />
            <TextField
              label="Description"
              rows={3}
              value={draft.description}
              maxLength={300}
              onChange={(v) => set("description", v)}
            />
            <TextField
              label="Line under the video"
              value={draft.bottomText}
              maxLength={120}
              onChange={(v) => set("bottomText", v)}
            />
          </EditorCard>
        </div>
      )}
    </SectionEditor>
  );
}
