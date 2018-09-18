class FormatterHelper {
  static formatDate(date: Date): string {
    const day = `0${date.getDate()}`.substr(-2);
    const month = `0${date.getMonth() + 1}`.substr(-2);

    return `${day}/${month}/${date.getFullYear()}`;
  }
}
