export class JDate {
  private days: number[] = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30]
  private year: number;
  private month: number;
  private day: number;

  private hour: number;
  private minute: number;
  private second: number;

  public constructor(year: number = null, month: number = null, day: number = null, hour: number = null, minute: number = null, second: number = null) {
    this.setYear(year);
    this.setMonth(month);
    this.setDay(day);
    this.setHour(hour);
    this.setMinute(minute);
    this.setSecond(second);
  }
  public setYear(year: number): JDate { this.year = (year > 1200 && year < 1450 ? year : 0); return this; }
  public setMonth(month: number): JDate { this.month = (month >= 1 && month <= 12 ? month : 0); return this; }
  public setDay(day: number): JDate { this.day = (day >= 1 && day <= 31 ? day : 0); return this; }

  public setHour(hour: number): JDate { this.hour = (hour >= 0 && hour < 24 ? hour : 0); return this; }
  public setMinute(minute: number): JDate { this.minute = (minute >= 0 && minute < 59 ? minute : 0); return this; }
  public setSecond(second: number): JDate { this.second = (second > 0 && second < 59 ? second : 0); return this; }

  public getYear(): number { return this.year; }
  public getMonth(): number { return this.month; }
  public getDay(): number { return this.day; }

  public getHour(): number { return this.hour; }
  public getMinute(): number { return this.minute; }
  public getSecond(): number { return this.second; }

  public isLeapYear(): boolean {
    let year = this.toGregorian().getFullYear();
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

  public addDays(days: number): JDate {
    if (days < 0) {
      days *= -1;
      if (days > 365) { this.year -= Math.floor(days / 365); days = Math.floor(days % 365); }
      while (days > this.days[this.month - 1]) {
        days -= this.days[this.month - 1];
        this.month--;
        if (this.month < 1) { this.year--; this.month = 12; }
      }
      this.day -= days;
      if (this.day < 1) { this.month--; this.day = this.days[this.month - 1] + this.day; }
      if (this.month < 1) { this.year--; this.month = 12; }
    }
    else {
      if (days > 365) { this.year += Math.floor(days / 365); days = Math.floor(days % 365); }
      while (days > this.days[this.month - 1]) {
        days -= this.days[this.month - 1];
        this.month++;
        if (this.month > 12) { this.year++; this.month = 1; }
      }
      this.day += days;
      if (this.day > this.days[this.month - 1]) { this.day -= this.days[this.month - 1]; this.month++; }
      if (this.month > 12) { this.year++; this.month = 1; }
    }
    return this;
  }
  public toGregorian(): Date { return JDate.toGregorian(this); }
  public format(format: string = 'yyyy/MM/dd hh:mm:ss'): string { return JDate.format(this, format); }

  private static parse(value: string, fullformat: string, format: string): number {
    let index = fullformat.indexOf(format);
    if (index > -1) return parseInt(value.substring(index, index + format.length))
    return -1;
  }
  public static parseJalali(value: string, format: string = 'yyyy/MM/dd hh:mm:ss'): JDate {
    return new JDate(
      JDate.parse(value, format, 'yyyy'),
      JDate.parse(value, format, 'MM'),
      JDate.parse(value, format, 'dd'),
      JDate.parse(value, format, 'hh'),
      JDate.parse(value, format, 'mm'),
      JDate.parse(value, format, 'ss'),
    );
  }
  public static parseGregorian(value: string, format: string = 'yyyy/MM/dd hh:mm:ss'): Date {
    return new Date(
      JDate.parse(value, format, 'yyyy'),
      JDate.parse(value, format, 'MM') - 1,
      JDate.parse(value, format, 'dd'),
      JDate.parse(value, format, 'hh'),
      JDate.parse(value, format, 'mm'),
      JDate.parse(value, format, 'ss'),
    );
  }
  public static format(date: Date | JDate, format: string = 'yyyy/MM/dd hh:mm:ss'): string {
    let year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0;
    if (date instanceof Date) {
      year = date.getFullYear();
      month = date.getMonth() + 1;
      day = date.getDate();
      hour = date.getHours();
      minute = date.getMinutes();
      second = date.getSeconds();
    } else {
      year = date.getYear();
      month = date.getMonth();
      day = date.getDay();
      hour = date.getHour();
      minute = date.getMinute();
      second = date.getSecond();
    }
    format = format.replace(/yyyy/g, year.toString());
    format = format.replace(/MM/g, (month < 10 ? '0' + month : month).toString());
    format = format.replace(/dd/g, (day < 10 ? '0' + day : day).toString());
    format = format.replace(/hh/g, (hour < 10 ? '0' + hour : hour).toString());
    format = format.replace(/mm/g, (minute < 10 ? '0' + minute : minute).toString());
    format = format.replace(/ss/g, (second < 10 ? '0' + second : second).toString());
    return format;
  }
  public static toGregorian(date: JDate): Date {
    let year = date.getYear();
    let month = date.getMonth();
    let day = date.getDay();

    var tday = month * 100 + day;
    year += (tday <= 1010 ? 621 : 622);
    if (tday <= 111) { month = 3; day += 20; }
    else if (tday <= 112) { month = 4; day -= 11; }
    else if (tday <= 210) { month = 4; day += 20; }
    else if (tday <= 231) { month = 5; day -= 10; }
    else if (tday <= 310) { month = 5; day += 20; }
    else if (tday <= 331) { month = 6; day -= 10; }
    else if (tday <= 409) { month = 6; day += 21; }
    else if (tday <= 431) { month = 7; day -= 9; }
    else if (tday <= 509) { month = 7; day += 22; }
    else if (tday <= 531) { month = 8; day -= 9; }
    else if (tday <= 609) { month = 8; day += 22; }
    else if (tday <= 631) { month = 9; day -= 9; }
    else if (tday <= 708) { month = 9; day += 22; }
    else if (tday <= 730) { month = 10; day -= 8; }
    else if (tday <= 809) { month = 10; day += 22; }
    else if (tday <= 830) { month = 11; day -= 9; }
    else if (tday <= 909) { month = 11; day += 21; }
    else if (tday <= 930) { month = 12; day -= 9; }
    else if (tday <= 1010) { month = 12; day += 21; }
    else if (tday <= 1030) { month = 1; day -= 10; }
    else if (tday <= 1111) { month = 1; day += 20; }
    else if (tday <= 1130) { month = 2; day -= 11; }
    else if (tday <= 1209) { month = 2; day += 19; }
    else if (tday <= 1230) { month = 3; day -= 9; }
    return new Date(year, month - 1, day, date.hour, date.month, date.second);
  }
  public static toJalali(date: Date): JDate {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    var tday = month * 100 + day;
    year -= (tday <= 321 ? 622 : 621);
    if (tday <= 120) { month = 10; day += 10; }
    else if (tday <= 131) { month = 11; day -= 20; }
    else if (tday <= 219) { month = 11; day += 11; }
    else if (tday <= 228) { month = 12; day -= 19; }
    else if (tday <= 320) { month = 12; day += 9; }
    else if (tday <= 331) { month = 1; day -= 20; }
    else if (tday <= 420) { month = 1; day += 11; }
    else if (tday <= 430) { month = 2; day -= 20; }
    else if (tday <= 521) { month = 2; day += 10; }
    else if (tday <= 531) { month = 3; day -= 21; }
    else if (tday <= 621) { month = 3; day += 10; }
    else if (tday <= 630) { month = 4; day -= 21; }
    else if (tday <= 722) { month = 4; day += 9; }
    else if (tday <= 730) { month = 5; day -= 22; }
    else if (tday <= 822) { month = 5; day += 9; }
    else if (tday <= 831) { month = 6; day -= 22; }
    else if (tday <= 922) { month = 6; day += 9; }
    else if (tday <= 930) { month = 7; day -= 22; }
    else if (tday <= 1022) { month = 7; day += 8; }
    else if (tday <= 1031) { month = 8; day -= 22; }
    else if (tday <= 1121) { month = 8; day += 9; }
    else if (tday <= 1130) { month = 9; day -= 21; }
    else if (tday <= 1221) { month = 9; day += 9; }
    else if (tday <= 1231) { month = 10; day -= 21; }

    return new JDate(year, month, day, date.getHours(), date.getMinutes(), date.getSeconds());
  }
  public static now(): JDate { return JDate.toJalali(new Date); }
}
