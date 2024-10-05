import React, { useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import IconEmail from "@/components/icons/IconEmail";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import IconPassword from "@/components/icons/IconPassword";
import Button from "@/components/button/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { LoginRecruiterSchema } from "@/constants/validationFormLoginRecruiter";
import axiosInstance from "@/lib/authorizedAxios";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

const FormSignInEmployer = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Sử dụng login từ context
  const [loading, setLoading] = useState(false); // Loading state

  // Sử dụng hook form với zod validation
  const form = useForm({
    resolver: zodResolver(LoginRecruiterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Hàm xử lý submit, sử dụng useCallback để tránh re-creation của hàm
  const onSubmit = useCallback(
    async (values) => {
      setLoading(true); // Bắt đầu loading
      try {
        const { email, password } = values;

        // Gửi request đăng nhập
        const { data } = await axiosInstance.post(`/auth/login/recruiter`, {
          email,
          password,
        });

        const { userId, email: userEmail, role: roleName, accessToken } = data;

        if (!accessToken || !userId) {
          throw new Error(
            "Invalid response structure: missing accessToken or userId"
          );
        }

        // Lưu thông tin user và token vào localStorage và gọi hàm login từ context
        const userInfo = { userId, email: userEmail, role: roleName };
        login(userInfo, accessToken); // Sử dụng hàm login từ context để lưu user và token

        // Điều hướng sau khi đăng nhập thành công
        navigate("/");
      } catch (error) {
        console.error("Login failed:", error);
        toast.error(
          "Đăng nhập thất bại. Vui lòng kiểm tra thông tin và thử lại."
        );
      } finally {
        setLoading(false); // Kết thúc loading
      }
    },
    [login, navigate]
  );

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Form {...form}>
        <form
          className="space-y-4 mb-5 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <Label htmlFor="email">Email</Label>
                    <div className="flex items-center w-full relative">
                      <Input
                        id="email" // Associate label with input
                        placeholder="Nhập email"
                        className="pl-10 pr-4"
                        {...field}
                      />
                      <IconEmail className="absolute ml-2" />
                    </div>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <Label htmlFor="password">Mật khẩu</Label>
                    <div className="flex items-center w-full relative">
                      <Input
                        id="password" // Associate label with input
                        placeholder="Nhập mật khẩu"
                        className="pl-10 pr-4 outline-input"
                        {...field}
                      />
                      <IconPassword className="absolute ml-2" />
                    </div>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full">
            <Button
              kind="primary"
              className="w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}{" "}
              {/* Show loading state */}
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex items-center justify-end w-full">
        <a
          href="#"
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#48038C] to-[#00F0FF] hover:decoration-primary hover:underline hover:decoration-1"
        >
          Quên mật khẩu?
        </a>
      </div>
    </div>
  );
};

export default FormSignInEmployer;
