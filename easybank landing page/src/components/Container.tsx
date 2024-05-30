import { ReactNode } from "react"

interface ContainerProps{
  children: ReactNode;
}

const Container = ({children}:ContainerProps) => {
  return (
    <div className="max-w-[90%] md:max-w-[80%] mx-auto my-2">
      {children}
    </div>
  )
}

export default Container;
