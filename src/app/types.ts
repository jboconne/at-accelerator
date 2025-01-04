export interface SearchResponse {
    total:    string; //previously it was number type
    page:     number;
    pages:    number;
    tv_shows: TvShow[];
}

export interface TvShow {
    id:                   number;
    name:                 string;
    permalink:            string;
    start_date:           string;
    end_date:             null | string;
    country:              string;
    network:              string;
    status:               Status;
    image_thumbnail_path: string;
}

export type Status = "Canceled/Edited" | "Ended" | "Running" | "New Series" | "To Be Determined";


// Added these two types for the Favorites service interface
export type TvShowId = TvShow["id"]; // This is better than number/more precise We don't just want a number, but we want a type of TvShowID
export type TvShowIds = Array<TvShowId>; // original: export type TvShowIds = Array<TvShow["id"]>; // This is easier to read. Create plural 