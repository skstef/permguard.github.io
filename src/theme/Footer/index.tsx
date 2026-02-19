import React, { type ReactNode } from "react";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { CustomFooter } from "@site/src/components/layout/Footer/Footer";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <CustomFooter />
    </>
  );
}
