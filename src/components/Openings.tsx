import { StoreIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import React from "react";

const options: Intl.DateTimeFormatOptions = { weekday: "long" };
const today = new Intl.DateTimeFormat("de-DE", options)
  .format(new Date())
  .substring(0, 2)
  .toUpperCase();

const openingHours: {
  [key: string]: { name: string; hours: { open: string; close: string }[] };
} = {
  monday: {
    name: "MO",
    hours: [{ open: "09:30", close: "13:00" }],
  },
  tuesday: {
    name: "DI",
    hours: [{ open: "09:30", close: "13:00" }],
  },
  wednesday: {
    name: "MI",
    hours: [
      { open: "09:30", close: "13:00" },
      { open: "15:00", close: "18:00" },
    ],
  },
  thursday: {
    name: "DO",
    hours: [
      { open: "09:30", close: "13:00" },
      { open: "15:00", close: "18:00" },
    ],
  },
  friday: {
    name: "FR",
    hours: [
      { open: "09:30", close: "13:00" },
      { open: "15:00", close: "18:00" },
    ],
  },
  saturday: {
    name: "SA",
    hours: [{ open: "10:00", close: "14:00" }],
  },
  sunday: {
    name: "SO",
    hours: [],
  },
};

const isStoreOpen = () => {
  const now = new Date();
  const day = now.toLocaleString("en-US", { weekday: "long" }).toLowerCase();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const hours = openingHours[day]?.hours;
  if (!hours || hours.length === 0) {
    return false; // Store is closed all day
  }

  return hours.some(({ open, close }) => {
    const [openHour, openMinute] = open.split(":").map(Number);
    const [closeHour, closeMinute] = close.split(":").map(Number);

    const openTime = openHour * 60 + openMinute;
    const closeTime = closeHour * 60 + closeMinute;

    return currentTime >= openTime && currentTime <= closeTime;
  });
};

const StoreStatus = () => {
  const storeOpen = isStoreOpen();
  return (
    <p
      className={`text-sm ${
        storeOpen ? "text-green-700" : "text-red-700"
      } decoration-dashed underline`}
    >
      {storeOpen ? "Geöffnet" : "Geschlossen"}
    </p>
  );
};

const Openings = () => {
  const days = Object.keys(openingHours);

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center w-full gap-8">
      <div className="flex flex-col items-center gap-2">
        <Button variant="rounded" size="rounded">
          <StoreIcon stroke="white" />
        </Button>
        <StoreStatus />
      </div>
      <Card className="p-4 w-fit">
        <Table className="w-fit">
          <TableBody>
            {days
              .filter((day) => day !== "sunday")
              .map((day) => {
                const { name, hours } = openingHours[day];
                return (
                  <TableRow
                    key={day}
                    className={`${today === name && "bg-background-accent"}`}
                  >
                    <TableCell className="text-left">{name}</TableCell>
                    {hours.map(({ open, close }) => (
                      <React.Fragment key={open}>
                        <TableCell>{open}</TableCell>
                        <TableCell className="w-fit p-0">-</TableCell>
                        <TableCell>{close}</TableCell>
                      </React.Fragment>
                    ))}
                    {hours.length === 1 && (
                      <>
                        <TableCell className="w-fit p-0"></TableCell>
                        <TableCell className="w-fit p-0"></TableCell>
                        <TableCell className="w-fit p-0"></TableCell>
                      </>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Openings;
