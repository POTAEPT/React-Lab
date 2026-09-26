"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentQuery = searchParams.get('q') || '';
  
  const [inputValue, setInputValue] = useState(currentQuery);
  const debouncedValue = useDebounce(inputValue, 400);

  // ใช้ useRef เพื่อเช็คว่าค่า q ล่าสุดที่เราเป็นคน push ไปคืออะไร
  // เอาไว้ป้องกันไม่ให้ตอนที่เราพิมพ์อยู่ แล้ว URL เพิ่งเปลี่ยน (จาก delay) กลับมารีเซ็ตค่าที่เรากำลังพิมพ์ต่อเนื่อง
  const lastPushedQuery = useRef(currentQuery);

  // 1. จัดการกรณีที่ URL เปลี่ยนจากปัจจัยภายนอก (เช่น ผู้ใช้กดปุ่ม Back/Forward ในเบราว์เซอร์)
  useEffect(() => {
    if (currentQuery !== lastPushedQuery.current) {
      setInputValue(currentQuery);
      lastPushedQuery.current = currentQuery;
    }
  }, [currentQuery]);

  // 2. จัดการส่งค่าขึ้น URL หลังจากหยุดพิมพ์ 400ms
  useEffect(() => {
    if (debouncedValue !== lastPushedQuery.current) {
      const params = new URLSearchParams(searchParams);
      
      if (debouncedValue) {
        params.set('q', debouncedValue);
      } else {
        params.delete('q');
      }

      lastPushedQuery.current = debouncedValue;
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [debouncedValue, pathname, router, searchParams]);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="ค้นหาสูตรอาหาร..."
        className="border border-gray-300 rounded px-3 py-2 w-full max-w-md"
      />
    </div>
  );
}