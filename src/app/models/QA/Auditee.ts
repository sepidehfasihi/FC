import {Location} from './Location';

export class Auditee {
  constructor()
  {
    this.LocationIds = [];
    this.Locations = [];
  }
    Id: number;
    Firstname: string;
    Lastname: string;
    FullName: string;
    Mobile: string;
    Email: string;
    LocationIds: number[];
    Locations: Location[];
    LocationsName: string;
    EmployeeNumber: string;


    // constructor(id: number, firstname: string, lastname: string, fullName: string, mobile: string, email: string, locationId: number) {
    //     this.Id = id;
    //     this.Firstname = firstname;
    //     this.FullName = fullName;
    //     this.Lastname = lastname;
    //     this.Mobile = mobile;
    //     this.Email = email;
    //     this.LocationId = locationId;
    // }
}
