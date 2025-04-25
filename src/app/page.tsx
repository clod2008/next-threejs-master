import { Scene } from "@/components";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">
        Three.js con Next.js
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Una demostración de Three.js con Next.js
      </p>
      <div className="w-full h-[500px] rounded-lg shadow-lg overflow-hidden outline-2 outline-gray-300">
        <Scene />
      </div>
    </div>
  );
}
