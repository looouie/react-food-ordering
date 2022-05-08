export const getDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let dd = tomorrow.getDate();
  let mm = tomorrow.getMonth() + 1;
  const yyyy = tomorrow.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  let earlistDate = yyyy + "-" + mm + "-" + dd;

  return earlistDate;
};

export const getHour = () => {
  const hours = [];
  for (let hour = 9; hour <= 19; hour++) {
    hours.push(hour);
  }

  return hours;
};

export const getMinute = () => {
  const minutes = [];
  for (let minute = 0; minute <= 59; minute += 10) {
    minutes.push(minute);
  }

  return minutes;
};
