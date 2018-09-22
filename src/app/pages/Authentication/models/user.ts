import {Role} from '../models/role';
export class User
{
    constructor()
    {

    }
    userId: number;
    displayName: string;
    serialNumber: string;
    userName: string;
    roles: Role[];
}