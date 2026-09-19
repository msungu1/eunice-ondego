import { FormEvent, useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseMedical,
  Building2,
  Check,
  ChevronDown,
  CircleDot,
  Globe2,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Approach to Care", href: "#approach" },
];

const highlights = [
  { icon: GraduationCap, eyebrow: "Education", title: "University of Nairobi", detail: "Medical education" },
  { icon: Globe2, eyebrow: "Academic exposure", title: "Germany", detail: "Master's-level studies" },
  { icon: BriefcaseMedical, eyebrow: "Clinical journey", title: "Kenya", detail: "Experience across institutions" },
  { icon: HeartHandshake, eyebrow: "Care philosophy", title: "Patient-centered", detail: "Empathy in every interaction" },
];

const experiences = [
  { name: "Tenwek Hospital", descriptor: "Clinical experience", icon: Building2, number: "01" },
  { name: "Akidiva Memorial Hospital", descriptor: "Clinical experience", icon: HeartPulse, number: "02" },
  { name: "Kisii", descriptor: "Professional clinical experience", icon: MapPin, number: "03" },
  { name: "Nairobi Hospital", descriptor: "Clinical experience", icon: Landmark, number: "04" },
];

const principles = [
  { icon: HeartHandshake, title: "Compassion", text: "Patients deserve to be treated with empathy, respect and dignity." },
  { icon: ShieldCheck, title: "Professionalism", text: "Healthcare requires integrity, responsibility and a commitment to professional standards." },
  { icon: BookOpen, title: "Continuous learning", text: "Medicine continues to evolve, making lifelong learning an essential part of professional development." },
  { icon: UserRound, title: "Patient-centered care", text: "Effective healthcare begins by understanding the individual behind the medical condition." },
];

const galleryItems = [
  { label: "Portrait", caption: "Approved professional portrait", icon: UserRound, tone: "sage" },
  { label: "Medical education", caption: "University of Nairobi", icon: GraduationCap, tone: "blue" },
  { label: "Hospital environment", caption: "Clinical practice setting", icon: Building2, tone: "sand" },
  { label: "Academic experiences", caption: "Master's studies in Germany", icon: BookOpen, tone: "lavender" },
  { label: "Professional events", caption: "Professional moments", icon: Sparkles, tone: "teal" },
  { label: "International experience", caption: "Kenya ↔ Germany", icon: Globe2, tone: "ink" },
];

function SectionIntro({ index, eyebrow, title, children, light = false }: { index: string; eyebrow: string; title: string; children?: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-intro reveal ${light ? "section-intro--light" : ""}`}>
      <div className="section-index">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {children && <p className="section-intro__copy">{children}</p>}
      </div>
    </div>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="portrait-wrap" aria-label="Professional portrait placeholder">
      <div className="portrait-glow" />
      <div className="portrait-card">
        <div className="portrait-orbit portrait-orbit--one" />
        <div className="portrait-orbit portrait-orbit--two" />
        <div className="portrait-cross portrait-cross--one">+</div>
        <div className="portrait-cross portrait-cross--two">+</div>
        <div className="portrait-monogram">EO</div>
        <div className="portrait-caption">
          <span className="caption-line" />
          <div>
            <strong>Professional portrait</strong>
            <span>Replace with approved image</span>
          </div>
        </div>
        <div className="portrait-corner portrait-corner--top" />
        <div className="portrait-corner portrait-corner--bottom" />
      </div>
      <div className="portrait-float-card">
        <span className="status-dot" />
        <div>
          <strong>Medical professional</strong>
          <span>Kenya · Germany</span>
        </div>
      </div>
      <div className="portrait-stamp"><Stethoscope size={17} /><span>CARE<br />WITH<br />CLARITY</span></div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <a href="#top" className="brand" onClick={closeMenu} aria-label="Dr. Eunice Ondego home">
          <span className="brand-mark">EO</span>
          <span className="brand-text"><strong>Dr. Eunice Ondego</strong><small>Medical doctor</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "desktop-nav--open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        </nav>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-arc hero-arc--one" aria-hidden="true" />
          <div className="hero-arc hero-arc--two" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy reveal">
              <div className="micro-label"><span className="micro-line" /> Medical doctor <span className="micro-dot" /> Healthcare professional</div>
              <p className="hero-kicker">A considered approach to care</p>
              <h1>Medicine with <em>human</em> perspective.</h1>
              <p className="hero-description">Dedicated to professional medical practice, compassionate patient care and continuous learning—with clinical experience across healthcare institutions in Kenya and advanced academic exposure in Germany.</p>
              <div className="hero-actions">
                <a className="button button--primary" href="#journey">Explore my journey <ArrowRight size={17} /></a>
                <a className="button button--quiet" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-note"><span className="note-mark"><Check size={13} /></span><span>Patient-centered care, grounded in empathy and respect.</span></div>
            </div>
            <div className="hero-visual reveal reveal--delay">
              <PortraitPlaceholder />
            </div>
          </div>
          <div className="hero-bottom container"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section className="highlights-section">
          <div className="container highlight-grid">
            {highlights.map(({ icon: Icon, eyebrow, title, detail }, index) => (
              <div className="highlight-card reveal" style={{ transitionDelay: `${index * 60}ms` }} key={title}>
                <div className="highlight-icon"><Icon size={19} strokeWidth={1.5} /></div>
                <div><span className="card-eyebrow">{eyebrow}</span><strong>{title}</strong><span className="card-detail">{detail}</span></div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <SectionIntro index="01" eyebrow="A professional profile" title="About Dr. Eunice Ondego">
              A medical journey shaped by rigorous education, clinical experience and a belief that every patient interaction matters.
            </SectionIntro>
            <div className="about-body reveal">
              <p className="lead-paragraph">Dr. Eunice Ondego is a medical doctor whose professional journey combines medical education in Kenya, clinical experience across respected healthcare institutions and international academic exposure in Germany.</p>
              <p>Her journey through the University of Nairobi, Tenwek Hospital, Akidiva Memorial Hospital, Kisii and Nairobi Hospital has contributed to a broad professional perspective and a strong appreciation for patient-centered healthcare.</p>
              <p>She values professionalism, empathy, continuous learning and respectful communication as important components of quality medical care.</p>
              <div className="quote-block"><Quote size={26} /><blockquote>“Every patient deserves to be heard, understood and treated with dignity.”</blockquote><span>— Dr. Eunice Ondego</span></div>
            </div>
          </div>
        </section>

        <section id="education" className="section education-section section-wash">
          <div className="container">
            <SectionIntro index="02" eyebrow="Academic foundation" title="Education & development">
              A foundation in Kenya, extended by Master's-level academic exposure in Germany.
            </SectionIntro>
            <div className="education-timeline">
              <div className="timeline-rail" aria-hidden="true"><span /></div>
              <article className="education-item reveal">
                <div className="timeline-marker"><GraduationCap size={18} /></div>
                <div className="timeline-meta"><span>Foundation</span><span>Kenya</span></div>
                <div className="timeline-content"><h3>University of Nairobi</h3><p className="timeline-title">Medical education</p><p>The foundation of Dr. Ondego’s medical journey, shaped by education at one of Kenya’s leading universities.</p></div>
                <div className="timeline-side-note">01 <span>medical<br />education</span></div>
              </article>
              <article className="education-item reveal">
                <div className="timeline-marker timeline-marker--teal"><Globe2 size={18} /></div>
                <div className="timeline-meta"><span>Advanced study</span><span>Germany</span></div>
                <div className="timeline-content"><h3>Germany</h3><p className="timeline-title">Master's studies</p><p>An important stage of advanced academic development and international exposure. Specific institution and specialization available to be added.</p></div>
                <div className="timeline-side-note">02 <span>master's<br />studies</span></div>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="container">
            <div className="experience-heading">
              <SectionIntro index="03" eyebrow="Clinical experience" title="Professional & clinical journey">
                A story of practice across Kenyan healthcare institutions, always grounded in the individual behind the condition.
              </SectionIntro>
              <div className="experience-aside"><Activity size={19} /><span>Kenya-based<br />clinical experience</span></div>
            </div>
            <div className="experience-list">
              {experiences.map(({ name, descriptor, icon: Icon, number }, index) => (
                <article className="experience-row reveal" style={{ transitionDelay: `${index * 65}ms` }} key={name}>
                  <span className="experience-number">{number}</span>
                  <div className="experience-icon"><Icon size={21} strokeWidth={1.4} /></div>
                  <div className="experience-name"><h3>{name}</h3><p>{descriptor}</p></div>
                  <p className="experience-detail">A chapter in Dr. Ondego’s professional journey. <span>Further details can be added.</span></p>
                  <ArrowUpRight className="experience-arrow" size={21} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section approach-section">
          <div className="container">
            <div className="approach-top">
              <SectionIntro index="04" eyebrow="Professional philosophy" title="Approach to care" light>
                The principles that guide a calm, respectful and continuously curious practice.
              </SectionIntro>
              <div className="approach-pulse"><HeartPulse size={27} /><span>Care is a conversation<br />before it is a treatment.</span></div>
            </div>
            <div className="principles-grid">
              {principles.map(({ icon: Icon, title, text }, index) => (
                <article className="principle-card reveal" style={{ transitionDelay: `${index * 60}ms` }} key={title}>
                  <span className="principle-index">0{index + 1}</span><div className="principle-icon"><Icon size={22} strokeWidth={1.35} /></div><h3>{title}</h3><p>{text}</p><div className="principle-rule" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section international-section">
          <div className="international-pattern" aria-hidden="true"><span /><span /><span /></div>
          <div className="container international-grid">
            <div className="international-copy reveal"><p className="eyebrow">05 · International perspective</p><h2>Kenyan roots.<br /><em>International</em> perspective.</h2><p>Her medical education and professional experience in Kenya, together with Master's-level academic exposure in Germany, provide an international perspective on healthcare and professional development.</p><div className="international-link"><span className="link-dot" /> An academic journey across two contexts <MoveRight size={16} /></div></div>
            <div className="connection-map reveal reveal--delay" aria-label="Visual connection between Kenya and Germany">
              <div className="map-label map-label--kenya"><span className="map-dot" /> Kenya <small>Medical education & practice</small></div>
              <div className="map-label map-label--germany"><span className="map-dot map-dot--teal" /> Germany <small>Master's-level exposure</small></div>
              <svg className="route-svg" viewBox="0 0 500 340" fill="none" aria-hidden="true"><path d="M116 252 C175 205 192 171 249 161 C309 150 320 105 378 78" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 7" /><path d="M373 78l9-1-5 8" stroke="currentColor" strokeWidth="1.5" /><circle cx="116" cy="252" r="5" fill="currentColor" /><circle cx="378" cy="78" r="5" fill="currentColor" /></svg>
              <div className="map-coordinates"><span>01°17′S · 36°49′E</span><span>52°31′N · 13°24′E</span></div>
            </div>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="container">
            <div className="journey-heading"><div><p className="eyebrow">06 · The throughline</p><h2>A journey built<br /><em>chapter by chapter.</em></h2></div><p>From medical education to clinical experience, each stage adds depth to a professional perspective shaped by learning, service and care.</p></div>
            <div className="journey-track">
              {["University of Nairobi", "Medical education", "Germany", "Master's studies", "Tenwek Hospital", "Akidiva Memorial Hospital", "Kisii", "Nairobi Hospital"].map((label, index) => <div className="journey-node reveal" style={{ transitionDelay: `${index * 45}ms` }} key={label}><div className={`journey-dot ${index === 2 ? "journey-dot--teal" : ""}`}><CircleDot size={12} /></div><span>{label}</span>{index < 7 && <div className="journey-connector" />}</div>)}
            </div>
          </div>
        </section>

        <section className="statement-section">
          <div className="statement-watermark">CARE</div>
          <div className="container statement-content reveal"><span className="statement-mark"><Quote size={23} /></span><p className="statement-quote">“Medicine is more than treating a condition. It is about understanding the person.”</p><p className="statement-support">Dr. Eunice Ondego approaches healthcare with an emphasis on compassion, professionalism, continuous learning and respect for every patient.</p></div>
        </section>

        <section className="section gallery-section">
          <div className="container">
            <div className="gallery-heading"><SectionIntro index="07" eyebrow="Visual archive" title="Professional journey"><span>Thoughtful spaces for the images that will document an evolving career.</span></SectionIntro><p className="gallery-note">Image slots are intentionally prepared for approved photography.</p></div>
            <div className="gallery-grid">
              {galleryItems.map(({ label, caption, icon: Icon, tone }, index) => <div className={`gallery-card gallery-card--${tone} gallery-card--${index + 1} reveal`} style={{ transitionDelay: `${index * 50}ms` }} key={label}><div className="gallery-placeholder"><Icon size={index === 0 ? 31 : 25} strokeWidth={1.25} /><span>Image slot</span></div><div className="gallery-caption"><strong>{label}</strong><span>{caption}</span></div></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy reveal"><p className="eyebrow">08 · Start a conversation</p><h2>Connect with<br /><em>Dr. Eunice Ondego</em></h2><p>For professional enquiries, collaborations, academic discussions and other appropriate professional communication, please get in touch.</p><div className="contact-details"><div><Mail size={17} /><span><small>Email</small><strong>To be added</strong></span></div><div><Phone size={17} /><span><small>Phone</small><strong>To be added</strong></span></div><div><MapPin size={17} /><span><small>Location</small><strong>Kenya · Germany</strong></span></div></div><div className="linkedin-placeholder"><Linkedin size={16} /><span>LinkedIn profile link to be added</span><ArrowUpRight size={14} /></div></div>
            <div className="contact-form-wrap reveal reveal--delay"><div className="form-topline"><span>Professional enquiries</span><MessageCircle size={18} /></div>{submitted ? <div className="form-success"><div className="success-icon"><Check size={26} /></div><h3>Thank you for reaching out.</h3><p>Your message has been prepared. Connect a secure email destination to enable delivery.</p><button className="button button--quiet" onClick={() => setSubmitted(false)}>Send another message <ArrowRight size={16} /></button></div> : <form onSubmit={handleSubmit}><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label></div><div className="form-row"><label>Phone<input name="phone" placeholder="Optional" /></label><label>Subject<input required name="subject" placeholder="How can we connect?" /></label></div><label>Message<textarea required name="message" placeholder="Share a little about your enquiry" rows={5} /></label><button type="submit" className="button button--primary button--full">Send message <ArrowUpRight size={17} /></button><p className="form-footnote">This front-end form is ready to connect to a secure email destination.</p></form>}</div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><a href="#top" className="brand"><span className="brand-mark">EO</span><span className="brand-text"><strong>Dr. Eunice Ondego</strong><small>Medical doctor</small></span></a><p>Compassionate care.<br />Professional excellence.<br />Global perspective.</p></div><div className="footer-links"><span>Explore</span>{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="#contact">Contact</a></div><div className="footer-availability"><span className="status-dot" /><div><small>Professional profile</small><strong>Kenya · Germany</strong></div></div></div><div className="container footer-bottom"><span>© 2026 Dr. Eunice Ondego. All rights reserved.</span><span>Designed with care <HeartHandshake size={14} /></span></div></footer>
    </div>
  );
}
