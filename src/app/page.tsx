import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <div className="badge">COMING SOON</div>

        <h1>Laser48.sk</h1>
        <p className="subtitle">Profesionálne laserové rezanie</p>

        <div className="image-container">
          <Image
            src="/lenka.png"
            alt="Lenka - budúca CEO"
            width={400}
            height={400}
            className="photo"
            priority
          />
        </div>

        <div className="text-content">
          <h2>Lenka, toto si ty!</h2>
          <p className="joke">
            Budúca CEO Laser48, ktorá ešte nevie, že ju čaká
            <br />
            <strong>laserová revolúcia</strong> v garáži.
          </p>

          <div className="features">
            <div className="feature">
              <span className="icon">🔥</span>
              <span>Režeme všetko (okrem rozpočtu)</span>
            </div>
            <div className="feature">
              <span className="icon">⚡</span>
              <span>Presnosť 0.01mm (na rozdiel od môjho odhadu času)</span>
            </div>
            <div className="feature">
              <span className="icon">💪</span>
              <span>Oceľ, hliník, aj nervy zákazníkov</span>
            </div>
          </div>
        </div>

        <p className="footer-text">
          Web je vo výstavbe. Lenka na tom pracuje... teoreticky.
        </p>
      </div>
    </main>
  );
}
