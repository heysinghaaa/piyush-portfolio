"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Button, FormField } from "@/components/portfolio-ui";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Piyush,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app with the message ready.");
  }

  return (
    <form className="grid gap-5 pt-1.5" onSubmit={handleSubmit}>
      <FormField label="Name" name="name" type="text" autoComplete="name" required />
      <FormField label="Email" name="email" type="email" autoComplete="email" required />
      <FormField label="Message" name="message" multiline rows={5} required />
      <Button
        className="mt-2 hover:-translate-y-0.5"
        data-cursor-label="Send"
        fullWidth
        size="lg"
        type="submit"
      >
        Open email draft <Send aria-hidden="true" />
      </Button>
      <p className="min-h-5 text-xs font-medium text-signal-green" role="status">
        {status}
      </p>
    </form>
  );
}
