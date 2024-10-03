import React from "react";
import IconHeart from "@/icons/IconHeart";
import imgCompany from "@/image/imgCompany.png";

const ItemJobSuggest = () => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex justify-between gap-1">
        <div className="min-w-[80px] min-h-[80px]">
          <a href="">
            <img src={imgCompany} alt="" />
          </a>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex gap-1">
            <div className="bg-[#D9BCFF] text-[#6112C9] px-2 rounded-full items-center justify-center">
              <span className="text-sm">HOT</span>
            </div>
            <h3>
              <a href="" className="line-clamp-1 overflow-hidden text-ellipsis">
                Nhân viên kế toán Nhân viên kế toán Nhân viên kế toán
              </a>
            </h3>
            <a href="" className="">
              <IconHeart></IconHeart>
            </a>
          </div>
          <div className="">
            <a
              href=""
              className="line-clamp-1 overflow-hidden text-sm text-ellipsis text-text3 hover:decoration-text3 hover:underline"
            >
              CÔNG TY TNHH XÂY DỰNG NAM CÔNG TY TNHH XÂY DỰNG NAM
            </a>
          </div>
          <div className="flex items-center justify-around">
            <div className="px-5 py-px text-text2 bg-[#EDEAF0] rounded-xl">
              <span>Thoả thuận</span>
            </div>
            <div className="px-5 py-px text-text2 bg-[#EDEAF0] rounded-xl">
              <span>Hà Nội</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemJobSuggest;
