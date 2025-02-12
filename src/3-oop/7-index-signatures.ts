class SeatAssignment {
  // S1, S2, S3, ...
  // John, Jane, Mosh, ...
  [seatNumber: string]: string;
}

const seat = new SeatAssignment();
seat.S1 = "John"; // === seat["S1"] = "John";
seat.S2 = "Jane";
seat.S3 = "Mosh";

console.log(seat);
