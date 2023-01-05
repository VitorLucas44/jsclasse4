class Lieu {
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = [];
    }
}
const Molengeek = new Lieu('Molengeek')
const Snack = new Lieu('Snack')
const Maison = new Lieu('Maison')

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

const Vitor = new personnages('Vitor','Lucas', 10)

class Bus{
    constructor(peresonnes,caisse){
    this.personnes = [];
    this.caisse = 0;

    }
    embarquer(personne, lieuDepart, lieuArrivee) {
        lieuDepart.personnes = lieuDepart.personnes.filter(
        (p) => p !== personne
        );
        lieuArrivee.personnes.push(personne);
    }
    }
    
    const bus = new Bus();