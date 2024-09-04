const mots = [
    "Pomme",
    "Banane",
    "Fraise",
    "Voiture",
    "Maison",
    "Arbre",
    "Fleur",
    "Chien",
    "Chat",
    "Poulet",
    "Oiseau",
    "Poisson",
    "Rivière",
    "Montagne",
    "Ville",
    "Pays",
    "Manger",
    "Boire",
    "Dormir",
    "Rêver",
    "Courir",
    "Sauter",
    "Danser",
    "Chanter",
    "Jouer",
    "Travailler",
    "Étudier",
    "Lire",
    "Écrire",
    "Compter",
    "Calculer",
    "Résoudre",
    "Découvrir",
    "Explorer",
    "Créer",
    "Imaginer",
    "Rêver",
    "Espérer",
    "Aimer",
    "Détester",
    "Choisir",
    "Décider",
    "Faire",
    "Dire",
    "Penser",
    "Sentir",
    "Voir",
    "Entendre",
    "Toucher",
    "Goûter",
    "Odeur"
  ];

  const phrases = [
    "Le soleil brille dans le ciel.",
    "Les oiseaux chantent dans les arbres.",
    "Le chat dort sur le canapé.",
    "La maison est grande et belle.",
    "Le jardin est plein de fleurs.",
    "Les enfants jouent dans la cour.",
    "Le chien est très gentil.",
    "La voiture roule sur la route.",
    "Le train arrive à la gare.",
    "Les gens marchent dans la rue.",
    "Le parc est très agréable.",
    "La plage est idéale pour se détendre.",
    "Le montagnard grimpe la montagne.",
    "Le skieur descend la pente.",
    "Le cycliste roule sur la piste.",
    "Le nageur plonge dans la piscine.",
    "Le footballeur marque un but.",
    "Le basketballeur saute très haut.",
    "Le joueur de tennis frappe la balle.",
    "Le golfeur frappe la balle dans le trou.",
    "Le cavalier monte son cheval.",
    "Le pêcheur attrape un poisson.",
    "Le cuisinier prépare un repas délicieux.",
    "Le serveur apporte les plats.",
    "Le client paie l'addition.",
    "Le commerçant vend ses produits.",
    "Le client achète un produit.",
    "Le touriste visite la ville.",
    "Le guide explique l'histoire de la ville.",
    "Le musée expose des œuvres d'art.",
    "Le concert est très agréable.",
    "Le théâtre présente une pièce.",
    "Le cinéma diffuse un film.",
    "Le livre est très intéressant.",
    "Le journaliste écrit un article.",
    "Le photographe prend une photo.",
    "Le peintre crée une œuvre d'art.",
    "Le sculpteur crée une statue.",
    "Le musicien compose une mélodie.",
    "Le poète écrit un poème.",
    "Le romancier écrit un roman."
  ];

  let score = 0
function inputUser(){
    let promptUser = prompt("choisi entre 'mots' et 'phrases'")
    return promptUser
    
    
}

function generationWords(){
    for (let i = 0; i < mots.length; i++){
        let randomIndex = Math.floor(Math.random()*mots.length);
        let randomWord = mots[randomIndex];
        let user = prompt(`recopiez à la lettre ce mot: ${randomWord}`);
        if(user === randomWord){
            score++
            console.log("votre score est de "+score)
        }else{
            console.log("voici votre score final "+score)
            break
        }
    }
}

function generationPhrases(){
    for (let a = 0; a < phrases.length; a++){
        let randomIndex = Math.floor(Math.random()*phrases.length);
        let randomPhrase = phrases[randomIndex];
        let user = prompt(`recopiez à la lettre cette phrase: ${randomPhrase}`);
        if(user === randomPhrase){
            score++
            console.log("votre score est de "+score)
        }else{
            console.log("voici votre score final "+score)
            break
        }


        
        
    
}
}
function lancerScript(){
    let choix = inputUser()
    if (choix === "mots"){
        generationWords()
    }else if (choix === "phrases"){
        generationPhrases()
    }
}

lancerScript()