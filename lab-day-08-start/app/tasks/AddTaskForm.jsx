"use client";

import { useFormStatus } from "react-dom";
import { addTask } from "./actions";
import {useActionState} from "react"

// TODO Lab A ขั้น 3: แยก <SubmitButton /> เป็น component ลูก ใช้ useFormStatus โชว์ "กำลังเพิ่ม..."
// TODO Lab A ขั้น 4: ต่อ useActionState แล้วโชว์ state.error ใต้ฟอร์ม

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      {pending ? "กำลังเพิ่มฮัฟ..." : "เพิ่มครัช"}
    </button>
  );
};

const AddTaskForm = () => {
  const [state, formAction] = useActionState(addTask, { error: null });
  return (
    <form action={formAction} className="flex gap-2">
      <div>
        <input
          name="title"
          placeholder="new tasks..."
          className="border p-2 flex-1"
        ></input>
        <SubmitBtn />
      </div>
      {state.error && (
        <p className="text-red-500" text-sm>
          {" "}
          {state.error}
        </p>
      )}
    </form>
  );
};

export default AddTaskForm;


