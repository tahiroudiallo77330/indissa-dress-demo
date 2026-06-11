import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — Indissa Dress Paris",
  description: "Mentions légales du site Indissa Dress Paris — SAS INDISSA DRESS, SIRET 985 263 573 00018.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#fef9f1] pt-[72px]">
        <section className="max-w-[780px] mx-auto px-8 py-20 md:py-28">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c4a882] mb-4">Légal</p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[#1d1c17] mb-12 leading-[1.15]">
            Mentions Légales
          </h1>

          <div className="space-y-10 text-[14px] text-[#747878] leading-relaxed">

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">1. Éditeur du site</h2>
              <p>Le site <strong className="text-[#1d1c17]">indissa-dress-demo.vercel.app</strong> est édité par :</p>
              <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-[#e7e2da]">
                <li><strong className="text-[#1d1c17]">Raison sociale :</strong> INDISSA DRESS</li>
                <li><strong className="text-[#1d1c17]">Forme juridique :</strong> SAS — Société par Actions Simplifiée</li>
                <li><strong className="text-[#1d1c17]">Capital social :</strong> 200 €</li>
                <li><strong className="text-[#1d1c17]">SIREN :</strong> 985 263 573</li>
                <li><strong className="text-[#1d1c17]">SIRET :</strong> 985 263 573 00018</li>
                <li><strong className="text-[#1d1c17]">Code APE/NAF :</strong> 47.71Z — Vente au détail de vêtements en magasin spécialisé</li>
                <li><strong className="text-[#1d1c17]">N° TVA intracommunautaire :</strong> FR38 985 263 573</li>
                <li><strong className="text-[#1d1c17]">Adresse du siège :</strong> 37 Allée de la Toison d&apos;Or, 94000 Créteil, France</li>
                <li><strong className="text-[#1d1c17]">Date de création :</strong> 4 mars 2024</li>
                <li><strong className="text-[#1d1c17]">Email :</strong>{" "}
                  <a href="mailto:indissadressparis@gmail.com" className="text-[#1d1c17] underline hover:text-[#c4a882] transition-colors">
                    indissadressparis@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">2. Directrice de la publication</h2>
              <p>La directrice de la publication est la présidente de la SAS INDISSA DRESS.</p>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">3. Hébergement</h2>
              <p>Ce site est hébergé par :</p>
              <ul className="mt-3 space-y-1.5 pl-4 border-l-2 border-[#e7e2da]">
                <li><strong className="text-[#1d1c17]">Société :</strong> Vercel Inc.</li>
                <li><strong className="text-[#1d1c17]">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
                <li><strong className="text-[#1d1c17]">Site :</strong> vercel.com</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">4. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des éléments constituant ce site (textes, images, photographies, logo, charte graphique)
                est la propriété exclusive de la SAS INDISSA DRESS et est protégé par les lois françaises et
                internationales relatives à la propriété intellectuelle.
              </p>
              <p className="mt-3">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans
                l&apos;autorisation écrite préalable de la SAS INDISSA DRESS.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">5. Données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679)
                et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification,
                de suppression et de portabilité de vos données personnelles.
              </p>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:indissadressparis@gmail.com" className="text-[#1d1c17] underline hover:text-[#c4a882] transition-colors">
                  indissadressparis@gmail.com
                </a>.
                Consultez notre{" "}
                <a href="/confidentialite" className="text-[#1d1c17] underline hover:text-[#c4a882] transition-colors">
                  Politique de Confidentialité
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">6. Cookies</h2>
              <p>
                Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie de
                traçage publicitaire n&apos;est déposé sans votre consentement explicite.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige,
                et après échec de toute tentative de règlement amiable, les tribunaux compétents du
                ressort de Créteil seront seuls compétents.
              </p>
            </div>

            <p className="text-[12px] text-[#aaa] border-t border-[#e7e2da] pt-6">
              Dernière mise à jour : juin 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
