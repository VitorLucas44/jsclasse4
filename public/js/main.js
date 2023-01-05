class Lieu {
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = [];
    }
}
const Lieu = new Lieu('Molengeek')
const Lieu = new Lieu('Snack')
const Lieu = new Lieu('Maison')

class personnages{
    constructor(nom,prenom,argent){
    this.nom = nom;
    this.prenom = prenom;
    this.argent = argent;
    }
    seDeplacer(bus, lieuDepart, lieuArrivee) {
        if (this.argent >= 2.5) {
        this.argent -= 2.5;
        bus.caisse += 2.5;
        bus.embarquer(this, lieuDepart, lieuArrivee);
        } else {
        console.log("Vous n'avez pas assez d'argent pour prendre le bus.");
        }
    }
}

const personnages = new personnages('Vitor','Lucas', 10)