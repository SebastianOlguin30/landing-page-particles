import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <p>Introducción</p>
      </div>
    </main>
  );
}
