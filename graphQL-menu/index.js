// npm i --save apollo-server graphql

const {ApolloServer, gql}=require("apollo-server");

 const menu=[
     {
         name:"Fried Chicken",
         price:"15000",
         side:[{name:"pickle"}]
     },
     {
         name:"BBQ",
         price:"12000",
         side:[{name:"soju"}]
     }
 ];
// Scalar Type String
 const typeDefs=gql`
    type Menu{
        name: String
        price: String
        side: [Side] 
    }

    type Side{
        name: String
    }

    type Query{  
        menu: [Menu]
    }
`;


// server

const resolvers={
    Query:{
        menu:()=>menu
    }
};

const server=new ApolloServer({typeDefs, resolvers});

server.listen(5000).then(({url})=>{
    console.log(`Server ready on: ${url}`);
});

// node index.js