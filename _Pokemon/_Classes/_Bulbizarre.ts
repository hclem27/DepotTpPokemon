import Pokemon from "../_Interfaces/_Pokemon";
import TypePlante from "./_TypePlante";


export default class Bulbizarre extends TypePlante implements Pokemon { 
    // Déclaration variables
       public nom!: string
       public pvMax: number
       public pv: number
       public type: string
       public captif: boolean
       public horsjeu: boolean

    // Constructeur
    constructor(pvMax: number, degats: number){
        super(degats)
        this.pvMax = pvMax
        this.pv = pvMax
        this.degats = degats
    }
    // Fonction attaquer, qui devra récupérer le type du pokemon cible, et utiliser la méthode appropriée pour calculer les dégâts
    attaquer(pokemon: Pokemon): void{
        pokemon.pv -= this.degats
    }
    // Permet d'éditer les PV du pokemon
    subirAttaque(pv: number): void{
        this.pv -= pv
    }
    // Si le pokemon n'a plus de PV, il ne peut plus attaquer
    checkVivant(): void{
        console.log("Vérifie si le pokémon n'est pas hs")
    }
    // Permet de restaurer les PV d'un pokemon
    soigner(pv: number): void {
        this.pv += pv
    }
    // Permet de donner un surnom au pokemon
    renommer(nom: string): void{
    this.nom = nom    
    }
}