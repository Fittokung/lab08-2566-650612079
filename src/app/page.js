import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />

        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>
      {/* //footer section */}
      <Footer year="2023" fullname="Kittiwat Yasarawan" studentId="650612079" />
    </div>
  );
}
