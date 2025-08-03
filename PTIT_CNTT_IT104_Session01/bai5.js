const response = {
  data: {
    id: 1,
    title: "Destructuring in JavaScript",
    author: {
      name: "Dev",
      email: "Dev@gmail.com",
    },
  },
};
const extractData = ({data}) => {
    let {title, author} = data;
    let {name: authorName, email: authorEmail} = author;
    console.log(`title: `, title);
    console.log(`author: `, author);
    console.log(`authorName: `, authorName);
    console.log(`authorEmail: `, authorEmail);
    
}
extractData(response);
