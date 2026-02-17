"use client";
import { SubmitEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
};

export default function SearchBar({
  value,
  onChange,
  onSubmit,
}: SearchBarProps) {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.();
  };

  return (
    <div className="w-full flex justify-center p-6">
      <form
        className="w-11/12 md:w-1/2 flex items-center rounded-lg border border-[#272B33] px-3"
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search character"
      >
        <input
          type="text"
          id="characterSearch"
          placeholder="Search character..."
          autoFocus
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="flex-1 py-3 text-(--primary-color) font-bold border-none outline-none bg-transparent placeholder:text-(--primary-color)"
        />
        <img src="/icons/iconSearch.svg" alt="searchIcon" className="w-6 h-6" />
      </form>
    </div>
  );
}
