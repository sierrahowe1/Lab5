import {resumeData} from "../data/resumeData";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      {/*Pass the hero of the data to the Hero component*/}
      <Hero data={resumeData.hero}/>
    </div>
  );
}
export default App;