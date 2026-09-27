// Lab B c) — ปุ่ม "เพิ่มในสูตรโปรด" (Client Component — มี onClick ต้องเป็น client เท่านั้น)
// - รับ props: mealId, name, thumb
// - กดแล้ว POST ไปที่ /api/my-recipes ของตัวเอง
// - แสดงสถานะ: กำลังบันทึก / บันทึกแล้ว / error
// - error → แสดงข้อความ error ที่ Route Handler ส่งกลับมา (ไม่ใช่ข้อความตายตัว)
// - 409 (มีอยู่แล้ว) → ไม่ใช่ ❌ — บอกผู้ใช้ว่าเพิ่มไว้แล้ว
