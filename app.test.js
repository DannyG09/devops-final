const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it("Debe devolver Hola Mundo", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hola Mundo desde DevOps Danny Enmanuel Guerrero Martinez 2024-0092 , deploy automático funcionando!!");
  });
});

