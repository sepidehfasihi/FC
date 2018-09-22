import {FilterSpecification} from "./filterSpecification";

export class SpecificationOfDataList {
  constructor()
  {
    this.filterSpecifications=[];
  }
  ascendingSortDirection: boolean;
  filterSpecifications: Array<FilterSpecification>;
  pageIndex: number;
  pageSize: number;
  sortSpecification: string;
}
