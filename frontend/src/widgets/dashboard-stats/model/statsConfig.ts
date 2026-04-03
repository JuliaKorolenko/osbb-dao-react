type StatConfigItem = {
  key: "balance" | "residents" | "proposals" | "votes";
  label: string;
  icon: string;
  iconColor: string;
  sublabel: string;
  isBalance?: boolean;
};

export const statsConfig = [
  {
    key: "balance",
    label: "dashboard.balance",
    icon: "💰",
    iconColor: "purple",
    isBalance: true,
    sublabel: "dashboard.fund",
  },
  {
    key: "residents",
    label: "dashboard.residents",
    icon: "👥",
    iconColor: "green",
    isBalance: false,
    sublabel: "dashboard.total-area",
  },
  {
    key: "proposals",
    label: "dashboard.proposals",
    icon: "📋",
    iconColor: "blue",
    isBalance: false,
    sublabel: "dashboard.proposals-created",
  },
  {
    key: "votes",
    label: "dashboard.votes",
    icon: "🗳️",
    iconColor: "orange",
    isBalance: false,
    sublabel: "dashboard.appartment-area",
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
