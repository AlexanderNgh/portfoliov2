import Image from "next/image";
import WindowComponent from "./components/window";
import Taskbar from "./components/taskbar";
export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col pb-8 bg-image">
      <div className="flex justify-between bg-gray-200 px-4">
        <div className="space-x-2">
          <span>Alexander Pham</span>
          <span>Resume</span>
          <span>Contact</span>
        </div>

        <div>
          <span>Sun Apr 27 2:40 PM </span>
        </div>
      </div>

      <div className="relative flex-grow w-full p-8">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div>
              welcome to my portfolio
            </div>
            <div>
              Alexander Pham
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-white">
          HEY MAIN
        </div>
      </div>
      
      <div className="bottom-0 px-64">
        <Taskbar text=""></Taskbar>
      </div>
    </div>
  );
}
