
### Welcome

Hi.
You can convert,format,parse,add on jalali date.

### Usage
```typescript
let jdate = new JDate(year,month,day,hour,minute,second);
```
### NonStatic Methods
```typescript
setYear(year: number): JDate;
setMonth(month: number): JDate;
setDay(day: number): JDate;
setHour(hour: number): JDate;
setMinute(minute: number): JDate;
setSecond(second: number): JDate;

getYear(): number;
getMonth(): number;
getDay(): number;
getHour(): number;
getMinute(): number;
getSecond(): number;

addDays(days: number): JDate;
toGregorian(): Date;
toString(format: string = 'yyy/MM/dd hh:mm:ss'): string;
```
### Static Methods
```typescript
parseJalali(date:string,inputFormat: string = 'yyyy/MM/dd'): JDate;
parseGregorian(date:string,inputFormat: string = 'yyyy/MM/dd'): Date;
format(date: JDate | Date, format: string = 'yyyy/MM/dd hh:mm:ss'): string;
j2g(date: JDate): Date;
g2j(date: Date): JDate;
now(): JDate;
```
### Examples
```typescript
let today = JDate.now();
today.format('yyyy/MM/dd');
today.addDays(-7).format('yyyy/MM/dd');
```
