import { StoreIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";

const options: Intl.DateTimeFormatOptions = { weekday: "long" };
const today = new Intl.DateTimeFormat("de-DE", options)
  .format(new Date())
  .substring(0, 2)
  .toUpperCase();

const Openings = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center w-full gap-8">
      <div className="flex flex-col items-center gap-2">
        <Button variant="rounded" size="rounded">
          <StoreIcon stroke="white" />
        </Button>
        <p className="text-sm text-green-700 decoration-dashed underline">
          Jetzt geöffnet.
        </p>
      </div>
      <Card className="p-4 w-fit">
        <Table className="w-fit">
          <TableBody>
            <TableRow className={`${today === "MO" && "bg-background-accent"}`}>
              <TableCell className="text-left">MO</TableCell>
              <TableCell>9:30</TableCell>
              <TableCell className="w-fit p-0">-</TableCell>
              <TableCell>13</TableCell>
              <TableCell className="w-fit p-0"></TableCell>
              <TableCell className="w-fit p-0"></TableCell>
              <TableCell className="w-fit p-0"></TableCell>
              <TableCell className="w-fit p-0"></TableCell>
            </TableRow>
            <TableRow className={`${today === "DI" && "bg-background-accent"}`}>
              <TableCell className="text-left">DI</TableCell>
              <TableCell>9:30</TableCell>
              <TableCell className="w-fit p-0">-</TableCell>
              <TableCell>13</TableCell>
              <TableCell className="w-fit p-0"></TableCell>
              <TableCell className="w-fit p-0"></TableCell>
              <TableCell className="w-fit p-0"></TableCell>
              <TableCell className="w-fit p-0"></TableCell>
            </TableRow>
            <TableRow className={`${today === "MI" && "bg-background-accent"}`}>
              <TableCell className="text-left">MI</TableCell>
              <TableCell>9:30</TableCell>
              <TableCell className="w-fit p-0">-</TableCell>
              <TableCell>13</TableCell>
              <TableCell className="w-fit p-0">&</TableCell>
              <TableCell>15</TableCell>
              <TableCell className="w-fit p-0">-</TableCell>
              <TableCell>18</TableCell>
            </TableRow>
            <TableRow className={`${today === "DO" && "bg-background-accent"}`}>
              <TableCell className="text-left">DO</TableCell>
              <TableCell>9:30</TableCell>
              <TableCell className="w-fit p-0">-</TableCell>
              <TableCell>13</TableCell>
              <TableCell className="w-fit p-0">&</TableCell>
              <TableCell>15</TableCell>
              <TableCell className="w-fit p-0">-</TableCell>
              <TableCell>18</TableCell>
            </TableRow>
            <TableRow className={`${today === "FR" && "bg-background-accent"}`}>
              <TableCell className="text-left">FR</TableCell>
              <TableCell>9:30</TableCell>
              <TableCell className="w-fit p-0">-</TableCell>
              <TableCell>13</TableCell>
              <TableCell className="w-fit p-0">&</TableCell>
              <TableCell>15</TableCell>
              <TableCell className="w-fit p-0">-</TableCell>
              <TableCell>18</TableCell>
            </TableRow>
            <TableRow className={`${today === "SA" && "bg-background-accent"}`}>
              <TableCell className="text-left">SA</TableCell>
              <TableCell className="text-end">10</TableCell>
              <TableCell className="w-fit p-0">-</TableCell>
              <TableCell>14</TableCell>
              <TableCell className="w-fit p-0"></TableCell>
              <TableCell className="w-fit p-0"></TableCell>
              <TableCell className="w-fit p-0"></TableCell>
              <TableCell className="w-fit p-0"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Openings;
