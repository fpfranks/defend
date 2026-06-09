import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { addLead, getLeads } from "@/lib/leads-store";

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

export async function GET() {
  const store = await cookies();
  const auth = store.get("defend-admin");
  if (!auth || auth.value !== "granted") {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }
  try {
    const leads = await getLeads();
    return NextResponse.json({ leads });
  } catch (err) {
    console.error("[leads GET]", err);
    return NextResponse.json({ error: "Storage not configured" }, { status: 503 });
  }
}
