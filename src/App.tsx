import Collection from "./components/collection/Collection";
import Instagram from "./components/Instagram";
import { Container } from "./components/ui/container";

function App() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Container className="items-center py-12 px-4 md:px-12 2xl:px-24">
          <Collection />
        </Container>
        <Container className="items-center py-12 px-4 md:px-12 2xl:px-24">
          <Instagram />
        </Container>
      </div>
    </>
  );
}

export default App;
