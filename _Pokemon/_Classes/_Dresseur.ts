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
public ajouterPokeballs(pokeball: Pokeball): void{
    if (this.pokeballs.length < 6){
        this.pokeballs.push(pokeball)
    } else {
        console.log("Vous avez déjà 6 pokeball")
    }
}

// Vérifie si le dresseur a encore des pokeballs dispo
private getPokeballs(): boolean{
    if (this.pokeballs.length == 6){
        console.log("Vous avez déjà 6 pokeballs")
        return false
    } else {
        console.log("Tu as encore des pokeballs de dispo")
        return true
    }
}

// affecte un pokemon à une pokeball, et précise son maitre au passage
private fillEmptyPokeball(Pokemon: Pokemon, dresseur: Dresseur): void{
    if (this.pokeballs.length == 6){
        console.log("Vous ne pouvez affecter un pokemon à une pokeball, vous avez déjà 6 pokeball")
    } else {
        this.pokeballs.push()

    }

}
// Permet de vérifier si un pokemon n'a pas déjà été capturé,
// Appelle 'fillEmptyPokeball'
public capturer(pokemon: Pokemon){
    if(this.pokeballs.length == 0){
        console.log("Vous n'avez pas de pokeballs")
    }
    for(let i = 0; i < this.pokeballs.length; i++){
        if(this.pokeballs[i].isEmpty()){
            this.pokeballs[i].affecterPokemon(pokemon)
            return
        }
    }
}
// Affiche les pokemons contenus dans chage pokeball
public getPokemons(): void{
    if(this.pokeballs.length > 0){
        console.log("Vos pokemons")
        this.pokeballs.forEach((pokeball,i) => {
            i++
            if(pokeball.getContenu()){
                console.log(`Pokeball ${i} ${pokeball.getContenu().nom}`)
                console.log(pokeball.getContenu())
            }else{
                console.log(`Pokeball ${i} : Vide`)
            }

        })
    }else{
        console.log("Vous n'avez pas de pokémons dans vos pokeballs")
    }    
}

}