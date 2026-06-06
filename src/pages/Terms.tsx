import LegalPage from "./LegalPage";

const termsSections = [
  {
    title: "Service overview",
    body: [
      "Shifted.System offers portfolio website concepts, templates, and bespoke interactive portfolio builds. The site is an enquiry and commission intake website, not an automated checkout.",
      "Submitting a brief, selecting a tier, or joining the waitlist does not create a binding order until the project scope, price, timeline, and payment terms are confirmed in writing.",
    ],
  },
  {
    title: "Commission tiers",
    body: [
      "The Template tier is intended for adapting a pre-built design. The Bespoke tier is intended for a more tailored interactive portfolio concept. Exact deliverables depend on the written project agreement.",
      "Prices shown on the site are starting prices and may change where the requested scope, assets, integrations, revisions, or delivery needs are larger than the standard tier.",
    ],
  },
  {
    title: "Client responsibilities",
    body: [
      "You are responsible for providing accurate contact details, project requirements, assets, brand materials, and access needed to complete the work.",
      "Do not send passwords, private keys, API secrets, payment card details, or other sensitive credentials through the website form or email draft.",
    ],
  },
  {
    title: "Content and rights",
    body: [
      "You must have the right to use any text, images, code, logos, repository content, or other materials you provide for the portfolio.",
      "Unless agreed otherwise, you own the final custom content prepared for your commissioned portfolio after full payment. Pre-existing tools, templates, reusable code, design methods, and general know-how remain with their original owner.",
    ],
  },
  {
    title: "Revisions and delivery",
    body: [
      "Revision rounds, delivery dates, repository handoff, deployment support, and ongoing maintenance are agreed per project. Extra requests outside the agreed scope may require a revised quote.",
      "Delivery may depend on timely feedback, access to required accounts, and the availability of third-party services such as GitHub or hosting platforms.",
    ],
  },
  {
    title: "No guarantees",
    body: [
      "Portfolio work is provided with reasonable care and skill, but no guarantee is made that a portfolio will secure employment, clients, interviews, followers, revenue, search ranking, or platform approval.",
      "The site may contain links to third-party platforms. Their availability, policies, and behavior are outside Shifted.System control.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these terms, privacy, commissions, or waitlist details can be sent to alistairbishop@gmx.co.uk.",
    ],
  },
];

const Terms = () => (
  <LegalPage
    eyebrow="[LEGAL] TERMS"
    title="Terms of Service"
    intro="These terms explain how enquiries, commission tiers, portfolio builds, and project handoff are handled for Shifted.System."
    sections={termsSections}
  />
);

export default Terms;
