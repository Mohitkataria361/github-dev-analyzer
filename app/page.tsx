import Image from "next/image";

export default function Home() {
  return (
     <div>
       <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-5xl font-bold tracking-tight">
        Analyze Any GitHub Profile
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        Get detailed insights into repositories, programming languages,
        contribution statistics, stars, forks, and much more.
      </p>
    </main>
    </div>
  );
}
