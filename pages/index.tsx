import { PropsWithChildren } from "react";
import { useDrag } from "@use-gesture/react";
import { Portal } from "ariakit";

export default function Home() {
  return (
    <div className="flex h-screen flex-1 justify-center items-center">
      <button className="bg-blue-700 px-2 py-3 uppercase text-white rounded-lg">
        open sheet
      </button>
      <Sheet />
    </div>
  );
}

const Sheet: React.FC = () => {
  return (
    <Portal>
      <SheetWrapper>
        <SheetDraggable />
        <div>Sheet Header</div>
      </SheetWrapper>
    </Portal>
  );
};

const SheetDraggable: React.FC = () => {
  const bind = useDrag(
    state => {
      console.log("%c⧭", "color: #ff0000", state);
    },
    { axis: "y" },
  );
  return (
    <div
      {...bind}
      className="flex flex-row flex-1 justify-center items-center py-2"
    >
      <div className="w-5 h-1.5 rounded-full bg-gray-500"></div>
    </div>
  );
};

const SheetWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="fixed bottom-0">{children}</div>;
};
