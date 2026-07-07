import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex items-center border p-2 rounded">
      <Search className="h-5 w-5 text-gray-500" />
      <input type="text" placeholder="Search GitHub Username" className="ml-2 outline-none" />
    </div>
  );
}
