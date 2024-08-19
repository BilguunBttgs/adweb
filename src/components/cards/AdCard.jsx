import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function AdCard() {
  return (
    <div className="w-[32.5%] h-[400px] border-2 rounded-md p-3 cursor-pointer">
      <img
        className="rounded-t-md w-full h-56 object-cover"
        src="https://ninetheme.com/themes/fitment/wp-content/uploads/2023/12/akkon-300x300.jpg"
        alt="card-image"
      />

      <h3 color="blue-gray" className="mt-2 text-sm font-medium">
        AKKON - Fit 09-18 Dodge Ram DRL
      </h3>
      <p className="text-orange-600 font-bold text-sm">200,000₮</p>
      <p className="line-clamp-4 font-light">
        Fitment Auto Parts is the indispensable address for high-end automotive
        parts that meet the various needs of vehicle enthusiasts. From essential
        engine parts to state-of-the-art electrical components, our wide range
        of products allows you to find the perfect solutions for your vehicle’s
        needs.
      </p>
    </div>
  );
}
