// ว่างไว้ตั้งใจ — Lab A: ปุ่ม "☆ ถูกใจ" / "★ ถูกใจแล้ว" กดสลับได้ (state ของปุ่มเอง ไม่ต้องจำข้ามหน้า)
"use client";

import { useState } from 'react';

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <button onClick={() => setIsFavorite(!isFavorite)} className="text-2xl">
            {isFavorite ? '★ ถูกใจแล้ว' : '☆ ถูกใจ'}
        </button>
    )
}