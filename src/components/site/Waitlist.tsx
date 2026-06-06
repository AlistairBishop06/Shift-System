import { type FormEvent } from "react";
import { toast } from "@/hooks/use-toast";

const CONTACT_EMAIL = "alistairbishop@gmx.co.uk";

const Waitlist = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const subject = "New Shifted.System waitlist signup";
    const body = [`Waitlist signup: ${email}`].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    toast({ title: "Email draft opened", description: "Send the draft to complete the signup." });
  };

  return (
    <section className="px-6 py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Not sold?</h2>
          <p className="font-mono text-sm mt-2 opacity-80">
            Join the waitlist to be notified about new templates and special offers.
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex w-full md:w-auto">
          <input
            required
            name="email"
            type="email"
            placeholder="Email address"
            className="bg-background/20 border border-background/20 p-4 font-mono text-sm placeholder:text-background/50 focus:outline-none focus:border-background/60 transition-colors"
          />
          <button
            type="submit"
            className="bg-background text-primary px-8 font-mono font-bold text-sm uppercase hover:opacity-90 transition-opacity"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
