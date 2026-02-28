import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-evergreen text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4">
              Privacyverklaring <span className="font-normal">Dua Decor</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
              Bescherming van uw persoonsgegevens en privacyrechten
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8 sm:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-lg leading-relaxed">
                Dua Decor, gevestigd te Antwerpen, hecht groot belang aan de bescherming van jouw persoonsgegevens en het respecteren van jouw privacy. 
                In deze verklaring leggen we uit hoe we omgaan met de informatie die je met ons deelt via onze website en ons contactformulier.
              </p>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">1. Wie zijn wij?</h2>
                <p>Dua Decor is de verantwoordelijke voor de verwerking van jouw persoonsgegevens.</p>
                <ul className="space-y-2 ml-6">
                  <li><strong>Handelsnaam:</strong> Dua Decor</li>
                  <li><strong>Adres:</strong> Lange Beeldekenstraat 155-157, 2060 Antwerpen</li>
                  <li><strong>Ondernemingsnummer (BTW):</strong> BE0848.653.295</li>
                  <li><strong>E-mail:</strong> info@duadecor.be</li>
                  <li><strong>Telefoon:</strong> 0485 46 09 89</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">2. Welke gegevens verzamelen wij?</h2>
                <p>Wanneer je gebruikmaakt van het contactformulier op onze website, verzamelen wij de volgende gegevens:</p>
                <ul className="space-y-2 ml-6">
                  <li><strong>Naam:</strong> Om je persoonlijk te kunnen aanspreken.</li>
                  <li><strong>E-mailadres:</strong> Om je vraag te kunnen beantwoorden.</li>
                  <li><strong>Telefoonnummer (optioneel):</strong> Om je sneller te kunnen contacteren voor technisch advies of afspraken.</li>
                  <li><strong>Onderwerp en bericht:</strong> De informatie die je zelf verstrekt over je interieurwensen, gordijnen of tapijten.</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">3. Waarom verzamelen we deze gegevens? (Doeleinden)</h2>
                <p>Wij verwerken deze gegevens uitsluitend om:</p>
                <ul className="space-y-2 ml-6">
                  <li>Contact met je op te nemen naar aanleiding van jouw vraag.</li>
                  <li>Een gepaste offerte op te stellen voor jouw gordijnen of tapijten.</li>
                  <li>Onze dienstverlening uit te voeren (bijv. inplannen van een opmeting).</li>
                </ul>
                <p>
                  <strong>Rechtsgrond:</strong> De verwerking is gebaseerd op jouw toestemming (door het aanvinken van het akkoord bij het formulier) 
                  en is noodzakelijk voor de voorbereiding of uitvoering van een overeenkomst (je vraagt informatie over onze producten).
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">4. Hoe lang bewaren we jouw gegevens?</h2>
                <p>Dua Decor bewaart je gegevens niet langer dan strikt noodzakelijk is om de doelen te realiseren waarvoor je gegevens worden verzameld.</p>
                <ul className="space-y-2 ml-6">
                  <li>Indien er geen samenwerking volgt, verwijderen wij je gegevens uiterlijk 1 jaar na het laatste contact.</li>
                  <li>Indien je klant wordt, bewaren we de gegevens zolang dit wettelijk verplicht is voor de boekhouding (7 jaar).</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">5. Delen van gegevens met derden</h2>
                <p>
                  Wij zijn een klein familiebedrijf en gaan vertrouwelijk om met je data. Wij verkopen je gegevens nooit aan derden. 
                  De gegevens worden enkel gedeeld met partijen die strikt noodzakelijk zijn voor onze werking, zoals onze website-host 
                  of IT-beheerder, en enkel voor de hierboven genoemde doeleinden.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">6. Jouw rechten</h2>
                <p>Je hebt volgens de GDPR-wetgeving de volgende rechten:</p>
                <ul className="space-y-2 ml-6">
                  <li><strong>Recht op inzage:</strong> Je mag vragen welke gegevens we van je hebben.</li>
                  <li><strong>Recht op verbetering:</strong> Je kunt foutieve gegevens laten aanpassen.</li>
                  <li><strong>Recht op verwijdering:</strong> Je kunt vragen om je gegevens te wissen.</li>
                  <li><strong>Recht op beperking:</strong> Je kunt vragen om minder gegevens te verwerken.</li>
                </ul>
                <p>Wil je gebruikmaken van deze rechten? Stuur dan een e-mail naar info@duadecor.be.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">7. Beveiliging</h2>
                <p>
                  Dua Decor neemt passende maatregelen om misbruik, verlies, onbevoegde toegang en ongewenste openbaarmaking tegen te gaan. 
                  Onze website is beveiligd met een SSL-certificaat (het slotje in de adresbalk).
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-2">8. Klachten</h2>
                <p>
                  Mocht je een klacht hebben over de verwerking van je gegevens, dan vragen we je om eerst contact met ons op te nemen. 
                  Je hebt ook altijd het recht om een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA):
                </p>
                <ul className="space-y-2 ml-6">
                  <li>Drukpersstraat 35, 1000 Brussel</li>
                  <li>
                    <a 
                      href="https://www.gegevensbeschermingsautoriteit.be" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-evergreen hover:text-evergreen-light underline"
                    >
                      www.gegevensbeschermingsautoriteit.be
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => window.history.back()}
                className="px-8 py-3 bg-evergreen text-white hover:bg-evergreen-light transition-colors"
              >
                ← Terug naar website
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
