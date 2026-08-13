const Filter1 = () => {
  const students = [
    { name: "Hemant", age: 22, id: 1 },
    { name: "Rahul", age: 17, id: 2 },
    { name: "Ankit", age: 25, id: 3 },
    { name: "Ravi", age: 16, id: 4 },
  ];
  const numbers = [10, 15, 20, 25, 30, 35];
  const users = [
    { name: "Rahul", id: 5 },
    { name: "Hemant", id: 6 },
    { name: "Ravi", id: 7 },
    { name: "Ankit", id: 8 },
  ];
  const restaurants = [
    {
      info: {
        name: "KFC",
        rating: 4.2,
      },
    },
    {
      info: {
        name: "Pizza Hut",
        rating: 4.5,
        cuisines: ["Burger", "Fast Food", "Pizza"],
      },
    },
    {
      info: {
        name: "Burger King",
        rating: 4.7,
        cuisines: ["Pizza", "Italian"],
      },
    },
    {
      info: {
        name: "KFC2",
        rating: 4.2,
        cuisines: ["KFC", "Italian"],
      },
    },
  ];

  const person = students.filter((student) => student.age > 18);
  console.log(person);

  const num = numbers.filter((num2) => num2 % 10 === 0);
  console.log(num);
  const mens = users.filter((user) => user.name.startsWith("R"));
  console.log(mens);
  // const res1 = restaurants.filter((resturant) => resturant.info.rating > 4.2);
  // console.log(res1);
  const res1 = restaurants.filter((restaurant) => restaurant.info.cuisines);
  // const cuisines = res1.map(
  //   (item) => item.info.cuisines.includes("Pizza") && item.info.name,
  // );
  console.log(res1);
  return (
    <div>
      {person.map((item) => (
        <h1 key={item.id}>
          {item.name}-{item.age}
        </h1>
      ))}
      <div>
        {num.map((item) => (
          <h1 key={item}>{item}</h1>
        ))}
      </div>
      {mens.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
      {/* {res1.map((item) => (
        <h1 key={item.info.name}>
          {item.info.name}-{item.info.cuisines}
        </h1>
      ))} */}
      {res1.map(
        (item) =>
          item.info.cuisines.includes("Pizza") && (
            <h1 key={item.info.name}>
              {item.info.name}-{item.info.cuisines.join(" , ")}
            </h1>
          ),
      )}
    </div>
  );
};
export default Filter1;
