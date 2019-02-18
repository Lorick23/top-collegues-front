export interface Collegue {
    pseudo: string
    score: number
    photoURL: string
}

export enum Avis {
    AIMER,
    DéTESTER
}

export interface Vote {
    collegue: Collegue,
    avis: Avis
}