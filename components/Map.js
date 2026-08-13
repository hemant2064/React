const Map = () => {
  const restaurants = [
    {
      info: {
        name: "KFC",
        rating: 4.3,
      },
    },
    {
      info: {
        name: "Pizza Hut",
        rating: 4.1,
      },
    },
    {
      info: {
        name: "Burger King",
        rating: 4.5,
      },
    },
  ];
  //   let resDataa;
  const users = [
    {
      id: 1,
      profile: {
        name: "Hemant",
        address: {
          city: "Chennai",
        },
      },
    },
    {
      id: 2,
      profile: {
        name: "Rahul",
        address: {
          city: "Mumbai",
        },
      },
    },
  ];
  const students = [
    {
      id: 34,
      name: "Hemant",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 44,
      name: "Rahul",
      skills: ["React", "Node", "MongoDB"],
    },
  ];
  const hotel = [
    {
      info: {
        id: "101",
        name: "KFC",
        cuisines: ["Burger", "Fast Food"],
        rating: 4.2,
      },
    },
    {
      info: {
        id: "102",
        name: "Pizza Hut",
        cuisines: ["Pizza", "Italian"],
        rating: 4.5,
      },
    },
  ];
  // function res() {
  //   <div key={item.info.id}>
  //     <h1>
  //       {item.info.name}-{item.info.cuisines[0]}
  //     </h1>
  //   </div>;

  return (
    <div>
      {/* {(resDataa = restaurants.map((item) => item.info.name))}
      {console.log("resDatta", resDataa)} */}
      {restaurants.map((hotel) => (
        <h1 key={hotel.info.rating}>{hotel.info.name}</h1>
      ))}
      {users.map((item) => (
        <div key={item.id}>
          {/* <h2 > {item.profile.name}</h2>
        <h2 >{item.profile.address.city}</h2> */}
          <h1>{item.profile.name + " Live in " + item.profile.address.city}</h1>
        </div>
      ))}
      {students.map((person) => (
        <div key={person.id}>
          {/* <h1>[{person.skills.join(" , ")}]</h1> */}
          {/* <h1>name:{person.name}</h1>
          <h1>totalskills:{person.skills.length}</h1> */}
          <h1>{person.name}</h1>
          {person.skills.map((skill) => (
            <h3 key={skill}>-{skill}</h3>
          ))}
        </div>
      ))}
      {/* {hotel.map((item) => res(item))} */}
    </div>
  );
};
export default Map;
