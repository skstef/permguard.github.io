import { classNames } from "@site/src/utils/classNames";

interface ISectionSubTitleProps {
  title: string | React.ReactNode;
  className?: string;
}

export const SectionSubTitle: React.FC<ISectionSubTitleProps> = ({
  title,
  className,
}) => {
  return (
    <h3
      className={classNames(
        "leading-[1.4] sm:leading-[1.2] my-5 sm:my-4 text-2xl sm:text-4xl md:text-[46px] xl:text-[56px] font-medium mb-0 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent",
        className,
      )}
    >
      {title}
    </h3>
  );
};
