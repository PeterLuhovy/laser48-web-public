import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <div className="image-container">
          <Image
            src="/lenka.png"
            alt="Lenka"
            width={400}
            height={400}
            className="photo"
            priority
          />
        </div>

        <h1>Lenka, toto si ty!</h1>

        <p className="footer">Web vo výstavbe</p>
      </div>
    </main>
  );
}
