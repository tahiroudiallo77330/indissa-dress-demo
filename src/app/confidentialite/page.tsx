import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Indissa Dress Paris",
  description: "Politique de confidentialité et protection des données personnelles d'Indissa Dress Paris.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="bg-[#fef9f1] pt-[72px]">
        <section className="max-w-[780px] mx-auto px-8 py-20 md:py-28">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#c4a882] mb-4">RGPD</p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-[#1d1c17] mb-12 leading-[1.15]">
            Politique de Confidentialité
          </h1>

          <div className="space-y-10 text-[14px] text-[#747878] leading-relaxed">

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles collectées sur ce site est
                Indissa Dress Paris, joignable à l'adresse :
                <a href="mailto:indissadressparis@gmail.com" className="text-[#1d1c17] underline ml-1 hover:text-[#c4a882] transition-colors">
                  indissadressparis@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">2. Données collectées</h2>
              <p>Nous collectons uniquement les données que vous nous fournissez volontairement :</p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "Adresse email (formulaire newsletter)",
                  "Nom, prénom et coordonnées (prise de rendez-vous par email)",
                  "Données de commande (traitées par Shopify lors du paiement)",
                  "Mensurations (communiquées lors des consultations en atelier)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c4a882] mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">3. Finalités du traitement</h2>
              <p>Vos données sont utilisées exclusivement pour :</p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "Répondre à vos demandes de rendez-vous et de contact",
                  "Vous envoyer notre newsletter (sur la base de votre consentement)",
                  "Traiter vos commandes et assurer le suivi de votre création",
                  "Respecter nos obligations légales et comptables",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c4a882] mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">4. Base légale</h2>
              <p>
                Le traitement de vos données repose sur votre consentement (newsletter, formulaire de contact)
                et sur l'exécution d'un contrat (commandes et créations sur mesure).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">5. Conservation des données</h2>
              <p>
                Vos données sont conservées pour la durée strictement nécessaire aux finalités poursuivies :
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "Données clients : 3 ans à compter du dernier contact",
                  "Données de commande : 10 ans (obligations comptables)",
                  "Newsletter : jusqu'à désinscription",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c4a882] mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">6. Vos droits</h2>
              <p>
                Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés,
                vous disposez des droits suivants :
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "Droit d'accès à vos données",
                  "Droit de rectification",
                  "Droit à l'effacement (droit à l'oubli)",
                  "Droit à la limitation du traitement",
                  "Droit à la portabilité",
                  "Droit d'opposition",
                  "Droit de retirer votre consentement à tout moment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c4a882] mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:indissadressparis@gmail.com" className="text-[#1d1c17] underline hover:text-[#c4a882] transition-colors">
                  indissadressparis@gmail.com
                </a>
                . Vous disposez également du droit de déposer une réclamation auprès de la{" "}
                <strong className="text-[#1d1c17]">CNIL</strong> (www.cnil.fr).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">7. Partage des données</h2>
              <p>
                Nous ne vendons ni ne louons vos données personnelles à des tiers. Vos données peuvent être
                partagées avec :
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                {[
                  "Shopify Inc. (traitement des commandes et paiements) — politique disponible sur shopify.com/legal/privacy",
                  "Vercel Inc. (hébergement du site) — politique disponible sur vercel.com/legal/privacy-policy",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c4a882] mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[18px] text-[#1d1c17] mb-4">8. Sécurité</h2>
              <p>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour
                protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
                Les paiements sont entièrement sécurisés et gérés par Shopify — nous ne stockons aucune
                donnée bancaire.
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
