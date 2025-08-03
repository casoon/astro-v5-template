# Accessibility, Performance & SEO – Checkliste für die Entwicklung

Diese Checkliste hilft, während der Entwicklung auf Barrierefreiheit, Performance und SEO zu achten – ohne den Entwicklungsfluss zu stören und kann einer KI als Konvention mitgegeben werden.

## Accessibility (Barrierefreiheit)

- [ ] Alle Bilder haben sinnvolle Alt-Texte
- [ ] Überschriften sind logisch verschachtelt (H1, H2, H3 ...)
- [ ] Interaktive Elemente (Buttons, Links, Formulare) sind per Tastatur erreichbar
- [ ] ARIA-Attribute werden nur gezielt und korrekt eingesetzt
- [ ] Ausreichende Farbkontraste (z. B. mit https://webaim.org/resources/contrastchecker/ geprüft)
- [ ] Fokus-Indikatoren sind sichtbar
- [ ] Keine rein farbliche Informationsvermittlung

## Performance

- [ ] Bilder sind optimiert (WebP, SVG, passende Größe)
- [ ] Lazy Loading für große Bilder und Medien
- [ ] Keine unnötig großen oder ungenutzten Assets
- [ ] Externe Skripte und Fonts möglichst asynchron laden
- [ ] CSS und JS werden gebündelt und minimiert

## SEO

- [ ] Jede Seite hat einen individuellen Title und Description
- [ ] Überschriftenstruktur ist korrekt (nur eine H1 pro Seite)
- [ ] Meta-Tags für OpenGraph und Twitter Cards vorhanden
- [ ] Canonical-URL gesetzt (falls nötig)
- [ ] Sitemap und robots.txt aktuell
- [ ] Interne Links sind sinnvoll gesetzt

## Best Practices im Workflow

- [ ] Vor dem Merge/Release: Kurzer Check mit Lighthouse und/oder axe DevTools
- [ ] Code-Reviews nutzen diese Checkliste als Leitfaden
- [ ] Bei neuen Komponenten: Accessibility und SEO von Anfang an mitdenken

---

**Hinweis:** Diese Checkliste ist bewusst pragmatisch gehalten. Sie soll helfen, die wichtigsten Punkte im Alltag nicht zu vergessen – ohne die Entwicklung zu blockieren.
