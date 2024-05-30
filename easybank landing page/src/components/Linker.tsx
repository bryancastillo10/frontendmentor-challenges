import { ReactNode } from "react";

interface LinkerProps{
    children: ReactNode;
}

const Linker = ({children}:LinkerProps) => {
  return (
      <a href="#" className="duration-300 ease-in hover:text-emerald-500">
          {children}
    </a>
  )
}

export default Linker;
