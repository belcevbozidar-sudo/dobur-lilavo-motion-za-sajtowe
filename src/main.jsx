import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Hls from "hls.js";
import "./index.css";

const navLinks = ["Work", "Services", "About", "Blog", "Contact"];

const avatarUrls = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=47",
];

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

const services = ["Brand Design", "AI Web Design", "AI Web Development", "Optimization"];
const company = ["About", "Work", "Blog", "Careers"];
const social = ["Twitter", "LinkedIn", "Instagram", "Dribbble"];

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-8 py-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="font-body text-xl font-semibold tracking-tight text-foreground">
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
          className="liquid-glass-strong rounded-full px-6 py-2.5 font-body text-sm font-medium text-foreground"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      <video
        className="absolute inset-0 h-[calc(100%+100px)] w-full -translate-y-[100px] object-cover object-bottom md:h-full md:translate-y-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260326_073936_8dd07fdb-4f6b-4220-a3f0-9dedfaab0c88.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 flex h-full items-end px-8 pb-10 md:pb-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatarUrls.map((url) => (
                <img
                  key={url}
                  src={url}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground">7,000+ brands already transformed</p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="font-body text-3xl font-medium tracking-[-1px] text-foreground sm:text-5xl md:text-6xl md:tracking-[-2px] lg:text-7xl"
          >
            Build Stunning with{" "}
            <span className="font-accent font-normal italic">AI Magic</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mt-5 whitespace-normal font-body text-sm text-muted-foreground md:whitespace-nowrap md:text-lg"
          >
            AI-powered websites crafted for beauty, speed, and lasting performance.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
            className="liquid-glass mt-8 flex w-full max-w-lg items-center gap-2 rounded-full p-1.5 md:p-2"
          >
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent px-4 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-foreground px-5 py-3 font-body text-xs font-semibold tracking-wide text-background sm:px-7"
            >
              SUBSCRIBE
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ScrollRevealText({ text }) {
  const ref = useRef(null);
  const words = text.split(" ");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  return (
    <p
      ref={ref}
      className="relative font-body text-3xl font-medium leading-relaxed tracking-[-1px] text-foreground md:text-4xl lg:text-5xl"
    >
      {words.map((word, index) => {
        return (
          <RevealWord
            key={`${word}-${index}`}
            index={index}
            total={words.length}
            progress={scrollYProgress}
            word={word}
            trailingSpace={index < words.length - 1}
          />
        );
      })}
    </p>
  );
}

function RevealWord({ index, total, progress, word, trailingSpace }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
      {trailingSpace ? "\u00A0" : ""}
    </motion.span>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl bg-background px-8 py-32 text-center">
      <ScrollRevealText text="We blend artificial intelligence with human creativity to craft digital experiences that captivate, convert, and scale — building ambitious brands that truly thrive and lead in the modern web." />
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl bg-background px-8 pb-16 py-32">
      <h2 className="text-center font-body text-4xl font-medium tracking-[-2px] text-foreground md:text-5xl">
        Selected <span className="font-accent font-normal italic">Work</span>
      </h2>
      <p className="mx-auto mb-16 mt-4 max-w-2xl text-center font-body text-lg text-muted-foreground">
        A curated collection of projects where bold design meets intelligent technology.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
            className="group"
          >
            <div className="liquid-glass aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-5 font-body text-xl font-medium text-foreground">{project.title}</h3>
            <p className="mt-1 font-body text-sm text-muted-foreground">{project.category}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function VideoShowcase() {
  return (
    <section className="relative z-0 -mt-[325px] h-[650px] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://media.cleanshot.cloud/media/21620/nKosRonaEKSufJVJ4VtouFhOPkqgJ3dPoQ8ZP52S.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function HlsBackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const source = "https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8";
    let hls;

    if (!video) {
      return undefined;
    }

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(source);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

function CTA() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden px-8"
    >
      <HlsBackgroundVideo />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative z-20 mx-auto max-w-3xl text-center"
      >
        <motion.h2
          variants={item}
          className="font-body text-4xl font-medium tracking-[-2px] text-foreground md:text-5xl lg:text-6xl"
        >
          Ready to <span className="font-accent font-normal italic">Transform</span> Your Brand?
        </motion.h2>
        <motion.p variants={item} className="mb-10 mt-6 font-body text-lg text-muted-foreground">
          Let's build something extraordinary together.
        </motion.p>
        <motion.div variants={item} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@viralmedia.ai"
            className="rounded-full bg-foreground px-10 py-4 font-body text-sm font-semibold tracking-wide text-background"
          >
            START A PROJECT
          </a>
          <a
            href="#"
            className="liquid-glass-strong rounded-full px-10 py-4 font-body text-sm font-semibold tracking-wide text-foreground"
          >
            BOOK A CALL
          </a>
        </motion.div>
      </motion.div>
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
    <footer className="border-t border-border bg-background px-8 py-16">
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
