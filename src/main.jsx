import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const navLinks = ["Work", "Services", "About", "Blog", "Contact"];

const projects = [
  {
    title: "Nova Finance",
    category: "Brand & Web Design",
    image: "https://motionsites.ai/assets/hero-grow-ai-preview-BlQ8tAQ-.gif",
  },
  {
    title: "Pulse Health",
    category: "AI Web Development",
    image: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  },
  {
    title: "Drift Studios",
    category: "Website Optimization",
    image: "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  },
  {
    title: "Arc Commerce",
    category: "Brand & Development",
    image: "https://motionsites.ai/assets/hero-neuralyn-preview-Br4FRDQA.gif",
  },
];

const avatarUrls = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=47",
];

const services = ["Brand Design", "AI Web Design", "AI Web Development", "Optimization"];
const company = ["About", "Work", "Blog", "Careers"];
const social = ["Twitter", "LinkedIn", "Instagram", "Dribbble"];

function useInView({ rootMargin = "180px 0px", threshold = 0.12 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, rootMargin, threshold]);

  return [ref, inView];
}

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-5 py-5 md:px-8 md:py-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="font-body text-lg font-semibold tracking-tight text-foreground md:text-xl">
          VIRALMEDIA
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-sm px-4 py-2 font-body text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="liquid-glass-strong rounded-full px-5 py-2.5 font-body text-sm font-medium text-foreground md:px-6"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-stage relative min-h-[100svh] w-full overflow-hidden" id="home">
      <LazyVideo
        className="hero-video absolute inset-0 h-[calc(100%+100px)] w-full -translate-y-[100px] object-cover object-bottom opacity-80 md:h-full md:translate-y-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260326_073936_8dd07fdb-4f6b-4220-a3f0-9dedfaab0c88.mp4"
        eager
      />
      <div className="hero-light absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="relative z-10 flex min-h-[100svh] items-end px-5 pb-10 md:px-8 md:pb-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="hero-enter mb-5 flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatarUrls.map((url) => (
                <img
                  key={url}
                  src={url}
                  alt=""
                  width="32"
                  height="32"
                  loading="eager"
                  decoding="async"
                  className="h-8 w-8 rounded-full border-2 border-background bg-white object-cover"
                />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground">7,000+ brands already transformed</p>
          </div>

          <h1 className="hero-enter hero-enter-delay-1 font-body text-4xl font-medium leading-[0.95] tracking-[-1px] text-foreground sm:text-5xl md:text-6xl md:tracking-[-2px] lg:text-7xl">
            Build Stunning with <span className="font-accent font-normal italic">AI Magic</span>
          </h1>

          <p className="hero-enter hero-enter-delay-2 mt-5 max-w-2xl whitespace-normal font-body text-base leading-7 text-muted-foreground md:whitespace-nowrap md:text-lg">
            AI-powered websites crafted for beauty, speed, and lasting performance.
          </p>

          <form className="hero-enter hero-enter-delay-3 liquid-glass mt-8 flex w-full max-w-lg items-center gap-2 rounded-full p-1.5 md:p-2">
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent px-4 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-5 py-3 font-body text-xs font-semibold tracking-wide text-background transition-transform hover:scale-[1.03] active:scale-[0.98] sm:px-7"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ScrollRevealText({ text }) {
  const words = text.split(" ");

  return (
    <p className="relative font-body text-3xl font-medium leading-relaxed tracking-[-1px] text-foreground md:text-4xl lg:text-5xl">
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="reveal-word inline-block"
          style={{ "--word-delay": `${Math.min(index * 18, 780)}ms` }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
}

function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`mx-auto max-w-4xl bg-background px-5 py-24 text-center md:px-8 md:py-32 ${inView ? "is-visible" : ""}`}
    >
      <ScrollRevealText text="We blend artificial intelligence with human creativity to craft digital experiences that captivate, convert, and scale — building ambitious brands that truly thrive and lead in the modern web." />
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl bg-background px-5 pb-16 py-24 md:px-8 md:py-32">
      <h2 className="text-center font-body text-4xl font-medium tracking-[-2px] text-foreground md:text-5xl">
        Selected <span className="font-accent font-normal italic">Work</span>
      </h2>
      <p className="mx-auto mb-12 mt-4 max-w-2xl text-center font-body text-base leading-7 text-muted-foreground md:mb-16 md:text-lg">
        A curated collection of projects where bold design meets intelligent technology.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();

  return (
    <article
      ref={ref}
      className={`project-card group ${inView ? "is-visible" : ""}`}
      style={{ "--card-delay": `${index * 90}ms` }}
    >
      <div className="project-preview liquid-glass aspect-[4/3] overflow-hidden rounded-2xl">
        <LazyImage src={project.image} alt={`${project.title} project preview`} />
      </div>
      <h3 className="mt-5 font-body text-xl font-medium text-foreground">{project.title}</h3>
      <p className="mt-1 font-body text-sm text-muted-foreground">{project.category}</p>
    </article>
  );
}

function VideoShowcase() {
  return (
    <section className="showcase-stage relative z-0 -mt-24 h-[520px] overflow-hidden md:-mt-[260px] md:h-[650px]">
      <LazyVideo
        className="absolute inset-0 h-full w-full object-cover opacity-85"
        src="https://media.cleanshot.cloud/media/21620/nKosRonaEKSufJVJ4VtouFhOPkqgJ3dPoQ8ZP52S.mp4"
      />
      <div className="showcase-grid absolute inset-0" />
      <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function LazyVideo({ src, className, eager = false }) {
  const [ref, inView] = useInView({ rootMargin: eager ? "900px 0px" : "260px 0px" });
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const saveData = navigator.connection?.saveData;
    if (!inView || saveData) {
      return undefined;
    }

    if (eager) {
      setCanLoad(true);
      return undefined;
    }

    const timer = window.setTimeout(() => setCanLoad(true), 150);
    return () => window.clearTimeout(timer);
  }, [eager, inView]);

  return (
    <video
      ref={ref}
      className={className}
      src={canLoad ? src : undefined}
      autoPlay
      loop
      muted
      playsInline
      preload={eager ? "metadata" : "none"}
    />
  );
}

function LazyImage({ src, alt }) {
  const [ref, inView] = useInView({ rootMargin: "360px 0px", threshold: 0.01 });

  return (
    <div ref={ref} className="project-media absolute inset-0">
      {inView ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : null}
    </div>
  );
}

function HlsBackgroundVideo() {
  const videoRef = useRef(null);
  const [ref, inView] = useInView({ rootMargin: "280px 0px" });

  useEffect(() => {
    const video = videoRef.current;
    const source = "https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8";
    let hls;
    let cancelled = false;

    if (!video || !inView || navigator.connection?.saveData) {
      return undefined;
    }

    const start = async () => {
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = source;
        return;
      }

      const { default: Hls } = await import("hls.js");
      if (!cancelled && Hls.isSupported()) {
        hls = new Hls({ capLevelToPlayerSize: true, startLevel: 0 });
        hls.loadSource(source);
        hls.attachMedia(video);
      }
    };

    const timer = window.setTimeout(start, 200);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      if (hls) {
        hls.destroy();
      }
    };
  }, [inView]);

  return (
    <div ref={ref} className="absolute inset-0">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-75"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />
    </div>
  );
}

function CTA() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className={`cta-stage relative z-10 flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-5 md:px-8 ${inView ? "is-visible" : ""}`}
    >
      <HlsBackgroundVideo />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-20 mx-auto max-w-3xl text-center">
        <h2 className="cta-enter font-body text-4xl font-medium tracking-[-2px] text-foreground md:text-5xl lg:text-6xl">
          Ready to <span className="font-accent font-normal italic">Transform</span> Your Brand?
        </h2>
        <p className="cta-enter cta-enter-delay-1 mb-10 mt-6 font-body text-lg text-muted-foreground">
          Let's build something extraordinary together.
        </p>
        <div className="cta-enter cta-enter-delay-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@viralmedia.ai"
            className="rounded-full bg-foreground px-10 py-4 font-body text-sm font-semibold tracking-wide text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            START A PROJECT
          </a>
          <a
            href="#"
            className="liquid-glass-strong rounded-full px-10 py-4 font-body text-sm font-semibold tracking-wide text-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            BOOK A CALL
          </a>
        </div>
      </div>
    </section>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 font-body text-sm font-medium text-foreground">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <a href="#" className="font-body text-xl font-semibold tracking-tight text-foreground">
              VIRALMEDIA
            </a>
            <p className="mt-5 max-w-xs font-body text-sm leading-6 text-muted-foreground">
              AI-powered web design agency crafting digital experiences that convert.
            </p>
          </div>
          <FooterColumn title="Services" links={services} />
          <FooterColumn title="Company" links={company} />
          <FooterColumn title="Connect" links={social} />
        </div>

        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-border pt-8 md:flex-row">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 VIRALMEDIA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <SelectedWork />
      <VideoShowcase />
      <CTA />
      <Footer />
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
