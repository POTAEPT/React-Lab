import { useForm } from "react-hook-form";
import { DEPARTMENTS } from "../data/rooms";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "../schemas/booking";

function Confirm() {
  const input = "border p-2 rounded w-full";
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(bookingSchema) });

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mb-8 max-w-4xl rounded-lg border bg-white p-6 shadow-sm"
    >
      
      <label className="mb-2 block">
        <span className="text-sm font-medium">ชื่อผู้จอง</span>
      </label>
      <input
        placeholder="ชื่อ-นามสกุล"
        {...register("bookerName")}
        className={input}
      />
      {errors.bookerName && <p className="text-red-500 text-sm mb-4">{errors.bookerName.message}</p>}

      <label className="mb-2 block mt-4">
        <span className="text-sm font-medium">แผนก</span>
      </label>
      <select {...register("department")} className={input}>
        <option value=""> -เลือกแผนก- </option>
        {DEPARTMENTS.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
      {errors.department && <p className="text-red-500 text-sm mb-4">{errors.department.message}</p>}

      <label className="mb-2 block mt-4">
        <span className="text-sm font-medium">อีเมล</span>
      </label>
      <input 
        placeholder="example@gmail.com" 
        {...register("email")}
        className={input} 
      />
      {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>}

      <label className="mb-2 block mt-4">
        <span className="text-sm font-medium">ยืนยันอีเมล</span>
      </label>
      <input 
        placeholder="Confirm Email" 
        {...register("confirmEmail")}
        className={input} 
      />
      {errors.confirmEmail && <p className="text-red-500 text-sm mb-4">{errors.confirmEmail.message}</p>}

      <label className="mb-2 block mt-4">
        <span className="text-sm font-medium">วัตถุประสงค์การใช้ห้อง</span>
      </label>
      <textarea
        rows="3"
        {...register("purpose")}
        className="mt-1 w-full rounded border px-3 py-2"
      ></textarea>
      {errors.purpose && <p className="text-red-500 text-sm mb-4">{errors.purpose.message}</p>}

      <button 
        type="submit"
        className="w-full mt-6 rounded bg-blue-600 py-3 text-center font-semibold text-white block"
      >
        ยืนยันการจอง
      </button>
    </form>
  );
}

export default Confirm;