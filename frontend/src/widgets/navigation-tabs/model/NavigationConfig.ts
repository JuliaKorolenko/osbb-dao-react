export const NavigationConfig = [
  {
    key: "proposals",
    label: "navigation.proposals",
    icon: "📋",
    path: "/",
  },
  {
    key: "create",
    label: "navigation.create",
    icon: "➕",
    path: "/create",
  },
  {
    key: "residents",
    label: "navigation.residents",
    icon: "👥",
    path: "/residents",
  },
  {
    key: "register",
    label: "navigation.register",
    icon: "📝",
    path: "/registration",
  },
  {
    key: "devTools",
    label: "navigation.devTools",
    icon: "🛠️",
    path: "/dev-tools",
  },
] as const;

export type ItemNavigationConfig = (typeof NavigationConfig)[number];

export type NavigationKey = ItemNavigationConfig["key"];

export type NavigationData = Omit<ItemNavigationConfig, "key">;
