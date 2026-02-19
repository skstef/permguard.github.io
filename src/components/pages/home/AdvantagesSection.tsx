import React from "react";
import { SectionTitle } from "../../shared/SectionTitle";

const advantages = [
  {
    icon: "/images/home/code.svg",
    title: "Open and Free for Everyone",
    text: "Access the full power of Permguard Community under the Apache 2.0 license, no restrictions, no hidden costs.",
  },
  {
    icon: "/images/home/community.svg",
    title: "Join the Community",
    text: "Collaborate with developers worldwide. Share ideas, report issues, and help shape the future of zero-trust authorization.",
  },
  {
    icon: "/images/home/integrate.svg",
    title: "Integrate Without Lock-In",
    text: "Easily integrate into your stack with no vendor lock-in. You control the deployment, the data, and the roadmap.",
  },
  {
    icon: "/images/home/build.svg",
    title: "Build and Extend on Your Own",
    text: "You have everything you need to extend, customize, and innovate independently, full source code, clear APIs, and transparent.",
  },
];

const iconWrapper =
  "w-12 h-12 rounded-xl bg-gradient-to-br from-[#f05c80] to-[#cc34df] shadow-[0_16px_24px_rgba(204,52,223,0.16)] flex items-center justify-center";

const titleGradient =
  "bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent";

export const AdvantagesSection = () => (
  <section className="pt-8 pb-2 md:pb-16 flex flex-col">
    <SectionTitle className="mx-auto" title="Open And Free For Everyone" />

    <h3
      className={`text-[24px] leading-[1.4] sm:text-[36px] md:text-[46px] lg:text-[56px] font-medium sm:leading-tight tracking-[2.3px] text-center mx-auto sm:px-2 ${titleGradient}`}
    >
      Access the full power of Permguard Community under the Apache 2.0 license
      — no restrictions, no hidden costs.
    </h3>

    <div className="mt-6 rounded-3xl border border-white/10 bg-[#1e1f23]/80 backdrop-blur-xl p-6 md:p-10 md:pb-15 lg:pt-16 lg:px-15 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-9 md:gap-y-16 justify-items-center">
      {advantages.map(({ icon, title, text }) => (
        <article key={title} className="w-full md:max-w-lg">
          <div className={iconWrapper}>
            <img src={icon} alt="" />
          </div>

          <h3
            className={`mt-6 text-[24px] sm:text-[32px] font-medium ${titleGradient}`}
          >
            {title}
          </h3>

          <p className="mt-4 mb-0 leading-[1.4] text-white/50 text-[16px] sm:text-[18px] md:max-w-md lg:max-w-full">
            {text}
          </p>
        </article>
      ))}
    </div>
  </section>
);
