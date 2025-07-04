"use client";

import type React from "react";

import { useState } from "react";
import { Home, User, Brain, Book } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    href: "/",
  },
  {
    id: "notes",
    label: "Notes",
    icon: Book,
    href: "/notes",
  },
  {
    id: "Review",
    label: "Review",
    icon: Brain,
    href: "/review",
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    href: "/profile",
  },
];

export function BottomNavigation() {
  const [activeItem, setActiveItem] = useState("home");
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (item: NavItem) => {
    setActiveItem(item.id);
    router.push(item.href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
      <div className="flex items-center justify-around px-2 py-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === pathname;

          return (
            <button
              aria-label={item.id}
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={cn(
                "flex flex-col items-center justify-center min-w-0 flex-1 px-2 py-2 rounded-lg transition-colors duration-200",
                "hover:bg-accent hover:text-accent-foreground",
                isActive && "text-primary"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 mb-1 transition-all duration-200",
                  isActive && "scale-110"
                )}
              />
              <span
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-xs font-medium transition-all duration-200",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
