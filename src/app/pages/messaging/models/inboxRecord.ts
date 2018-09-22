export class InboxRecord {
    Id: string = '';
    Subject: string = '';
    Content: string = '';
    Email: string = '';
    FirstName: string = '';
    LastName: string = '';
    Date: string;
    Draft: boolean = false;

    constructor(data: {
        id: string,
        subject: string,
        content: string,
        email: string,
        firstName: string,
        lastName: string,
        date: string, draft?: boolean,
    } = null) {
        if (data) {
            this.setData(data);
        }
    }

    setData(record: {
        id: string,
        subject: string,
        content: string,
        email: string,
        firstName: string,
        lastName: string,
        date: string, draft?: boolean,
    }) {
        this.Id = record.id;
        this.Subject = record.subject;
        this.Content = record.content;
        this.Email = record.email;
        this.FirstName = record.firstName;
        this.LastName = record.lastName;
        this.Date = record.date;
        this.Draft = record.draft === true;
    }
}