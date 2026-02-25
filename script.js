const symptome = document.getElementById("symptome")
const btnVerifier = document.getElementById("btn-verifier")
const msgResultat = document.querySelector(".msg-resultat")
const msgInfo = document.querySelector(".msg-info")
const resultat = document.getElementById("resultat")

let lesAllergies = ["arachides","poils d'animaux","noix","laits"]

btnVerifier.addEventListener("click",()=>{
  const  valeurSymptome = symptome.value
    switch(valeurSymptome){
        case "gonflement" :
            msgResultat.classList.remove("cacher")
            msgResultat.classList.add("afficher")
            msgInfo.classList.add("cacher")
            msgInfo.classList.remove("afficher")
            resultat.textContent = lesAllergies[2]
            break;
        case "demangeaisons" :
            msgResultat.classList.remove("cacher")
            msgResultat.classList.add("afficher")
            msgInfo.classList.add("cacher")
            msgInfo.classList.remove("afficher")
            resultat.textContent = lesAllergies[0]
            break;
        case "eternuements" :
            msgResultat.classList.remove("cacher")
            msgResultat.classList.add("afficher")
            msgInfo.classList.add("cacher")
            msgInfo.classList.remove("afficher")
            resultat.textContent = lesAllergies[1]
            break;
        case "vomissements" :
            msgResultat.classList.remove("cacher")
            msgResultat.classList.add("afficher")
            msgInfo.classList.add("cacher")
            msgInfo.classList.remove("afficher")
            resultat.textContent = lesAllergies[3]
            break;
        default:
            msgInfo.classList.remove("cacher")
            msgInfo.classList.add("afficher")
            msgResultat.classList.add("cacher")
            msgResultat.classList.remove("afficher")
           
    }
})