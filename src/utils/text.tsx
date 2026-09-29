import { Fragment, type ReactNode } from "react";

// Turns "\n" in admin-entered text into line breaks
export const withLineBreaks = (text: string) =>
  text.split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));

// Turns **words** in admin-entered text into bold
export const withBold = (text: string, boldClassName?: string): ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") && part.length > 4 ? (
      <strong key={i} className={boldClassName}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
