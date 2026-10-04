"use server"

import { revalidatePath } from 'next/cache'
import { addTaskToStore } from '@/lib/taskStore'

// ✓ ของเช้า (บล็อก 1.2) — ยังไม่ validate จริง: ชื่อว่าง/สั้นเกิน = return เงียบ ๆ ไม่บอกผู้ใช้
// TODO Lab A ขั้น 4: เปลี่ยนเป็น addTask(prevState, formData) แล้ว return { error } ให้ useActionState
export async function addTask(formData) {
  const title = formData.get('title')
  if (!title || title.trim().length < 2) return

  addTaskToStore({ id: Date.now(), title: title.trim(), done: false })
  revalidatePath('/tasks')
}

// TODO Lab A ขั้น 2: removeTask(formData) — อ่าน id จาก <input type="hidden" name="id">
// TODO Lab A ขั้น 2: toggleTask(formData) — ★ ของใหม่ ไม่ได้สาธิตตอนเช้า
export const removeTask = async (formData) => {
    const id = Number(formData.get("id"));
    removeTaskFromStore(id);
    revalidatePath("/tasks");
};

export const toggleTask = async (formData) => {
    const id = Number(formData.get("id"));
    toggleTaskInStore(id);
    revalidatePath("/tasks");
}