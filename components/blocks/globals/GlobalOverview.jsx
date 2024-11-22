import Image from "next/image";

export default function GlobalOverview({ description }) {
  return (
    <div className="py-[70px] pb-[30px] px-[50px] bg-[#FFFCE1] text-[#333]">
      <h2 className="flex items-center font-bold text-[80px] gap-[15px]">
        Overview
      </h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}
