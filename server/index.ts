import { PrismaClient } from "@prisma/client";
import Elysia from "elysia";

const PORT = 9990

const prisma = new PrismaClient()

const app = new Elysia()
  .get('/employees', async () => {
    try {
      const query = await prisma.employee.findMany()

      const data = query;

      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json"
        },
        status: 200
      })
    } catch(err) {
      console.log(err)
      return new Response("INTERNAL SERVER ERROR", {
        status: 500
      })
    }
  })

app.on("start", () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})

app.listen({
  port: 9990,
  hostname: "0.0.0.0"
});

