import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  location: z.string().min(2),
  sector: z.string().min(2),
  sectorOther: z.string().optional(),
  password: z.string().min(8),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    // TODO: hash password + save to DB (Prisma/Supabase). For now, log only.
    console.log("New signup:", {
      name: data.name,
      email: data.email,
      location: data.location,
      sector: data.sector === "Other" ? data.sectorOther : data.sector,
    });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Invalid payload";
    return NextResponse.json({ ok: false, error: errorMessage }, { status: 400 });
  }
}
