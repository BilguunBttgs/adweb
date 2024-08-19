"use client";
import {
  Badge,
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import React from "react";
import { BsHandbag, BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import { SignInForm } from "./auth/SignInForm";
import { SignUpForm } from "./auth/SignUpForm";

const Header = () => {
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const handleOpenSignIn = () => setOpenSignIn((cur) => !cur);
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const handleOpenSignUp = () => setOpenSignUp((cur) => !cur);
  return (
    <>
      <header className="bg-white w-full flex-center-col border-b-2">
        <div className="relative rounded-r-none w-full md:hidden flex p-5">
          <Input color="orange" size="lg" className="" label="Хайлт хийх" />
          <Button
            color="orange"
            disabled
            className="!absolute right-6 top-6 rounded"
          >
            <BsSearch />
          </Button>
        </div>
        <section className="main-section-wrapper flex justify-between items-center">
          <div>
            <h1>LOGO</h1>
          </div>
          <div className="relative  rounded-r-none w-[400px] hidden md:flex">
            <Input color="orange" size="lg" className="" label="Хайлт хийх" />
            <Button
              color="orange"
              disabled
              className="!absolute right-1 top-1 rounded"
            >
              <BsSearch />
            </Button>
          </div>
          <div className="flex gap-5 items-center">
            <Button className="mr-5" color="orange">
              Зар нэмэх
            </Button>
            <Badge content={0}>
              <BsHandbag className="cursor-pointer" size={25} />
            </Badge>
            <Badge content={0}>
              <BsHeart className="cursor-pointer" size={25} />
            </Badge>
            <div className="relative">
              <Popover placement="bottom">
                <PopoverHandler>
                  <BsPerson className="cursor-pointer" size={25} />
                </PopoverHandler>
                <PopoverContent className="absolute right-0 top-14">
                  <div className="flex gap-3">
                    <Button onClick={handleOpenSignIn} color="orange">
                      Нэвтрэх
                    </Button>
                    <Button onClick={handleOpenSignUp} color="orange">
                      Бүртгүүлэх
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>
      </header>
      <nav className="bg-white w-full flex-center-col">
        <section className="main-section-wrapper flex gap-4 items-center">
          <Menu>
            <MenuHandler>
              <Button
                className="flex items-center gap-3"
                size="lg"
                color="orange"
              >
                <IoMdMenu size={25} />
                БҮХ КАТЕГОРИ
                <IoIosArrowDown size={20} />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
          </Menu>
        </section>
      </nav>
      <SignInForm
        handleOpen={handleOpenSignIn}
        open={openSignIn}
        handleOpenSignUp={handleOpenSignUp}
      />
      <SignUpForm
        handleOpen={handleOpenSignUp}
        open={openSignUp}
        handleOpenSignIn={handleOpenSignIn}
      />
    </>
  );
};

export default Header;
