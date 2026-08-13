import { useState } from "react";
const Filter2 = () => {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "https://react.dev/images/docs/scientists/MK3eW3A",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "https://react.dev/images/docs/scientists/mynHUSa",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "https://react.dev/images/docs/scientists/bE7W1ji",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "https://react.dev/images/docs/scientists/IOjWm71",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "https://react.dev/images/docs/scientists/lrWQx8l",
    },
  ];

  const [student, setstudent] = useState(people);
  function filterProfession() {
    const filteredProfession = student.filter((humans) => humans.profession==="chemist");
    setstudent(filteredProfession);
  }

  return (
    <div>
      <button onClick={filterProfession}>profession</button>
      {student.map((student) => (
        <div key={student.id}>
          <h1>{student.name}</h1>
        </div>
      ))}
      {/* 
      {variable.map((parametr1,parametr2)=>(
        //content
      ))} */}
    </div>
  );
};
export default Filter2;
