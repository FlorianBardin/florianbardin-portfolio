import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col gap-4 scroll-mt-20" id="contact">
      <div className="flex gap-2 items-center lg:gap-3">
        <Image
          className="h-4 w-4 lg:h-5 lg:w-5"
          width={17}
          height={17}
          src="contact.svg"
          alt="Contact logo"
        />
        <h3>{t("sectionTitle")}</h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 my-10 px-5 md:my-15">
        <h2 className="text-center">{t("heading")}</h2>
        <p className="text-muted-foreground text-center font-medium max-w-[500px]">
          {t.rich("description", {
            linkedin: (chunks) => (
              <Link
                href="https://www.linkedin.com/in/florianbardin/"
                className="bright hover:underline"
              >
                {chunks}
              </Link>
            ),
            email: (chunks) => (
              <Link
                href="mailto:fbardin51@gmail.com"
                className="bright hover:underline"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>
    </div>
  );
};

export default Contact;
