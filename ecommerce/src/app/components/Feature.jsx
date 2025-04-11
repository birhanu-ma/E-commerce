"use client";
export default function Feature() {
  return (
    <section className="my-10 px-10 grid grid-cols-1 justify-items-center items-center sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div  className="w-full flex flex-col justify-center items-center rounded h-40 mx-auto shadow-lg my-10">
        <div>
          <img className="w-15 h-15" src="/img/features/f1.png" alt="" />
          <h6 className="text-center text-[clamp(1rem,2vw,1.5rem)]">free shipping</h6>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center rounded h-40 mx-auto shadow-lg my-10">
        <div>
          <img className="w-15 h-15" src="/img/features/f2.png" alt="" />
          <h6 className="text-center text-[clamp(1rem,2vw,1.5rem)]">online order</h6>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center rounded h-40 mx-auto shadow-lg my-10">
        <div>
          <img className="w-15 h-15" src="/img/features/f3.png" alt="" />
          <h6 className="text-center text-[clamp(1rem,2vw,1.5rem)]">save money</h6>
        </div>
      </div>

      <div  className="w-full flex flex-col justify-center items-center rounded h-40 mx-auto shadow-lg my-10">
        <div>
          <img className="w-15 h-15" src="/img/features/f4.png" alt="" />
          <h6 className="text-center text-[clamp(1rem,2vw,1.5rem)]">happy sell</h6>
        </div>
      </div>

      <div  className="w-full flex flex-col justify-center items-center rounded h-40 mx-auto shadow-lg my-10">
        <div>
          <img className="w-15 h-15" src="/img/features/f5.png" alt="" />
          <h6 className="text-center text-[clamp(1rem,2vw,1.5rem)]">promotion</h6>
        </div>
      </div>

      <div  className="w-full flex flex-col justify-center items-center rounded h-40 mx-auto shadow-lg my-10">
        <div>
          <img className="w-15 h-15" src="/img/features/f6.png" alt="" />
          <h6 className="text-center text-[clamp(1rem,vw,1rem)]">f24/7 support</h6>
        </div>
      </div>
    </section>
  );
}
