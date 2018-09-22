import {BlobDto} from './blobDto';

export class BlobDescriptionDto {
    constructor() {
        this.Blobs = new Array<BlobDto>();
    }
    public Id: number;
    public Blobs: BlobDto[];
}