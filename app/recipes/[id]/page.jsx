// Lab A a) — สร้างหน้า detail เป็น Server Component ใหม่ทั้งไฟล์
// - ไม่มี "use client" · ไม่มี useEffect/useState · await fetch(...) ตรง ๆ ใน component
// - TheMealDB: https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}
// - ⚠️ Next.js 15: params เป็น Promise → const { id } = await params
// - แสดงรูป ชื่อ หมวดหมู่ และวิธีทำ
// - แสดงรายการวัตถุดิบ + ปริมาณ (เช่น "3/4 cup · soy sauce") และหัวข้อ "วัตถุดิบ (N อย่าง)"
//   ⚠️ API ให้มาเป็น field แบน ๆ strIngredient1..20 + strMeasure1..20 ไม่ใช่ array — แปลงเอง แล้วตัดช่องว่างทิ้ง
// Lab A c) — ไม่พบสูตร → notFound() จาก "next/navigation"
//   ⚠️ ต้องรอดทั้ง /recipes/99999 และ /recipes/xxxxx — เปิด lookup.php?i=99999 กับ ?i=xxxxx เทียบดูก่อน
// Lab B c) — วาง <AddFavoriteButton /> ไว้ในหน้านี้ ส่ง mealId / name / thumb ลงไปเป็น props
