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
                                aria-label="Veran Biosystems Home"
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
                                Veran
                            </Link>
                            <span className="header__sep" />
                            <span className="header__product">BioReactor Pro / VR-01</span>
                        </div>
                        <nav className="header__nav" id="headerNav">
                            <Link href="/">Home</Link>
                            <Link href="/landing" className="active">
                                VR-01
                            </Link>
                            <Link href="/the-observer">Observer</Link>
                            <Link href="#specs">Specs</Link>
                            <Link href="#order">Order</Link>
                        </nav>
                        <div className="header__right">
                            <div className="header__status">
                                <span className="header__status-dot" />
                                <span>System Online</span>
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
                <section className="hero hero--center hero--product">
                    <div className="hero__grid" aria-hidden="true" />
                    <div className="hero__label reveal">Closed-Process Bioreactor Platform</div>
                    <h1 className="hero__title">
                        VR<span className="accent-dot">-</span>01
                    </h1>
                    <p className="hero__subtitle reveal">BioReactor Pro</p>
                    <p className="hero__desc reveal" style={{ marginBottom: "3rem" }}>
                        2L to 2000L scalable. Single-use closed system. The automated bioreactor
                        platform built for cGMP gene therapy and cell therapy manufacturing — from
                        seed train to production scale.
                    </p>
                    <div className="hero__actions reveal">
                        <button className="btn btn--primary">Request a Demo</button>
                        <button className="btn btn--ghost">Read the Docs</button>
                    </div>
                    <span className="hero__coords" aria-hidden="true">
                        42.3601°N / 71.0589°W
                    </span>
                    <span className="hero__version" aria-hidden="true">
                        FW v2.4.0 — Rev.B
                    </span>
                </section>
                {/* ====== PRODUCT DETAILS ====== */}
                <section className="section" id="overview">
                    <div className="details__inner">
                        <div className="details__left reveal">
                            <div className="section__eyebrow">// Overview</div>
                            <h2 className="section__title">
                                Engineered for
                                <br />
                                Full Closure
                            </h2>
                            <p className="details__text" style={{ marginTop: "1.5rem" }}>
                                The VR-01 eliminates open-process contamination risk entirely. Custom
                                single-use fluid paths, integrated inline analytics, and a
                                GMP-validated software stack that generates your batch record
                                automatically — no manual data entry, no transcription errors.
                            </p>
                        </div>
                        <div className="details__right">
                            <div className="stat-card reveal">
                                <div className="stat-card__label">Scale Range</div>
                                <div className="stat-card__value">
                                    2<span className="stat-card__unit accent">→2000L</span>
                                </div>
                            </div>
                            <div className="stat-card stat-card--dark reveal">
                                <div className="stat-card__label">Dissolved Oxygen Control</div>
                                <div className="stat-card__value">
                                    ±0.5<span className="stat-card__unit">%</span>
                                </div>
                            </div>
                            <div className="stat-card reveal">
                                <div className="stat-card__label">Sensor Channels</div>
                                <div className="stat-card__value">
                                    64<span className="stat-card__unit">ch</span>
                                </div>
                            </div>
                            <div className="stat-card reveal">
                                <div className="stat-card__label">Data Sampling</div>
                                <div className="stat-card__value">
                                    1<span className="stat-card__unit accent">Hz</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====== SPEC GRID ====== */}
                <section className="section section--surface" id="specs">
                    <div className="container">
                        <div className="section__header reveal">
                            <div className="section__eyebrow">// Technical Specifications</div>
                            <h2 className="section__title">
                                Full Spec
                                <br />
                                Breakdown
                            </h2>
                        </div>
                        <div className="spec-grid reveal">
                            <div className="spec-cell">
                                <div>
                                    <div className="spec-cell__id">SP-01</div>
                                    <div className="spec-cell__label">Working Volume</div>
                                </div>
                                <div>
                                    <div className="spec-cell__value">
                                        2→2000<span className="spec-cell__unit">L</span>
                                    </div>
                                    <div className="bar-track">
                                        <div className="bar-track__fill" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="spec-cell spec-cell--dark">
                                <div>
                                    <div className="spec-cell__id">SP-02</div>
                                    <div className="spec-cell__label">DO Control</div>
                                </div>
                                <div>
                                    <div className="spec-cell__value">
                                        ±0.5<span className="spec-cell__unit">%</span>
                                    </div>
                                    <div className="spec-cell__note">
                                        Cascade O₂ / agitation. Inline optical probe.
                                    </div>
                                </div>
                            </div>
                            <div className="spec-cell">
                                <div>
                                    <div className="spec-cell__id">SP-03</div>
                                    <div className="spec-cell__label">Fluid Path</div>
                                </div>
                                <div>
                                    <div className="spec-cell__value">
                                        Single<span className="spec-cell__unit">-Use</span>
                                    </div>
                                    <div className="spec-cell__note">
                                        Gamma-irradiated. USP Class VI. Extractable validated.
                                    </div>
                                </div>
                            </div>
                            <div className="spec-cell spec-cell--safety">
                                <div>
                                    <div className="spec-cell__id">SP-04</div>
                                    <div className="spec-cell__label">Sensor Channels</div>
                                </div>
                                <div>
                                    <div className="spec-cell__value">
                                        64<span className="spec-cell__unit">ch</span>
                                    </div>
                                    <div className="bar-track">
                                        <div className="bar-track__fill" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="spec-cell">
                                <div>
                                    <div className="spec-cell__id">SP-05</div>
                                    <div className="spec-cell__label">pH Range</div>
                                </div>
                                <div>
                                    <div className="spec-cell__value">
                                        6.5–8.0<span className="spec-cell__unit">pH</span>
                                    </div>
                                    <div className="spec-cell__note">
                                        Inline probe. Auto CO₂ / base addition.
                                    </div>
                                </div>
                            </div>
                            <div className="spec-cell">
                                <div>
                                    <div className="spec-cell__id">SP-06</div>
                                    <div className="spec-cell__label">Temp Control</div>
                                </div>
                                <div>
                                    <div className="spec-cell__value">
                                        ±0.1<span className="spec-cell__unit">°C</span>
                                    </div>
                                    <div className="bar-track">
                                        <div className="bar-track__fill" style={{ width: "92%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="spec-cell spec-cell--dark">
                                <div>
                                    <div className="spec-cell__id">SP-07</div>
                                    <div className="spec-cell__label">Compliance</div>
                                </div>
                                <div>
                                    <div className="spec-cell__value">
                                        21 CFR<span className="spec-cell__unit">Pt 11</span>
                                    </div>
                                    <div className="spec-cell__note">
                                        GAMP 5. Electronic batch record. Full audit trail.
                                    </div>
                                </div>
                            </div>
                            <div className="spec-cell">
                                <div>
                                    <div className="spec-cell__id">SP-08</div>
                                    <div className="spec-cell__label">Connectivity</div>
                                </div>
                                <div>
                                    <div className="spec-cell__value">OPC-UA</div>
                                    <div className="spec-cell__note">
                                        SCADA integration. REST API. CSV export.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ====== CTA ====== */}
                <section className="cta-band" id="order">
                    <div className="cta-band__inner reveal">
                        <h2 className="cta-band__title">
                            Lead Time<span className="accent">:</span>
                            <br />
                            14 Weeks
                        </h2>
                        <p className="cta-band__text">
                            Book a process characterisation consultation. Early-order customers
                            receive complimentary IQ/OQ documentation and priority deployment
                            scheduling.
                        </p>
                        <div className="cta-band__actions">
                            <button className="btn btn--primary">Request Quote</button>
                            <button className="btn btn--ghost">Contact a Scientist</button>
                        </div>
                    </div>
                </section>
                {/* ====== TERMINAL LOG ====== */}
                <div className="log" aria-label="System telemetry">
                    <div className="log__header">
                        <div className="log__header-title">Live Process Feed</div>
                        <div className="log__header-status">Batch ID: VR-01-B204</div>
                    </div>
                    <div className="log__body">
                        <div className="log__track">
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:02Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    Bioreactor initialised — working volume 200L — all sensors nominal
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:05Z</span>
                                <span className="log__entry-tag log-sys">SYS</span>
                                <span className="log__entry-msg">
                                    Firmware v2.4.0 verified — batch record ID: VR-01-B204
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:08Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    pH 7.24 — DO 42.1% — temp 37.0°C — agitation 85 RPM
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:11Z</span>
                                <span className="log__entry-tag log-warn">WARN</span>
                                <span className="log__entry-msg">
                                    DO trending low — cascade O₂ increase initiated — ch.DO-01
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:13Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    OPC-UA link stable — SCADA sync confirmed — data rate 1Hz
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:16Z</span>
                                <span className="log__entry-tag log-sys">SYS</span>
                                <span className="log__entry-msg">
                                    Glucose feed triggered — 12.4 mL — PID loop within setpoint
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:02Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    Bioreactor initialised — working volume 200L — all sensors nominal
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:05Z</span>
                                <span className="log__entry-tag log-sys">SYS</span>
                                <span className="log__entry-msg">
                                    Firmware v2.4.0 verified — batch record ID: VR-01-B204
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:08Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    pH 7.24 — DO 42.1% — temp 37.0°C — agitation 85 RPM
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:11Z</span>
                                <span className="log__entry-tag log-warn">WARN</span>
                                <span className="log__entry-msg">
                                    DO trending low — cascade O₂ increase initiated — ch.DO-01
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:13Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    OPC-UA link stable — SCADA sync confirmed — data rate 1Hz
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:16Z</span>
                                <span className="log__entry-tag log-sys">SYS</span>
                                <span className="log__entry-msg">
                                    Glucose feed triggered — 12.4 mL — PID loop within setpoint
                                </span>
                            </div>
                        </div>
                        <div className="log__track log__track--reverse">
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:18Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    Cell density 4.2×10⁶ cells/mL — viability 97.3% — in spec
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:20Z</span>
                                <span className="log__entry-tag log-sys">SYS</span>
                                <span className="log__entry-msg">
                                    Thermal jacket nominal — jacket temp 37.1°C — delta 0.1°C
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:22Z</span>
                                <span className="log__entry-tag log-warn">WARN</span>
                                <span className="log__entry-msg">
                                    Foam level sensor elevated — antifoam addition 0.8 mL queued
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:25Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    eBR checkpoint passed — 14 of 14 CPPs within limits
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:27Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    Exhaust gas analysis — CO₂ 4.1% — O₂ utilisation 18.2%
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:18Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    Cell density 4.2×10⁶ cells/mL — viability 97.3% — in spec
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:20Z</span>
                                <span className="log__entry-tag log-sys">SYS</span>
                                <span className="log__entry-msg">
                                    Thermal jacket nominal — jacket temp 37.1°C — delta 0.1°C
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:22Z</span>
                                <span className="log__entry-tag log-warn">WARN</span>
                                <span className="log__entry-msg">
                                    Foam level sensor elevated — antifoam addition 0.8 mL queued
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:25Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    eBR checkpoint passed — 14 of 14 CPPs within limits
                                </span>
                            </div>
                            <div className="log__entry">
                                <span className="log__entry-time">06:14:27Z</span>
                                <span className="log__entry-tag log-ok">OK</span>
                                <span className="log__entry-msg">
                                    Exhaust gas analysis — CO₂ 4.1% — O₂ utilisation 18.2%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <a href="#">Support</a>
                                <a href="#">Press Kit</a>
                            </div>
                        </div>
                        <span className="footer__copy">
                            © 2026 Veran Biosystems Inc. &nbsp;|&nbsp; Template by{" "}
                            <a
                                href="https://templatemo.com/tm-619-axis-industrial"
                                target="_blank"
                                rel="nofollow noopener"
                            >
                                TemplateMo
                            </a>
                        </span>
                    </div>
                </footer>
            </>
        </div>
    );
}
