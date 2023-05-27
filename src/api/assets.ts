import { readFile } from "fs/promises";
import path from "path";

export interface Asset {
  id: number;
  title: string;
  price: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
}

export async function getAllAssets(): Promise<Asset[]> {
  const filePath = path.join(process.cwd(), "src", "data", "assets.json");
  console.log(filePath);
  return readFile(filePath, "utf-8").then<Asset[]>(JSON.parse);
}
