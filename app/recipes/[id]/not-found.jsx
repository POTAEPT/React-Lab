import Link from "next/link"

export default function RecipeNotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl font-bold">ไม่พบสูตรนี้</h1>
      <p className="mt-2 text-gray-500">ไม่มีสูตรอาหารสำหรับรหัสนี้</p>
      <Link href="/recipes" className="border px-4 py-2 rounded mt-4 inline-block">← กลับหน้ารายการ</Link>
    </div>
  )
}
