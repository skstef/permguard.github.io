import { classNames } from "@site/src/utils/classNames";

export interface ISectionDescription {
  text: string;
  className?: string;
}

export const SectionDescription: React.FC<ISectionDescription> = ({
  text,
  className,
}) => {
  return (
    <p
      className={classNames(
        "text-pretty text-[16px] tracking-normal! sm:text-[24px] text-center sm:text-start leading-[1.4] md:text-[24px] text-white/50",
        className,
      )}
    >
      {text}
    </p>
  );
};
