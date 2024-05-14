/* eslint react/prop-types: 0 */
const InputSearch = ({
  id,
  value,
  onChange,
  onKeyDown,
  placeholder,
  className,
}) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        Search
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        className={className}
      />
      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default InputSearch;
