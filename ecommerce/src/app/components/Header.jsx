"use client";
export default function Header() {
  return (
    <section className="relative flex" id="heros">
      <img
        className="w-full relative bg-min-h-screen object-cover right-0 z-0"
        src="/img/hero4.png"
        alt="hero image"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-center ml-10">
        <div>
          <h4 className="text-[clamp(0.5rem,2vw,2rem)]">Tread in offer</h4>
          <h2 className="text-[clamp(1rem,5vw,3rem)]">Supper value deals</h2>
          <h1 className="text-[clamp(1rem,5vw,3rem)]">On all products</h1>
          <p className="text-[clamp(0.5rem,2vw,2rem)]">Save more with coupons & up to 70% off</p>
          <button className="text-[clamp(0.5rem,2vw,2rem)]bg-blue-400 rounded">show now</button>
        </div>
      </div>
    </section>
  );
}
