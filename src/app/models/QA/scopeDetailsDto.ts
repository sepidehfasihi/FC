import {Scope} from "./Scope";
import {Auditee} from "./Auditee";
import {Auditor} from "./Auditor";
import {BlobDescriptionDto} from "./blobDescriptionDto";

export class ScopeDetailsDto {
  public Id: number;
  public Name: string;
  public AuditeeId: number;
  public AuditorId: number;
  public ScopeId: number;
  public Scope: Scope;
  public Auditee: Auditee;
  public Auditor: Auditor;
  public BlobScanId: string;
  public Scan: BlobDescriptionDto;
  public CreatedById: number;
  public CreatedBy: string;
  public CreatedDate: Date;
  public ShortCreatedDate: string;
}
