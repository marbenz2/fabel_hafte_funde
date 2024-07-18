import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Instagram from "./components/Instagram";
import { Container } from "./components/ui/container";

function App() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Container className="items-center py-12 px-4">
          <Collection />
        </Container>
        <Container className="items-center py-12 px-4">
          <Instagram />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
