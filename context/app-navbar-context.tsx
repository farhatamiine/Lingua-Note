import { createContext, useContext, useState, ReactNode } from "react";

type AppNavbarContextValue = {
  title: string;
  setTitle: (title: string) => void;
};

export const AppNavbarContext = createContext<
  AppNavbarContextValue | undefined
>(undefined);

export const AppNavbarProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("App");
  return (
    <AppNavbarContext.Provider value={{ title, setTitle }}>
      {children}
    </AppNavbarContext.Provider>
  );
};

export function useAppNavbar() {
  const context = useContext(AppNavbarContext);
  if (!context) {
    throw new Error("useAppNavbar must be used within an AppNavbarProvider");
  }
  return context;
}
