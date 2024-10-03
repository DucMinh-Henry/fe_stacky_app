import React from "react";
import IconClose from "@/icons/IconClose";
import IconLocation from "@/icons/IconLocation";
import IconSearch from "@/icons/IconSearch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "@/components/button/Button";

const SearchJob = () => {
  return (
    <div className="flex justify-center items-center bg-primary py-7">
      <div className="flex justify-between items-center bg-white rounded-full py-2 px-3 border-[1px] border-solid border-secondary ">
        <div className="relative flex items-center min-w-[500px]">
          <IconSearch className={"absolute m-2 w-5 h-5"}></IconSearch>
          <input
            type="text"
            placeholder="Vị trí tuyển dụng"
            className="w-full px-10 py-3 outline-none"
          />
          <div className="cursor-pointer">
            <IconClose
              className={"hover:bg-secondary rounded-full w-6 h-6"}
            ></IconClose>
          </div>
        </div>
        <div className="flex items-center border-x px-2 mx-5">
          <IconLocation
            color={"#b3b8bd"}
            className={"absolute m-2 z-10 w-5 h-5"}
          ></IconLocation>
          <Select>
            <SelectTrigger className="relative min-w-[180px] max-w-[220px] pl-10 border-none shadow-none hover:bg-secondary rounded-full">
              <SelectValue placeholder="Tất cả tỉnh/thành phố" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="apple">Đà Nẵng</SelectItem>
                <SelectItem value="banana">Quảng Bình</SelectItem>
                <SelectItem value="blueberry">Hà Nội</SelectItem>
                <SelectItem value="grapes">Hồ Chí Minh</SelectItem>
                <SelectItem value="pineapple">Nha Trang</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-center bg-button text-white rounded-full px-5 py-2">
          <button className="w-full h-full">Tìm kiếm</button>
          {/* <Button className="">Tìm kiếm</Button> */}
        </div>
      </div>
    </div>
  );
};

export default SearchJob;
