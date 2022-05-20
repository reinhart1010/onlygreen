export class HeaderProps {
  isFloating: Boolean = false
}

const Header = (props: HeaderProps) => {
  return (
    <header className={`${props.isFloating ? 'fixed' : 'sticky'} backdrop-blur bg-white/75 dark:bg-black/75 flex h-12 sm:h-16 items-center p-4 top-0 w-full`}>
      <p className="font-medium text-lg">Reinhart Previano Koentjoro</p>
    </header>
  );
};

export default Header;