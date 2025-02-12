// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;

//   abstract removeEvent(): void;
// }

interface Calender {
  name: string;

  addEvent(): void;

  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

class GoogleCalendar implements CloudCalender {
  constructor(public name: string) {}

  addEvent(): void {
    console.log("Adding event to the google calender");
  }

  removeEvent(): void {
    console.log("Removing event from the google calender");
  }

  sync(): void {
    console.log("Sync with the google calender");
  }
}

const googleCalendar = new GoogleCalendar("google-calender");
googleCalendar.addEvent();
googleCalendar.removeEvent();
googleCalendar.sync();
