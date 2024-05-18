import React, { ReactNode } from "react";
import { LinkProps } from "next/link";

type TTitle = {
  Rtitle: string | ReactNode | React.FC<LinkProps>;
  Ltitle: string;
};

const SectionCard = ({ Ltitle, Rtitle }: TTitle) => {
  return (
    <div>
      <span className="rounded-t-lg mt-6 bg-primary-100 text-white p-2 items-center pr-2 flex justify-between">
        <h2 className="lg:text-2xl text-xl font-semibold">{Ltitle}</h2>
        <div className="bg-slate-100 rounded-lg px-2 text-xm font-semibold text-black">
          {typeof Rtitle === "string" ? <h3>{Rtitle}</h3> : <>{Rtitle}</>}
        </div>
      </span>
    </div>
  );
};

export default SectionCard;
