"use client";

import { useState } from "react";

export default function AddFavoriteButton({ mealId, name, thumb }) {
  const [status, setStatus] = useState("idle"); // idle | loading | saved | duplicate | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleAdd = async () => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/my-recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mealId, name, thumb }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setStatus("saved");
      } else if (res.status === 409) {
        // 409 หมายถึงสูตรนี้ถูกเพิ่มไว้แล้ว ไม่นับเป็นข้อผิดพลาด ❌
        setStatus("duplicate");
      } else {
        // กรณีดึง error ที่ Route Handler ส่งกลับมาแสดงให้ผู้ใช้เห็น
        setStatus("error");
        setErrorMessage(data.error || "เกิดข้อผิดพลาดในการบันทึก");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="mb-6">
      <button
        onClick={handleAdd}
        disabled={status === "loading" || status === "saved" || status === "duplicate"}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium disabled:bg-gray-400 hover:bg-blue-700 transition-colors"
      >
        {status === "idle" && "+ เพิ่มในสูตรโปรด"}
        {status === "loading" && "กำลังบันทึก..."}
        {status === "saved" && "บันทึกแล้ว ✅"}
        {status === "duplicate" && "เพิ่มไว้แล้ว ⭐️"}
        {status === "error" && "ลองอีกครั้ง"}
      </button>

      {/* 🆕 แสดง error message จาก API ถ้าเกิดปัญหา */}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-2">❌ {errorMessage}</p>
      )}
    </div>
  );
}
