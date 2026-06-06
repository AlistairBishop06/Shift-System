import LegalPage from "./LegalPage";

const privacySections = [
  {
    title: "Information you send",
    body: [
      "When you submit a commission brief or waitlist signup, the site opens a prefilled email draft addressed to alistairbishop@gmx.co.uk. The information is only sent if you choose to send that email from your own mail app.",
      "A commission brief may include your GitHub username, contact email, selected commission tier, preferred portfolio concept, and any notes you write about the project.",
    ],
  },
  {
    title: "How it is used",
    body: [
      "Your details are used to reply to your enquiry, discuss portfolio concepts, prepare quotes, deliver commissioned work, and keep a record of the project conversation.",
      "Waitlist emails are used to notify you about relevant Shifted.System portfolio templates, availability, or special offers.",
    ],
  },
  {
    title: "GitHub and project material",
    body: [
      "If you provide a GitHub username, public repository information may be reviewed so a portfolio concept can be proposed. Private repositories, credentials, access tokens, or account passwords should not be sent through the form.",
      "Any project files, references, or assets you later provide are used only for the portfolio work you request unless you agree otherwise.",
    ],
  },
  {
    title: "Sharing and storage",
    body: [
      "Personal information is not sold. It may be stored in the email account, project notes, or delivery files needed to manage your enquiry or commission.",
      "Information may be shared only where needed to provide the service, comply with the law, handle a payment or dispute, or use hosting/deployment tools you ask to connect.",
    ],
  },
  {
    title: "Cookies and analytics",
    body: [
      "This site does not currently set its own tracking cookies or run a custom analytics system. Hosting platforms or embedded third-party services may process basic technical data such as IP address, browser type, and pages visited.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask for your enquiry details to be corrected or deleted by emailing alistairbishop@gmx.co.uk. Some records may need to be kept where required for legal, accounting, security, or dispute reasons.",
      "You can unsubscribe from waitlist or marketing messages by replying and asking to be removed.",
    ],
  },
];

const Privacy = () => (
  <LegalPage
    eyebrow="[LEGAL] PRIVACY"
    title="Privacy Policy"
    intro="This policy explains what information Shifted.System collects through the commission brief and waitlist flows, and how that information is handled."
    sections={privacySections}
  />
);

export default Privacy;
