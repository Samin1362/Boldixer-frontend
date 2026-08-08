"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button, Input } from "@/components/ui";
import { submitQuote } from "@/app/actions";
import { initialFormState } from "@/lib/formState";

/** Figma: inputs 502x84 r=35, 25px/400 #888888 placeholders, 28px apart. */
const fields = [
  { name: "fullName", label: "Full Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email Address", type: "email", autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel" },
] as const;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="primary"
      size="lg"
      radius="soft"
      disabled={pending}
      className="mt-7"
    >
      {pending ? "Sending..." : "Get a Quote"}
    </Button>
  );
}

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuote, initialFormState);

  return (
    <form action={formAction} noValidate>
      <div className="space-y-7">
        {fields.map((field) => (
          <Input
            key={field.name}
            name={field.name}
            label={field.label}
            placeholder={field.label}
            type={field.type}
            autoComplete={field.autoComplete}
            error={state.fieldErrors?.[field.name]}
          />
        ))}
      </div>

      {/* Honeypot — off-screen and skipped by tab order, not display:none. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton />

      <p
        role="status"
        aria-live="polite"
        className={
          state.status === "success"
            ? "mt-5 text-base font-semibold text-ink"
            : "mt-5 text-base font-semibold text-danger"
        }
      >
        {state.status !== "idle" ? state.message : ""}
      </p>
    </form>
  );
}
