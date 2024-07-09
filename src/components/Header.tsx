import { ChevronsDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const Header = () => {
  return (
    <div className="relative flex justify-between h-screen w-full bg-header-pattern bg-cover lg:bg-contain bg-no-repeat bg-center lg:bg-right">
      <div className="px-4 py-4 w-full bg-gradient-to-r from-white from-10% md:from-20% lg:from-40% xl:from-50% 2xl:from-60% to-transparent backdrop-saturate-0">
        <div className="absolute top-1/4 transform -translate-y-1/4 -rotate-12 font-allura">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl xl:text-[12rem] 2xl:text-[15rem]">
            Fabelhafte Funde
          </h1>
          <p className="text-xl sm:text-2xl lg:text-4xl">by Sandra Adamos</p>
        </div>
        <div className="absolute bg-white/60 lg:bg-transparent w-full py-4 pl-12 sm:pl-48 top-2/3 left-1/4 transform -translate-y-2/3 -translate-x-1/4">
          <Table className="w-fit">
            <TableHeader>
              <TableRow>
                <TableHead colSpan={8}>Öffnungszeiten:</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-left">MO</TableCell>
                <TableCell>9:30</TableCell>
                <TableCell className="w-fit p-0">-</TableCell>
                <TableCell>13</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-left">DI</TableCell>
                <TableCell>9:30</TableCell>
                <TableCell className="w-fit p-0">-</TableCell>
                <TableCell>13</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-left">MI</TableCell>
                <TableCell>9:30</TableCell>
                <TableCell className="w-fit p-0">-</TableCell>
                <TableCell>13</TableCell>
                <TableCell className="w-fit p-0">&</TableCell>
                <TableCell>15</TableCell>
                <TableCell className="w-fit p-0">-</TableCell>
                <TableCell>18</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-left">DO</TableCell>
                <TableCell>9:30</TableCell>
                <TableCell className="w-fit p-0">-</TableCell>
                <TableCell>13</TableCell>
                <TableCell className="w-fit p-0">&</TableCell>
                <TableCell>15</TableCell>
                <TableCell className="w-fit p-0">-</TableCell>
                <TableCell>18</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-left">FR</TableCell>
                <TableCell>9:30</TableCell>
                <TableCell className="w-fit p-0">-</TableCell>
                <TableCell>13</TableCell>
                <TableCell className="w-fit p-0">&</TableCell>
                <TableCell>15</TableCell>
                <TableCell className="w-fit p-0">-</TableCell>
                <TableCell>18</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-left">SA</TableCell>
                <TableCell className="text-end">10</TableCell>
                <TableCell className="w-fit p-0">-</TableCell>
                <TableCell>14</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <ChevronsDown
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
          size="2.5rem"
        >
          &copy;
        </ChevronsDown>
      </div>
    </div>
  );
};

export default Header;
