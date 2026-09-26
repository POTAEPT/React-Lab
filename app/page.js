// TODO Lab A: หน้าแรก (Server Component) — หัวข้อ + ลิงก์ไป /recipes
//   ใช้ Link จาก 'next/link' — prop คือ href ไม่ใช่ to (คนละตัวกับ react-router-dom)

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Recipe Browser</h1>
      <p className="text-gray-500 mt-2">
        ยังไม่ได้แปลง — เริ่มจาก app/layout.js แล้วสร้าง route
        ที่เหลือตามตารางใน README
      </p>

      <p className="text-gray-600 mb-6">ค้นหาและดูสูตรอาหารจาก TheMealDB</p>
      <button
        className="inline-block border px-4 py-2 rounded font-medium"
      >
        ดูสูตรอาหารทั้งหมด →
      </button>
    </div>
  );
}
