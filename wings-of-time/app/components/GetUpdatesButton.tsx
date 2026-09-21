"use client";

import { useEffect, useState } from "react";
import SubscribeForm from "./SubscribeForm";

export default function GetUpdatesButton() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded border border-[#f5e6d3]/40 px-8 py-3.5 font-[family-name:var(--font-cinzel)] text-base font-medium uppercase tracking-wider text-[#f5e6d3] transition hover:border-[#f5e6d3] hover:bg-[#f5e6d3]/10"
      >
        Get Updates
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1612]/80 px-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="get-updates-title"
        >
          <div
            className="w-full max-w-md rounded-lg border border-[#f5e6d3]/15 bg-[#2b1d17] p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="ml-auto -mr-2 -mt-2 block p-2 text-5xl leading-none text-[#f5e6d3]/60 transition hover:text-[#f5e6d3]"
            >
              ×
            </button>

            {submitted ? (
              <>
                <h3
                  id="get-updates-title"
                  className="font-[family-name:var(--font-cinzel)] text-xl uppercase tracking-[0.15em] text-[#e6a87c] md:text-2xl"
                >
                  You’re In
                </h3>
                <p className="mt-4 text-lg text-[#f5e6d3]/80">
                  Thanks for subscribing — watch your inbox for news from
                  Andrea.
                </p>
              </>
            ) : (
              <>
                <h3
                  id="get-updates-title"
                  className="font-[family-name:var(--font-cinzel)] text-xl uppercase tracking-[0.15em] text-[#fff8f0] md:text-2xl"
                >
                  Step Into the Story
                </h3>
                <p className="mt-4 text-lg text-[#f5e6d3]/80">
                  Be the first to hear about signings, extras, and what Andrea
                  is writing next.
                </p>
                <SubscribeForm
                  variant="modal"
                  onSuccess={() => setSubmitted(true)}
                />
                <p className="mt-3 text-sm text-[#fff8f0]/80">
                  No spam. Just occasional notes from the author.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
