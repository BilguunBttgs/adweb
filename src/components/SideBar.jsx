"use client";
import { Button, Checkbox, Input, Slider } from "@material-tailwind/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SideBar = () => {
  return (
    <section className="w-1/4 rounded-md border-2">
      <div className="border-b-2">
        <div className="relative rounded-r-none w-full flex p-5">
          <Input color="orange" size="lg" className="" label="Хайлт хийх" />
          <Button
            color="orange"
            disabled
            className="!absolute right-6 top-6 rounded"
          >
            <BsSearch />
          </Button>
        </div>
      </div>
      <div className="p-5 border-b-2">
        <p className="mb-5 text-xl">Үнээр шүүх</p>
        <Slider color="orange" />
        <div className="flex justify-between items-center mt-5">
          <Button size="sm" color="orange" className="w-20">
            Шүүх
          </Button>
          <p>1000₮ - 20000₮</p>
        </div>
      </div>
      <div className="p-5">
        <p className="mb-5 text-xl">Ангилал</p>
        <div className="flex flex-col">
          <Checkbox color="orange" label="Мотор" />
          <Checkbox color="orange" label="Арматизатор" />
          <Checkbox color="orange" label="Тос, масло" />
          <Checkbox color="orange" label="Гупер" />
          <Checkbox color="orange" label="Радиатор" />
          <Checkbox color="orange" label="Дугуй" />
          <Checkbox color="orange" label="Обуд" />
          <Checkbox color="orange" label="Ачаа, чиргүүл" />
          <Checkbox color="orange" label="Гэрэл, чийдэн" />
        </div>
      </div>
      <div className="p-5">
        <p className="mb-5 text-xl">Брэнд</p>
        <div className="flex flex-col">
          <Checkbox color="orange" label="Toyta" />
          <Checkbox color="orange" label="Nissan" />
          <Checkbox color="orange" label="Subaru" />
          <Checkbox color="orange" label="Suzuki" />
          <Checkbox color="orange" label="BYD" />
          <Checkbox color="orange" label="BMW" />
          <Checkbox color="orange" label="Benz" />
        </div>
      </div>
    </section>
  );
};

export default SideBar;
