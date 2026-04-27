import styles from "./PageLayout.module.css";

type Props = {
  title?: string;
  icon?: string;
  subtitle?: string;
  subtitleIcon?: string;
  children: React.ReactNode;
};

export const PageLayout = ({
  title,
  icon,
  subtitle,
  subtitleIcon,
  children,
}: Props) => {
  return (
    <div className={styles.contentSection}>
      <h2 className={styles.sectionTitle}>
        {icon && icon}
        {title}
      </h2>

      {subtitle && (
        <p className={styles.sectionSubtitle}>
          {subtitleIcon && subtitleIcon} {subtitle}
        </p>
      )}
      <>{children}</>
    </div>
  );
};
