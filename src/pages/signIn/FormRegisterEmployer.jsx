import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/Checkbox";
import Button from "@/components/button/Button";
import { registerEmployerSchema } from "@/constants/validationFormRegisterEmployer";
import axiosInstance from "@/lib/authorizedAxios";
import toast from "react-hot-toast";

const FormRegisterEmployer = () => {
  const form = useForm({
    resolver: zodResolver(registerEmployerSchema),
    defaultValues: {
      privateEmail: "",
      password: "",
      phoneNumber: "",
      orgTaxNumber: "",
      orgName: "",
      orgField: "",
      orgScale: "",
      orgAddress: "",
      termsAccepted: false,
    },
  });

  const termsAccepted = form.watch("termsAccepted");

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post(`/auth/signup/recruiter`, data);
      toast.success("Đăng kí thành công!!!");
      console.log(response.data);
      // Navigate to another page if needed
    } catch (error) {
      toast.error("Đăng ký thất bại! Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <div className="bg-secondary rounded-lg p-5">
      <h2 className="w-fit text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#48038C] to-[#00F0FF]">
        Đăng ký tài khoản nhà tuyển dụng
      </h2>
      <Form {...form}>
        <form
          className="space-y-4 mb-5 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <p className="text-primary font-semibold mt-5 mb-2">
            Thông tin đăng nhập
          </p>
          <InputField
            control={form.control}
            name="privateEmail"
            placeholder="Email"
          />
          <InputField
            control={form.control}
            name="phoneNumber"
            placeholder="Số điện thoại"
          />
          <InputField
            control={form.control}
            name="password"
            placeholder="Mật khẩu"
            type="password"
          />
          <InputField
            control={form.control}
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu"
            type="password"
          />

          <p className="text-primary font-semibold mt-5 mb-2">
            Thông tin công ty
          </p>
          <InputField
            control={form.control}
            name="orgTaxNumber"
            placeholder="Mã số thuế"
          />
          <InputField
            control={form.control}
            name="orgName"
            placeholder="Tên công ty hiển thị"
          />

          <SelectField
            control={form.control}
            name="orgField"
            placeholder="Lĩnh vực"
            options={[
              { value: "technology", label: "Công nghệ" },
              { value: "finance", label: "Tài chính" },
              { value: "education", label: "Giáo dục" },
            ]}
          />
          <SelectField
            control={form.control}
            name="orgScale"
            placeholder="Kỹ năng công ty"
            options={[
              { value: "management", label: "Quản lý" },
              { value: "software", label: "Phần mềm" },
              { value: "marketing", label: "Marketing" },
            ]}
          />
          <SelectField
            control={form.control}
            name="orgAddress"
            placeholder="Trụ sở công ty"
            options={[
              { value: "hanoi", label: "Hà Nội" },
              { value: "hcm", label: "TP. Hồ Chí Minh" },
              { value: "danang", label: "Đà Nẵng" },
            ]}
          />

          <FormField
            control={form.control}
            name="termsAccepted"
            render={({ field }) => (
              <div className="flex gap-2">
                <Checkbox
                  className="h-5 w-5"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <Label className="leading-6">
                  Tôi đã đọc và chấp nhận{" "}
                  <a href="#" className="text-primary hover:underline">
                    Điều Khoản Sử Dụng
                  </a>{" "}
                  và{" "}
                  <a href="#" className="text-primary hover:underline">
                    Chính Sách Bảo Mật
                  </a>{" "}
                  của Stacky
                </Label>
              </div>
            )}
          />

          <div className="flex items-center text-center">
            <Button
              kind="primary"
              className="w-full disabled:opacity-50"
              type="submit"
              disabled={!termsAccepted}
            >
              Đăng ký
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

const InputField = ({ control, name, placeholder, type = "text" }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <>
            <Label htmlFor={name}>{placeholder}</Label>
            <Input
              type={type}
              placeholder={`Nhập ${placeholder.toLowerCase()}`}
              {...field}
            />
          </>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const SelectField = ({ control, name, placeholder, options }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <Label htmlFor={name}>{placeholder}</Label>
        <Select value={field.value} onValueChange={field.onChange}>
          <FormControl>
            <SelectTrigger className="w-full px-6 h-12 text-sm font-medium border border-[#424242] rounded-xl">
              <SelectValue placeholder={`Chọn ${placeholder.toLowerCase()}`} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormRegisterEmployer;
