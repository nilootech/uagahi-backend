export class Utils {
  static getExpireDate(milliSeconds: number): Date {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + milliSeconds;
    now.setTime(expireTime);
    return now;
  }

  static isProduction(): boolean {
    return process.env.NODE_ENV === 'production';
  }
}
