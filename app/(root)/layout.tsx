"use client";

import { AppNavbar } from "@/components/shared/app-navbar";
import { BottomNavigation } from "@/components/shared/bottom-navigation";
import { AppNavbarProvider, useAppNavbar } from "@/context/app-navbar-context";

import { pageConfigs, usePageTitle } from "@/hooks/use-page-title";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

interface MobileLayoutProps {
  children: React.ReactNode;
  navbarProps?: Partial<React.ComponentProps<typeof AppNavbar>>;
}

function PageTitleSync() {
  const pathname = usePathname();
  const config = pageConfigs[pathname] || {
    title: "App",
    showBackButton: true,
  };
  const { setTitle } = useAppNavbar();

  useEffect(() => {
    if (config.title) setTitle(config.title);
  }, [pathname, setTitle, config.title]);

  return null;
}

export default function MobileLayout({
  children,
  navbarProps,
}: MobileLayoutProps) {
  const router = useRouter();
  const pageConfig = usePageTitle();

  const handleBackClick = () => {
    router.back();
  };

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  const handleSearchClick = () => {
    router.push("/search");
  };

  const handleMoreClick = () => {
    console.log("More options clicked");
  };
  const finalNavbarProps = {
    ...pageConfig,
    onBackClick: handleBackClick,
    onMenuClick: handleMenuClick,
    onSearchClick: handleSearchClick,
    onMoreClick: handleMoreClick,
    ...navbarProps,
  };
  return (
    <div className="min-h-screen bg-background">
      <AppNavbarProvider>
        <PageTitleSync />
        <AppNavbar {...finalNavbarProps} />
        <div className="pb-20 ">
          <div className="max-w-md mx-auto space-y-6">{children}</div>
        </div>
      </AppNavbarProvider>

      <BottomNavigation />
    </div>
  );
}
