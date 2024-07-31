import Collection from "./components/collection/Collection";
import About from "./components/info/About";
import Commission from "./components/info/Commission";
import Introduction from "./components/info/Introduction";
import Payment from "./components/info/Payment";
import Instagram from "./components/Instagram";
import { Container } from "./components/ui/container";

function App() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Container className="">
          <Introduction />
        </Container>
        <Container className="bg-black/10">
          <About />
        </Container>
        <Container className="">
          <Commission />
        </Container>
        <Container className="bg-black/10">
          <Collection />
        </Container>
        <Container className="py-24">
          <Instagram />
        </Container>
        <Container className="bg-black/10 mb-32">
          <Payment />
        </Container>
        {/*         <Container className="items-center py-12 px-4 md:px-12 2xl:px-24">
          <Collection />
        </Container>
        <Container className="items-center py-12 px-4 md:px-12 2xl:px-24">
          <Instagram />
        </Container> */}
      </div>
    </>
  );
}

export default App;
