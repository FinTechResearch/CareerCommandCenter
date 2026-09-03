"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Please tell us your name (2+ characters)."),
  email: z.string().email("Please enter a valid email address."),
  feature: z
    .string()
    .min(10, "Describe your feature idea in at least 10 characters.")
    .max(600, "Keep it under 600 characters."),
});

type FormValues = z.infer<typeof schema>;

/** Minimal zod resolver — no extra dependency needed. */
const resolver = async (values: FormValues) => {
  const result = schema.safeParse(values);
  if (result.success) return { values: result.data, errors: {} };
  const errors: Record<string, { type: string; message: string }> = {};
  for (const issue of result.error.issues) {
    const key = issue.path.join(".");
    if (!errors[key]) errors[key] = { type: issue.code, message: issue.message };
  }
  return { values: {}, errors };
};

export function FeatureForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver });

  const onSubmit = async () => {
    // No backend yet — simulate the round-trip. Wire this up to your
    // API route / GitHub issue template / email service when ready.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex h-full min-h-64 flex-col items-center justify-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <p className="font-semibold">Transmission received 🚀</p>
        <p className="text-sm text-muted-foreground">
          Thanks for the idea — open-source contributions are welcome too, via
          pull request on GitHub.
        </p>
        <Button variant="ghost" size="sm" onClick={() => setSubmitted(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Ada Lovelace" aria-invalid={!!errors.name} {...register("name")} />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="ada@analytical.engine" aria-invalid={!!errors.email} {...register("email")} />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="feature">Feature idea</Label>
        <Textarea
          id="feature"
          rows={4}
          placeholder="e.g. ATS scoring dashboard, PDF report export, LinkedIn job sync…"
          aria-invalid={!!errors.feature}
          {...register("feature")}
        />
        {errors.feature && (
          <p className="text-xs text-destructive">{errors.feature.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="size-4" /> Request a feature
          </>
        )}
      </Button>
    </form>
  );
}