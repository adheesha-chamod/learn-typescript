"use strict";
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        console.log("Adding event to the google calender");
    }
    removeEvent() {
        console.log("Removing event from the google calender");
    }
    sync() {
        console.log("Sync with the google calender");
    }
}
const googleCalendar = new GoogleCalendar("google-calender");
googleCalendar.addEvent();
googleCalendar.removeEvent();
googleCalendar.sync();
