import { useRef } from "react";
import Button from "./components/Button";
// import Container from "./components/Container";
import Input from "./components/Input";
import Form, { type FormHandle } from "./components/Form";

function App() {
  // const input = useRef<HTMLInputElement>(null);

  const customForm = useRef<FormHandle>(null);
  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string, age: number };
    customForm.current?.clear();
    console.log(extractedData);
  }


  return <main>
    {/* <Container as="button" type="button">Click me</Container>
    <Input id="name" label="Your name" type="text" ref={input} /> */}
    {/* <Input id="age" label="Your age" type="number" /> */}
    {/* <p><Button onClick={() => alert('Button clicked')}>Click me</Button></p>
    <p><Button href="https://example.com">Click me</Button></p> */}

    <Form onSave={handleSave} ref={customForm}>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
      <p>
        <Button type="submit">Submit</Button>
      </p>
    </Form>

  </main>;
}

export default App;
