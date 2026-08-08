"use server";

import { quoteSchema, subscribeSchema } from "@/lib/validation";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };

/**
 * Handle a quote request.
 *
 * ⚠️ There is no delivery destination wired up yet — the validated payload is
 * logged and discarded. Replace the marked block with a real integration
 * (transactional email, CRM, webhook). Everything around it — validation,
 * honeypot, error surfacing, success state — is production-shaped already.
 */
export async function submitQuote(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = quoteSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    phone: formData.get("phone"),
    company: formData.get("company"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      fieldErrors[key] ??= issue.message;
    }
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  // A filled honeypot means a bot. Return success so it learns nothing.
  if (parsed.data.company) {
    return { status: "success", message: "Thanks — we'll be in touch shortly." };
  }

  // ---- TODO: deliver the request -------------------------------------------
  console.log("[quote] validated submission", {
    ...parsed.data,
    company: undefined,
  });
  // --------------------------------------------------------------------------

  return { status: "success", message: "Thanks — we'll be in touch shortly." };
}

/**
 * Handle a newsletter signup.
 *
 * ⚠️ Same as `submitQuote` — validated but not delivered. Replace the marked
 * block with a real list provider.
 */
export async function subscribeNewsletter(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = subscribeSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    company: formData.get("company"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      fieldErrors[key] ??= issue.message;
    }
    return { status: "error", message: "Please check your details.", fieldErrors };
  }

  if (parsed.data.company) {
    return { status: "success", message: "You're subscribed." };
  }

  // ---- TODO: add to the mailing list ---------------------------------------
  console.log("[subscribe] validated signup", {
    ...parsed.data,
    company: undefined,
  });
  // --------------------------------------------------------------------------

  return { status: "success", message: "You're subscribed." };
}
