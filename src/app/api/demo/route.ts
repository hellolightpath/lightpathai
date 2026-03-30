import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 200;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim().slice(0, MAX_LEN);
    const email = String(body.email ?? "").trim().toLowerCase().slice(0, MAX_LEN);
    const company = body.company ? String(body.company).trim().slice(0, MAX_LEN) : null;
    const role = String(body.role ?? "").trim().slice(0, MAX_LEN);

    // Required fields
    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Name, email, and role are required." },
        { status: 400 }
      );
    }

    // Email format validation
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    const { error } = await supabase.from("demo_leads").insert({
      name,
      email,
      company,
      role,
    });

    if (error) {
      console.error("Supabase insert error:", error.message, error.code);
      return NextResponse.json(
        { error: "We couldn't save your request right now. Please try again or email hello@getlightpath.ai." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please check your information and try again." },
      { status: 400 }
    );
  }
}
