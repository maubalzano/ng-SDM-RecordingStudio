import { File } from "./file";

export interface Prod {
    file: File;
    year: number;
    img: string;
    links: ProdLink[]
}
export interface ProdLink {
    url: string;
    site: string
}