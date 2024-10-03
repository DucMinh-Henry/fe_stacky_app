import React from "react";
import BgSignIn from "@/image/bgSignIn.jpg";
import IconEmail from "@/icons/IconEmail";
import Input from "@/components/input/Input";
import { useForm } from "react-hook-form";
import Label from "@/components/lable/Lable";
import FormGroup from "@/components/shared/formGroup/FormGroup";
import IconPassword from "@/icons/IconPassword";
import { Checkbox } from "@/components/ui/Checkbox";
import IconGoogle from "@/icons/IconGoogle";
import Logo from "@/icons/Logo";

const SignInPage = () => {
  const { control, handleSubmit } = useForm();
  return (
    <div>
      <header className="flex justify-between items-center text-[#212F3F] border-b border-b-[#E9EAEC] px-10 h-[64px] mb-5">
        <Logo></Logo>
        <div className="flex justify-between items-center gap-5">
          <button className="px-5 py-2 rounded-2xl border border-[#E9EAEC] ">
            Đăng ký
          </button>
          <button className="px-5 py-2 rounded-2xl border border-[#E9EAEC] bg-button text-white">
            Đăng nhập
          </button>
        </div>
      </header>
      <div className="grid grid-cols-12 justify-center items-center px-10">
        <div className="grid col-start-1 col-end-9 px-48">
          <div className="flex justify-center items-center mb-10">
            <h1 className="w-fit text-4xl font-semibold h-12 text-transparent bg-clip-text bg-gradient-to-r from-[#48038C] to-[#00F0FF]">
              Đăng nhập
            </h1>
          </div>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <div className="flex items-center w-full">
              <Input
                control={control}
                name="email"
                placeholder="example@gmail.com"
                // error={""}
                className="w-full pl-10 pr-4 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent outline-none outline-input"
              ></Input>
              <IconEmail className={`absolute ml-2`}></IconEmail>
            </div>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Mật khẩu</Label>
            <div className="flex items-center w-full">
              <Input
                control={control}
                name="password"
                placeholder="Nhập mật khẩu"
                type="password"
                // error={""}
                className="w-full pl-10 pr-4 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent outline-none outline-input"
              ></Input>
              <IconPassword className={`absolute ml-2`}></IconPassword>
            </div>
          </FormGroup>

          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-text2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Nhớ mật khẩu
              </label>
            </div>
            <a
              href=""
              className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#48038C] to-[#00F0FF]"
            >
              Quên mật khẩu
            </a>
          </div>

          <div className="flex items-center justify-center h-12 w-full bg-button text-white rounded-xl mb-7">
            <button className="w-full h-full">Đăng nhập</button>
          </div>

          <div className="flex items-center justify-center mb-7">
            <span className="w-full h-[1px] bg-[#6F767E]"></span>
            <span className="flex items-center justify-center min-w-32 text-text2">
              Đăng nhập với
            </span>
            <span className="w-full h-[1px] bg-[#6F767E]"></span>
          </div>

          <div className="flex items-center justify-center gap-3 w-full h-12 text-sm font-medium border rounded-xl mb-7">
            <a href="" className="flex items-center justify-center gap-3">
              <IconGoogle></IconGoogle>
              <span className="text-text2">Đăng nhập với Google</span>
            </a>
          </div>

          <div className="text-text2 flex items-center justify-center gap-1 font-medium">
            <span>Bạn chưa có tài khoản?</span>
            <a
              href=""
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#48038C] to-[#00F0FF]"
            >
              Đăng ký
            </a>
          </div>
        </div>
        <img
          className="grid col-start-9 col-end-13 w-[500px] h-[100vh - 64px]"
          src={BgSignIn}
          alt=""
        />
      </div>
    </div>
  );
};

export default SignInPage;
