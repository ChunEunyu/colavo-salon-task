import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const ModalLayout = ({ children }: LayoutProps) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 pt-2 z-10 bg-white overflow-y-hidden">
      {children}
    </div>
  );
};

export default ModalLayout;
