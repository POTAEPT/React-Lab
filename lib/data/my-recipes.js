// Lab B a) — data store "สูตรโปรด" ของกลุ่ม (in-memory)
// - สร้าง lib/data/my-recipes.json ข้าง ๆ ไฟล์นี้ เริ่มต้นเป็น array ว่าง
// - import JSON มาแล้ว copy เป็นตัวแปรในหน่วยความจำ — แพทเทิร์นเดียวกับ lib/data/recipes.js ของเช้า
//   แต่เป็นคนละไฟล์ คนละตัวแปร (Twist ข้อ 3)

import myRecipesData from "./my-recipes.json";

export let myRecipes = [...myRecipesData];
