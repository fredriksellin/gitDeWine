export type Booking = {
  id: string;
  name?: string;
  email?: string;
  date: string; // yyyy-mm-dd
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  guests?: number;
  notes?: string;
  createdAt: string;
};

const STORAGE_KEY = "gitWineX:bookings";

export function generateSlots(open = "10:00", close = "20:00", slotLengthMins = 60, bufferMins = 0) {
  const toMinutes = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };
  const toTime = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };

  const start = toMinutes(open);
  const end = toMinutes(close) - slotLengthMins;
  const slots: string[] = [];
  for (let t = start; t <= end; t += slotLengthMins + bufferMins) {
    slots.push(toTime(t));
  }
  return slots;
}

export function readBookings(): Booking[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Booking[];
  } catch (e) {
    return [];
  }
}

export function saveBooking(b: Booking) {
  const bookings = readBookings();
  bookings.push(b);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

export function bookingsForDate(date: string) {
  return readBookings().filter((b) => b.date === date);
}

export function isSlotAvailable(date: string, startTime: string) {
  const bookings = bookingsForDate(date);
  return !bookings.find((b) => b.startTime === startTime);
}

export function exportICS(booking: Booking) {
  const start = `${booking.date}T${booking.startTime}:00`;
  const end = `${booking.date}T${booking.endTime}:00`;
  const uid = booking.id;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//gitWineX//Booking 1.0//EN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]|\.\d{3}/g, "")}`,
    `DTSTART:${start.replace(/[-:]/g, "")}`,
    `DTEND:${end.replace(/[-:]/g, "")}`,
    `SUMMARY:Loungen bokning${booking.name ? ` - ${booking.name}` : ""}`,
    `DESCRIPTION:${booking.notes ?? ""}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}
