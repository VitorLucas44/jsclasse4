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
        // console.log("Vous n'avez pas assez d'argent");
        }
    }
}

const Vitor = new personnages('Vitor','Lucas', 5)

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

    console.log("8h vous etes a la maison")
    Vitor.seDeplacer(bus, Maison, Molengeek);

    console.log("8h45: Vous etes a Molengeek");

    console.log("12h45: Vous sortez de Molengeek vous prenez le bus pour aller au snack");
    Vitor.seDeplacer(bus, Molengeek, Snack);

    console.log("13h30: Vous sortez du snack et vous rentrez pied à MolenGeek pour digérer");
    Vitor.seDeplacer(bus, Snack, Molengeek);

    console.log("17h10: Vous sortez de Molengeek vous prenez le bus pour rentrer chez vous");
    Vitor.seDeplacer(bus, Molengeek, Maison);

    console.log(`Votre argent: ${Vitor.argent}€`);
    console.log(`L'argent du bus: ${bus.caisse}€`);


