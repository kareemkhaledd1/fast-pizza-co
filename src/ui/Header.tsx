import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-400 p-4 font-serif text-sm uppercase sm:px-6 md:text-base">
      <Link to={'/'} className="font-semibold tracking-widest">
        Fast Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
