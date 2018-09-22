import {BlobDescriptionDto} from './blobDescriptionDto';
import {fileUploadBase} from '../../helpers/globals';

export class BlobDto {
    constructor() {
    }
    public Id: number;
    public FileName: string;
    public BlobDescriptionId: number;
    public FileStorageName: string;
    public Extension: string;
    public FileType: string;
    public BlobDescription: BlobDescriptionDto;
    public Link: string;
    public Type: string;

}
