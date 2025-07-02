import { createContext, useContext, useState, ReactNode } from "react";

type AppNavbarContextValue = {
  title: string;
  setTitle: (title: string) => void;

  isAddNewExampleOpen?: boolean;
  setIsAddNewExampleOpen?: (show: boolean) => void;

  showPlusButton?: boolean;
  setShowPlusButton?: (show: boolean) => void;
  onPlusClick?: () => void;
  setOnPlusClick?: (cb: () => void) => void;
};

export const AppNavbarContext = createContext<
  AppNavbarContextValue | undefined
>(undefined);

export const AppNavbarProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("App");
  const [showPlusButton, setShowPlusButton] = useState(false);
  const [onPlusClick, setOnPlusClick] = useState<() => void>(() => () => {});

  const [isAddNewExampleOpen, setIsAddNewExampleOpen] =
    useState<boolean>(false);

  return (
    <AppNavbarContext.Provider
      value={{
        title,
        setTitle,
        setIsAddNewExampleOpen,
        isAddNewExampleOpen,
        showPlusButton,
        setShowPlusButton,
        onPlusClick,
        setOnPlusClick,
      }}
    >
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
