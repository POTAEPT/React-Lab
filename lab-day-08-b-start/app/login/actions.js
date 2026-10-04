"use server"

// TODO Lab B ขั้น A: login(prevState, formData)
//   - เทียบ email/password กับค่า mock: admin@cmu.ac.th / 1234
//   - ถูก → ตั้ง cookie ชื่อ 'session' (httpOnly: true, path: '/') แล้ว redirect('/dashboard')
//   - ผิด → return { error: "..." }
//   ⚠️ Next.js 15: cookies() เป็น async — ต้อง await
// TODO Lab B: logout() — ลบ cookie 'session' แล้ว redirect('/login')

export async function login(prevState, formData) {
  try {
    const email = formData.get('email')
    const password = formData.get('password')
    if (email === 'admin@cmu.ac.th' && password === '1234') {
      cookies().set('session', 'true', { httpOnly: true, path: '/' })
      redirect('/dashboard')
    }
  } catch (error) {
    return { error: error.message }
  }
}
export async function logout() {
  cookies().delete('session')
  redirect('/login')
}