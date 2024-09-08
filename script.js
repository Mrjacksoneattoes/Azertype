let body = document.querySelector("body");
let header = document.querySelector("header")
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let radios = document.querySelectorAll('.big input');
let bouton = document.querySelector(".btn");
let response = document.getElementById("reponse");
let affichage = document.getElementById("phrase");
let scoreAffiche = document.getElementById("score");
let partager = document.getElementById("partager");
let card = document.querySelector(".form_container");
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

  let score = 0;
  let randomWord = null;
  let randomPhrase = null;

  document.addEventListener('click', (e) => {

    if (!card.contains(e.target)) {
      card.style.display = "none";
      main.classList.remove("opacite");
      footer.classList.remove("opacite");
      header.classList.remove("opacite");
     


    }
  
  });

  function choix(){
    for (let i =0; i < radios.length; i++){
        let choixradios = radios[i];
        choixradios.addEventListener("click", (e)=>{
            if (e.target.id === "Mots"){
                affichageMot();
                score = 0;
                scoreAffiche.textContent = `Votre score: ${score}/${mots.length}`
            }else if (e.target.id === "Phrases"){
                affichagePhrase();
                score = 0;
                scoreAffiche.textContent = `Votre score: ${score}/${phrases.length}`;

            }
            
            
        })
        
    }

  }

function affichageMot(){
    for (let a = 0; a < mots.length; a++){
        let randomIndex = Math.floor(Math.random()*mots.length);
        randomWord = mots[randomIndex];
        affichage.textContent = randomWord;
        console.log("le mot choisi est "+randomWord);
        return randomWord;

    }
}

function affichagePhrase(){
    for (let n = 0; n < phrases.length; n++){
        let randomIndex = Math.floor(Math.random()*phrases.length);
        randomPhrase = phrases[randomIndex];
        affichage.textContent = randomPhrase;
        console.log("la phrase choisie est "+randomPhrase);
    return randomPhrase;        
    }
}
  
function affichageForm(){
    partager.addEventListener("click", (e)=>{
        e.stopPropagation();
        card.style.display = "flex";
        card.classList.add("dansLeBody");
        card.classList.add("cardOpacity");
        body.appendChild(card);
        main.classList.add("opacite");
        footer.classList.add("opacite");
        header.classList.add("opacite");
       

    })
    
}

function verificationEmail(){
    card.addEventListener("submit", (e)=>{
    let email = document.getElementById("email_field");
    let trim = email.value.trim()
    let regex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9_.-]")
    if(regex.test(trim) === false){
        e.preventDefault()
        console.log('y a r gros');
        email.classList.add('borderError')
    }else if(regex.test(trim) === true){
        email.classList.remove(borderError)
    }
        
        
    })
}
function verificationPassword(){
    card.addEventListener("submit", (e)=>{
        let password = document.getElementById("password_field");
        let trim = password.value.trim()
        let regex = new RegExp(/^.{8,}$/)
        if(regex.test(trim) === false){
            e.preventDefault()
            password.classList.add('borderError');
            console.log('ton mon de passe n est pas valide gros');
        }else if (regex.test(trim) === true){
            password.classList.remove('borderError');
            
        }
    })
}

  function lancerScript(){
    choix();
    bouton.addEventListener("click", (e)=>{
        if (response.value === randomWord){
            score++;
            affichageMot();
            console.log(score);
            scoreAffiche.textContent = `Votre score: ${score}/${mots.length}`;
            response.value = "";
        }
        else if (response.value === randomPhrase){
            score++;
            affichagePhrase();
            console.log(score);
            scoreAffiche.textContent = `Votre score: ${score}/${phrases.length}`;
            response.value = "";
        }else if (response.value !== randomWord){
            score = 0;
            scoreAffiche.textContent = `Votre score: ${score}/${mots.length}`;
            response.value = "";

        }else if(response.value !== randomPhrase){
            score = 0;
            scoreAffiche.textContent = `Votre score: ${score}/${phrases.length}`;
            response.value = "";
        }
        
       
    })
    affichageForm()
     verificationEmail()
     verificationPassword()
  }
  lancerScript()
