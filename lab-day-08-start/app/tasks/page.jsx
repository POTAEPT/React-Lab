// Server Component — 🔴 ห้ามใส่ "use client" ในไฟล์นี้
import AddTaskForm from './AddTaskForm'
import { getTasks } from '@/lib/taskStore'

export default function TasksPage() {
  const tasks = getTasks();

  return (
    <div className="p-6 max-w-md">
      <AddTaskForm />
      <ul className="mt-4">
        {tasks.map((t) => (
          <li key={t.id}>
            {t.title}
            <form action={removeTask}>
              <input name="id" type="hidden" value={t.id} />
              <button type="submit" className="text-red-600">
                ลบเรยคัฟ
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
