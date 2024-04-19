import Form from "./components/Form";
import Footer from "./ui/Footer";

function App() {
  return (
    <div className=" flex h-screen flex-col justify-between">
      <main className="md:mt-20 ">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
