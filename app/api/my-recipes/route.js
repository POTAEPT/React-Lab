// Lab B b) — Route Handler ของกลุ่มเอง (ห้ามใช้ /api/recipes ของเช้าซ้ำ — Twist ข้อ 3)
// - GET(request)  → คืนลิสต์สูตรโปรดทั้งหมดเป็น JSON · รองรับ ?q= กรองตามชื่อ ไม่สนตัวพิมพ์เล็ก/ใหญ่
// - POST(request) → รับ { mealId, name, thumb } แล้วเพิ่มเข้า store → 201
// - 🔴 ห้ามมีกรณีไหนหลุดเป็น 500 — ตอบ { error: "..." } เองทุกกรณี:
//     body ไม่ใช่ JSON → 400 · ไม่มี mealId หรือ name → 400 · mealId ซ้ำ → 409
// - ใช้ NextResponse.json(...) จาก "next/server"

import { NextResponse } from 'next/server';
import { myRecipes } from '@/lib/data/my-recipes.js';

// GET: คืนลิสต์สูตรโปรดทั้งหมดเป็น JSON และรองรับ ?q= กรองตามชื่อ
export function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  let result = myRecipes;

  // ถ้ามีการส่ง q มา ให้กรองตามชื่อ (ไม่สนตัวพิมพ์เล็ก/ใหญ่)
  if (q) {
    const searchKeyword = q.toLowerCase();
    result = myRecipes.filter((recipe) => 
      recipe.name.toLowerCase().includes(searchKeyword)
    );
  }

  return NextResponse.json(result);
}

// POST: รับข้อมูลสูตรอาหาร และเพิ่มเข้า data store
export async function POST(request) {
  try {
    // 1. ดักจับกรณี body ไม่ใช่ JSON เลย (ถ้าไม่ใช่ JSON request.json() จะโยน Error)
    const body = await request.json();

    // 2. เป็น JSON แต่ไม่มี mealId หรือ name (หรือ body เป็น null)
    if (!body || !body.mealId || !body.name) {
      return NextResponse.json(
        { error: "Missing required fields: mealId or name" }, 
        { status: 400 }
      );
    }

    // 3. กรณี mealId นี้อยู่ในรายการโปรดแล้ว (ตอบ 409 Conflict เพราะข้อมูลซ้ำ)
    const isDuplicate = myRecipes.some((recipe) => recipe.mealId === body.mealId);
    if (isDuplicate) {
      return NextResponse.json(
        { error: "Recipe already exists in favorites" }, 
        { status: 409 }
      );
    }

    // ผ่านเงื่อนไขทั้งหมด → เพิ่มเข้า store
    const newRecipe = {
      mealId: body.mealId,
      name: body.name,
      thumb: body.thumb || ""
    };
    
    myRecipes.push(newRecipe);

    return NextResponse.json(newRecipe, { status: 201 });

  } catch (error) {
    // ถ้า request.json() ทำงานไม่สำเร็จ (ไม่ใช่ JSON) จะตกมาที่นี่ ทำให้เราตอบ 400 ได้แทนที่จะหลุดเป็น 500
    return NextResponse.json(
      { error: "Invalid JSON format in request body" }, 
      { status: 400 }
    );
  }
}