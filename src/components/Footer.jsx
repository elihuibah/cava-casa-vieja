import { useLanguage } from "../context/useLanguage";
import { Icon } from "./Icon";

// Sits on the location section's background (see App.jsx).
export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative px-8 pt-12 pb-10 text-center text-stone-100">
      <div className="max-w-5xl mx-auto">
        <div
          aria-hidden="true"
          className="flex items-center gap-4 mx-auto max-w-2xl"
        >
          <div className="flex-1 h-px bg-stone-100" />
          <Icon
            src="/boxicons_wine-filled.svg"
            colorClass="bg-stone-100"
            className="block w-7.5 h-7.5"
          />
          <div className="flex-1 h-px bg-stone-100" />
        </div>
        <img
          src="./Logo.svg"
          alt={t("header.logoAlt")}
          className="mx-auto mt-8 h-12 w-auto"
        />
        <p className="mt-4">
          {t("footer.rights")} {new Date().getFullYear()}
        </p>
        <p className="mt-4 mx-auto max-w-3xl text-sm text-stone-200">
          {t("footer.disclaimer")}
        </p>
      </div>
    </footer>
  );
}
