import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-light-gray">
      <div className="relative flex flex-col max-w-[400px] h-dvh mx-auto pt-3 px-3 bg-white">
        {children}
      </div>
    </div>
  );
};

export default Layout;
