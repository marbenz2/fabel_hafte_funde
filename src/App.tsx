import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Instagram from "./components/Instagram";
import { Container } from "./components/ui/container";

function App() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Container className="items-center py-12 bg-yellow-950/10">
          <Collection />
        </Container>
        <Container className="items-center py-12">
          <Instagram />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
