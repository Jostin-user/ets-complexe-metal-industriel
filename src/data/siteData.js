/**
 * Source unique des informations du site.
 * Pour changer un texte, un numéro ou un service, on modifie ce fichier uniquement.
 *
 * Règle : une valeur vide ("") ou un tableau vide ([]) n'est pas affiché sur le site.
 * Les informations non confirmées par l'entreprise restent donc vides.
 */
export const siteData = {
    company: {
        name: "ETS Complexe Metal & Industriel",
        slogan: "Expertise industrielle, fabrication mécanique & formation professionnelle",
        city: "Bafoussam",
        region: "Région de l'Ouest, Cameroun",
        description: "Fabrication mécanique, rebobinage, maintenance, installation industrielle et formation professionnelle à Bafoussam.",
    },

    contact: {
        phone: "+237 6 93 42 02 62",
        phone2: "+237 6 82 15 09 41",
        whatsapp: "237693420262",
        email: "",
        address: "Bafoussam, situé juste avant le Commissariat du 4e arrondissement",
        hours: "Tous les jours 8h -17h30",
    },

    hero: {
        title: "Fabrication mécanique, rebobinage et maintenance industrielle à Bafoussam",
        text: "ETS Complexe Metal & Industriel fabrique vos équipements sur mesure, remet vos moteurs et machines en état, réalise vos installations et forme aux métiers techniques.",
        image: "/images/ets_complexe_metal.jpg",
        imageAlt: "ets complexe metal & industriel",
    },

    // Zone d'intervention
    serviceArea: ["Bafoussam et autres villes du cameroun"],

    services: [{
            slug: "fabrication-mecanique",
            image: "/images/service-fabrication.jpg",
            imageAlt: "Soudeur réalisant une fabrication métallique en atelier",
            examples: ["Mélangeurs & Broyeurs", "Machines à écraser", "Portes et structures métalliques", "Équipements personnalisés"], // à confirmer avec l'entreprise
            title: "Fabrication mécanique",
            short: "Machines, équipements et structures métalliques sur mesure.",
            description: "Nous fabriquons des équipements et des structures métalliques sur mesure, selon votre besoin et vos dimensions.",
            page: {
                tagline: "Une machine ou une structure introuvable ? Nous la fabriquons sur mesure, selon votre besoin.",
                ctaTitle: "Un équipement à fabriquer ?",
                introTitle: "La fabrication sur mesure",
                intro: [
                    "Quand l'équipement dont vous avez besoin n'existe pas ou ne convient pas, nous le fabriquons selon votre besoin et vos dimensions.",
                    "Nous partons de votre demande, vous proposons une solution avec un devis, puis réalisons et contrôlons l'équipement avant la livraison.",
                ],
                problemsTitle: "Dans quelle situation êtes-vous ?",
                problems: [
                    "Vous avez besoin d'une machine spécifique",
                    "L'équipement n'existe pas sur le marché",
                    "Vous voulez une structure métallique sur mesure",
                    "Un équipement existant doit être adapté",
                ],
                prestations: [
                    "Fabrication d'équipements et de machines sur mesure",
                    "Fabrication de structures métalliques",
                    "Fabrication de portes métalliques",
                    "Adaptation d'un équipement existant", // à confirmer avec l'entreprise
                ],
                examplesTitle: "Exemples de fabrications",
                concreteExamples: ["Mélangeurs", "Machines à écraser", "Portes métalliques", "Structures métalliques", "Équipements personnalisés"],
                process: ["Besoin et dimensions", "Plan et devis", "Découpe et soudure", "Assemblage et contrôle", "Livraison"], // à confirmer avec l'entreprise
                faqTitle: "Avant de demander un devis",
                faq: [{
                    q: "Que dois-je préparer pour demander un devis ?",
                    a: "Une description de l'équipement souhaité : son usage, ses dimensions approximatives et, si possible, un croquis ou une photo d'un modèle existant.", // à confirmer avec l'entreprise
                }, ],
            },
        },
        {
            slug: "rebobinage",
            image: "/images/service-rebobinage.jpg",
            imageAlt: "Moteur électrique dont le bobinage est en cours de remise en état",
            examples: ["Diagnostic", "Réparation et rebobinage", "Remise en état", "Tests"], // à confirmer avec l'entreprise
            title: "Rebobinage",
            short: "Diagnostic, réparation et rebobinage de moteurs électriques.",
            description: "Votre moteur ne démarre plus, chauffe ou perd de la puissance ? Nous le diagnostiquons, le réparons et le remettons en état, avec essais avant remise en service.",
            // Contenu de la page détaillée. Les services sans « page » affichent une version simplifiée.
            page: {
                tagline: "Moteur électrique en panne ? Nous le diagnostiquons, le rebobinons et le testons avant de vous le rendre.",
                ctaTitle: "Un moteur à diagnostiquer ou à rebobiner ?",
                introTitle: "En quoi consiste le rebobinage ?",
                intro: [
                    "Le rebobinage consiste à remplacer le bobinage endommagé d'un moteur électrique pour lui rendre son fonctionnement normal.",
                    "Nous commençons toujours par un diagnostic : il permet de savoir si le rebobinage est la bonne solution avant d'engager les travaux.",
                ],
                problemsTitle: "Dans quelle situation êtes-vous ?",
                problems: [
                    "Le moteur ne démarre plus",
                    "Le moteur chauffe anormalement",
                    "Le bobinage est endommagé",
                    "Le moteur a perdu de la puissance",
                    "Une panne électrique est survenue",
                ],
                beforeAfter: {
                    title: "Avant / Après : un moteur remis en état",
                    description: "Le diagnostic permet d'identifier la cause de la panne, puis le moteur est remis en état et vérifié avant la remise en service.",
                    beforeImage: "/images/service-rebobinage.png",
                    afterImage: "/images/service-rebobinage.png",
                    beforeLabel: "Avant",
                    afterLabel: "Après",
                    beforeAlt: "Moteur électrique avant intervention",
                    afterAlt: "Moteur électrique après rebobinage",
                },
                prestations: [
                    "Diagnostic du moteur",
                    "Démontage",
                    "Rebobinage",
                    "Remise en état",
                    "Essais avant remise en service",
                ],
                examplesTitle: "Exemples de moteurs",
                concreteExamples: ["Moteurs de machines d'atelier", "Moteurs de pompes", "Moteurs de ventilateurs"], // à confirmer avec l'entreprise
                process: ["Diagnostic", "Démontage", "Rebobinage", "Tests", "Remise en service"],
                faqTitle: "Questions sur le rebobinage",
                faq: [{
                        q: "Peut-on toujours rebobiner un moteur ?",
                        a: "Pas toujours : c'est le diagnostic qui le dit. Si le rebobinage n'est pas adapté, nous vous l'indiquons avant de commencer.", // à confirmer avec l'entreprise
                    },
                    {
                        q: "Que dois-je envoyer pour avoir un premier avis ?",
                        a: "Une photo du moteur et de sa plaque signalétique, par WhatsApp, suffit pour commencer.", // à confirmer avec l'entreprise
                    },
                ],
            },
        },
        {
            slug: "maintenance-industrielle",
            image: "/images/service-maintenance.jpg",
            imageAlt: "Technicien effectuant une maintenance sur du matériel industriel",
            examples: ["Diagnostic", "Entretien", "Réparation"], // à confirmer avec l'entreprise
            title: "Maintenance industrielle",
            short: "Entretien et réparation de vos équipements.",
            description: "Nous diagnostiquons, entretenons et réparons vos équipements pour qu'ils restent en état de fonctionner.",
            page: {
                tagline: "Un équipement en panne ou qui s'use ? Nous le diagnostiquons, l'entretenons et le réparons.",
                ctaTitle: "Un équipement à entretenir ou à réparer ?",
                introTitle: "Maintenance de vos équipements",
                intro: [
                    "Nous intervenons sur vos équipements pour trouver l'origine d'un problème, le réparer et assurer leur entretien.",
                    "Chaque intervention commence par un diagnostic, pour savoir précisément ce qui doit être fait.",
                ],
                problemsTitle: "Dans quelle situation êtes-vous ?",
                problems: [
                    "Un équipement est en panne",
                    "Une machine fonctionne mal ou s'use",
                    "Un équipement a besoin d'un entretien",
                    "Une pièce doit être réparée ou remplacée",
                ], // à confirmer avec l'entreprise
                prestations: ["Diagnostic", "Entretien", "Réparation"], // ajouter maintenance préventive / corrective seulement si elle est réellement proposée
            },
        },
        {
            slug: "installation-domotique",
            image: "/images/installation.jpg",
            imageAlt: "Technicien intervenant sur un moteur électrique en atelier",
            examples: ["Installations électriques", "Équipements industriels", "Solutions domotiques"], // à confirmer avec l'entreprise
            title: "Installation industrielle & domotique",
            short: "Installations électriques, équipements industriels et domotique.",
            description: "Installations électriques, équipements industriels et solutions domotiques, pour les particuliers comme pour les professionnels.",
            page: {
                tagline: "Installations électriques, équipements industriels et domotique, pour les particuliers comme pour les professionnels.",
                ctaTitle: "Une installation à réaliser ?",
                introTitle: "Des installations adaptées à votre usage",
                intro: [
                    "Nous réalisons des installations électriques, installons des équipements industriels et proposons des solutions domotiques.",
                    "Que vous soyez un particulier ou un professionnel, nous adaptons l'installation à votre usage et à vos équipements.",
                ],
                problemsTitle: "Dans quelle situation êtes-vous ?",
                problems: [
                    "Un atelier ou un local doit être équipé",
                    "Une machine ou un équipement doit être installé",
                    "Une installation électrique doit être créée ou modifiée",
                    "Vous souhaitez une solution domotique",
                ], // à confirmer avec l'entreprise
                prestations: ["Installations électriques", "Installation d'équipements industriels", "Solutions domotiques"],
                examplesTitle: "Exemples d'installations",
                concreteExamples: ["Installation électrique d'un atelier", "Pose d'un équipement industriel", "Solution domotique pour une maison ou un local"], // à confirmer avec l'entreprise
                process: ["Étude du besoin", "Installation", "Essais", "Mise en service"], // à confirmer avec l'entreprise
            },
        },
    ],

    // Section « Vous avez besoin de... » : chaque besoin renvoie vers une page
    needs: [
        { label: "Fabriquer une machine ou une structure", target: "Fabrication mécanique", to: "/services/fabrication-mecanique" },
        { label: "Réparer un moteur électrique", target: "Rebobinage", to: "/services/rebobinage" },
        { label: "Remettre un équipement en état", target: "Maintenance industrielle", to: "/services/maintenance-industrielle" },
        { label: "Réaliser une installation", target: "Installation industrielle & domotique", to: "/services/installation-domotique" },
        { label: "Apprendre un métier technique", target: "Formation professionnelle", to: "/formation" },
    ],

    // Arguments concrets : à relire avec l'entreprise, ne garder que ce qui est vrai
    whyUs: [{
            title: "Plusieurs compétences réunies",
            text: "Fabrication mécanique, rebobinage, maintenance et installations : vous pouvez confier différents besoins techniques à un même interlocuteur.",
        },
        {
            title: "Des solutions adaptées à vos besoins",
            text: "Chaque demande est étudiée selon l'utilisation prévue, les dimensions et l'équipement concerné, qu'il s'agisse d'une fabrication sur mesure ou d'une remise en état.",
        },
        {
            title: "Un travail vérifié avant livraison",
            text: "Les équipements fabriqués ou réparés font l'objet de contrôles et d'essais adaptés avant leur livraison ou leur remise en service.",
        },
        {
            title: "Un contact direct à Bafoussam",
            text: "Situés à Bafoussam, juste avant le Commissariat du 4e arrondissement, nous sommes joignables par téléphone et WhatsApp pour présenter votre besoin, envoyer des photos et demander un devis.",
        },
    ],

    // Méthode de travail en quatre étapes (accueil et page Services)
    method: [{
            title: "Analyse du besoin",
            text: "Nous écoutons votre demande et examinons l'équipement ou le problème, par description, photo ou visite.",
        },
        {
            title: "Étude et proposition",
            text: "Nous vous proposons une solution et un devis clair avant de commencer.",
        },
        {
            title: "Réalisation",
            text: "Fabrication, réparation ou installation, réalisée avec soin par nos équipes.",
        },
        {
            title: "Contrôle et livraison",
            text: "Essais et vérification, puis livraison ou remise en service.",
        },
    ],

    // Section « À propos » de l'accueil (pas de page séparée). À valider avec l'entreprise.
    about: {
        title: "À propos de nous",
        paragraphs: [
            "ETS Complexe Metal & Industriel est une entreprise de Bafoussam spécialisée dans la fabrication mécanique, le rebobinage, la maintenance industrielle, l'installation industrielle et la domotique, ainsi que la formation professionnelle.",
            "Notre mission : apporter aux entreprises et aux particuliers de la région des solutions techniques fiables, du besoin à la réalisation. Nous commençons toujours par comprendre votre situation avant de proposer une solution.",
        ],
        values: [
            { title: "Sérieux", text: "Nous tenons nos engagements et expliquons ce que nous faisons." },
            { title: "Précision", text: "Un travail soigné, vérifié avant la livraison." },
            { title: "Proximité", text: "Une équipe locale, facile à joindre." },
        ],
        image: "/images/about-placeholder.svg",
        imageAlt: "Illustration de l'activité industrielle d'ETS Complexe Metal & Industriel",
    },

    // FAQ générale (page Services). Ne garder que les réponses que l'entreprise peut tenir.
    faq: [{
            q: "Quels types de machines pouvez-vous fabriquer ?",
            a: "Des équipements et des structures sur mesure : mélangeurs, machines à écraser, portes et structures métalliques. Décrivez votre besoin et nous vous disons ce qui est possible.",
        },
        {
            q: "Quels moteurs pouvez-vous rebobiner ?",
            a: "Envoyez-nous une photo du moteur et de sa plaque signalétique : nous vous confirmons s'il peut être rebobiné.", // à confirmer avec l'entreprise
        },
        {
            q: "Intervenez-vous à Bafoussam ?",
            a: "Oui, nous sommes basés à Bafoussam et nous intervenons dans la région de l'Ouest.",
        },
        {
            q: "Comment demander un devis ?",
            a: "Depuis la page Contact, par WhatsApp ou par téléphone. Le devis est gratuit.",
        },
        {
            q: "Est-il possible d'envoyer une photo d'une machine ou d'un problème ?",
            a: "Oui, par WhatsApp. Une photo nous aide à comprendre la situation avant de vous répondre.", // à confirmer avec l'entreprise
        },
        {
            q: "Quels sont les délais ?",
            a: "Ils dépendent du travail demandé. Nous les précisons dans le devis, avant le début des travaux.", // à confirmer avec l'entreprise
        },
    ],

    // Carte « Formation » affichée avec les services sur l'accueil
    trainingSummary: {
        title: "Formation professionnelle",
        short: "Des formations techniques et pratiques de 2 à 3 ans selon le niveau, accessibles aux débutants en fabrication mécanique. Inscriptions ouvertes à tout moment.",
        to: "/formation",
        image: "/images/formation.jpg",
        imageAlt: "Ingénieur présentant un projet technique à des stagiaires",
        examples: ["Travaux pratiques", "Encadrement professionnel"], // à confirmer avec l'entreprise
    },

    trainings: [{
            slug: "fabrication-mecanique",
            title: "Fabrication mécanique",
            description: "Formation professionnelle à la fabrication mécanique et à la réalisation d'équipements et de pièces techniques en atelier.",
            duration: "4 à 6 ans selon le niveau de connaissance",
            level: "Aucune connaissance de base requise",
            content: [
                "Apprentissage des travaux de fabrication mécanique",
                "Réalisation de pièces et d'équipements techniques",
                "Travaux pratiques sur le matériel et les machines de l'atelier",
                "Montage, assemblage et contrôle des réalisations",
            ],
        },
        {
            slug: "installation-industrielle",
            title: "Installation industrielle",
            description: "Formation dans les domaines liés à l'électricité et aux installations industrielles, de l'installation aux équipements électriques.",
            duration: "2 à 3 ans selon le niveau de connaissance",
            level: "Le parcours est adapté au niveau de départ",
            content: [
                "Bases et pratique de l'électricité industrielle",
                "Installation et câblage des équipements électriques",
                "Lecture de plans et d'installations électriques",
                "Essais, dépannage et maintenance des installations",
            ],
        },
    ],

    // Page Formation professionnelle. Textes à valider avec l'entreprise.
    trainingPage: {
        intro: [
            "ETS Complexe Metal & Industriel propose des formations en fabrication mécanique et en installation industrielle. Leur durée indicative est de 2 à 3 ans, selon le niveau de connaissance et la progression de chaque apprenant.",
            "La formation en fabrication mécanique est accessible sans connaissance de base préalable. Les apprentissages associent explications techniques et travaux pratiques sur du matériel d'atelier.",
            "Les inscriptions sont possibles à tout moment : contactez-nous pour échanger sur votre projet et connaître les modalités d'accueil.",
        ],
        why: [
            { title: "Apprendre par la pratique", text: "Les apprentissages s'appuient sur des exercices et des travaux pratiques en atelier, avec du matériel réel." },
            { title: "Accessible aux débutants", text: "Aucune connaissance de base n'est exigée pour commencer la formation en fabrication mécanique." },
            { title: "Un encadrement métier", text: "Les apprenants sont accompagnés dans la découverte des techniques et la réalisation des travaux." },
            { title: "Un parcours adapté", text: "La durée indicative de 2 à 3 ans varie selon le niveau de connaissance et la progression de l'apprenant." },
        ], // à confirmer avec l'entreprise
        stepsTitle: "Comment se déroule la formation",
        steps: [
            { title: "Inscription", text: "Vous nous contactez et nous vous orientons vers la formation adaptée." },
            { title: "Présentation du parcours", text: "Nous présentons le contenu de la formation et échangeons sur votre niveau de départ et vos objectifs." },
            { title: "Apprentissage", text: "Vous découvrez progressivement les notions et les gestes techniques nécessaires au métier." },
            { title: "Travaux pratiques", text: "Mise en pratique sur de vrais équipements." },
            { title: "Évaluation et accompagnement", text: "Un point sur vos acquis et des conseils pour la suite." },
        ], // à confirmer avec l'entreprise
        audience: [
            "Les jeunes",
            "Les personnes qui souhaitent apprendre un métier",
            "Les professionnels qui souhaitent se perfectionner",
            "Ceux qui veulent développer une compétence technique",
        ],
        faq: [{
                q: "Quelles formations sont disponibles ?",
                a: "La liste figure sur cette page. Pour un besoin précis, contactez-nous par téléphone ou WhatsApp.",
            },
            {
                q: "Faut-il déjà avoir des connaissances en fabrication mécanique ?",
                a: "Non. Aucune connaissance de base n'est requise pour commencer la formation en fabrication mécanique. Le parcours débute avec les notions essentielles.",
            },
            {
                q: "Combien de temps dure une formation ?",
                a: "La formation dure généralement entre 2 et 3 ans. La durée exacte dépend du niveau de connaissance au départ et de la progression de l'apprenant.",
            },
            {
                q: "Peut-on s'inscrire à tout moment ?",
                a: "Oui. La participation est ouverte à tout moment. Contactez-nous par téléphone ou WhatsApp pour connaître les modalités d'inscription.",
            },
        ],
    },

    // Catégories de la page Réalisations (seules celles qui ont au moins un projet visible sont proposées)
    projectCategories: ["Fabrication mécanique", "Rebobinage", "Maintenance", "Installation", "Domotique"],

    // Ils disparaissent du site quand settings.showPlaceholderContent vaut false.
    projects: [{
            slug: "melangeur-industriel",
            serviceSlug: "fabrication-mecanique",
            placeholder: false,
            title: "Mélangeur industriel sur mesure",
            category: "Fabrication mécanique",
            description: "Conception et fabrication d'un mélangeur dimensionné selon le volume de production et le produit à traiter.",
            image: "/images/melangeur.jpg",
            imageAlt: "Mélangeur industriel fabriqué sur mesure",
            // photos: [{ label: "Avant", src: "/images/...", alt: "..." }, { label: "Après", ... }], // optionnel
            need: "Le client recherchait un mélangeur correspondant à son volume de production et à son produit, sans trouver de modèle adapté sur le marché local.",
            work: "Réalisation de la cuve, de l'arbre et du système d'entraînement, avec les opérations de découpe, de soudure et d'assemblage.",
            result: "Un mélangeur réalisé sur mesure, livré, installé et testé avec le client.",
        },
        {
            slug: "machine-ecrasement-sur-mesure",
            serviceSlug: "fabrication-mecanique",
            placeholder: false,
            title: "Machine à écraser sur mesure",
            category: "Fabrication mécanique",
            description: "Réalisation d'une machine à écraser intégrant des trémies, un mécanisme de travail et une motorisation.",
            image: "/images/machine1.jpg",
            imageAlt: "Machine à écraser sur mesure avec trémies et motorisation",
            need: "Le client avait besoin d'une machine conçue pour son processus de production et le traitement des matériaux concernés.",
            work: "Fabrication des trémies, assemblage de la structure métallique, montage du mécanisme et intégration du moteur.",
            result: "Une machine assemblée et équipée de sa motorisation, prête pour les vérifications et la mise en service.",
        },
        {
            slug: "rebobinage-moteur-triphase",
            serviceSlug: "rebobinage",
            placeholder: false,
            title: "Rebobinage d'un moteur triphasé",
            category: "Rebobinage",
            description: "Intervention sur un moteur triphasé en panne : diagnostic, rebobinage et essais de fonctionnement.",
            image: "/images/rebobinage_apres.jpg",
            //photos: [{ label: "Avant", src: "/images/rebobinage_avant.jpg", alt: "moteur avant" }, { label: "Après", src: "/images/rebobinage_apres.jpg", alt: "moteur apres" }],
            imageAlt: "Moteur triphasé après intervention de rebobinage",
            need: "Le moteur triphasé ne démarrait plus et présentait un échauffement à vide.",
            work: "Contrôle du bobinage, démontage du moteur, réalisation du rebobinage et essais de fonctionnement.",
            result: "Le moteur a été remis en service après les essais.",
        },
        {
            slug: "machine-mecanique-sur-chassis",
            serviceSlug: "fabrication-mecanique",
            placeholder: false,
            title: "Machine mécanique sur châssis",
            category: "Fabrication mécanique",
            description: "Fabrication d'un équipement mécanique monté sur un châssis métallique, avec moteur, poulies et courroie.",
            image: "/images/machine 2.jpg",
            imageAlt: "Machine mécanique verte sur châssis avec moteur, poulies et courroie",
            need: "Le client souhaitait un équipement mécanique motorisé reposant sur une structure stable et adaptée à son utilisation.",
            work: "Fabrication du châssis par découpe et soudure des profilés, puis montage du mécanisme, des poulies et du moteur.",
            result: "Un ensemble mécanique motorisé assemblé sur un châssis adapté à son utilisation.",
        },
        {
            slug: "tremie-metallique-sur-mesure",
            serviceSlug: "fabrication-mecanique",
            placeholder: false,
            title: "Trémie métallique sur mesure",
            category: "Fabrication mécanique",
            description: "Fabrication d'une trémie inclinée en tôle destinée à alimenter un équipement industriel.",
            image: "/images/machine 3.jpg",
            imageAlt: "Trémie métallique inclinée verte fabriquée sur mesure",
            need: "Le client avait besoin d'une trémie pour recevoir les matériaux et les guider vers son équipement.",
            work: "Découpe et façonnage de la tôle, soudure des différents panneaux et fabrication du support incliné.",
            result: "Une trémie métallique réalisée sur mesure et installée sur l'équipement concerné.",
        },
        {
            slug: "installation-electrique-atelier",
            serviceSlug: "installation-domotique",
            placeholder: false,
            title: "Installation électrique d'un atelier",
            category: "Installation",
            description: "Mise en place du tableau électrique, des circuits et des dispositifs de protection d'un atelier.",
            image: "/images/service-installation.svg",
            imageAlt: "Illustration d'une installation électrique d'atelier",
            need: "L'atelier nécessitait une installation électrique adaptée aux machines et aux besoins de son activité.",
            work: "Étude du besoin, installation du tableau, réalisation des circuits et mise en place des protections électriques.",
            result: "Une installation vérifiée avant sa mise en service.",
        },
    ],

    // Affichés seulement si settings.showTestimonials est true.
    testimonials: [{
            placeholder: true,
            text: "Exemple de témoignage : un client décrit ici le travail réalisé et ce qu'il en retient.",
            author: "Nom du client",
            role: "Entreprise ou fonction",
        },
        {
            placeholder: true,
            text: "Exemple de témoignage : un deuxième avis, court et précis, sur la qualité du service.",
            author: "Nom du client",
            role: "Entreprise ou fonction",
        },
    ],
    stats: {},

    seo: {
        title: "ETS Complexe Metal & Industriel — Fabrication mécanique, installation industrielle et formation à Bafoussam",
        description: "ETS Complexe Metal & Industriel à Bafoussam : fabrication mécanique, rebobinage, maintenance industrielle, installation et formation professionnelle.",
        siteUrl: "",
        socialImage: "",
    },

    social: {
        facebook: "",
        instagram: "",
        linkedin: "",
        tiktok: "",
    },

    settings: {
        showStats: false,
        showTestimonials: false,
        showProjects: true,
        showPlaceholderContent: true,
        showTrainings: true,
        showSocialLinks: true,
    },
};