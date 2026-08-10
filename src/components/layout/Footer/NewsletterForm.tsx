"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button, Icon, Input } from "@/components/ui";
import { subscribeNewsletter } from "@/app/actions";
import { initialFormState } from "@/lib/formState";
import { footer } from "@/content/footer";

/**
 * Figma: two 276x82 r=35 fields (fill #C4C4C4, rendering #4E4B4B over the
 * footer) and a 276x85 #FFC700 button with `la:telegram-plane`.
 */
function SubmitButton() {
  const { pending } = useFormStatus();
  const { cta } = footer.columns.updates;

  return (
    <Button
      type="submit"
      variant="bright"
      radius="soft"
      disabled={pending}
      /*
        No `text-white` here. It was overriding the `bright` variant's own
        `text-ink` and putting white on gold-bright — 1.96:1, the worst
        contrast on the page. Same standing rule as everywhere else: nothing
        sits on gold except ink.
      */
      className="mt-6 h-[74px] w-full max-w-[276px] text-base font-bold tracking-[0.1em]"
    >
      {pending ? "Subscribing..." : cta}
      <Icon name="la:telegram-plane" size={18} />
    </Button>
  );
}

export function NewsletterForm() {
  const [state, formAction] = useActionState(subscribeNewsletter, initialFormState);
  const { title, namePlaceholder, emailPlaceholder } = footer.columns.updates;

  return (
    <div>
      <h2 className="text-h3 tracking-[0.1em] text-white">{title}</h2>

      <form action={formAction} noValidate className="mt-8 lg:mt-12">
        <div className="max-w-[276px] space-y-5">
          <Input
            tone="filled"
            name="fullName"
            label={namePlaceholder}
            placeholder={namePlaceholder}
            autoComplete="name"
            error={state.fieldErrors?.fullName}
            className="h-[74px] text-base tracking-[0.1em]"
          />
          <Input
            tone="filled"
            type="email"
            name="email"
            label={emailPlaceholder}
            placeholder={emailPlaceholder}
            autoComplete="email"
            error={state.fieldErrors?.email}
            className="h-[74px] text-base tracking-[0.1em]"
          />
        </div>

        {/* Honeypot — off-screen rather than display:none. */}
        <div aria-hidden className="absolute left-[-9999px]">
          <label htmlFor="newsletter-company">Company</label>
          <input id="newsletter-company" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <SubmitButton />

        <p
          role="status"
          aria-live="polite"
          className="mt-4 text-sm font-semibold text-gold-bright"
        >
          {state.status !== "idle" ? state.message : ""}
        </p>
      </form>
    </div>
  );
}
