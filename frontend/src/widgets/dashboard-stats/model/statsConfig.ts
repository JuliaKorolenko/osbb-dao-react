type StatConfigItem = {
  key: "balance" | "residents" | "proposals" | "votes";
  title: string;
  icon: string;
  iconColor: string;
  subtitle: string;
  isBalance?: boolean;
};

export const statsConfig = [
  {
    key: "balance",
    title: "Баланс ОСББ",
    icon: "💰",
    iconColor: "purple",
    isBalance: true,
    subtitle: "Фонд будинку",
  },
  {
    key: "residents",
    title: "Мешканців",
    icon: "👥",
    iconColor: "green",
    isBalance: false,
    subtitle: "м² загальна площа",
  },
  {
    key: "proposals",
    title: "Пропозицій",
    icon: "📋",
    iconColor: "blue",
    isBalance: false,
    subtitle: "Всього створено",
  },
  {
    key: "votes",
    title: "Ваш голос",
    icon: "🗳️",
    iconColor: "orange",
    isBalance: false,
    subtitle: "м² квартира",
  },
] satisfies readonly StatConfigItem[];

export type StatKey = (typeof statsConfig)[number]["key"];

export type StatCardProps = Omit<StatConfigItem, "key"> & {
  value: string | number;
};

// type StatConfigItem = (typeof statsConfig)[number];
// export type StatsData = Omit<StatConfigItem, "key"> & {
//   value: string | number;
// };
