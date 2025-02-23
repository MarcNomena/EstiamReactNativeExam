export interface Localisation {
    title: string,
    description: string,
    coordonne: Coordonne
}
export interface Coordonne {
    latitude: number,
    longitude: number,
}

export interface LocalisationArray{
  localisation: Localisation[]
}