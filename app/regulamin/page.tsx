import type { Metadata } from 'next';
import Nav from '../../components/Nav';
import { asset } from '../site';

export const metadata: Metadata = {
  title: 'Regulamin — Fizjosfera',
  description:
    'Regulamin gabinetu fizjoterapii Fizjosfera — Katarzyna Marcinkowska-Kononowicz, Ełk.',
};

type Item = string | { lead: string; sub: string[] };

const SECTIONS: { h: string; items: Item[] }[] = [
  {
    h: 'I. Postanowienia ogólne',
    items: [
      {
        lead: 'Praktyka zawodowa: FIZJOSFERA KATARZYNA MARCINKOWSKA-KONONOWICZ zwana dalej „praktyką” lub „gabinetem” działa na podstawie:',
        sub: [
          'przepisów ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej,',
          'wpisu nr 000000290160 do rejestru podmiotów wykonujących działalność leczniczą prowadzonego przez Krajową Radę Fizjoterapeutów,',
          'niniejszego Regulaminu.',
        ],
      },
      'Główne miejsce udzielania świadczeń zdrowotnych mieści się w Ełku przy ul. Mickiewicza 9B/10.',
      'Każdy zapis na wizytę jest jednoznaczny z utworzeniem konta użytkownika w zewnętrznym systemie rezerwacji online Booksy, który jest zgodny z wszelkimi regulacjami wynikającymi z przepisów RODO. Utworzenie konta w Booksy jest niezbędne w celu sprawnego zarządzania systemem rezerwacji, informowania pacjentów, a także prowadzenia dokumentacji medycznej.',
      'Niniejszy Regulamin znajduje się na stronie Facebook oraz pomieszczeniu praktyki.',
      'Umówienie się na wizytę jest równoznaczne z zapoznaniem się i zaakceptowaniem postanowień niniejszego Regulaminu oraz przepisów RODO.',
    ],
  },
  {
    h: 'II. Cel i zadania udzielanych świadczeń',
    items: [
      'Celem praktyki fizjoterapeutycznej jest przywracanie, poprawa lub zachowanie zdrowia pacjentów.',
      'Zadaniem praktyki jest udzielanie świadczeń zdrowotnych z zakresu fizjoterapii.',
    ],
  },
  {
    h: 'III. Rodzaj działalności leczniczej',
    items: [
      'W ramach praktyki będą udzielane ambulatoryjne świadczenia zdrowotne obejmujące świadczenia w dziedzinie fizjoterapii.',
      'Udzielanie świadczeń odbywać się będzie w pomieszczeniu praktyki.',
      'Praktyka nie udziela świadczeń w ramach umowy z NFZ.',
    ],
  },
  {
    h: 'IV. Przebieg i organizacja procesu udzielania świadczeń zdrowotnych',
    items: [
      'Pacjent umawia się na wizytę telefonicznie pod nr telefonu +48 570 033 530, poprzez portal internetowy Booksy lub media społecznościowe gabinetu.',
      'W przypadku spóźnienia się na wizytę, czas wizyty zostaje skrócony o spóźnienie pacjenta. Spóźnienie powyżej 15 minut bez wcześniej informacji ze strony pacjenta traktowane jest jako rezygnacja z wizyty. W powyższej sytuacji fizjoterapeuta ma prawo przyjąć kolejnego pacjenta.',
      'W przypadku braku możliwości pojawienia się, należy odwołać wizytę telefonicznie lub poprzez wiadomość SMS pod numerem telefonu +48 570 033 530 lub poprzez aplikację Booksy, nie później niż na 24 godziny.',
      'W przypadku nie pojawienia się na wizycie bez wcześniejszego odwołania gabinet zastrzega sobie prawo do wyegzekwowania kaucji w wysokości połowy (50%) ceny wizyty.',
      'Za nieobecność może być uznawane także znaczące spóźnienie się na umówioną wizytę bez wcześniejszej informacji. To, czy kaucja zostanie wyegzekwowana w konkretnym przypadku, zależy od decyzji fizjoterapeuty.',
      'Pacjent na wizytę przychodzi z 5 minutowym wyprzedzeniem.',
      'Fizjoterapeuta zastrzega sobie prawo do odmówienia wykonania zabiegu klientom z aktywnymi infekcjami (silne przeziębienie, grypa, inne stany zapalne), nieprzestrzegających zasad higieny osobistej, bądź będących pod wpływem substancji wyskokowych.',
      'Z tytułu udzielanych świadczeń zdrowotnych pobierane są od Pacjentów opłaty. Wysokość opłat za świadczenia zdrowotne określona jest w cenniku gabinetu.',
    ],
  },
  {
    h: 'V. Postanowienia końcowe',
    items: [
      'W sprawach nieuregulowanych w niniejszym regulaminie stosuje się przepisy ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej.',
      'Regulamin wchodzi w życie z dniem wpisania praktyki do rejestru podmiotów wykonujących działalność leczniczą prowadzonego przez Krajową Radę Fizjoterapeutów.',
      'Gabinet zastrzega sobie prawo do wprowadzenia zmian w niniejszym regulaminie.',
    ],
  },
];

export default function Regulamin() {
  return (
    <div className="regulamin-page">
      <header className="hero">
        <div className="wrap regulamin-nav-wrap">
          <Nav home={false} />
        </div>
      </header>

      <div className="wrap cennik-inner">
        <article className="cennik-panel regulamin-panel">
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <h1 className="cennik-title">REGULAMIN</h1>
            <p className="regulamin-lead">Gabinet Fizjosfera</p>
          </div>
          <div className="cennik-divider" />

          <div className="regulamin-body">
            {SECTIONS.map((section) => (
              <section key={section.h} className="reg-section">
                <h2 className="reg-h2">{section.h}</h2>
                <ol className="reg-list">
                  {section.items.map((item, i) =>
                    typeof item === 'string' ? (
                      <li key={i}>{item}</li>
                    ) : (
                      <li key={i}>
                        {item.lead}
                        <ol className="reg-sublist">
                          {item.sub.map((s, j) => (
                            <li key={j}>{s}</li>
                          ))}
                        </ol>
                      </li>
                    )
                  )}
                </ol>
              </section>
            ))}

            <p className="reg-close">Ełk, dnia 16.05.2025</p>
          </div>
        </article>

        <div className="regulamin-back-wrap">
          <a className="lnk regulamin-back" href={asset('/')}>
            ← Powrót do strony głównej
          </a>
        </div>
      </div>
    </div>
  );
}
