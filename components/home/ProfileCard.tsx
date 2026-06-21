import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="rounded-[2rem] border border-blue-100 bg-white p-4 shadow-[0_24px_80px_rgba(37,99,235,0.10)]">
      <div className="relative mx-auto mt-6 h-[360px] w-[82%] overflow-hidden rounded-[1.5rem]">
        <Image
          src="/profile.jpg"
          alt="Harshita Srivastava"
          fill
          className="object-cover object-[center_25%]"
          priority
        />
      </div>

      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
          Candidate Profile
        </p>

        <h3 className="mt-3 text-2xl font-black text-slate-950">
          Harshita Srivastava
        </h3>

        <p className="mt-2 text-slate-600">
          B.E. Computer Science 
        </p>
      </div>
    </div>
  );
}