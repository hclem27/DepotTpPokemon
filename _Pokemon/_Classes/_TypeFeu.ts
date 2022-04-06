import Type from "../_Interfaces/_Type";

export default abstract class TypeFeu implements Type{
    degats: number;

    constructor(degats: number){
        this.degats = degats
    }

    calculerDegatsContreFeu(degats: number): number {
        return degats / 2;
    }

    calculerDegatsContreEau(degats: number): number {
        return degats * 2;
    }

    calcuclerDegatsContrePlante(degats: number): number {
        return degats / 2;
    }
}