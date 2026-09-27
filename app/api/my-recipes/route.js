// Lab B b) — Route Handler ของกลุ่มเอง (ห้ามใช้ /api/recipes ของเช้าซ้ำ — Twist ข้อ 3)
// - GET(request)  → คืนลิสต์สูตรโปรดทั้งหมดเป็น JSON · รองรับ ?q= กรองตามชื่อ ไม่สนตัวพิมพ์เล็ก/ใหญ่
// - POST(request) → รับ { mealId, name, thumb } แล้วเพิ่มเข้า store → 201
// - 🔴 ห้ามมีกรณีไหนหลุดเป็น 500 — ตอบ { error: "..." } เองทุกกรณี:
//     body ไม่ใช่ JSON → 400 · ไม่มี mealId หรือ name → 400 · mealId ซ้ำ → 409
// - ใช้ NextResponse.json(...) จาก "next/server"
