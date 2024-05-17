import Form from "./components/Form";
import Footer from "./ui/Footer";

function App() {
  return (
    // svh: short viewport height 
    // min: to fit it or higher 
    <div className=" flex min-h-svh flex-col justify-between">
      <main className="md:mt-20 ">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
