"use client";
import { Button, Select } from "@material-tailwind/react";
import React from "react";
import { AdCard } from "./AdCard";

const CatalogRight = () => {
  return (
    <section className="w-3/4">
      <div className="bg-gray-100 p-3 w-full rounded-md flex gap-3">
        <Select label="Брэнд">
          <option>test</option>
        </Select>
        <Select label="Марк">
          <option>test</option>
        </Select>
        <Select label="Загвар">
          <option>test</option>
        </Select>
        <Select label="Үйлдвэрлэсэн он">
          <option>test</option>
        </Select>
        <Button size="sm" color="orange">
          хайх
        </Button>
      </div>
      <div className="w-full mt-5 flex flex-wrap gap-3">
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
      </div>
    </section>
  );
};

export default CatalogRight;
