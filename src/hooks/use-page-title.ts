import { useEffect } from "react";

const SITE_NAME = "Dimitar Slavchev";

export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title === SITE_NAME ? title : `${title} · ${SITE_NAME}`;

    return () => {
      document.title = previous;
    };
  }, [title]);
}
