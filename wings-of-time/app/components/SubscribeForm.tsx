"use client";

import { useState } from "react";

export async function subscribeEmail(email: string, honeypot = "") {
  const res = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, website: honeypot }),
  });
  if (!res.ok) {
    throw new Error("MailerLite subscription failed");
  }
}

export default function SubscribeForm({
  variant = "section",
  onSuccess,
}: {
  variant?: "section" | "modal";
  onSuccess?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "done" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const honeypot = new FormData(e.currentTarget).get("website");
      await subscribeEmail(email, typeof honeypot === "string" ? honeypot : "");
      setStatus("done");
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <p className="mt-8 text-lg text-[#e6a87c]">
        You’re in — watch your inbox for news from Andrea.
      </p>
    );
  }

  const isSection = variant === "section";

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isSection
          ? "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          : "mt-6 flex flex-col gap-3"
      }
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input
        type="email"
        placeholder="Enter your email"
        required
        autoFocus={!isSection}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`rounded border border-[#f5e6d3]/20 bg-[#fff8f0]/5 px-4 text-lg text-[#fff8f0] placeholder:text-[#f5e6d3]/40 focus:border-[#c97b4a] focus:outline-none ${
          isSection ? "flex-1 py-3.5 md:text-xl" : "py-3"
        }`}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`rounded bg-[#c97b4a] px-8 font-[family-name:var(--font-cinzel)] text-base font-semibold uppercase tracking-wider text-[#fff8f0] transition hover:bg-[#e6a87c] disabled:opacity-60 ${
          isSection ? "py-3.5" : "py-3"
        }`}
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="basis-full text-sm text-[#e6a87c]">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
