import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LayoutTemplate } from "lucide-react";
import { apiRequest } from "../../lib/api";
import PageHeader from "../../components/admin/PageHeader";
import type { AdminSubNavItem } from "../../components/admin/adminNav";

type SectionMeta = { key: string; updatedAt: string | null; updatedBy: string | null };

type AdminSectionsOverviewProps = {
  pageName: string; // e.g. "Home" or "About"
  sections: AdminSubNavItem[];
};

// Lists the editable sections of one website page
export default function AdminSectionsOverview({ pageName, sections }: AdminSectionsOverviewProps) {
  const [meta, setMeta] = useState<Record<string, SectionMeta>>({});

  useEffect(() => {
    apiRequest<{ sections: SectionMeta[] }>("/content", { auth: true })
      .then(({ sections }) => setMeta(Object.fromEntries(sections.map((s) => [s.key, s]))))
      .catch(() => {
        // "last saved" info is optional here; the section links still work
      });
  }, []);

  return (
    <>
      <PageHeader crumbs={[{ label: pageName }]} />

      <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="fade-up mb-6">
          <h1 className="font-display text-2xl font-semibold text-plum sm:text-3xl">{pageName} Page</h1>
          <p className="mt-1 text-gray-500">Choose a section of the {pageName.toLowerCase()} page to edit.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section, i) => {
            const updatedAt = meta[section.contentKey]?.updatedAt;
            return (
              <Link
                key={section.path}
                to={section.path}
                className="fade-up group flex flex-col rounded-2xl border border-line/70 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-plum/30 hover:shadow-xl hover:shadow-plum/10 sm:p-6"
                style={{ animationDelay: `${80 + i * 80}ms` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-gold-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <LayoutTemplate className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-plum">{section.label}</h2>
                <p className="mt-1 flex-1 text-sm text-gray-500">{section.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-line/70 pt-4 text-sm">
                  <span className="text-gray-400">
                    {updatedAt
                      ? `Saved ${new Date(updatedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`
                      : "Not edited yet"}
                  </span>
                  <span className="flex items-center gap-1.5 font-semibold text-plum">
                    Edit
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
