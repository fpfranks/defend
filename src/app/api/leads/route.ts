import { NextRequest, NextResponse } from "next/server";
import { addLead } from "@/lib/leads-store";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, postcode, package: pkg, message } = await req.json();
    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const lead = await addLead({
      name,
      phone,
      postcode: postcode ?? "",
      package: pkg ?? "",
      message: message ?? "",
    });
    return NextResponse.json({ success: true, id: lead.id });
  } catch (err) {
    console.error("[leads POST]", err);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
