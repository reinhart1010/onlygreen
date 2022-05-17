import { ClassAttributes } from "react";

export default function Header({isFloating = false}) {
  return (
    <header className={`${isFloating ? 'fixed' : 'sticky'} backdrop-blur bg-white/75 dark:bg-black/75 flex h-12 sm:h-16 items-center p-4 top-0 w-full`}>
      <p className="font-medium text-lg">Reinhart Previano Koentjoro</p>
    </header>
  );
}