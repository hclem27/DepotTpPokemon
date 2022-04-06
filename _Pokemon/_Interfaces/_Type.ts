export default interface Type {
    degats: number;

    calculerDegatsContreFeu(degats:number): number;
    calculerDegatsContreEau(degats:number): number;
    calcuclerDegatsContrePlante(degats:number): number;
}