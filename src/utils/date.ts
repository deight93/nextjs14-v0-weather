export const currentDate = () => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const currentDate = new Date();

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];
    const date = currentDate.getDate();

    // 결과 문자열 생성
    const formattedDate = `${dayOfWeek}, ${date} ${month}`;
    let hour = currentDate.getHours();
    let meridiem = 'AM';

    if (hour >= 12) {
        meridiem = 'PM';
        if (hour > 12) {
        hour -= 12;
        }
    }

    return {
        formattedDate: formattedDate,
        formattedHour: `${hour} ${meridiem}`
      };
  };