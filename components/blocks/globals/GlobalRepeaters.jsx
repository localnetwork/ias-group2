export default function GlobalRepeaters({ items }) {
  return (
    <div className="pt-[20px] pb-[50px] bg-[#FFFCE1] text-[#333] px-[50px] flex flex-col gap-[50px]">
      {items?.map((item, index) => (
        <div className="flex flex-col gap-[10px]" key={index}>
          <h3 className="font-bold text-[40px]">{item?.title}</h3>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          />
        </div>
      ))}
    </div>
  );
}
