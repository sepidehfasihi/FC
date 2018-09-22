import {Location} from './Location';
import {ScopeDetailsDto} from "./scopeDetailsDto";
export class Scope {
  constructor() {
    this.ScopeDetails = new Array<ScopeDetailsDto>();
  }
  public Id: number;
  public Name: string;
  // public LocationId: number;
  // public Location: Location;
  public CreatedById: number;
  public CreatedBy: string;
  public CreatedDate: Date;
  public ScopeDetails: ScopeDetailsDto[];
}
