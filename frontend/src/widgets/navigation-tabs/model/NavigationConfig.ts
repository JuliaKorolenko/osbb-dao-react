export const NavigationConfig = [
  {
    key: "proposals",
    title: "Пропозицій",
    icon: "📋",
    path: "/",
  },
  {
    key: "create",
    title: "Створити",
    icon: "➕",
    path: "/create",
  },
  {
    key: "residents",
    title: "Мешканці",
    icon: "👥",
    path: "/residents",
  },
  {
    key: "register",
    title: "Реєстрація",
    icon: "📝",
    path: "/registration",
  },
  {
    key: "devTools",
    title: "Dev tools",
    icon: "🛠️",
    path: "/dev-tools",
  },
] as const;

export type ItemNavigationConfig = (typeof NavigationConfig)[number];

export type NavigationKey = ItemNavigationConfig["key"];

export type NavigationData = Omit<ItemNavigationConfig, "key">;
