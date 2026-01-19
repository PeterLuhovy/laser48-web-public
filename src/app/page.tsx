import Image from "next/image";

export default function Home() {
  return (
    <main className="logo-container">
      <Image
        src="/logo.png"
        alt="Laser48"
        width={500}
        height={500}
        className="logo"
        priority
      />
    </main>
  );
}
