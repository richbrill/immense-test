import { Fragment } from "react";
import Version from "./Version";

function Navigation() {
  return (
    <>
      <div className="bg-black w-full">
        <div className="ml-auto text-right h-12 flex items-center text-white font-bold justify-end mr-3">
          Fleet Management v<Version />
        </div>
      </div>
    </>
  );
}

export default Navigation;