let users = [
    {
    firstName: 'Joe',
    lastName:`Orin`,
    car: 'Porsche',
    dog:'Shitzu',
    },
    {
    firstName: 'Lori',
    lastName:"Foster",
    car: 'Porsche',
    dog:'German Shepherd'
    },
    {
    firstName: 'Guy',
    lastName:'Peters',
    car: 'Chevrolet',
    dog:'Poodle'
    },
    {
    firstName: 'Lori',
    lastName:'Foster',
    car: 'Toyota',
    dog:'German Shepard'
    }
    ];
    
 let mapped = users.map(x => console.log(x.firstName, x.lastName) )
    
    const newUsers = [
    { name: 'pan', likes: 'lasagne' },
    { name: 'lena', likes: 'wine' },
    { name: 'jill', likes: 'tacos' },
    { name: 'conner', likes: 'turkey' }
    ];
   
 
 let newMapped = newUsers.map(x => {
  
  let obj = {
   [x.name]: x.likes,
  age: x.name.length * 10
  }
  return obj
 })

console.log(newMapped)

     
  
