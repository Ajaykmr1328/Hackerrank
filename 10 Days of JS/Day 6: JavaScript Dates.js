function getDayName(dateString) {
    let dayName;
    let dayNames=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date=new Date(dateString)
        dayName=dayNames[date.getDay()];
    return dayName;
}
