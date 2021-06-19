import request from "supertest";
import dbConnect from "../core/dbConnect";

// let app;
let server;

describe("video", () => {
  beforeEach(() => {
    server = require("../index").server;
  });

  afterEach(async () => {
    await server.close();
    await dbConnect().close();
  });

  it("should pass 1", async () => {
    await request(server).get("/register");
    expect("salam").toBe("salam");
  });

  it("should pass 2", async () => {
    await request(server).get("/register");
    expect("salam").toBe("salam");
  });
});
