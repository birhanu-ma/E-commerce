"use client";

export default function Banner() {
  return (
    <section className="relative h-60 w-full flex flex-col items-center justify-center">
      <img
        className="absolute z-0 h-full w-full object-cover"
        src="/img/banner/b1.jpg"
        alt=" banner image"
      />
      <div className="flex flex-col justify-center items-center relative z-10">
        <div>
          <h4 className="text-white text-center text-[clamp(1rem,2vw,2rem)]">
            Repair Services
          </h4>
          <h2 className="text-white  text-[clamp(1rem,4vw,2rem)]">
            up to <span className="text-red-600">70% off </span>- All t-shirts and
            Accesseries
          </h2>
          
        </div>
        <button className="w-40 h-10 text-center rounded bg-white text-black my-3">
            Explore More
        </button>
      </div>
    </section>
  );
}
