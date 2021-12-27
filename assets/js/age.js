function nameAge() {
  var now = new Date();

  var yearNow = now.getFullYear();
  var monthNow = now.getMonth() + 1;
  var dateNow = now.getDate();

  var yearDob = 1991;
  var monthDob = 11;
  var dateDob = 19;

  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";

  var yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow - monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge
  };

  if (age.years > 1) yearString = " years";
  else yearString = " year";
  if (age.months > 1) monthString = " months";
  else monthString = " month";
  if (age.days > 1) dayString = " days";
  else dayString = " day";

  ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString + ".";

  document.getElementById("age").innerHTML = ageString;

}