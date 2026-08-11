import { useLanguage } from "../context/useLanguage";
import { Icon } from "./Icon";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-olive-800/90 w-full pt-10 mt-8 -mb-16 pb-10 px-8 text-center relative z-10 max-w-5xl mx-auto text-stone-100">
      <div className="line flex items-center gap-4 my-8 clear-left mt-12 mx-auto max-w-2xl">
        <div className="flex-1 h-px bg-stone-100" />
        <Icon
          src="/boxicons_wine-filled.svg"
          colorClass="bg-stone-100"
          className="block mx-auto w-7.5 h-7.5 mb-2"
        />
        <div className="flex-1 h-px bg-stone-100" />
      </div>
      <img
        src="./Logo.svg"
        alt="Logo"
        className="items-center relative z-10 max-w-5xl mx-auto"
      />
      <p className="mt-3">{t("footer.rights")}</p>
      <p className="mt-6">{t("footer.disclaimer")}</p>
    </footer>
  );
}
