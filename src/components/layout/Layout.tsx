import { CustomFooter } from "@site/src/components/layout/Footer/Footer";
import { Header } from "@site/src/components/layout/Header/Header";
import { DocsPreferredVersionContextProvider } from "@docusaurus/plugin-content-docs/lib/client/index.js";

import "@site/src/utils/detectForcedDarkMode";

interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <DocsPreferredVersionContextProvider>
      <div className="wrapper">
        <div className={"max-w-360 relative mx-auto"}>
          <Header />
          <main className="w-full mx-auto px-6 sm:px-10 md:px-[70px]">
            {children}
          </main>

          <CustomFooter />
        </div>
      </div>
    </DocsPreferredVersionContextProvider>
  );
}
