import Image from "next/image";
import GetUpdatesButton from "./components/GetUpdatesButton";
import AirfieldScene from "./components/AirfieldScene";
import FadeIn from "./components/FadeIn";

const AMAZON_URL =
  "https://www.amazon.co.uk/Wings-Time-Bailey/dp/106665591X";
const BROWNS_URL =
  "https://www.brownsbfs.co.uk/Product/Bailey/Wings-of-Time/9781066655915";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#3e2b3a] via-[#8c4f35] to-[#d4a574]">
          <div className="absolute inset-0 warm-vignette" />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Cover */}
              <div className="flex justify-center lg:justify-end">
                <div className="book-cover relative w-[260px] md:w-[340px] lg:w-[400px]">
                  <Image
                    src="/cover-front.png"
                    alt="Wings of Time book cover by Andrea Bailey"
                    width={638}
                    height={1188}
                    className="rounded-sm"
                    priority
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="text-center lg:text-left">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#e6a87c] md:text-base">
                  Andrea Bailey
                </p>
                <h1 className="hero-title leading-[0.55] text-[#fff8f0] drop-shadow-lg">
                  <span className="font-[family-name:var(--font-pinyon)] block text-8xl md:text-9xl lg:text-[9.5rem]">
                    Wings
                  </span>
                  <span className="font-[family-name:var(--font-cinzel)] -mt-3 block pl-[4.2rem] text-3xl font-normal tracking-[0.12em] text-[#e6a87c] md:-mt-4 md:pl-[5.5rem] md:text-4xl lg:-mt-5 lg:pl-[7rem] lg:text-5xl">
                    OF
                  </span>
                  <span className="font-[family-name:var(--font-cinzel)] -mt-3 block text-7xl font-semibold tracking-[0.08em] md:-mt-4 md:text-8xl lg:-mt-5 lg:text-9xl">
                    TIME
                  </span>
                </h1>
                <div className="mx-auto mt-8 h-px w-24 bg-[#e6a87c]/60 lg:mx-0" />
                <p className="mx-auto mt-6 max-w-md text-2xl leading-relaxed text-[#f5e6d3]/95 lg:mx-0">
                  One woman. Two eras. A love that refuses to belong to just one
                  lifetime.
                </p>
                <p className="mt-5 inline-block rounded-full border border-[#e6a87c]/50 bg-[#e6a87c]/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.15em] text-[#e6a87c]">
                  Available now
                </p>
                <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                  <a
                    href={AMAZON_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-cta inline-flex items-center justify-center rounded bg-[#c97b4a] px-8 py-3.5 font-[family-name:var(--font-cinzel)] text-base font-semibold uppercase tracking-wider text-[#fff8f0] shadow-lg transition hover:bg-[#e6a87c]"
                  >
                    Buy the Book
                  </a>
                  <GetUpdatesButton />
                </div>
                <a
                  href="#buy"
                  className="mt-10 inline-block animate-bounce text-[#f5e6d3]/70 transition hover:text-[#fff8f0]"
                  aria-label="Scroll to buy links"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 13l5 5 5-5" />
                    <path d="M7 6l5 5 5-5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Blurb */}
        <section className="relative overflow-hidden bg-[#fff8f0] px-6 py-16 text-[#2b1d17] md:py-24">
          <AirfieldScene variant="airfield" className="text-[#8c4f35] opacity-[0.10]" />
          <FadeIn className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-normal uppercase tracking-[0.15em] text-[#3e2b3a] md:text-3xl">
              A Love That Crosses Time
            </h2>
            <div className="mx-auto mt-6 space-y-6 text-xl leading-relaxed text-[#2b1d17]/90 md:text-2xl">
              <p>
                Elizabeth’s life feels predictable—until a faded photograph of
                her great-aunt, a spirited MT driver in the Women’s Auxiliary Air
                Force, sends her searching for a story unfinished.
              </p>
              <p>
                A walk through the woods changes everything. Suddenly it is 1942,
                the air hums with urgency on a Lancaster bomber base, and
                Elizabeth is no longer playing at history—she is living it.
              </p>
              <p className="font-[family-name:var(--font-cinzel)] text-xl font-medium uppercase tracking-[0.08em] text-[#8c4f35] md:text-2xl">
                Caught between two lives, she must choose: a safe present, or a
                dangerous past where love burns bright but time is borrowed.
              </p>
              <a
                href="#buy"
                className="mt-8 inline-block rounded border border-[#3e2b3a]/40 px-6 py-2.5 font-[family-name:var(--font-cinzel)] text-sm font-medium uppercase tracking-wider text-[#3e2b3a] transition hover:border-[#3e2b3a] hover:bg-[#3e2b3a]/10"
              >
                Order your copy →
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Reviews */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#3e2b3a] via-[#8c4f35] to-[#d4a574] px-6 py-16 text-[#fff8f0] md:py-24">
          <div className="absolute inset-0 warm-vignette" />
          <FadeIn className="mx-auto max-w-4xl">
            <h2 className="text-center font-[family-name:var(--font-cinzel)] text-2xl font-normal uppercase tracking-[0.15em] text-[#fff8f0] md:text-3xl">
              What Readers Are Saying
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  name: "Mark Wilcockson",
                  stars: 5,
                  title: "A book I could not put down",
                  href: "https://www.amazon.co.uk/portal/customer-reviews/srp/-/R38DY0G5IFCMQX/ref=cm_cr_dp_d_rvw_ttl?_encoding=UTF8&ie=UTF8",
                  text: "Wow what a great read. Could not put the book down. I usually read crime books but was drawn to this book by the 1940’s theme. Once started could not put it down. Enthralling storyline with glimpses of history. At times you feel you are there which is a sign of a good writer. But it you won’t regret it.",
                },
                {
                  name: "Stephen Williams",
                  stars: 5,
                  title: "A very enjoyable read.",
                  href: "https://www.amazon.co.uk/portal/customer-reviews/srp/-/R1IIHM6WS5NKSS/ref=cm_cr_dp_d_rvw_ttl?_encoding=UTF8&ie=UTF8",
                  text: "I would definitely recommend this book to friends. I hope there will be another one soon as it could be a very good series.",
                },
              ].map((review) => (
                <a
                  key={review.name}
                  href={review.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-[#f5e6d3]/25 bg-[#1f1612]/60 p-6 shadow-sm backdrop-blur-sm transition hover:border-[#c97b4a] hover:shadow-md md:p-8"
                >
                  <div className="flex items-center gap-1 text-[#c97b4a]">
                    {Array.from({ length: review.stars }, (_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M10 1l2.5 6.5L19 8l-5 4.5 1.5 6.5L10 14l-5.5 5 1.5-6.5L1 8l6.5-.5L10 1z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-3 font-[family-name:var(--font-cinzel)] text-lg font-medium uppercase tracking-wider text-[#fff8f0]">
                    {review.title}
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-[#f5e6d3]/90">
                    “{review.text}”
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#e6a87c]">
                    {review.name}
                  </p>
                </a>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Buy */}
        <section id="buy" className="relative overflow-hidden bg-[#2b1d17] px-6 py-16 text-[#fff8f0] md:py-24">
          <svg
            className="pointer-events-none absolute bottom-0 left-1/2 w-[1200px] max-w-none -translate-x-1/2 text-[#f5e6d3] opacity-[0.10]"
            viewBox="0 0 1200 220"
            fill="currentColor"
            aria-hidden="true"
          >
            {/* simple open book */}
            <g transform="translate(600 210)">
              {/* cover left */}
              <path d="M-8 -70 C -110 -70 -170 -50 -190 -20 L -190 25 C -170 0 -110 -20 -8 -20 Z" />
              {/* cover right */}
              <path d="M8 -70 C 110 -70 170 -50 190 -20 L 190 25 C 170 0 110 -20 8 -20 Z" />
              {/* pages left */}
              <path d="M-12 -66 C -106 -66 -162 -48 -182 -22 L -182 20 C -162 -2 -106 -16 -12 -16 Z" />
              {/* pages right */}
              <path d="M12 -66 C 106 -66 162 -48 182 -22 L 182 20 C 162 -2 106 -16 12 -16 Z" />
              {/* spine */}
              <rect x="-10" y="-68" width="20" height="68" rx="3" />
              {/* page strokes left */}
              <line x1="-170" y1="-36" x2="-40" y2="-42" stroke="currentColor" strokeWidth="2" opacity="0.35" />
              <line x1="-170" y1="-20" x2="-40" y2="-26" stroke="currentColor" strokeWidth="2" opacity="0.35" />
              {/* page strokes right */}
              <line x1="40" y1="-42" x2="170" y2="-36" stroke="currentColor" strokeWidth="2" opacity="0.35" />
              <line x1="40" y1="-26" x2="170" y2="-20" stroke="currentColor" strokeWidth="2" opacity="0.35" />
            </g>
          </svg>
          <FadeIn className="relative mx-auto max-w-4xl text-center">
            <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-normal uppercase tracking-[0.15em] text-[#fff8f0] md:text-3xl">
              Get Your Copy
            </h2>
            <p className="mt-4 text-xl text-[#f5e6d3]/80 md:text-2xl">
              Available in paperback, hardback, and ebook wherever books are
              sold.
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
              {[
                { name: "Amazon", href: AMAZON_URL },
                { name: "Browns Books", href: BROWNS_URL },
              ].map((store) => (
                <a
                  key={store.name}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-[#c97b4a]/60 bg-[#1f1612] px-6 py-4 font-[family-name:var(--font-cinzel)] text-base font-medium uppercase tracking-wider transition hover:border-[#c97b4a] hover:bg-[#c97b4a]/10"
                >
                  {store.name}
                </a>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* About the Author */}
        <section className="bg-[#f5e6d3] px-6 py-16 text-[#2b1d17] md:py-24">
          <FadeIn className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:gap-14">
            <div className="relative shrink-0">
              <svg
                className="pointer-events-none absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)] text-[#c97b4a]"
                viewBox="0 0 220 220"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                {/* thin orbit ring */}
                <circle
                  className="swirl-ring"
                  cx="110"
                  cy="110"
                  r="92"
                  strokeWidth="1.5"
                  strokeDasharray="3 7"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <g className="swirl-curl">
                {/* swirl top-left */}
                <path
                  d="M110 18 C 78 14 52 28 40 52 C 34 64 40 76 50 74 C 58 72 58 60 50 58"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* swirl bottom-right */}
                <path
                  d="M110 202 C 142 206 168 192 180 168 C 186 156 180 144 170 146 C 162 148 162 160 170 162"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* small curl bottom-left */}
                <path
                  d="M34 150 C 24 166 26 184 40 194"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                {/* small curl top-right */}
                <path
                  d="M186 70 C 196 54 194 36 180 26"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.8"
                />
                {/* dots */}
                <circle cx="36" cy="40" r="3" fill="currentColor" stroke="none" />
                <circle cx="184" cy="180" r="3" fill="currentColor" stroke="none" />
                </g>
              </svg>
              <Image
                src="/author.jpg"
                alt="Author Andrea Bailey"
                width={160}
                height={160}
                className="h-32 w-32 rounded-full object-cover shadow-lg ring-4 ring-[#c97b4a]/30 md:h-40 md:w-40"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-normal uppercase tracking-[0.15em] text-[#3e2b3a] md:text-3xl">
                Hi, I&apos;m Andrea{" "}
                <span className="relative inline-block">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-4 rounded-full text-[8rem] leading-none text-[#c97b4a]/20 md:-inset-6 md:text-[10rem]"
                  >
                    &amp;
                  </span>
                  <span className="relative inline-block font-[family-name:var(--font-pinyon)] text-6xl font-normal italic text-[#c97b4a] md:text-7xl">
                    &amp;
                  </span>
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#2b1d17]/90 md:text-xl">
                <p>
                  The idea for{" "}
                  <em className="font-[family-name:var(--font-cinzel)] not-italic font-medium text-[#8c4f35]">
                    Wings of Time
                  </em>{" "}
                  came after a visit to a 1940s weekend at a disused airbase in
                  Bomber County, Lincolnshire. Staying on the base, Andrea and
                  her husband lost the track walking back through the woods at
                  dusk — wading through nettles and brambles while 1940s dance
                  music filtered through the trees from the re-enactors’
                  after-hours party.
                </p>
                <p>
                  On finally stepping over the last of the nettles, the first
                  sight that met them was a “GI” and his girlfriend sitting in
                  a jeep, a lighted Tilley lamp balanced on the bonnet.
                </p>
                <p>
                  “I must admit to a double take. It really did seem as though
                  we had stepped back in time. A glorious weekend — and the
                  spark of an idea for a novel.”
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Newsletter */}
        <section
          id="newsletter"
          className="bg-gradient-to-b from-[#2b1d17] to-[#1f1612] px-6 py-16 text-[#fff8f0] md:py-24"
        >

          <FadeIn className="relative mx-auto max-w-2xl rounded-xl border border-[#c97b4a]/30 bg-[#2b1d17]/60 p-8 text-center shadow-2xl backdrop-blur-sm md:p-12">
            <h2 className="font-[family-name:var(--font-cinzel)] text-2xl font-normal uppercase tracking-[0.15em] text-[#fff8f0] md:text-3xl">
              Step Into the Story
            </h2>
            <p className="mt-4 text-xl text-[#f5e6d3]/80 md:text-2xl">
              Be the first to hear about signings, extras, and what Andrea is
              writing next.
            </p>
            <ul className="mt-6 inline-flex flex-col gap-2 text-left text-base text-[#f5e6d3]/70">
              {[
                "New releases and pre-orders",
                "Behind-the-scenes notes",
                "Event and signing updates",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#c97b4a]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 rounded border border-[#f5e6d3]/20 bg-[#fff8f0]/5 px-4 py-3.5 text-lg text-[#fff8f0] placeholder:text-[#f5e6d3]/40 focus:border-[#c97b4a] focus:outline-none md:text-xl"
              />
              <button
                type="submit"
                className="rounded bg-[#c97b4a] px-8 py-3.5 font-[family-name:var(--font-cinzel)] text-base font-semibold uppercase tracking-wider text-[#fff8f0] transition hover:bg-[#e6a87c]"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-[#f5e6d3]/60">
              No spam. Just occasional notes from the author. Unsubscribe any
              time.
            </p>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-[#f5e6d3]/10 bg-[#1f1612] px-6 py-8 text-center text-[#f5e6d3]/60">
        <p className="font-[family-name:var(--font-cinzel)] text-base uppercase tracking-[0.2em]">
          Wings of Time
        </p>
        <p className="mt-1 text-sm">© {new Date().getFullYear()} Andrea Bailey</p>
      </footer>
    </div>
  );
}
