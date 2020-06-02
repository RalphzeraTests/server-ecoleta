import knex from "../database/connection";
import { Request, Response } from "express";

export default class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");
    const serializedItems = items.map((item) => {
      return {
        title: item.titulo,
        id: item.id,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      };
    });
    return response.json(serializedItems);
  }
}
