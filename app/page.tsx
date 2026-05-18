import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <>
        {/* ====== HEADER ====== */}
        <header className="header">
          <div className="header__inner">
            <div className="header__left">
              <Link
                href="/"
                className="header__logo"
                aria-label="VERAN BIOSYSTEMS Home"
              >
                <span className="header__logo-mark">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={12}
                      cy={12}
                      r={9}
                      stroke="#00D4C8"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx={12}
                      cy={12}
                      r={4}
                      stroke="#00D4C8"
                      strokeWidth="1.5"
                    />
                    <line
                      x1={12}
                      y1={3}
                      x2={12}
                      y2={8}
                      stroke="#00D4C8"
                      strokeWidth="1.5"
                    />
                    <line
                      x1={12}
                      y1={16}
                      x2={12}
                      y2={21}
                      stroke="#00D4C8"
                      strokeWidth="1.5"
                    />
                    <line
                      x1={3}
                      y1={12}
                      x2={8}
                      y2={12}
                      stroke="#00D4C8"
                      strokeWidth="1.5"
                    />
                    <line
                      x1={16}
                      y1={12}
                      x2={21}
                      y2={12}
                      stroke="#00D4C8"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                Veran Biosystems
              </Link>
              <span className="header__sep" />
              <span className="header__product">Research Division</span>
            </div>
            <nav className="header__nav" id="headerNav">
              <Link href="/" className="active">
                Home
              </Link>
              <Link href="/landing">VR-01</Link>
              <Link href="/the-observer">Observer</Link>
              <Link href="#specs">Platforms</Link>
              <Link href="#process">Protocol</Link>
            </nav>
            <div className="header__right">
              <div className="header__status">
                <span className="header__status-dot" />
                <span>Systems Active</span>
              </div>
              <div className="header__clock" id="utcClock">
                --:--:-- UTC
              </div>
            </div>
            <button
              className="header__burger"
              id="headerBurger"
              aria-label="Toggle navigation"
              aria-expanded="false"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>
        {/* ====== HERO ====== */}
        <section className="hero">
          <div className="hero__grid hero__grid--dense" aria-hidden="true" />
          <div className="hero__label reveal">
            Est. 2011 — Bioprocessing &amp; Automation Infrastructure
          </div>
          <h1 className="hero__title">
            <span className="line">Science at</span>
            <span className="line line--indent">
              Full Scale<span className="accent-dot">.</span>
            </span>
          </h1>
          <div className="hero__bottom">
            <p className="hero__desc reveal">
              We engineer automated bioprocessing platforms for gene therapy, cell
              therapy, and high-throughput discovery — built to maintain sterility,
              traceability, and compliance from vial to batch.
            </p>
            <div className="hero__stats reveal">
              <div>
                <div className="hero__stat-num">
                  180<span className="accent">+</span>
                </div>
                <div className="hero__stat-label">Platforms Deployed</div>
              </div>
              <div>
                <div className="hero__stat-num">
                  99.4<span className="accent">%</span>
                </div>
                <div className="hero__stat-label">System Uptime</div>
              </div>
              <div>
                <div className="hero__stat-num">23</div>
                <div className="hero__stat-label">Countries Active</div>
              </div>
            </div>
          </div>
          <div className="hero__scroll-cue" aria-hidden="true">
            Scroll
          </div>
        </section>
        {/* ====== BENTO SPECS ====== */}
        <section className="section" id="specs">
          <div className="container">
            <div className="section__header reveal">
              <div className="section__eyebrow">// Platforms</div>
              <h2 className="section__title">
                What We
                <br />
                Deploy
              </h2>
            </div>
            <div className="bento__grid">
              <div className="bento-card bento-card--wide reveal">
                <div className="bento-card__number">VR—01</div>
                <div>
                  <h3 className="bento-card__title">
                    Closed-Process
                    <br />
                    Bioreactors
                  </h3>
                  <p className="bento-card__text">
                    Single-use, fully closed bioreactor systems from 2L seed to 2000L
                    production. Automated pH, DO, temperature, and agitation — logged
                    to a GMP audit trail in real time.
                  </p>
                </div>
                <div className="bar-chart">
                  <div className="bar-chart__col" style={{ height: "40%" }} />
                  <div className="bar-chart__col" style={{ height: "60%" }} />
                  <div className="bar-chart__col" style={{ height: "50%" }} />
                  <div className="bar-chart__col" style={{ height: "85%" }} />
                  <div className="bar-chart__col" style={{ height: "70%" }} />
                  <div className="bar-chart__col" style={{ height: "100%" }} />
                  <div className="bar-chart__col" style={{ height: "78%" }} />
                  <div className="bar-chart__col" style={{ height: "92%" }} />
                </div>
                <div className="bento-card__visual" aria-hidden="true" />
              </div>
              <div className="bento-card bento-card--narrow bento-card--dark reveal">
                <div className="bento-card__number">VR—02</div>
                <h3 className="bento-card__title">
                  Cell
                  <br />
                  Expansion
                </h3>
                <div className="bento-card__stat">
                  10<span style={{ fontSize: "0.4em", opacity: "0.5" }}>×10⁹</span>
                </div>
              </div>
              <div className="bento-card bento-card--mid reveal">
                <div className="bento-card__number">VR—03</div>
                <div>
                  <h3 className="bento-card__title">
                    Aseptic Fill
                    <br />
                    &amp; Finish
                  </h3>
                  <p className="bento-card__text">
                    Isolator-integrated fill-finish lines. 100% stopper inspection,
                    weight-check validation, and serialised vial tracking at up to
                    3,600 vials per hour.
                  </p>
                </div>
                <div
                  style={{
                    alignSelf: "end",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem"
                  }}
                >
                  <span className="tag">ISO 5 Grade</span>
                  <span className="tag tag--filled">Serialised</span>
                  <span className="tag">cGMP</span>
                </div>
              </div>
              <div className="bento-card bento-card--mid bento-card--safety reveal">
                <div className="bento-card__number" style={{ opacity: "0.6" }}>
                  VR—04
                </div>
                <h3 className="bento-card__title">
                  Vector
                  <br />
                  Production
                </h3>
                <p className="bento-card__text" style={{ opacity: "0.85" }}>
                  AAV and lentiviral vector manufacturing lines. Upstream transfection
                  through downstream purification — all in a single closed workflow.
                </p>
                <div className="bento-card__stat">AAV9</div>
              </div>
              <div className="bento-card bento-card--narrow bento-card--tall reveal">
                <div className="bento-card__number">VR—05</div>
                <h3 className="bento-card__title">
                  Quality
                  <br />
                  Systems
                </h3>
                <p className="bento-card__text">
                  21 CFR Part 11 compliant software. Electronic batch records,
                  automated deviation flagging, full audit trail.
                </p>
                <div style={{ alignSelf: "end" }}>
                  <div className="bento-card__stat">
                    21
                    <span className="accent" style={{ fontSize: "0.4em" }}>
                      CFR
                    </span>
                  </div>
                  <div className="bento-card__text" style={{ marginTop: "0.5rem" }}>
                    Part 11 Compliant
                  </div>
                </div>
              </div>
              <div className="bento-card bento-card--wide bento-card--dark reveal">
                <div className="bento-card__number">VR—06</div>
                <div>
                  <h3 className="bento-card__title">
                    Process
                    <br />
                    Digital Twin
                  </h3>
                  <p className="bento-card__text" style={{ opacity: "0.55" }}>
                    Every platform ships with a live process model — parameter-linked,
                    predictive, and continuously calibrated against batch outcome
                    data.
                  </p>
                </div>
                <div className="bar-chart">
                  <div className="bar-chart__col" style={{ height: "55%" }} />
                  <div className="bar-chart__col" style={{ height: "75%" }} />
                  <div className="bar-chart__col" style={{ height: "100%" }} />
                  <div className="bar-chart__col" style={{ height: "65%" }} />
                  <div className="bar-chart__col" style={{ height: "88%" }} />
                  <div className="bar-chart__col" style={{ height: "48%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== TICKER ====== */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            <span className="ticker__item">Gene Therapy Manufacturing</span>
            <span className="ticker__item">Cell Therapy Platforms</span>
            <span className="ticker__item">Aseptic Fill &amp; Finish</span>
            <span className="ticker__item">AAV Vector Production</span>
            <span className="ticker__item">Digital Process Twin</span>
            <span className="ticker__item">21 CFR Part 11</span>
            <span className="ticker__item">cGMP Compliant</span>
            <span className="ticker__item">Single-Use Systems</span>
            <span className="ticker__item">Gene Therapy Manufacturing</span>
            <span className="ticker__item">Cell Therapy Platforms</span>
            <span className="ticker__item">Aseptic Fill &amp; Finish</span>
            <span className="ticker__item">AAV Vector Production</span>
            <span className="ticker__item">Digital Process Twin</span>
            <span className="ticker__item">21 CFR Part 11</span>
            <span className="ticker__item">cGMP Compliant</span>
            <span className="ticker__item">Single-Use Systems</span>
          </div>
        </div>
        <div className="ticker ticker--reverse ticker--safety" aria-hidden="true">
          <div className="ticker__track">
            <span className="ticker__item">Sterility. Traceability. Scale.</span>
            <span className="ticker__item">Veran Biosystems</span>
            <span className="ticker__item">No Contamination. No Compromise.</span>
            <span className="ticker__item">Science at Full Scale</span>
            <span className="ticker__item">From Bench to Batch</span>
            <span className="ticker__item">Veran Biosystems</span>
            <span className="ticker__item">Sterility. Traceability. Scale.</span>
            <span className="ticker__item">Veran Biosystems</span>
            <span className="ticker__item">No Contamination. No Compromise.</span>
            <span className="ticker__item">Science at Full Scale</span>
            <span className="ticker__item">From Bench to Batch</span>
            <span className="ticker__item">Veran Biosystems</span>
          </div>
        </div>
        {/* ====== THE PROTOCOL ====== */}
        <section className="section" id="process">
          <div className="container">
            <div className="stack__header reveal">
              <div>
                <div className="section__eyebrow">// How We Deploy</div>
                <h2 className="section__title">The Protocol</h2>
              </div>
              <p className="stack__subtitle">
                Four phases. One validated system. Platforms that reach IND submission
                without a single deviation.
              </p>
            </div>
            <div>
              <article className="stack__card reveal">
                <div className="stack__card-left">
                  <div className="stack__card-step">01</div>
                </div>
                <div className="stack__card-right">
                  <h3 className="stack__card-title">
                    Process
                    <br />
                    Characterisation
                  </h3>
                  <p className="stack__card-text">
                    We audit your existing process data, define critical quality
                    attributes, and map every parameter interaction. No assumptions —
                    every variable is tested before the platform is specified.
                  </p>
                  <div className="stack__card-tags">
                    <span className="tag">CQA Mapping</span>
                    <span className="tag">DOE Studies</span>
                    <span className="tag tag--filled">Risk Assessment</span>
                  </div>
                </div>
              </article>
              <article className="stack__card reveal">
                <div className="stack__card-left">
                  <div className="stack__card-step">02</div>
                </div>
                <div className="stack__card-right">
                  <h3 className="stack__card-title">
                    Platform
                    <br />
                    Engineering
                  </h3>
                  <p className="stack__card-text">
                    Custom hardware configuration, software recipe build, and sensor
                    integration — all in parallel with IQ/OQ documentation. No
                    separate validation phase; it's built into the engineering cycle.
                  </p>
                  <div className="stack__card-tags">
                    <span className="tag">IQ / OQ</span>
                    <span className="tag tag--safety">21 CFR Pt 11</span>
                    <span className="tag">GAMP 5</span>
                  </div>
                </div>
              </article>
              <article className="stack__card reveal">
                <div className="stack__card-left">
                  <div className="stack__card-step">03</div>
                </div>
                <div className="stack__card-right">
                  <h3 className="stack__card-title">
                    Validation
                    <br />
                    &amp; PQ Runs
                  </h3>
                  <p className="stack__card-text">
                    Three consecutive performance qualification runs. Process
                    analytical technology at every critical control point. Full
                    electronic batch records generated automatically — no manual
                    transcription, no errors.
                  </p>
                  <div className="stack__card-tags">
                    <span className="tag tag--filled">PQ Runs × 3</span>
                    <span className="tag">PAT</span>
                    <span className="tag">eBR</span>
                    <span className="tag">cGMP</span>
                  </div>
                </div>
              </article>
              <article className="stack__card reveal">
                <div className="stack__card-left">
                  <div className="stack__card-step">04</div>
                </div>
                <div className="stack__card-right">
                  <h3 className="stack__card-title">
                    Transfer &amp;
                    <br />
                    Ongoing Support
                  </h3>
                  <p className="stack__card-text">
                    Site transfer with full operator training, process digital twin
                    handover, and a 24-month technical support agreement. We stay on
                    until your team owns the platform completely.
                  </p>
                  <div className="stack__card-tags">
                    <span className="tag">Operator Training</span>
                    <span className="tag">Digital Twin</span>
                    <span className="tag tag--safety">24-Month SLA</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* ====== FOOTER ====== */}
        <footer className="footer w-full">
          <div className="footer__inner">
            <div className="footer__top">
              <div className="footer__brand">
                <h2 className="font-display footer__brand-name">
                  Veran
                  <br />
                  Biosystems<span className="accent">.</span>
                </h2>
                <p className="footer__brand-desc">
                  Automated bioprocessing infrastructure for gene therapy, cell
                  therapy, and high-throughput discovery. From bench to validated
                  batch.
                </p>
              </div>
              <div className="footer__col">
                <div className="footer__col-title">Platforms</div>
                <a href="#">Bioreactor Systems</a>
                <a href="#">Cell Expansion</a>
                <a href="#">Aseptic Fill &amp; Finish</a>
                <a href="#">Vector Production</a>
                <a href="#">Digital Process Twin</a>
              </div>
              <div className="footer__col">
                <div className="footer__col-title">Company</div>
                <a href="#">About Veran</a>
                <a href="#">Case Studies</a>
                <a href="#">Careers</a>
                <a href="#">Regulatory Affairs</a>
                <a href="#">Certifications</a>
              </div>
              <div className="footer__col">
                <div className="footer__col-title">Get in Touch</div>
                <a href="mailto:science@veranbio.com">science@veranbio.com</a>
                <a href="tel:+16175550244">+1 (617) 555-0244</a>
                <a href="#">Cambridge, MA — USA</a>
                <a href="#">Mon–Fri, 08:00–18:00 EST</a>
              </div>
            </div>
            <div className="footer__bottom">
              <span className="footer__copy">
                © 2026 Veran Biosystems Inc. All rights reserved. &nbsp;|&nbsp;
              </span>
              <button
                className="footer__back-top"
                id="backToTop"
                aria-label="Back to top"
              >
                ↑ Back to Top
              </button>
            </div>
          </div>
        </footer>
      </>

    </div>
  );
}
