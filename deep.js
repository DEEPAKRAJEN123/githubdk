function updateclock(){
    const now= new Date();
    let hours=now.getHours();
    const meridiem=hours >= 12?"AM":"PM";
    hours=hours%12||12;
    hours=hours.toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hours}:${minutes}:${seconds} ${meridiem} `;
    document.getElementById("Clock").textContent=timeString;
}

updateclock();
setInterval(updateclock,1000);