import Image from "next/image";
import { useEffect } from "react";

export default function OurTeamMembers() {
  useEffect(() => {
    const light = document.querySelector(".light");

    window.addEventListener("mousemove", (e) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const mousex = e.clientX;
      const mousey = e.clientY;

      const x = (mousex / windowWidth) * 100;
      const y = (mousey / windowHeight) * 100;

      light.style.background = `radial-gradient(
    circle at ${x}% ${y}%,
    rgba(20, 20, 20, 0) 0%,
    rgba(20, 20, 20, 0.4) 17%,
    rgba(20, 20, 20, 0.6) 19%,
    rgba(20, 20, 20, 0.9) 22%,
    rgba(20, 20, 20, 1) 30%,
    rgba(20, 20, 20, 1) 100%
  )`;
      // light.style.transform = `rotateY(${5 * x}deg) perspective(${100 * x}rem)`;
    });
  }, []);

  const members = [
    {
      name: "Adrian Quiroy",
      image: "/images/adrian.jpg",
      location: "Lapu-lapu City",
    },
    {
      name: "Catherine Inoc",
      image: "/images/catherine.jpg",
      location: "Lapu-lapu City",
    },
    {
      name: "Chris ",
      image: "/images/chris.jpg",
      location: "Lapu-lapu City",
    },
    {
      name: "Diome Nike Potot",
      image: "/images/diome.jpg",
      location: "Cordova",
    },
    {
      name: "Earl Andales",
      image: "/images/earl.jpg",
      location: "Lapu-lapu City",
    },
    {
      name: "Elisha Joy Pongot Rondina",
      image: "/images/elisha.jpg",
      location: "Cordova",
    },
    {
      name: "Felix Berdin",
      image: "/images/felix.jpg",
      location: "Cordova",
    },
    {
      name: "Ja Nino Cerna Alegarbes",
      image: "/images/nino.jpg",
      location: "Lapu-lapu City",
    },
    {
      name: "Jane Ybañez",
      image: "/images/jane.jpg",
      location: "Cordova",
    },
    {
      name: "Jovel Gasataya",
      image: "/images/jovel.jpg",
      location: "Cordova",
    },
    {
      name: "Mar Vin",
      image: "/images/marvin.jpg",
      location: "Cordova",
    },
    {
      name: "Quillan John Paul",
      image: "/images/paul.jpg",
      location: "Cordova",
    },
  ];

  const groupByRows = (array, itemsPerRow) => {
    const grouped = [];
    for (let i = 0; i < array.length; i += itemsPerRow) {
      grouped.push(array.slice(i, i + itemsPerRow));
    }
    return grouped;
  };

  const groupedMembers = groupByRows(members, 3);

  console.log("groupedMembers", groupedMembers);

  const isOdd = (index) => {
    return index % 2 !== 0;
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="light !absolute" />
        <div className="min-h-[100dvh] pt-[150px] relative">
          <div className="px-[50px]">
            <h1 className="text-[50px] leading-[60px] mb-[50px] mix-blend-difference font-bold">
              Our Team
            </h1>

            {groupedMembers?.map((row, index) => {
              const odd = isOdd(index);

              return (
                <div
                  key={index}
                  className={`row ${
                    odd ? "marquee-odd pl-[150px]" : "marquee-even pr-[150px]"
                  }`}
                >
                  <div className="grid mb-[30px] grid-cols-3 gap-[50px]">
                    {row?.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white flex gap-[15px] text-[#333333] p-[10px] shadow-md rounded-[50px]"
                      >
                        <Image
                          src={item?.image}
                          width={200}
                          height={200}
                          className="h-[80px] w-[80px] rounded-full"
                        />
                        <div className="flex flex-col gap-[15px]">
                          <h3 className="pt-[15px]">{item?.name}</h3>
                          <div className="flex gap-[3px] text-[#9A0C16] text-[12px] items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="#9A0C16"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                              />
                            </svg>
                            {item?.location}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
