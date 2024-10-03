import React, { useState } from "react";
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
import Footer from "@/components/shared/footer/Footer";
import IconGithub from "@/icons/IconGithub";
import Heading from "@/components/shared/header/Heading";

const SignInCandidatePage = () => {
  const { control, handleSubmit } = useForm();
  const [activeTab, setActiveTab] = useState("candidate"); // Quản lý trạng thái active

  return (
    <div>
      <Heading></Heading>
      <div className="page-container grid grid-cols-12 justify-center items-center gap-16 my-10">
        <div className="grid col-start-1 col-end-7">
          <div className="flex flex-col justify-center items-center gap-3 mb-10">
            <h1 className="w-fit text-4xl font-semibold h-12 text-transparent bg-clip-text bg-gradient-to-r from-[#48038C] to-[#00F0FF]">
              Đăng ký / Đăng nhập
            </h1>
            <span className="text-lg">
              Liên kết tài khoản của bạn để tiếp tục sử dụng dịch vụ Stacky
            </span>
          </div>

          <div className="bg-secondary rounded-lg">
            <div className="flex items-center justify-center px-7">
              {/* Tab cho Ứng viên và Nhà tuyển dụng */}
              <div
                className={`flex items-center justify-center w-full py-4 text-lg cursor-pointer ${
                  activeTab === "candidate"
                    ? "border-b-4 border-primary font-semibold"
                    : ""
                }`}
                onClick={() => setActiveTab("candidate")}
              >
                <a href="#candidate">Ứng viên</a>
              </div>
              <div
                className={`flex items-center justify-center w-full py-4 text-lg cursor-pointer ${
                  activeTab === "employer"
                    ? "border-b-4 border-primary font-semibold "
                    : ""
                }`}
                onClick={() => setActiveTab("employer")}
              >
                <a href="#employer">Nhà tuyển dụng</a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 p-10">
              <div className="flex items-center justify-center gap-3 w-full h-14 font-medium border rounded-xl">
                <a href="" className="flex items-center justify-center gap-3">
                  <IconGoogle></IconGoogle>
                  <span className="text-text2">Đăng nhập với Google</span>
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 w-full h-14 font-medium border rounded-xl bg-[#424242] ">
                <a href="" className="flex items-center justify-center gap-3">
                  <IconGithub></IconGithub>
                  <span className="text-white">Đăng nhập với Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img className="grid col-start-7 col-end-13" src={BgSignIn} alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignInCandidatePage;
