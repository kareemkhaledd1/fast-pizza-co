import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-8 w-36 rounded-full bg-yellow-100 px-4 text-sm font-semibold placeholder-stone-400 outline-none transition-all duration-300 sm:w-64 md:focus:w-72"
      />
      {/* <button
        type="submit"
        className="h-7 rounded-br-full rounded-tr-full bg-stone-700 px-2 text-center text-sm font-semibold text-white hover:bg-stone-600"
      >
        Search
      </button> */}
    </form>
  );
}

export default SearchOrder;
