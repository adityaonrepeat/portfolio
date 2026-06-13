import Link from "next/link";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Freelance & Collaboration</span>
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Ready to Build Something Great?
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          I&apos;m open to collaborations, freelance projects, and interesting
          opportunities. Reach out on{" "}
          <Link
            href={DATA.contact.social.X.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            Twitter
          </Link>{" "}
          or send me an email — I&apos;ll get back to you.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            href={DATA.contact.social.X.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-primary text-background px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            DM on Twitter
          </Link>
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            Send an Email
          </Link>
        </div>
      </div>
    </div>
  );
}
