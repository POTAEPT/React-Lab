// ว่างไว้ตั้งใจ — Lab B ขั้น 1
// zod schema: bookerName / department / email / confirmEmail / purpose
import { z } from "zod";

export const bookingSchema = z
  .object({
    bookerName: z.string().min(1, "กรุณากรอกชื่อผู้จอง"),
    department: z.string().min(1, "กรุณาเลือกแผนก"),
    email: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง"),
    confirmEmail: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง"),
    purpose: z.string().min(1, "กรุณากรอกวัตถุประสงค์การจอง"),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "อีเมลไม่ตรงกัน",
  });
