/**
 * Shared form state for `useActionState`.
 *
 * ⚠️ This lives here, not in `app/actions.ts`, because a `"use server"` module
 * may only export async functions. Exporting the `initialFormState` object from
 * there threw at runtime — *not* at build or lint time — and every submission
 * hung on "Sending…". Keep values and types out of the actions file.
 */
export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle" };
