import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import * as yup from "yup";
import { useFormik } from "formik";

export function SignUpForm({ handleOpen, open, handleOpenSignIn }) {
  const validationSchema = yup.object({
    email: yup
      .string()
      .max(100, "*100 тэмдэгтээс доош байх ёстой")
      .required("*Имэйл хаягаа оруулна уу")
      .email("*Зөв имэйл хаяг оруулна уу"),
    password: yup
      .string()
      .required("*Нууц үгээ оруулна уу")
      .min(8, "*Хамгийн багадаа 8 тэмдэгт оруулна уу")
      .matches(/[A-Z]/, "*Том үсэг оруулна уу")
      .matches(/[a-z]/, "*Жижиг үсэг оруулна уу")
      .matches(/[0-9]/, "*Тоо оруулна уу"),
    repassword: yup
      .string()
      .required("*Нууц үгээ давтаж оруулна уу")
      .oneOf([yup.ref("password"), null], "*Нууц үг таарахгүй байна"),
  });
  const formik = useFormik({
    onSubmit: ({ email, password, repassword }) => {},
    initialValues: { email: "", password: "", repassword: "" },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema,
  });

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Бүртгүүлэх
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Имэйл хаяг, нууц үг ээ оруулан бүртгүүлнэ үү
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Таны Имэйл
            </Typography>
            <Input
              onChange={formik.handleChange}
              name="email"
              color="orange"
              label="Email"
              size="lg"
            />
            <Typography className="-mt-5 text-red-500 text-sm">
              {formik.errors.email}
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Таны Нууц үг
            </Typography>
            <Input
              onChange={formik.handleChange}
              name="password"
              color="orange"
              label="Password"
              size="lg"
            />
            <Typography className="-mt-5 text-red-500 text-sm">
              {formik.errors.password}
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Нууц үг давтах
            </Typography>
            <Input
              onChange={formik.handleChange}
              name="repassword"
              color="orange"
              label="Password"
              size="lg"
            />
            <Typography className="-mt-5 text-red-500 text-sm">
              {formik.errors.repassword}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              color="orange"
              variant="gradient"
              onClick={formik.handleSubmit}
              fullWidth
            >
              Бүртгүүлэх
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Бүртгэлтэй бол
              <Typography
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold cursor-pointer"
                onClick={() => {
                  handleOpen();
                  handleOpenSignIn();
                }}
              >
                Нэвтрэх
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
