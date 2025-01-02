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