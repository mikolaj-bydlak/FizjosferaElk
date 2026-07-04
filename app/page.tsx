import Nav from '../components/Nav';
import HeroBadge from '../components/HeroBadge';
import { LINKS } from './site';

const SERVICES = [
  {
    num: '01',
    title: 'Fizjoterapia uroginekologiczna',
    desc: 'Kompleksowa diagnostyka i terapia dna miednicy — nietrzymanie moczu, obniżenia, ból, przygotowanie i powrót do formy.',
  },
  {
    num: '02',
    title: 'Opieka okołoporodowa',
    desc: 'Fizjoterapia kobiet w ciąży i po porodzie — bezpieczne wsparcie ciała na każdym etapie macierzyństwa.',
  },
  {
    num: '03',
    title: 'Terapia blizn',
    desc: 'Praca z blizną po cięciu cesarskim i zabiegach — przywrócenie ruchomości, redukcja napięć i dyskomfortu.',
  },
  {
    num: '04',
    title: 'Trening kobiet',
    desc: 'Bezpieczny, indywidualnie dobrany ruch w ciąży i po porodzie — siła, stabilizacja i dobre samopoczucie.',
  },
  {
    num: '05',
    title: 'Masaż leczniczy',
    desc: 'Rozluźnienie tkanek, redukcja napięć i bólu — regeneracja dla przeciążonego, zmęczonego ciała.',
  },
  {
    num: '06',
    title: 'Kinesiotaping',
    desc: 'Wsparcie mięśni i stawów plastrami — także dla kobiet w ciąży (brzuch i plecy).',
  },
];

const REVIEWS = [
  {
    quote:
      'Polecam z całego serca. Trafiłam do Pani zarówno w okresie przygotowania do porodu, jak i później po cięciu cesarskim — w obu etapach otrzymałam ogromne wsparcie oraz bardzo profesjonalną opiekę. Czułam się swobodnie i zaopiekowana.',
    name: 'Weronika',
    meta: 'terapia blizn · opieka okołoporodowa',
  },
  {
    quote:
      'Serdecznie polecam! Miłe podejście, ćwiczenia dobrane pod możliwości pacjenta. Czułam, że jestem w dobrych rękach.',
    name: 'Emilia',
    meta: 'terapia uroginekologiczna',
  },
  {
    quote:
      'Polecam! Dobra robota, cenne wskazówki i normalne, ludzkie podejście. Pani Katarzyna ma ogromną wiedzę w swojej dziedzinie.',
    name: 'Monika',
    meta: 'terapia blizn',
  },
];

const FAQ = [
  {
    q: 'Jak przygotować się do pierwszej wizyty uroginekologicznej?',
    a: 'Zabierz dokumentację medyczną, jeśli ją posiadasz, oraz wygodny strój. Pierwsza wizyta to przede wszystkim rozmowa, wywiad i badanie — spokojnie omawiamy Twoje potrzeby i cele terapii.',
    open: true,
  },
  {
    q: 'Czy terapia dna miednicy jest bolesna?',
    a: 'Terapia prowadzona jest z pełnym poszanowaniem Twojego komfortu i granic. Każdy etap wykonywany jest za Twoją zgodą, w tempie dopasowanym do Ciebie.',
    open: false,
  },
  {
    q: 'Kiedy po porodzie mogę rozpocząć terapię?',
    a: 'Delikatną pracę można rozpocząć już w połogu, a pełniejszą terapię zwykle po kontroli u ginekologa. Plan zawsze dobieramy indywidualnie do Twojego stanu.',
    open: false,
  },
  {
    q: 'Czy potrzebuję skierowania?',
    a: 'Nie — do wizyty prywatnej skierowanie nie jest wymagane. Wystarczy rezerwacja terminu online przez Booksy lub telefonicznie.',
    open: false,
  },
  {
    q: 'Jak umówić wizytę?',
    a: 'Najwygodniej online przez Booksy (rezerwacja 24/7), telefonicznie pod numerem 570 033 530 lub przez wiadomość na Instagramie @fizjosfera.elk.',
    open: false,
  },
];

export default function Home() {
  return (
    <div id="top">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="wrap hero-inner">
          <Nav />

          <div className="hero-lockup">
            <HeroBadge />

            <div className="hero-wordmark">
              <span>FIZJO</span>
              <span>SFERA</span>
            </div>
            <div className="hero-sublockup">GABINET · FIZJOTERAPII</div>

            <h1 className="hero-h1">
              Zdrowie kobiety w troskliwych, doświadczonych rękach
            </h1>
            <p className="hero-intro">
              Specjalistyczna fizjoterapia uroginekologiczna, terapia blizn i
              opieka okołoporodowa w Ełku. Przestrzeń stworzona z myślą o
              kobietach — ich zdrowiu, komforcie i poczuciu bezpieczeństwa.
            </p>

            <div className="hero-cta">
              <a
                className="btn btn--primary"
                href={LINKS.booksy}
                target="_blank"
                rel="noopener"
              >
                Rezerwacja online
              </a>
              <a className="btn btn--ghost" href={LINKS.tel}>
                Zadzwoń · {LINKS.phoneDisplay}
              </a>
            </div>
            <a
              className="lnk hero-rating"
              href={LINKS.booksy}
              target="_blank"
              rel="noopener"
            >
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>{' '}
              5,0 · 29 opinii na Booksy
            </a>
          </div>
        </div>
      </header>

      {/* ===================== O MNIE ===================== */}
      <section id="o-mnie" className="section-light">
        <div className="wrap section-pad">
          <div className="about-grid">
            <div className="about-portrait">
              <img
                src="/static/kasia.png"
                alt="Katarzyna Marcinkowska-Kononowicz — fizjoterapeutka"
                width={1363}
                height={1712}
              />
            </div>
            <div>
              <p className="eyebrow">Poznaj terapeutkę</p>
              <h2 className="about-h2">Katarzyna Marcinkowska-Kononowicz</h2>
              <p className="about-role">magister fizjoterapii</p>
              <p className="about-p">
                Z wykształcenia jestem magistrem fizjoterapii, a moją zawodową
                pasją jest praca z kobietami — dlatego specjalizuję się w terapii
                uroginekologicznej oraz terapii blizn. Każda z moich pacjentek to
                dla mnie indywidualna historia, którą staram się wspierać z
                empatią i pełnym zaangażowaniem.
              </p>
              <p className="about-p">
                Fizjosfera to miejsce, które stworzyłam z myślą o kobietach — ich
                zdrowiu, komforcie i poczuciu bezpieczeństwa. To przestrzeń, w
                której łączę wiedzę medyczną z kompleksowym podejściem do ciała i
                emocji.
              </p>
              <p className="about-p">
                Prywatnie jestem żoną i mamą rocznej dziewczynki, której narodziny
                uświadomiły mi, jak ważna jest troska o siebie — szczególnie w
                okresie okołoporodowym. W wolnych chwilach z przyjemnością sięgam
                po książki, a jeszcze niedawno można było spotkać mnie na ściance
                wspinaczkowej lub sali do pole dance.
              </p>
              <p className="about-quote">
                Dziękuję, że tu jesteś. Jeśli czujesz, że mogę Ci pomóc —
                zapraszam do Fizjosfery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== USŁUGI ===================== */}
      <section id="uslugi" className="section-green">
        <div className="wrap section-pad-88">
          <div className="center-head">
            <p className="eyebrow eyebrow--on-green">Zakres</p>
            <h2 className="h2" style={{ color: 'var(--cream-text)', fontSize: 'clamp(32px,4.6vw,46px)' }}>
              Usługi gabinetu
            </h2>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s) => (
              <article className="svc-card" key={s.num}>
                <div className="svc-num">{s.num}</div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== GABINET ===================== */}
      <section id="gabinet" className="section-light">
        <div className="wrap section-pad-88">
          <div className="gallery-head">
            <div>
              <p className="eyebrow">Gabinet</p>
              <h2 className="h2" style={{ fontSize: 'clamp(30px,4.4vw,44px)' }}>
                Kameralna, spokojna przestrzeń
              </h2>
            </div>
            <p>
              Jasne, przytulne wnętrze w centrum Ełku, w pełni wyposażone do pracy
              z ciałem — z zachowaniem intymności i komfortu.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="ph">
              <img
                src="/static/studio1.jpeg"
                alt="Gabinet Fizjosfera — stół i drabinki"
                width={2340}
                height={2340}
              />
            </div>
            <div className="ph">
              <img
                src="/static/studio3.jpeg"
                alt="Gabinet Fizjosfera — stół przy oknie"
                width={2340}
                height={2340}
              />
            </div>
            <div className="ph">
              <img
                src="/static/studio2.jpeg"
                alt="Gabinet Fizjosfera — lustro i przestrzeń do ćwiczeń"
                width={2340}
                height={2340}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CENNIK ===================== */}
      <section id="cennik" className="section-green">
        <div className="wrap cennik-inner">
          <div className="cennik-panel">
            <div style={{ textAlign: 'center', marginBottom: '8px' }}>
              <p className="eyebrow">Cennik</p>
              <h2 className="cennik-title">CENNIK</h2>
            </div>
            <div className="cennik-divider" />

            <div className="price-list">
              <div className="price-row" style={{ gap: '8px 30px' }}>
                <div className="price-name">Konsultacja fizjoterapeutyczna</div>
                <div className="price-min">60 min</div>
                <div className="price-amount">150 zł</div>
              </div>

              <div className="spacer-18" />
              <div className="price-group-label">
                Fizjoterapia uroginekologiczna
              </div>
              <div className="price-row price-indent" style={{ gap: '10px 30px' }}>
                <div className="price-sub">I wizyta</div>
                <div className="price-min">90 min</div>
                <div className="price-amount">200 zł</div>
              </div>
              <div
                className="price-row price-indent"
                style={{ gap: '10px 30px', marginTop: '10px' }}
              >
                <div className="price-sub">Kolejna wizyta</div>
                <div className="price-min">60 min</div>
                <div className="price-amount">180 zł</div>
              </div>

              <div className="spacer-22" />
              <div className="price-row">
                <div className="price-name">Terapia blizny</div>
                <div className="price-min">60 min</div>
                <div className="price-amount">150 zł</div>
              </div>
              <div className="price-row" style={{ marginTop: '12px' }}>
                <div className="price-name">Masaż leczniczy</div>
                <div className="price-min">60 min</div>
                <div className="price-amount">140 zł</div>
              </div>
              <div className="price-row" style={{ marginTop: '6px' }}>
                <div />
                <div className="price-min">90 min</div>
                <div className="price-amount">190 zł</div>
              </div>

              <div className="spacer-22" />
              <div className="price-row">
                <div className="price-name">Kinesiotaping</div>
                <div className="price-min">—</div>
                <div className="price-amount">od 40 zł</div>
              </div>
              <div className="price-row" style={{ marginTop: '12px' }}>
                <div className="price-name">
                  Kinesiotaping w ciąży{' '}
                  <span className="price-note">(brzuch + plecy)</span>
                </div>
                <div className="price-min">—</div>
                <div className="price-amount">100 zł</div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '36px' }}>
                <a
                  className="btn btn--inverse"
                  href={LINKS.booksy}
                  target="_blank"
                  rel="noopener"
                  style={{ fontSize: '13px', padding: '14px 30px' }}
                >
                  Umów wizytę online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OPINIE ===================== */}
      <section id="opinie" className="section-light">
        <div className="wrap section-pad-88">
          <div className="center-head" style={{ marginBottom: 'clamp(36px,5vw,48px)' }}>
            <p className="eyebrow">Opinie</p>
            <h2 className="h2" style={{ fontSize: 'clamp(32px,4.6vw,46px)', margin: '12px 0 10px' }}>
              Zaufały mi kobiety z Ełku
            </h2>
            <div className="op-rating">
              <span className="stars" aria-hidden="true">
                ★★★★★
              </span>
              &nbsp;&nbsp;5,0 · 29 opinii · Booksy
            </div>
          </div>
          <div className="op-grid">
            {REVIEWS.map((r) => (
              <figure className="op-card" key={r.name} style={{ margin: 0 }}>
                <div className="op-quote-glyph" aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className="op-quote" style={{ margin: '16px 0 22px' }}>
                  {r.quote}
                </blockquote>
                <figcaption>
                  <div className="op-name">{r.name}</div>
                  <div className="op-meta">{r.meta}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a
              className="lnk op-more"
              href={LINKS.booksy}
              target="_blank"
              rel="noopener"
            >
              Zobacz wszystkie opinie na Booksy
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="section-sand">
        <div className="wrap section-pad-88">
          <div className="faq-wrap">
            <div className="faq-head">
              <p className="eyebrow">Pytania</p>
              <h2 className="h2" style={{ fontSize: 'clamp(32px,4.6vw,46px)' }}>
                Najczęstsze pytania
              </h2>
            </div>
            {FAQ.map((item) => (
              <details className="faq-item" key={item.q} open={item.open}>
                <summary>
                  {item.q}
                  <span className="faq-marker" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MAPA / DOJAZD ===================== */}
      <section className="section-light" aria-label="Dojazd">
        <div className="map-grid">
          <div className="map-text">
            <p className="eyebrow">Dojazd</p>
            <h2 className="map-h2">Znajdziesz mnie w&nbsp;Ełku</h2>
            <p className="map-addr">ul. Adama Mickiewicza 9B lok. 10</p>
            <p className="map-city">19-300 Ełk</p>
            <p className="map-note">
              Gabinet mieści się w dogodnej lokalizacji w centrum miasta. Wizyty
              odbywają się po wcześniejszej rezerwacji.
            </p>
            <a
              className="btn btn--inverse map-btn"
              href={LINKS.maps}
              target="_blank"
              rel="noopener"
            >
              Otwórz w Mapach Google
            </a>
          </div>
          <iframe
            className="map-embed"
            title="Mapa dojazdu Fizjosfera Ełk"
            src={LINKS.mapsEmbed}
            loading="lazy"
          />
        </div>
      </section>

      {/* ===================== FOOTER / KONTAKT ===================== */}
      <footer id="kontakt" className="footer">
        <div className="wrap footer-inner">
          <div className="foot-grid">
            <div>
              <div className="foot-wordmark">FIZJOSFERA</div>
              <div className="foot-sublockup">GABINET · FIZJOTERAPII</div>
              <p className="foot-desc">
                Fizjoterapia uroginekologiczna i opieka okołoporodowa dla kobiet w
                Ełku.
              </p>
            </div>
            <div>
              <div className="foot-label">Kontakt</div>
              <a className="lnk foot-phone" href={LINKS.tel}>
                {LINKS.phoneDisplay}
              </a>
              <div className="foot-addr">
                ul. Adama Mickiewicza 9B lok. 10
                <br />
                19-300 Ełk
              </div>
            </div>
            <div>
              <div className="foot-label">Rezerwacja i social</div>
              <a
                className="lnk foot-booksy"
                href={LINKS.booksy}
                target="_blank"
                rel="noopener"
              >
                Rezerwuj na Booksy
              </a>
              <a
                className="lnk foot-social"
                href={LINKS.instagram}
                target="_blank"
                rel="noopener"
              >
                Instagram · @fizjosfera.elk
              </a>
              <a
                className="lnk foot-social"
                href={LINKS.facebook}
                target="_blank"
                rel="noopener"
              >
                Facebook · Fizjosfera
              </a>
            </div>
          </div>
          <div className="foot-copy">
            © 2026 Fizjosfera · Katarzyna Marcinkowska-Kononowicz · Ełk · Wizyty po
            wcześniejszej rezerwacji
          </div>
        </div>
      </footer>
    </div>
  );
}
