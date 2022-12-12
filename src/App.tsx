import {Greet} from "./components/Greet"
import {GreetOptional} from "./components/GreetOptional"
import {Person} from "./components/Person"
import {PersonList} from "./components/PersonList"
import {Status} from "./components/Status"
import './App.css';
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  }
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Peach",
    },
  ]


  return (
    <div className="App">
      <h1>Welcome</h1>
      <button>New Question</button>
      <Greet name="Vincent" new_messages={10} is_loggedIn={true} />
      <GreetOptional name="Vincent" is_loggedIn={true} />
      <Person name={personName}></Person>
      <PersonList names = {nameList}/>
      <Status status="loading"/>
      <Heading>Whatever written here gets passed down</Heading>
      <Oscar>
        <Heading>child of child passed down</Heading>
      </Oscar>
    </div>
  );
}

export default App;
