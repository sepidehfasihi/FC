import  { NotificationType } from './notificationType';
export class NotificationDto {
    public Id: number;
    /*[Required]*/
    public UserId: number;
    /*[Required]*/
    public Content: string;
    public Icon: string;
    /*[Required]*/
    public RequestQuery: string;
    public CreatedDate: Date;
    public CheckedDate: Date;
    public IsChecked: boolean;
    public Type: string;
}