import "./App.css";
import { supabase } from "./config/supabaseClient";

function App() {
  console.log(supabase);
  return <div className=" bg-red-400 text-3xl">Hello</div>;
}

export default App;
