import { Region } from './region';
import { Comuna } from './comuna';

export class Provincia {
    idProvincia: number;
    nombreProvincia: string;
    regionIdRegion: number;
    regionIdRegionNavigation: Region;
    comuna: Comuna[];
}