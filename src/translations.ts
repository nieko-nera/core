// Strautomator Core: Translations

import {UserPreferences} from "./users/types"

/**
 * Set of language strings.
 */
interface LanguageString {
    Description: string
    Cool: string
    Cold: string
    Warm: string
    VeryCold: string
    VeryWarm: string
    ExtremelyCold: string
    ExtremelyWarm: string
    Precipitation: string
    Dry: string
    Rain: string
    Drizzle: string
    Snow: string
    Sleet: string
    Heavy: string
    Temp: string
    Humidity: string
    Wind: string
    Windy: string
    Fog: string
    Organizer: string
    Distance: string
    ElevationGain: string
    Speed: string
    Calories: string
}

/**
 * Map of translated strings in multiple languages.
 */
const languageStrings: {[id: string]: LanguageString} = {
    en: {
        Description: "description",
        Cool: "cool",
        Cold: "cold",
        Warm: "warm",
        VeryCold: "very cold",
        VeryWarm: "very warm",
        ExtremelyCold: "extremely cold",
        ExtremelyWarm: "extremely warm",
        Precipitation: "precipitation",
        Dry: "dry",
        Rain: "rain",
        Drizzle: "drizzle",
        Snow: "snow",
        Sleet: "sleet",
        Heavy: "heavy",
        Temp: "temp",
        Humidity: "humidity",
        Wind: "wind",
        Windy: "windy",
        Fog: "fog",
        Organizer: "organizer",
        Distance: "distance",
        ElevationGain: "elevatin gain",
        Speed: "speed",
        Calories: "calories"
    },
    de: {
        Description: "beschreibung",
        Cool: "frisch",
        Warm: "warm",
        Cold: "kalt",
        VeryCold: "sehr kalt",
        VeryWarm: "sehr warm",
        ExtremelyCold: "extrem kalt",
        ExtremelyWarm: "extrem warm",
        Precipitation: "niederschlagsmenge",
        Dry: "trocken",
        Rain: "regen",
        Drizzle: "nieselregen",
        Snow: "schnee",
        Sleet: "schneeregen",
        Heavy: "stark",
        Temp: "temp",
        Humidity: "luftfeuchtigkeit",
        Wind: "wind",
        Windy: "windig",
        Fog: "nebel",
        Organizer: "ausrichter",
        Distance: "distanz",
        ElevationGain: "höhenmeter",
        Speed: "geschwindigkeit",
        Calories: "kalorien"
    },
    es: {
        Description: "descripción",
        Cool: "fresco",
        Warm: "cálido",
        Cold: "frío",
        VeryCold: "muy frío",
        VeryWarm: "muy cálido",
        ExtremelyCold: "extremadamente frío",
        ExtremelyWarm: "extremadamente cálido",
        Precipitation: "precipitación",
        Dry: "seco",
        Rain: "lluvia",
        Drizzle: "llovizna",
        Snow: "nieve",
        Sleet: "aguanieve",
        Heavy: "fuerte",
        Temp: "temp",
        Humidity: "humedad",
        Wind: "viento",
        Windy: "ventoso",
        Fog: "niebla",
        Organizer: "organizador",
        Distance: "distancia",
        ElevationGain: "desnivel",
        Speed: "velocidad",
        Calories: "calorías"
    },
    fr: {
        Description: "description",
        Cool: "frais",
        Warm: "chaud",
        Cold: "froid",
        VeryCold: "très froid",
        VeryWarm: "très chaud",
        ExtremelyCold: "très froid",
        ExtremelyWarm: "extrêmement chaud",
        Precipitation: "extrêmement froid",
        Dry: "sec",
        Rain: "pluie",
        Drizzle: "bruine",
        Snow: "neiger",
        Sleet: "neige fondue",
        Heavy: "forte",
        Temp: "temp",
        Humidity: "humidité",
        Wind: "vent",
        Windy: "venteux",
        Fog: "brouillard",
        Organizer: "organisateur",
        Distance: "distance",
        ElevationGain: "gain d'altitude",
        Speed: "vitesse",
        Calories: "calories"
    },
    pt: {
        Description: "descrição",
        Cool: "fresco",
        Cold: "frio",
        Warm: "quente",
        VeryCold: "muito frio",
        VeryWarm: "muito quente",
        ExtremelyCold: "extremamente frio",
        ExtremelyWarm: "extremamente quente",
        Precipitation: "precipitação",
        Dry: "seco",
        Rain: "chuva",
        Drizzle: "chuvisco",
        Snow: "neve",
        Sleet: "granizo",
        Heavy: "forte",
        Temp: "temp",
        Humidity: "humidade",
        Wind: "vento",
        Windy: "ventando",
        Fog: "neblina",
        Organizer: "organizador",
        Distance: "distância",
        ElevationGain: "elevação",
        Speed: "velocidade",
        Calories: "calorias"
    }
}

/**
 * Returns a translated string.
 * @param id ID of the string to be translated.
 * @param preferences User preferences with language set.
 * @param capitalized Optional, return string capitalized
 */
export const translation = (id: string, preferences: UserPreferences, capitalized?: boolean): string => {
    let language = preferences ? preferences.language : "en"
    if (!language || !languageStrings[language]) {
        language = "en"
    }

    const result = languageStrings[language][id]
    return capitalized ? result.charAt(0).toUpperCase() + result.slice(1) : result
}