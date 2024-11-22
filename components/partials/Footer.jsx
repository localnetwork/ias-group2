import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white grid grid-cols-4">
      <div className="bg-black min-h-[400px] flex flex-col items-center w-screen rounded-t-[64px] overflow-hidden py-[50px]">
        <div className="px-[50px] w-full flex h-full">
          <div className="flex h-full flex-col gap-[50px] justify-between">
            <Link href="/" className="">
              <Image
                src="/images/logo.svg"
                width={200}
                height={200}
                alt="Logo"
                className="w-[80px]"
              />
            </Link>
            <div className="opacity-50 text-[12px]">
              <p>Group 2 Incorporated © 2024.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
