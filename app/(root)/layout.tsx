"use client";

import { AppNavbar } from "@/components/shared/app-navbar";
import { BottomNavigation } from "@/components/shared/bottom-navigation";
import { usePageTitle } from "@/hooks/use-page-title";
import { useRouter } from "next/navigation";

interface MobileLayoutProps {
  children: React.ReactNode;
  navbarProps?: Partial<React.ComponentProps<typeof AppNavbar>>;
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
      <AppNavbar {...finalNavbarProps} />
      <div className="pb-20 px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">{children}</div>
      </div>

      <BottomNavigation />
    </div>
  );
}
