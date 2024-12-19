import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// Set up Server
const server = new ApolloServer({});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log("Server is running on port", 4000);
