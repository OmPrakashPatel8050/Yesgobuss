const bookings = [
  {
      Id: 1,
      Name: "Omprakash",
      Age:"22",
      PickupLocation: "Bengaluru",
      DropoffLocation: "Hubbli",
      Time: "2024-06-10T06:30:00"
  }
];

// To Get all Bookings
const getCabBookings = (req, res) => {
  res.json(bookings);
};

// To create a new booking
const CreateCabBookings = (req, res) => {
  const newBooking = {
      Id: bookings.length + 1,
      Name: req.body.Name,
      Age: req.body.Age,
      PickupLocation: req.body.PickupLocation,
      DropoffLocation: req.body.DropoffLocation,
      Time: req.body.Time
  };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
};

module.exports = {getCabBookings,CreateCabBookings}