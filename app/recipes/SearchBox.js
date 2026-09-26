// ว่างไว้ตั้งใจ — Lab A: ช่องค้นหาที่ผลักคำค้นเข้า URL (/recipes?q=...) แทน setSearchParams เดิม
// รับค่าเริ่มต้นจาก RecipesPage ทาง prop · พิมพ์แล้วอย่าทิ้ง history ทุกตัวอักษร (เทียบ { replace: true } วันที่ 4)


"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || '');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/recipes?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ค้นหาสูตรอาหาร..."
        className="border rounded px-2 py-1 flex-grow"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
        ค้นหา
      </button>
    </form>
  );
};

export default SearchBox;