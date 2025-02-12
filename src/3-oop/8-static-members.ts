class Ride {
  private static _activeRides = 0;

  start(): void {
    Ride._activeRides++;
  }

  stop(): void {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
