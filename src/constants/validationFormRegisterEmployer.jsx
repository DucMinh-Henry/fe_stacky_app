import { z } from "zod";

export const registerEmployerSchema = z.object({
  privateEmail: z.string().email({ message: "Địa chỉ email không hợp lệ" }), // Validate email
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }), // Password minimum 6 characters
  confirmPassword: z
    .string()
    .min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
  phoneNumber: z.string().min(10, { message: "Số điện thoại không hợp lệ" }), // Phone number validation (adjust as needed)
  orgTaxNumber: z.string().min(10, { message: "Số thuế là bắt buộc" }), // Tax number field
  orgName: z.string().min(1, { message: "Tên công ty là bắt buộc" }), // Company name field
  orgField: z.string().nonempty({ message: "Vui lòng chọn lĩnh vực công ty" }), // Required company field
  orgScale: z.string().nonempty({ message: "Vui lòng chọn quy mô công ty" }), // Required company skill
  orgAddress: z.string().nonempty({ message: "Vui lòng chọn địa chỉ công ty" }), // Required company address
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: "Bạn phải chấp nhận điều khoản",
    }), // Terms acceptance
});
