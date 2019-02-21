export interface Collegue {
    pseudo: string
    score: number
    photoURL: string
}

export enum Avis {
    AIMER = "AIMER",
    DéTESTER = "DETESTER"
}

export interface Vote {
    collegue: Collegue,
    avis: Avis
}