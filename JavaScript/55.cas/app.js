// Funkcija za prikupljanje podataka na serveru
// const getUsers = () =>{
//     return fetch('https://jsonplaceholder.typicode.com/users/')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch((error)=>console.log(error.message))
//     .finally(()=>setTimeout(getUsers, 1000 * 60 *5)) // 5 minuta
// }

// getUsers()

// Asihrona funkcija za prikupljanje podataka sa servera

// const getUsers = async (id) => {
//   const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const users = await data.json();
// };
// getUsers(5);

// I nacin

const getUsers2 = async (id) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const users = await data.json();
};
users.forEach((el) => {
  console.log({
    id: element.id,
    name: element.name,
    username: element.username,
    email: element.email.toLowerCase(),
    phone: element.phone,
    adress: {
      street: element.street,
      suite: element.suite,
    },
  });
});
getUsers2(2);

// II nacin
