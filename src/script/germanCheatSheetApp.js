


var structureCode = "";

// Analyse eines pragmatischen Textes
var structureCode1 = `
<h3 class="styledFont">1. Einleitung</h3>
<p>
    <label class="styledFont">Hinführung:</label> Aktualität/ gesellschaftliche Relevanz des Themas <br>
    <label class="styledFont">Textvorstellung:</label> <br> 
    - Titel <br> 
    - Autor <br> 
    - Textart (Kommentar, Essay, Leserbrief, Rede, Glosse) <br> 
    - Thema <br> 
    - Erscheinungsjahr/ Ort. <br>
    <label class="styledFont">Kernaussage:</label> Zentrale These/Problemvorstellung des Autors präzise formulieren.<br>
    <label class="styledFont">Vorgehensweise:</label> Leitfrage/methodisches Vorgehen ankündigen.<br>
</p>

<h3 class="styledFont">2. Hauptteil (A)</h3>
<p>
    <label class="styledFont">Inhaltswiedergabe (knapp):</label> <br> 
    - Wesentliche Aussagen zusammenfassen.<br> 
    - Gedankengang/Argumentationsverlauf <br>

    <label class="styledFont">Analyse der Argumentationsstruktur:</label> <br> 
    - Argumentationsaufbau (linear, dialektisch, steigernd) <br> 
    - Argumenttypen identifizieren (Fakten-, Autoritäts-, Erfahrungs-, normative Argumente) <br> 
    - Belege, Beispiele, rhetorische Mittel analysieren <br>

    <label class="styledFont">Sprachlich-stilistische Analyse:</label> <br> 
    - Rhetorische Mittel (Metaphern, Wiederholungen, rhetorische Fragen, Ironie) <br> 
    - Wirkung auf Leser und persuasive Strategien <br> 
    - Zielgruppe und Adressatenbezug <br>
</p>

<h3 class="styledFont">3. Hauptteil (B)</h3>
<p>
    <label class="styledFont">Analyse der Argumentationslogik:</label> <br>
    - Stichhaltigkeit, Schlüssigkeit, Belegqualität prüfen. <br> 
    - Logische Fehler oder Lücken aufzeigen. <br>

    <label class="styledFont">Kritische Auseinandersetzung mit den Thesen:</label> <br> 
    - Zustimmende Punkte begründet darlegen (mit eigenen Beispielen). <br>
    - Kritische Punkte/Kontra-Argumente entwickeln. <br>
    - Gegenpositionen berücksichtigen und abwägen. <br>
    - Mögliche Einseitigkeiten oder Überzeichnungen benennen. <br>

    <label class="styledFont">Erweiternde Perspektiven:</label> <br> 
    - Aktualitätsbezug: Ist die Position heute noch haltbar? <br> 
    - Gesellschaftliche/ethische Implikationen <br> 
    - Eigene Standpunkte fundiert vertreten.
</p>

<h3 class="styledFont">4. Schluss</h3>
<p>
    <label class="styledFont">Zusammenfassung:</label> der Hauptergebnisse aus der Analyse und Erörterung.<br>
    <label class="styledFont">Abwägendes Gesamturteil:</label> Überzeugungskraft der Textposition bewerten.<br>
    <label class="styledFont">Ausblick/Perspektive:</label> Gesamtdeutung des Themas, Handlungsoptionen.<br>
    <label class="styledFont">Evtl. persönliche Positionierung:</label> (knapp und begründet)<br>
</p>
`; 

// Interpretationsaufsatz zu einem Kurzprosatext
var structureCode2 = `
<h3 class="styledFont">1. Einleitung</h3>
<p>
    <label class="styledFont">Hinführung:</label> Allgemeine Gedanken zum zentralen Thema/Motiv des
    Textes. <br>

    <label class="styledFont">Textangaben (T-A-T-T-E):</label> <br>
    – Titel <br>
    – Autor <br>
    – Textart (z. B. Kurzgeschichte) <br>
    – Thema (knappe Inhaltsangabe im Präsens) <br>
    – Erscheinungsjahr/Epoche. <br>

    <label class="styledFont">Deutungshypothese:</label> Klare, begründete These zur Gesamtaussage als
    roter Faden.
</p>

<h3 class="styledFont">2. Hauptteil</h3>
<p>
    <label class="styledFont">Inhalt und Figuren:</label> <br>
    – Figurenanalyse (Charakterisierung, Motive, Entwicklung). <br>
    – Figurenkonstellation und Beziehungen (Konflikte, Abhängigkeiten). <br>
    – Zentrale Konflikte (innerlich oder zwischenmenschlich). <br>

    <label class="styledFont">Erzähltechnik und Aufbau:</label> <br>
    – Erzählperspektive und -verhalten (auktorial, personal, neutral). <br>
    – Darbietungsformen (Erzählerbericht, Redeformen, innerer Monolog). <br>
    – Struktur (Beginn, Wendepunkte, offenes Ende, Zeitgestaltung). <br>

    <label class="styledFont">Sprache und stilistische Mittel:</label> <br>
    – Wortwahl, Wortfelder und Satzbau (Parataxe/Hypotaxe). <br>
    – Rhetorische Mittel, Symbole und Leitmotive deuten. <br>

    <label class="styledFont">Raum- und Zeitgestaltung:</label> <br>
    – Schauplatz, Atmosphäre und zeitlicher Rahmen. <br>

    <label class="styledFont">Zentrale Themen und Motive:</label> <br>
    – Kernaussage zu menschlichen/gesellschaftlichen Problemen. <br>
    – Unterstützende Motivik.
</p>

<h3 class="styledFont">3. Schluss</h3>
<p>
    <label class="styledFont">Zusammenfassung:</label> der wichtigsten Analyseergebnisse. <br>

    <label class="styledFont">Überprüfung der Deutungshypothese:</label> Bestätigung, Präzisierung oder
    Differenzierung. <br>

    <label class="styledFont">Einordnung und Ausblick:</label> <br>
    – Kontext (historisch/epochal). <br>
    – Aktualität und allgemeine Bedeutung. <br>
    – Optional: Kurze, begründete persönliche Stellungnahme.
</p>
`;

//Interpretationsaufsatz zu einem literarischen Werk
var structureCode3 = `
<h3 class="styledFont">1. Einleitung: Kontextualisierung und Hypothesenbildung</h3>
<p>
    <label class="styledFont">Thematische Hinführung:</label> Allgemeiner Einstieg zum Thema oder Problem des
    Textes. <br>

    <label class="styledFont">Basisdaten (TATT-Satz):</label> <br>
    – Titel des Werkes <br>
    – Autor/in <br>
    – Textsorte (Kurzgeschichte, Roman, Drama, Gedicht) <br>
    – Thematik/Kernkonflikt. <br>

    <label class="styledFont">Ergänzende Kontextualisierung:</label> Erscheinungsjahr und ggf. Epochenzuordnung.
    <br>

    <label class="styledFont">Deutungshypothese:</label> Zentrale These in einem prägnanten Satz formulieren.
    <br>

    <label class="styledFont">Vorgehensweise:</label> Kurzer Ausblick auf die methodische Herangehensweise.
</p>

<h3 class="styledFont">2. Hauptteil: Systematische Analyse und Interpretation</h3>
<p>
    <label class="styledFont">Inhaltliche und strukturelle Grundlagen:</label> <br>
    – Präzise Inhaltsangabe (Präsens). <br>
    – Gliederung in Sinnabschnitte und Handlungsverlauf. <br>
    – Einordnung in das Gesamtwerk (bei Auszügen). <br>

    <label class="styledFont">Aspektorientierte Textanalyse (Kernbereich):</label> <br>
    – Figurencharakterisierung, Konstellation und Entwicklung. <br>
    – Erzähltechnik (Perspektive, Zeitgestaltung, Raumgestaltung) bzw. Dramentechnik (Aktstruktur,
    Regieanweisungen). <br>
    – Sprachlich-stilistische Analyse: Wortebene, Bildebene (Metaphern, Symbole), Satzebene und rhetorische
    Mittel. <br>

    <label class="styledFont">Interpretation und Synthese:</label> <br>
    – Deutung der Gestaltungsmittel und Wirkung. <br>
    – Zusammenhänge zwischen Form und Inhalt herausarbeiten. <br>
    – Bezug zur Deutungshypothese herstellen. <br>

    <label class="styledFont">Kontextualisierung:</label> Epochentypik, gesellschaftlicher Bezug oder
    biografischer Kontext.
</p>

<h3 class="styledFont">3. Schluss: Abrundung und Reflexion</h3>
<p>
    <label class="styledFont">Zusammenfassung:</label> der Hauptergebnisse. <br>

    <label class="styledFont">Überprüfung der These:</label> Bestätigung, Präzisierung oder Modifikation. <br>

    <label class="styledFont">Gesamtdeutung:</label> Abschließende Bewertung der Textaussage. <br>

    <label class="styledFont">Erweiterte Reflexion (optional):</label> Aktualität/Relevanz, Einordnung ins
    Gesamtwerk oder begründete persönliche Stellungnahme.
</p>

<h3 class="styledFont">4. Methodische Anforderungen</h3>
<p>
    <label class="styledFont">Formale Kriterien:</label> Korrekte Zitiertechnik mit Zeilenangaben, Verwendung
    von Fachsprache, sachlicher Stil im Präsens. <br>

    <label class="styledFont">Arbeitsweise:</label> Interpretation vor Beschreibung (Warum und welche Wirkung?),
    klare Gewichtung der Aspekte und sinnvolle Überleitungen. <br>

    <label class="styledFont">Zeitmanagement:</label> Fokus auf zentrale Aspekte, Vorarbeit durch Gliederung ist
    essenziell.
</p>
`;

//Erörterung eines pragmatischen Textes
var structureCode4 = `
<h3 class="styledFont">1. Einleitung</h3>
<p>
    <label class="styledFont">Textvorstellung:</label> Autor, Titel, Textsorte (Kommentar, Essay, Rede,
    Zeitungsartikel), Erscheinungsjahr/Quelle. <br>
    <label class="styledFont">Thema:</label> Zentrale These des Autors präzise benennen. <br>
    <label class="styledFont">Überleitung:</label> Hinführung zur Fragestellung und Ankündigung der Analyse
    sowie der kritischen Erörterung.
</p>

<h3 class="styledFont">2. Analyse des Textes (Sachliche Untersuchung)</h3>
<p>
    <label class="styledFont">Inhaltsangabe:</label> Wichtigste Aussagen, Gedankengang und Argumentationslinie
    in eigenen Worten zusammenfassen. <br>
    <label class="styledFont">Argumentationsstruktur:</label> Hauptthese, Teilargumente, Belege/Beispiele und
    Schlussfolgerung identifizieren. <br>
    <label class="styledFont">Sprachliche Mittel:</label> Rhetorische Mittel (z. B. Metaphern, Ironie, Appelle)
    oder Statistiken finden und deren Wirkung sowie Funktion erklären.
</p>

<h3 class="styledFont">3. Erörterung/Stellungnahme</h3>
<p>
    <label class="styledFont">Vorgehensweise:</label> Eigene Meinung sachlich und begründet darlegen
    (dialektisch mit Pro/Contra oder linear Punkt für Punkt). <br>
    <label class="styledFont">Argumentationsschema:</label> Behauptung, Erklärung, Beispiel (aus Alltag, Schule,
    Gesellschaft etc.) und Bezug zur These. <br>
    <label class="styledFont">Qualität:</label> Logische Ordnung, Fachbegriffe korrekt nutzen und pro Absatz ein
    Argument ausarbeiten.
</p>

<h3 class="styledFont">4. Schluss</h3>
<p>
    <label class="styledFont">Resümee:</label> Zusammenfassendes Urteil und klare eigene Positionierung. <br>
    <label class="styledFont">Ausblick:</label> Abschließende Bewertung der Überzeugungskraft und ggf.
    Perspektive für die Zukunft.
</p>
`;

//Interpretationsaufsatz zu einem Gedicht
var structureCode5 = `
<h3 class="styledFont">1. Einleitung (ca. 5–8 Sätze)</h3>
<p>
    <label class="styledFont">Textgrundinformationen:</label> Autor:in, Titel, Erscheinungsjahr,
    literarische Epoche und Textsorte (z.B. lyrisches Gedicht, Sonett). <br>
    <label class="styledFont">Thematische Hinführung:</label> Knappe Einordnung des Hauptthemas sowie
    Nennung zentraler Motive oder Konflikte. <br>
    <label class="styledFont">Deutungshypothese:</label> Kernaussage in einem Satz formulieren
    (verdeutlicht/thematisiert/kritisiert), die als roter Faden dient. <br>
    <label class="styledFont">Vorgehensweise:</label> Kurze Ankündigung des analytischen Vorgehens.
</p>

<h3 class="styledFont">2. Hauptteil (Aspektorientierte Analyse)</h3>
<p>
    <label class="styledFont">A. Inhalt und Sprechsituation:</label> <br>
    – Paraphrase des Inhalts. <br>
    – Analyse des lyrischen Ichs (Verfassung) und der Sprechsituation (Selbstgespräch, Reflexion). <br>
    – Adressat:in und Gedankenführung (Entwicklungslinien, Wendepunkte/Volta). <br>

    <label class="styledFont">B. Formale Analyse:</label> <br>
    – Äußere Form (Strophen-/Versanzahl) und Reimschema (z.B. Kreuzreim, Paarreim). <br>
    – Metrum (Jambus, Trochäus etc.), Kadenzen (männlich/weiblich) und Enjambements. <br>
    – Besondere Gliederung (Parallelismus, Steigerung). <br>

    <label class="styledFont">C. Sprachlich-stilistische Analyse (2-A-W-Prinzip):</label> <br>
    – Wortwahl: Wortfelder, Schlüsselwörter, Konnotationen. <br>
    – Bildsprache: Metaphern, Symbole, Personifikationen, rhetorische Mittel (Anaphern, Klimax). <br>
    – Klanggestaltung: Alliteration, Onomatopoesie, Euphonie/Kakophonie. <br>
    – Syntax: Hypotaxe vs. Parataxe, Satzlängen, Inversionen.
</p>

<h3 class="styledFont">3. Synthese und vertiefte Interpretation</h3>
<p>
    <label class="styledFont">Zusammenführung:</label> Wie stützen Form und Sprache die inhaltliche
    Aussage? <br>
    <label class="styledFont">Interpretation:</label> Kernbotschaft, Intention und Überprüfung der
    Deutungshypothese. <br>
    <label class="styledFont">Kontext:</label> Epochenmerkmale (z.B. Romantik, Expressionismus) sowie
    historischer oder biografischer Bezug.
</p>

<h3 class="styledFont">4. Schluss (ca. 5–8 Sätze)</h3>
<p>
    <label class="styledFont">Zusammenfassung:</label> Pointierte Wiederholung der zentralen Ergebnisse
    und Bezug zur Eingangshypothese. <br>
    <label class="styledFont">Bewertung:</label> Literarhistorische Bedeutung, Aktualität und
    ästhetische Wirkung. <br>
    <label class="styledFont">Abschluss:</label> Abrundender Satz oder Ausblick.
</p>
`;



// Alle Epochen als Array von Objekten
const epochen = [
    {
        start: 750,
        ende: 1500,
        text: `<h3 class="styledFont">1. Mittelalter (ca. 750 – 1500)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Religion, Ritterliteratur, anonymes Schreiben, Minnegesang.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Heldenepik (z.B. Nibelungenlied), Minnesang, Legenden.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Treue, Ehre, Religion, Liebe.<br>
    <label class="styledFont"><strong>Autoren/Beispiele:</strong></label> Walther von der Vogelweide, Nibelungenlied (anonym).<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Entstehung der ersten Universitäten, Kreuzzüge, Feudalismus, Pestepidemien, Verbreitung des Christentums in Europa.
</p>`
    },
    {
        start: 1400,
        ende: 1600,
        text: `<h3 class="styledFont">2. Renaissance / Humanismus (ca. 1400 – 1600)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Mensch im Mittelpunkt, Vernunft, Wiederbelebung antiker Literatur.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Lyrik, Drama, Essays.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Bildung, Tugend, Humanität.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Erasmus von Rotterdam, Hans Sachs.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Entdeckungsreisen, Buchdruck (Gutenberg), Reformation, Aufstieg von Handel und Städten, Beginn der wissenschaftlichen Revolution.
</p>`
    },
    {
        start: 1600,
        ende: 1720,
        text: `<h3 class="styledFont">3. Barock (ca. 1600 – 1720)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Religiös geprägt, Vanitas-Motiv (Vergänglichkeit), Kontraste Leben/Tod.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Lyrik, Emblemata, Dramen.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Vergänglichkeit, Pflicht, Gott.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Andreas Gryphius, Martin Opitz.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Dreißigjähriger Krieg, Absolutismus, höfische Kultur, Prachtentfaltung in Kunst und Architektur.
</p>`
    },
    {
        start: 1720,
        ende: 1800,
        text: `<h3 class="styledFont">4. Aufklärung (ca. 1720 – 1800)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Vernunft, Rationalität, Kritik an Kirche und Absolutismus.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Fabeln, Romane, Dramen, Essays.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Erziehung, Moral, Toleranz.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Gotthold Ephraim Lessing, Immanuel Kant.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Absolutismus, Aufstieg der Naturwissenschaften, Amerikanische Revolution, französische Vorläuferideen der Menschenrechte.
</p>`
    },
    {
        start: 1765,
        ende: 1785,
        text: `<h3 class="styledFont">5. Sturm und Drang (ca. 1765 – 1785)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Gefühl statt Vernunft, Rebellion gegen Normen, Individuum im Fokus.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Briefromane, Dramen, Lyrik.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Freiheit, Leidenschaft, Natur.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Johann Wolfgang von Goethe, Friedrich Schiller.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Aufklärungsideale treffen auf soziale Spannungen, Vorboten der Französischen Revolution, Kritik an starren Gesellschaftsstrukturen.
</p>`
    },
    {
        start: 1786,
        ende: 1832,
        text: `<h3 class="styledFont">6. Klassik (Weimarer Klassik, ca. 1786 – 1832)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Harmonie von Gefühl und Vernunft, Idealisierung von Schönheit und Humanität.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Drama, Lyrik, Epik.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Menschliche Vollkommenheit, Ästhetik, Bildung.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Goethe, Schiller.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Napoleonische Kriege, Weimar als kulturelles Zentrum, Beginn der deutschen Nationalbewegung, politische Restauration nach Revolutionen.
</p>`
    },
    {
        start: 1795,
        ende: 1835,
        text: `<h3 class="styledFont">7. Romantik (ca. 1795 – 1835)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Fantasie, Traum, Unbewusstes, Betonung der Natur.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Lyrik, Märchen, Novellen.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Sehnsucht, Liebe, Natur, Unendlichkeit.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Novalis, E.T.A. Hoffmann.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Industrialisierung beginnt, politische Restauration in Europa, Aufstieg des Bürgertums, Rückzug ins Private und ins Fantastische.
</p>`
    },
    {
        start: 1815,
        ende: 1848,
        text: `<h3 class="styledFont">8. Biedermeier / Vormärz (ca. 1815 – 1848)</h3>
<p>
    <label class="styledFont"><strong>Biedermeier:</strong></label> Rückzug ins Private, Häuslichkeit. Autoren: Adalbert Stifter.<br>
    <label class="styledFont"><strong>Vormärz:</strong></label> Politisch, gesellschaftskritisch. Autoren: Heinrich Heine.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Wiener Kongress, Restauration, Vormärzbewegung, Revolution 1848 in Deutschland, soziale Spannungen und Liberalismus.
</p>`
    },
    {
        start: 1848,
        ende: 1890,
        text: `<h3 class="styledFont">9. Realismus (ca. 1848 – 1890)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Wirklichkeit getreu darstellen, sachlich, detailliert.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Roman, Novelle, Drama.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Alltag, Bürgertum, gesellschaftliche Ordnung.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Theodor Fontane, Gustav Freytag.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Industrielle Revolution, Revolution 1848, Deutsches Kaiserreich 1871, soziale Reformen.
</p>`
    },
    {
        start: 1880,
        ende: 1900,
        text: `<h3 class="styledFont">10. Naturalismus (ca. 1880 – 1900)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Extreme Wirklichkeitsdarstellung, Determinismus.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Drama, Kurzprosa.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Elend, soziale Missstände.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Gerhart Hauptmann, Arno Holz.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Verstädterung, Soziale Frage (Armut, Arbeiterbewegung), wissenschaftlicher Fortschritt, soziale Reformen.
</p>`
    },
    {
        start: 1890,
        ende: 1925,
        text: `<h3 class="styledFont">11. Moderne / Expressionismus (ca. 1890 – 1925)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Subjektives Erleben, Emotionen, Kritik an Industrialisierung und Krieg.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Lyrik, Drama, Kurzgeschichte.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Großstadt, Krieg, Ich-Zerfall, Zukunftsängste.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Georg Heym, Gottfried Benn, Franz Kafka.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Erster Weltkrieg, Industrialisierung, Urbanisierung, politische Spannungen, Sozialreformen.
</p>`
    },
    {
        start: 1920,
        ende: 1933,
        text: `<h3 class="styledFont">12. Neue Sachlichkeit (ca. 1920 – 1933)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Realistische, nüchterne Darstellung, Gesellschaftskritik.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Roman, Kurzgeschichte, Drama.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Alltag, Wirtschaft, politische Realität.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Erich Kästner, Bertolt Brecht.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Weimarer Republik, Weltwirtschaftskrise, politische Instabilität, Aufstieg des Nationalsozialismus.
</p>`
    },
    {
        start: 1933,
        ende: 1945,
        text: `<h3 class="styledFont">13. Exilliteratur & Literatur der NS-Zeit (1933 – 1945)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Flucht vor Nationalsozialismus, Auseinandersetzung mit Diktatur und Krieg.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Essays, Romane, Lyrik.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Thomas Mann, Stefan Zweig, Anna Seghers.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Nationalsozialismus, Zweiter Weltkrieg, Holocaust, Unterdrückung und Zensur, Exil vieler Intellektueller.
</p>`
    },
    {
        start: 1945,
        ende: 1959,
        text: `<h3 class="styledFont">14. Trümmerliteratur / Nachkriegsliteratur (1945 – 1950er)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Verarbeitung von Krieg, Zerstörung, Schuld, klare Sprache.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Kurzgeschichten, Romane, Dramen.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Heinrich Böll, Wolfgang Borchert.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Ende des Zweiten Weltkriegs, Wiederaufbau, Beginn der Bundesrepublik Deutschland, Auseinandersetzung mit NS-Vergangenheit.
</p>`
    },
    {
        start: 1960,
        ende: 2100, // offen
        text: `<h3 class="styledFont">15. Gegenwartsliteratur / Postmoderne (ab 1960)</h3>
<p>
    <label class="styledFont"><strong>Merkmale:</strong></label> Vielfalt, Intertextualität, Fragmentierung, experimentelle Formen.<br>
    <label class="styledFont"><strong>Formen:</strong></label> Romane, Essays, Lyrik, Drama.<br>
    <label class="styledFont"><strong>Themen:</strong></label> Identität, Medien, Globalisierung, Gesellschaft.<br>
    <label class="styledFont"><strong>Autoren:</strong></label> Christa Wolf, Günter Grass, Herta Müller.<br>
    <label class="styledFont"><strong>Wichtige Ereignisse:</strong></label> Kalter Krieg, Globalisierung, Digitalisierung, gesellschaftliche Umbrüche, Mauerfall, europäische Integration.
</p>`
    }
];


function start(){
    document.getElementById("Aufbau").innerHTML = structureCode1;
}

function setTopicContent(Headline, Structure){
    document.getElementById("Aufbau").innerHTML = Structure;
    document.getElementById("TopicHeadline").innerHTML = Headline;
}


function showEpoche() {
    const year = parseInt(document.getElementById("yearInput").value);
    const resultDiv = document.getElementById("epochenErgebnis");
    resultDiv.innerHTML = ""; // Vorherige Ergebnisse löschen

    // Prüfen, ob die Eingabe eine Zahl ist
    if (isNaN(year)) {
        resultDiv.innerHTML = "Bitte ein gültiges Jahr eingeben.";
        return;
    }

    // Filter alle Epochen, die das Jahr enthalten
    const gefundene = epochen.filter(epoche => year >= epoche.start && year <= epoche.ende);

    // Ergebnis anzeigen
    if (gefundene.length === 0) {
        resultDiv.innerHTML = "Keine Epoche für dieses Jahr gefunden.";
    } else {
        gefundene.forEach(epoche => {
            resultDiv.innerHTML += epoche.text;
        });
    }
}