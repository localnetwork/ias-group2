import Image from "next/image";

export default function HomeGridTextMedia() {
  return (
    <div className="py-[50px] bg-[#9A0C16] px-[30px]">
      <div className="grid grid-cols-2 gap-[50px] ">
        <div className="col-span-1 py-[50px]">
          <p>Lorem Ipsum</p>
          <h2 className="font-bold text-[50px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>

        <div className="col-span-1 p-[70px] bg-[#680007] relative">
          <span className="absolute top-0 left-0 w-full h-full bg-[url('/images/space-pattern.png')] opacity-10 mix-blend-multiply" />
          <div className="relative">
            <h3 className="font-bold text-[30px] mb-[15px]">Hello There</h3>
            <Image
              src="/images/meme-frog.webp"
              className="w-full h-[400px] object-cover "
              width={500}
              height={500}
            />
            <div class="mt-[30px] text-left">
              <a
                class="bg-[#9A0C16] inline-block w-full text-center px-[30px] py-[15px] text-white rounded-lg"
                href="/#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
