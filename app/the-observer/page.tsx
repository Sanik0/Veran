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
                            <span className="header__product">VR-Monitor / v2.1</span>
                        </div>
                        <nav className="header__nav" id="headerNav">
                            <Link href="/">Home</Link>
                            <Link href="landing-page.html">VR-01</Link>
                            <Link href="the-observer.html" className="active">
                                Observer
                            </Link>
                            <Link href="#features">Capabilities</Link>
                            <Link href="#deploy">Deploy</Link>
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
                {/* ====== LAYOUT SHELL ====== */}
                <div className="shell">
                    <main className="shell__main">
                        {/* ====== HERO ====== */}
                        <section className="hero hero--radar">
                            <div className="hero__grid" aria-hidden="true" />
                            <div className="hero__rings" aria-hidden="true">
                                <div className="hero__ring" />
                                <div className="hero__ring" />
                                <div className="hero__ring" />
                                <div className="hero__ring" />
                            </div>
                            <div className="hero__label reveal">
                                Bioprocess Intelligence Platform
                            </div>
                            <h1 className="hero__title">
                                <span className="line">The</span>
                                <span className="line line--indent">
                                    Observer<span className="dot">.</span>
                                </span>
                            </h1>
                            <div className="hero__bottom">
                                <p className="hero__desc reveal">
                                    Zero-latency anomaly detection across every layer of your
                                    bioprocessing platform. It monitors so your scientists can
                                    manufacture.
                                </p>
                                <div className="hero__kpis reveal">
                                    <div>
                                        <div className="hero__kpi-val">
                                            0.06<span className="accent">ms</span>
                                        </div>
                                        <div className="hero__kpi-label">Detection Latency</div>
                                    </div>
                                    <div>
                                        <div className="hero__kpi-val">
                                            4.8M<span className="accent">+</span>
                                        </div>
                                        <div className="hero__kpi-label">Parameters / Sec</div>
                                    </div>
                                    <div>
                                        <div className="hero__kpi-val">
                                            99.4<span className="accent">%</span>
                                        </div>
                                        <div className="hero__kpi-label">System Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* ====== METRICS RIBBON ====== */}
                        <section className="ribbon reveal">
                            <div className="ribbon__cell">
                                <div className="ribbon__label">Platform Uptime</div>
                                <div className="ribbon__value">
                                    99.4<span className="ribbon__unit">%</span>
                                </div>
                                <div className="bar-track">
                                    <div className="bar-track__fill" style={{ width: "99.4%" }} />
                                </div>
                            </div>
                            <div className="ribbon__cell">
                                <div className="ribbon__label">Avg Response</div>
                                <div className="ribbon__value">
                                    0.06<span className="ribbon__unit">ms</span>
                                </div>
                                <div className="bar-track">
                                    <div className="bar-track__fill" style={{ width: "94%" }} />
                                </div>
                            </div>
                            <div className="ribbon__cell">
                                <div className="ribbon__label">Batches Monitored</div>
                                <div className="ribbon__value">
                                    12.4K<span className="ribbon__unit">/yr</span>
                                </div>
                                <div className="bar-track">
                                    <div className="bar-track__fill" style={{ width: "68%" }} />
                                </div>
                            </div>
                            <div className="ribbon__cell">
                                <div className="ribbon__label">False Alarm Rate</div>
                                <div className="ribbon__value">
                                    0.006<span className="ribbon__unit">%</span>
                                </div>
                                <div className="bar-track">
                                    <div className="bar-track__fill" style={{ width: "6%" }} />
                                </div>
                            </div>
                            <div className="ribbon__cell">
                                <div className="ribbon__label">Firmware</div>
                                <div className="ribbon__value">
                                    v2.1<span className="ribbon__unit">.4</span>
                                </div>
                                <div className="bar-track">
                                    <div className="bar-track__fill" style={{ width: "100%" }} />
                                </div>
                            </div>
                        </section>
                        {/* ====== FEATURES GRID ====== */}
                        <section className="section" id="features">
                            <div className="section__header reveal">
                                <div className="section__eyebrow">// Capabilities</div>
                                <h2 className="section__title">
                                    What It
                                    <br />
                                    Monitors
                                </h2>
                            </div>
                            <div className="features__grid">
                                <div className="feat-card reveal">
                                    <div>
                                        <div className="feat-card__id">VM—01</div>
                                        <div className="feat-card__icon">◎</div>
                                        <h3 className="feat-card__title">
                                            Process
                                            <br />
                                            Anomaly Detection
                                        </h3>
                                        <p className="feat-card__text">
                                            Unsupervised pattern recognition across pH, DO, temperature,
                                            agitation, and 200+ critical process parameters. No manual
                                            thresholds.
                                        </p>
                                    </div>
                                    <div className="spark">
                                        <span className="spark__bar" style={{ height: "40%" }} />
                                        <span className="spark__bar" style={{ height: "70%" }} />
                                        <span className="spark__bar" style={{ height: "55%" }} />
                                        <span className="spark__bar" style={{ height: "90%" }} />
                                        <span className="spark__bar" style={{ height: "35%" }} />
                                        <span className="spark__bar" style={{ height: "80%" }} />
                                        <span className="spark__bar" style={{ height: "60%" }} />
                                        <span className="spark__bar" style={{ height: "95%" }} />
                                        <span className="spark__bar" style={{ height: "45%" }} />
                                        <span className="spark__bar" style={{ height: "75%" }} />
                                    </div>
                                </div>
                                <div className="feat-card feat-card--dark reveal">
                                    <div>
                                        <div className="feat-card__id">VM—02</div>
                                        <div className="feat-card__icon">■</div>
                                        <h3 className="feat-card__title">
                                            Root Cause
                                            <br />
                                            Isolation
                                        </h3>
                                        <p className="feat-card__text">
                                            Causal graph traversal pinpoints the failing process node in
                                            under 60ms — before a deviation is raised.
                                        </p>
                                    </div>
                                    <div className="feat-card__stat">
                                        &lt;60
                                        <span className="accent" style={{ fontSize: "0.4em" }}>
                                            ms
                                        </span>
                                    </div>
                                </div>
                                <div className="feat-card reveal">
                                    <div>
                                        <div className="feat-card__id">VM—03</div>
                                        <div className="feat-card__icon">◆</div>
                                        <h3 className="feat-card__title">
                                            Batch Outcome
                                            <br />
                                            Forecasting
                                        </h3>
                                        <p className="feat-card__text">
                                            48-hour yield and viability probability curves trained on your
                                            historical batch data.
                                        </p>
                                    </div>
                                    <div className="feat-card__stat">
                                        48
                                        <span className="accent" style={{ fontSize: "0.4em" }}>
                                            hr
                                        </span>
                                    </div>
                                </div>
                                <div className="feat-card reveal">
                                    <div>
                                        <div className="feat-card__id">VM—04</div>
                                        <div className="feat-card__icon">△</div>
                                        <h3 className="feat-card__title">
                                            Process
                                            <br />
                                            Topology Mapping
                                        </h3>
                                        <p className="feat-card__text">
                                            Auto-discovers upstream and downstream dependencies from sensor
                                            flow data across every unit operation.
                                        </p>
                                    </div>
                                    <div className="spark">
                                        <span className="spark__bar" style={{ height: "20%" }} />
                                        <span className="spark__bar" style={{ height: "55%" }} />
                                        <span className="spark__bar" style={{ height: "85%" }} />
                                        <span className="spark__bar" style={{ height: "40%" }} />
                                        <span className="spark__bar" style={{ height: "70%" }} />
                                        <span className="spark__bar" style={{ height: "30%" }} />
                                        <span className="spark__bar" style={{ height: "90%" }} />
                                        <span className="spark__bar" style={{ height: "50%" }} />
                                        <span className="spark__bar" style={{ height: "65%" }} />
                                        <span className="spark__bar" style={{ height: "45%" }} />
                                    </div>
                                </div>
                                <div className="feat-card feat-card--safety reveal">
                                    <div>
                                        <div className="feat-card__id">VM—05</div>
                                        <div className="feat-card__icon">⌂</div>
                                        <h3 className="feat-card__title">
                                            Auto
                                            <br />
                                            Intervention
                                        </h3>
                                        <p className="feat-card__text">
                                            Executes pre-approved corrective actions when detection
                                            confidence exceeds 99.5% — logged to the GMP audit trail.
                                        </p>
                                    </div>
                                    <div className="feat-card__stat">
                                        99.5<span style={{ fontSize: "0.4em", opacity: "0.7" }}>%</span>
                                    </div>
                                </div>
                                <div className="feat-card reveal">
                                    <div>
                                        <div className="feat-card__id">VM—06</div>
                                        <div className="feat-card__icon">◯</div>
                                        <h3 className="feat-card__title">
                                            GMP Audit
                                            <br />
                                            Trail
                                        </h3>
                                        <p className="feat-card__text">
                                            Every detection, intervention, and suppression logged immutably.
                                            21 CFR Part 11 and Annex 11 compliant.
                                        </p>
                                    </div>
                                    <div className="spark">
                                        <span className="spark__bar" style={{ height: "100%" }} />
                                        <span className="spark__bar" style={{ height: "100%" }} />
                                        <span className="spark__bar" style={{ height: "100%" }} />
                                        <span className="spark__bar" style={{ height: "100%" }} />
                                        <span className="spark__bar" style={{ height: "100%" }} />
                                        <span className="spark__bar" style={{ height: "100%" }} />
                                        <span className="spark__bar" style={{ height: "100%" }} />
                                        <span className="spark__bar" style={{ height: "100%" }} />
                                        <span className="spark__bar" style={{ height: "100%" }} />
                                        <span className="spark__bar" style={{ height: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* ====== SIGNAL SECTION ====== */}
                        <section className="section section--surface" id="signal">
                            <div className="signal__inner">
                                <div className="reveal">
                                    <div className="section__eyebrow">// Signal Intelligence</div>
                                    <h2 className="section__title">
                                        Reads the
                                        <br />
                                        Process
                                    </h2>
                                    <p className="signal__text">
                                        VR-Monitor ingests raw bioprocess telemetry — sensor readings,
                                        flow rates, gas profiles, weight checks — and separates critical
                                        deviations from normal variation in real-time. No pre-processing.
                                        No manual configuration required.
                                    </p>
                                    <div className="signal__tags">
                                        <span className="tag">pH Sensors</span>
                                        <span className="tag tag--filled">DO Probes</span>
                                        <span className="tag">Temperature</span>
                                        <span className="tag tag--safety">Gas Flow</span>
                                        <span className="tag tag--ghost">Weight</span>
                                        <span className="tag">Pressure</span>
                                    </div>
                                </div>
                                <div className="signal__viz reveal">
                                    <div className="signal__viz-header">
                                        <div className="signal__viz-title">
                                            Live Signal — Bioreactor ch.001→128
                                        </div>
                                        <div className="signal__viz-status">Stream Active</div>
                                    </div>
                                    <div className="signal__viz-canvas">
                                        <div className="signal__viz-bars" id="waveformBars" />
                                    </div>
                                    <div className="signal__viz-footer">
                                        <span>0ms</span>
                                        <span>Sample Window: 500ms</span>
                                        <span>500ms</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* ====== CTA ====== */}
                        <section className="section cta" id="deploy">
                            <div className="reveal">
                                <h2 className="cta__title">
                                    Integrated in
                                    <br />
                                    Under 1<span className="accent"> Day</span>
                                </h2>
                                <p className="cta__text">
                                    One agent module. One network connection. VR-Monitor connects to
                                    your bioprocessing platform and begins learning your baseline
                                    immediately — no manual rule-building required.
                                </p>
                                <div className="cta__actions">
                                    <button className="btn btn--primary">Request a Demo</button>
                                    <button className="btn btn--ghost">Read the Docs</button>
                                </div>
                            </div>
                        </section>
                        {/* ====== FOOTER ====== */}
                        <footer className="footer footer--compact">
                            <div className="footer__inner">
                                <div className="footer__left">
                                    <span className="footer__logo font-display">
                                        Veran Biosystems<span className="accent">.</span>
                                    </span>
                                    <div className="footer__links">
                                        <a href="#">Privacy</a>
                                        <a href="#">Terms</a>
                                        <a href="#">Status</a>
                                        <a href="#">Docs</a>
                                    </div>
                                </div>
                                <span className="footer__copy">
                                    © 2026 Veran Biosystems Inc. All rights reserved. &nbsp;|&nbsp;
                                </span>
                            </div>
                        </footer>
                    </main>
                    {/* ====== TERMINAL SIDEBAR ====== */}
                    <aside className="sidebar" id="sidebar">
                        <div className="sidebar__header">
                            <div className="sidebar__title">Process Log</div>
                            <div className="sidebar__meta">PID 48271</div>
                        </div>
                        <div className="sidebar__stats">
                            <div className="sidebar__stat">
                                <div className="sidebar__stat-label">CPU</div>
                                <div className="sidebar__stat-val" id="cpuVal">
                                    12%
                                </div>
                            </div>
                            <div className="sidebar__stat">
                                <div className="sidebar__stat-label">MEM</div>
                                <div className="sidebar__stat-val" id="memVal">
                                    4.2G
                                </div>
                            </div>
                            <div className="sidebar__stat">
                                <div className="sidebar__stat-label">NET</div>
                                <div className="sidebar__stat-val" id="netVal">
                                    840M
                                </div>
                            </div>
                        </div>
                        <div className="sidebar__chart">
                            <div className="sidebar__chart-title">Sensor Throughput — Last 60s</div>
                            <div className="sidebar__chart-bars" id="throughputChart" />
                        </div>
                        <div className="sidebar__log">
                            <div className="sidebar__log-scroll">
                                <div className="sidebar__log-track" id="logTrack" />
                            </div>
                        </div>
                        <div className="sidebar__footer">
                            <span>VR-Monitor v2.1.4</span>
                            <span id="sidebarUptime">Uptime: 847d 14h</span>
                        </div>
                    </aside>
                </div>
                <button
                    className="sidebar-toggle"
                    id="sidebarToggle"
                    aria-label="Toggle terminal"
                >
                    &gt;_
                </button>
            </>

        </div>
    );
}
