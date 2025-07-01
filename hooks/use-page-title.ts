"use client";

import { usePathname } from "next/navigation";

interface PageConfig {
  title: string;
  showBackButton?: boolean;
  showSearchButton?: boolean;
  showMoreButton?: boolean;
  showMenuButton?: boolean;
}

export const pageConfigs: Record<string, PageConfig> = {
  "/": {
    title: "Lingua Note",
    showMenuButton: true,
    showSearchButton: true,
  },
  "/notes": {
    title: "Notes",
    showBackButton: false,
    showMoreButton: false,
  },
  "/review": {
    title: "Review",
    showSearchButton: false,
    showMoreButton: false,
  },
  "/profile": {
    title: "Profile",
    showMoreButton: false,
  },
  "/search": {
    title: "Search",
    showBackButton: true,
  },
};

export function usePageTitle(title?: string) {
  const pathname = usePathname();
  const config = pageConfigs[pathname] || {
    title: title || "App",
    showBackButton: true,
  };

  return config;
}
