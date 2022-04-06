export default interface Pokemon {
    nom: string;
    pv: number;
    pvMax: number;
    type: string;
    captif: boolean;
    horsjeu: boolean;

    attaquer(pokemon: Pokemon): void
    soigner(pv: number): void
    subirAttaque(pv: number):void
    renommer(nouveaunom: string):void
}