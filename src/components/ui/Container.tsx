import { ReactNode } from "react";
type TContainer = {
  children: ReactNode;
  className: string;
};
const Container = ({ children }: TContainer) => {
  return (
    <div className="h-full min-h-screen lg:px-7 px-[20px] w-[100%] max-w-[100%]">
      {children}
    </div>
  );
};
export default Container;
