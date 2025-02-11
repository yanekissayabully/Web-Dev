let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567

// current date
let date1 = new Date();

// the hour in your current time zone
alert( date1.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
alert( date1.getUTCHours() );