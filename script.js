window.addEventListener('scroll', function () {
    const bg = document.querySelector('.full-picture-bg');
    const scrolled = window.scrollY;
    // Move the background up at half the scroll speed for parallax
    bg.style.transform = `translateY(${scrolled * 0.5}px)`;
});

const galleryImages = [
    { src: "bilder/lena_siri_syst.jpg", caption: "Lena og Siri på stand med Systematicus" },
    { src: "bilder/simen_lars_gis.jpeg", caption: "Simen og Lars presenterer GIS-løsningen" },
    { src: "bilder/ingri_fadderstyret2.jpeg", caption: "Ingri på stand med resten av Fadderstyret" }
];

let currentImage = 0;

function renderGalleryDots() {
    const dotsContainer = document.getElementById('gallery-dots');
    dotsContainer.innerHTML = '';
    galleryImages.forEach((img, idx) => {
        const dot = document.createElement('button');
        dot.className = 'gallery-dot' + (idx === currentImage ? ' active' : '');
        dot.setAttribute('aria-label', `Bilde ${idx + 1}`);
        dot.addEventListener('click', () => {
            currentImage = idx;
            updateGallery();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateGallery() {
    const img = document.getElementById('gallery-image');
    const caption = document.getElementById('gallery-caption');
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = galleryImages[currentImage].src;
        caption.textContent = galleryImages[currentImage].caption;
        img.style.opacity = 1;
        renderGalleryDots();
    }, 150);
}

document.querySelector('.gallery-arrow.left').addEventListener('click', () => {
    currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    updateGallery();
});

document.querySelector('.gallery-arrow.right').addEventListener('click', () => {
    currentImage = (currentImage + 1) % galleryImages.length;
    updateGallery();
});


// Initialize gallery on page load
updateGallery();


const memberTexts = [
    [
        `Jeg heter Simen Emil Wiig Holmen og er 23 år gammel fra Ålgård.
        Jeg studerer IT og Informasjonssytemer på 3. året ved Universitetet i Agder.
        <br><br>
        Rollen min i gruppa er prosjektleder, på grunn av at jeg har erfaring med gruppeledelse gjennom de tidligere prosjektene våre.
        I tillegg er jeg ansatt som studentmentor og læringsassistent, hvor jeg har hatt et tilleggsemne for gruppeledelse.
        <br><br>
        Mine faglige interesser er full-stack development, hvor jeg har erfaring med både frontend og backend utvikling. Dette har jeg fått gjennom emner
        jeg har valgt på skolen, men også mine hobby-prosjekter på fritiden.`,

        `Verv:<br>
        - Nito Studentene Kristiansand siden 2024<br><br>
        IT Arbeidserfaring:<br>
        - Læringsassistent ved UIA<br>
        - Praktikant hos Gjesdal Idrettslag<br><br>
        Valgemner:<br>
        - TFL129 - Innføringsemne for studentmentorer<br>
        - IS309 - Videregående databaser<br>
        - IS218 - Geografiske Informasjonssytemer, AI og IoT<br>
        - IS211 - Algortimer og Data strukturer<br>
        - IS302 - Praksisprosjekt<br>
        - IS115 - Webprogrammering i PHP`
    ],
    [
        `Jeg heter Siri Johansen Thunestvedt, og er en 23 år gammel jente fra Ræge.
        Jeg går 3. året på IT og informasjonssystemer ved Universitetet i Agder.
        <br><br>
        Som et resultat av varierte kurs, har jeg litt grunnleggende kunnskap om blant annet UX design, programmering, database, og sikkerhet.
        Etter å ha utforsket de ulike fagområdene, har jeg fått en større interesse for UX design.
        Dette området krever kreativitet og faglig forståelse, noe jeg syntes er spennende, og passer meg godt.
        Min rolle i gruppen er derfor UX designer og ansvarlig for den akademiske skrivingen.`,

        `Verv:<br>
        - Velferdsansvarlig i Systematicus 2024<br>
        - Sponsoranvarlig i Systematicus 2025<br><br>
        Valgemner:<br>
        - IS214 - Information Systems Security<br>
        - IS217 - Universell utforming av informasjonssytemer<br>
        - TFL102 - IT og samfunnsendringer<br>
        - ME100 - Samfunnsvitenskapelig metode<br>
        - ORG313 - Gründer Lab and Entrepreneurship Laboratory`
    ],
    [
        `Jeg heter Lena Gjøse og er 22 år gammel fra Klepp. Jeg studerer IT og Informasjonssystemer på 3. året ved Universitet i Agder.
        <br><br>
        Jeg har en særlig interesse for UX design
        og prosjektledelse. Jeg liker å jobbe med hvordan teknologi kan gjøres mer brukervennlig og hvordan gode metoder og prosesser kan bidra til at prosjekter gjennomføres både effektivt og med høy kvalitet. 
        <br><br>
        Gjennom studie har jeg blant annet fått erfaring med teamsamarbeid, ulike utviklingsmetoder og hvordan man kan kartlegge og analysere brukerbehov. Dette har gitt meg en praktisk forståelse av hvordan teori kan anvendes.`,
        `Verv: <br> 
        - Styremedlem i Systematicus 2024
        <br>
        - Næringslivsansvarlig i Systematicus 2025
        <br><br>
        Valgemner:
        <br>
        - IS214 - Information Systems Security
        <br>
        - IS217 - Universell utforming av informasjonssytemer
        <br>
        - TFL102 - IT og samfunnsendringer
        <br>
        - ME100 - Samfunnsvitenskapelig metode
        <br>
        - ORG313 - Gründer Lab and Entrepreneurship Laboratory`
    ],
    [
        `Jeg heter Lars Kydland, er 23 år gammel og kommer fra Varhaug. Jeg studerer IT og Informasjonssystemer på 3. året ved Universitetet i Agder.
        <br><br>
        Min rolle er utvikler, fordi jeg har stor interesse for frontend-utvikling og liker å jobbe med å lage brukervennlige og visuelt attraktive grensesnitt.
        <br><br>
        Jeg har erfaring både fra studierelaterte prosjekter og egne hobbyprosjekter på fritiden, hvor jeg eksperimenterer med ulike teknologier.

        `,
        `IT Arbeidserfaring:
        <br>
        - Praktikant i Vivet
        <br><br>
        Valgemner:
        <br>
        - IS214 - Information Systems Security
        <br>
        - IS218 - Geografiske Informasjonssytemer, AI og IoT
        <br>
        - IS211 - Algortimer og Data strukturer
        <br>
        - IS302 - Praksisprosjekt
        <br>
        - IS115 - Webprogrammering i PHP`
    ],
    [
        `Jeg heter Jens Haakaas, og er utvikler. Jeg er 23 år gammel og kommer fra Trøgstad. 
        <br><br> 
        Jeg er en veldig teknisk person, som har erfaring med forskjellige rammeverk og kodespråk. I de siste to årene har jeg jobbet med mange programmeringsprosjekter både i og utenfor skolen.
        <br><br>
        Utenfor skolen har jeg også grundet Nettlio, hvor jeg helper bedrifter med å lage KI-agenter for å automatisere arbeidsoppgaver.`,
        `IT Arbeidserfaring:
        <br>
        - Praktikant i Vivet
        <br>
        - Gründer av Nettlio
        <br><br>
        Valgemner:
        <br>
        - Blockchain*
        <br>
        - IS302 - Praksisprosjekt
        <br>
        - IS115 - Webprogrammering i PHP
                <br>
        * Tatt på utveksling i Praha`
    ],
    [
        `Jeg heter Ingri Drabløs Bolstad og studerer IT og informasjonssytemer på
        3 året ved Universitetet i Agder. Er 21 år gammel og kommer fra Ålesund.
        <br> <br>
        Jeg er en av flere utviklere i dette teamet, og har god kunnskap med å jobbe i team.
        Gjennom gruppearbeid og mitt verv som fadderansvarlig i fadderstyret ved UiA,
        har jeg styrket mine kommunikasjonsevner og lært viktigheten av å være et støttende
        teammedlem.
        <br> <br>
        Studiene har gitt meg muligheten til å utforske ulike teknologiske områder, med
        en særlig interesse for back-end utvikling. Som person er jeg strukturet, løsningsorientert
        og ønsker å skape et trygt abeidsmiljø for alle. `,

        `Verv:
        <br>
        - Fadderansvarlig i Fadderstyre 2025
        <br><br>
        IT Arbeidserfaring:
        <br>
        - Praktikant i Phonero
        <br><br>
        Valgemner:
        <br>
        - IS214 - Information Systems Security
        <br>
        - IS217 - Universell utforming av informasjonssytemer
        <br>
        - IS211 - Algortimer og Data strukturer
        <br>
        - IS302 - Praksisprosjekt hos Phonero
        <br>
        - IS115 - Webprogrammering i PHP`
    ]
];

let currentMemberText = [0, 0, 0, 0, 0, 0]; // Array for each member

function renderMemberTextDots(memberIdx) {
    const dotsContainer = document.getElementById(`member-text-dots-${memberIdx}`);
    dotsContainer.innerHTML = '';
    memberTexts[memberIdx].forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = 'member-text-dot' + (idx === currentMemberText[memberIdx] ? ' active' : '');
        dot.setAttribute('aria-label', `Tekst ${idx + 1}`);
        dot.addEventListener('click', () => {
            currentMemberText[memberIdx] = idx;
            updateMemberText(memberIdx);
        });
        dotsContainer.appendChild(dot);
    });
}

function updateMemberText(memberIdx) {
    const textSpan = document.getElementById(`member-text-${memberIdx}`);
    textSpan.style.opacity = 0;
    setTimeout(() => {
        textSpan.innerHTML = memberTexts[memberIdx][currentMemberText[memberIdx]];
        textSpan.style.opacity = 1;
        renderMemberTextDots(memberIdx);
    }, 100);
}

// For each member with a switcher, set up listeners
[0, 1, 2, 3, 4, 5].forEach(memberIdx => { // Add more indexes for more members
    document.querySelector(`#member-text-dots-${memberIdx}`).parentElement.querySelector('.member-text-arrow.left')
        .addEventListener('click', () => {
            currentMemberText[memberIdx] = (currentMemberText[memberIdx] - 1 + memberTexts[memberIdx].length) % memberTexts[memberIdx].length;
            updateMemberText(memberIdx);
        });

    document.querySelector(`#member-text-dots-${memberIdx}`).parentElement.querySelector('.member-text-arrow.right')
        .addEventListener('click', () => {
            currentMemberText[memberIdx] = (currentMemberText[memberIdx] + 1) % memberTexts[memberIdx].length;
            updateMemberText(memberIdx);
        });

    // Initialize on page load
    updateMemberText(memberIdx);
});

// Initialize on page load
updateMemberText(0);