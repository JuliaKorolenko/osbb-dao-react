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
    key: "members",
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
] as const;

type StatConfigItem = (typeof statsConfig)[number];
export type StatsData = Omit<StatConfigItem, "key"> & {
  value: string | number;
};
