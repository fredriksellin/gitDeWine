import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { generateSlots, isSlotAvailable, saveBooking, Booking, exportICS } from "@/lib/booking";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
// small uid generator to avoid adding uuid dependency
function uid() {
  return Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
}
import { toast } from "@/components/ui/sonner";

type Props = {
  trigger?: React.ReactNode;
};

export default function BookingModal({ trigger }: Props) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [slot, setSlot] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const slots = React.useMemo(() => generateSlots(), []);

  const handleConfirm = () => {
    if (!date || !slot) return;
    const yyyy = date.getFullYear().toString().padStart(4, "0");
    const mm = (date.getMonth() + 1).toString().padStart(2, "0");
    const dd = date.getDate().toString().padStart(2, "0");
    const dateStr = `${yyyy}-${mm}-${dd}`;

    if (!isSlotAvailable(dateStr, slot)) {
      toast("Den valda tiden är inte tillgänglig.");
      return;
    }

    const [h, m] = slot.split(":");
    const start = slot;
    const endH = String(Number(h) + 1).padStart(2, "0");
    const end = `${endH}:${m}`;

    const booking: Booking = {
      id: uid(),
      name: name || undefined,
      email: email || undefined,
      date: dateStr,
      startTime: start,
      endTime: end,
      createdAt: new Date().toISOString(),
    };

    saveBooking(booking);
    toast.success("Bokningen är bekräftad!");
    setOpen(false);

    // trigger ICS download
    const ics = exportICS(booking);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `loungen-booking-${booking.date}-${booking.startTime}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const selectedDateStr = date
    ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
    : null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : <DialogTrigger asChild><Button>Boka Loungen</Button></DialogTrigger>}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Boka Loungen</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div>
            <p className="mb-2 font-medium">Välj datum</p>
            <DayPicker mode="single" selected={date} onSelect={setDate} disabled={{ before: new Date() }} />
          </div>

          <div>
            <p className="mb-2 font-medium">Välj tid</p>
            <div className="flex flex-wrap gap-2">
              {slots.map((s) => {
                const disabled = !selectedDateStr || !isSlotAvailable(selectedDateStr, s);
                return (
                  <Button key={s} variant={slot === s ? "default" : "outline"} onClick={() => setSlot(s)} disabled={disabled}>
                    {s}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm">Namn (valfritt)</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="input" />
            <label className="text-sm">E-post (valfritt)</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
          </div>
        </div>

        <DialogFooter>
          <div className="flex gap-2 w-full justify-end">
            <Button variant="ghost" onClick={() => setOpen(false)}>Avbryt</Button>
            <Button onClick={handleConfirm} disabled={!date || !slot}>Bekräfta bokning</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
