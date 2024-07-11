import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const options: Intl.DateTimeFormatOptions = { weekday: "long" };
const today = new Intl.DateTimeFormat("de-DE", options)
  .format(new Date())
  .substring(0, 2)
  .toUpperCase();

const Openings = () => {
  return (
    <Table className="w-fit">
      <TableHeader>
        <TableRow>
          <TableHead colSpan={8} className="text-lg">
            Öffnungszeiten:
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className={`${today === "MO" && "bg-black/30"}`}>
          <TableCell className="text-left">MO</TableCell>
          <TableCell>9:30</TableCell>
          <TableCell className="w-fit p-0">-</TableCell>
          <TableCell>13</TableCell>
        </TableRow>
        <TableRow className={`${today === "DI" && "bg-black/10"}`}>
          <TableCell className="text-left">DI</TableCell>
          <TableCell>9:30</TableCell>
          <TableCell className="w-fit p-0">-</TableCell>
          <TableCell>13</TableCell>
        </TableRow>
        <TableRow className={`${today === "MI" && "bg-black/10"}`}>
          <TableCell className="text-left">MI</TableCell>
          <TableCell>9:30</TableCell>
          <TableCell className="w-fit p-0">-</TableCell>
          <TableCell>13</TableCell>
          <TableCell className="w-fit p-0">&</TableCell>
          <TableCell>15</TableCell>
          <TableCell className="w-fit p-0">-</TableCell>
          <TableCell>18</TableCell>
        </TableRow>
        <TableRow className={`${today === "DO" && "bg-black/10"}`}>
          <TableCell className="text-left">DO</TableCell>
          <TableCell>9:30</TableCell>
          <TableCell className="w-fit p-0">-</TableCell>
          <TableCell>13</TableCell>
          <TableCell className="w-fit p-0">&</TableCell>
          <TableCell>15</TableCell>
          <TableCell className="w-fit p-0">-</TableCell>
          <TableCell>18</TableCell>
        </TableRow>
        <TableRow className={`${today === "FR" && "bg-black/10"}`}>
          <TableCell className="text-left">FR</TableCell>
          <TableCell>9:30</TableCell>
          <TableCell className="w-fit p-0">-</TableCell>
          <TableCell>13</TableCell>
          <TableCell className="w-fit p-0">&</TableCell>
          <TableCell>15</TableCell>
          <TableCell className="w-fit p-0">-</TableCell>
          <TableCell>18</TableCell>
        </TableRow>
        <TableRow className={`${today === "SA" && "bg-black/10"}`}>
          <TableCell className="text-left">SA</TableCell>
          <TableCell className="text-end">10</TableCell>
          <TableCell className="w-fit p-0">-</TableCell>
          <TableCell>14</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Openings;
