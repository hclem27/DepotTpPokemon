import Pokemon from "../_Interfaces/_Pokemon";
import Dresseur from "../_Classes/_Dresseur";

export default class Pokeball {
    [x: string]: any;

    private contient!: Pokemon
    private proprietaire!: Dresseur

    constructor(contient: Pokemon, proprietaire: Dresseur){
        this.contient = contient
        this.proprietaire = proprietaire
    }
    public getContenu(): Pokemon
    {
        return this.contient;
    }
    
    public affecterPokemon(pokemon: Pokemon){
        this.contient = pokemon;
    }

}

