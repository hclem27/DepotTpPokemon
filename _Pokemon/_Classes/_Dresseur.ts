import Pokeball from "../_Classes/_Pokeball";
import Pokemon from "../_Interfaces/_Pokemon";

export default class Dresseur {
// Variables : 
private nom: string;
public pokeballs!: Pokeball[];
// Constructeur
constructor(nom: string){
    this.nom = nom;
}
// Getter :
get nbPokeballs(){
    return this.pokeballs
} 
// Methodes :

// On ajoute 1 ou plus pokeballs, dans un maximum de 6 !
ajouterPokeballs(pokeball: Pokeball): void{
    if (this.pokeballs.length < 6){
        this.pokeballs.push(pokeball)
    } else {
        console.log("Vous avez déjà 6 pokeball")
    }
}

// Vérifie si le dresseur a encore des pokeballs dispo
private getPokeballs(): boolean{
    if (this.pokeballs.length == 6){
        return false
    } else {
        return true
    }
}
// affecte un pokemon à une pokeball, et précise son maitre au passage
private fillEmptyPokeball(Pokemon: Pokemon, dresseur: Dresseur): void{

}
// Permet de vérifier si un pokemon n'a pas déjà été capturé,
// Appelle 'fillEmptyPokeball'
capturer(cible: Pokemon): void{

}
// Affiche les pokemons contenus dans chage pokeball
public getPokemons(): void{
    console.log(this.pokeballs.forEach(Pokeball => console.log(Pokeball)));    
}

}