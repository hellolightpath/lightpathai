import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 200;

const ROLE_LABELS: Record<string, string> = {
  family: "Grieving family member",
  supporter: "Supporter helping someone",
  hospice: "Hospice or funeral home",
  employer: "Employer",
  insurance: "Life insurance provider",
  other: "Other",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim().slice(0, MAX_LEN);
    const email = String(body.email ?? "").trim().toLowerCase().slice(0, MAX_LEN);
    const company = body.company ? String(body.company).trim().slice(0, MAX_LEN) : null;
    const role = String(body.role ?? "").trim().slice(0, MAX_LEN);

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Name, email, and role are required." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Save to Supabase
    const supabase = getSupabase();
    const { error: dbError } = await supabase.from("demo_leads").insert({
      name,
      email,
      company,
      role,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError.message, dbError.code);
      return NextResponse.json(
        { error: "We couldn't save your request right now. Please try again or email hello@getlightpath.ai." },
        { status: 500 }
      );
    }

    // Send emails (non-blocking — don't fail the request if email fails)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const roleLabel = ROLE_LABELS[role] || role;
      const firstName = name.split(" ")[0];

      // Fire both emails concurrently
      await Promise.allSettled([
        // 1. Confirmation to the lead
        resend.emails.send({
          from: "LightPathAI <hello@getlightpath.ai>",
          to: email,
          subject: `We received your request, ${firstName}`,
          html: confirmationEmail(firstName, roleLabel),
        }),

        // 2. Notification to team
        resend.emails.send({
          from: "LightPathAI Leads <hello@getlightpath.ai>",
          to: "hello@getlightpath.ai",
          subject: `New early access request: ${name} (${roleLabel})`,
          html: notificationEmail(name, email, company, roleLabel),
        }),
      ]);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please check your information and try again." },
      { status: 400 }
    );
  }
}

/* ── Email Templates ── */

function confirmationEmail(firstName: string, role: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#FDFCFB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:520px;margin:0 auto;padding:48px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <span style="font-size:18px;font-weight:600;color:#1C1C1E;">LightPath<span style="color:#9598E8;">AI</span></span>
    </div>
    <div style="background:#FFFFFF;border-radius:16px;padding:32px;border:1px solid #F1F5F9;">
      <p style="font-size:17px;color:#1C1C1E;margin:0 0 16px;font-weight:500;">Hi ${firstName},</p>
      <p style="font-size:15px;color:#5C6578;line-height:1.7;margin:0 0 16px;">
        Thank you for reaching out to LightPathAI. We received your request${role ? ` as a <strong>${role.toLowerCase()}</strong>` : ""} and will be in touch within 1 business day.
      </p>
      <p style="font-size:15px;color:#5C6578;line-height:1.7;margin:0 0 16px;">
        In the meantime, here are a few things that might be helpful:
      </p>
      <ul style="font-size:14px;color:#5C6578;line-height:1.8;margin:0 0 24px;padding-left:20px;">
        <li><a href="https://getlightpath.ai/resources" style="color:#9598E8;text-decoration:none;">Resources</a> &mdash; practical guides for navigating loss</li>
        <li><a href="https://getlightpath.ai/faq" style="color:#9598E8;text-decoration:none;">FAQ</a> &mdash; how LightPathAI works</li>
        <li><a href="https://getlightpath.ai/features" style="color:#9598E8;text-decoration:none;">Features</a> &mdash; what the platform offers</li>
      </ul>
      <p style="font-size:15px;color:#5C6578;line-height:1.7;margin:0;">
        If you need anything before then, reply to this email or reach us at <a href="mailto:hello@getlightpath.ai" style="color:#9598E8;text-decoration:none;">hello@getlightpath.ai</a>.
      </p>
      <p style="font-size:15px;color:#5C6578;line-height:1.7;margin:24px 0 0;">Best,<br/>Sara</p>
    </div>
    <div style="text-align:center;margin-top:32px;padding:16px;background:#F5F5F7;border-radius:12px;">
      <p style="font-size:12px;color:#8E96A6;margin:0;line-height:1.6;">
        If you or someone you know is in crisis, call or text <strong style="color:#5C6578;">988</strong> (Suicide &amp; Crisis Lifeline) or call <strong style="color:#5C6578;">911</strong>.
      </p>
    </div>
    <p style="text-align:center;font-size:11px;color:#CBD5E1;margin-top:24px;">
      &copy; ${new Date().getFullYear()} LightPathAI. All rights reserved.
    </p>
  </div>
</body>
</html>`;
}

function notificationEmail(name: string, email: string, company: string | null, role: string): string {
  const now = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles", dateStyle: "medium", timeStyle: "short" });
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#FDFCFB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:520px;margin:0 auto;padding:48px 24px;">
    <div style="background:#FFFFFF;border-radius:16px;padding:32px;border:1px solid #F1F5F9;">
      <p style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#9598E8;margin:0 0 16px;">New Early Access Request</p>
      <table style="width:100%;font-size:14px;color:#5C6578;line-height:1.8;">
        <tr><td style="font-weight:600;color:#1C1C1E;padding:4px 12px 4px 0;white-space:nowrap;">Name</td><td>${name}</td></tr>
        <tr><td style="font-weight:600;color:#1C1C1E;padding:4px 12px 4px 0;white-space:nowrap;">Email</td><td><a href="mailto:${email}" style="color:#9598E8;">${email}</a></td></tr>
        ${company ? `<tr><td style="font-weight:600;color:#1C1C1E;padding:4px 12px 4px 0;white-space:nowrap;">Company</td><td>${company}</td></tr>` : ""}
        <tr><td style="font-weight:600;color:#1C1C1E;padding:4px 12px 4px 0;white-space:nowrap;">Role</td><td>${role}</td></tr>
        <tr><td style="font-weight:600;color:#1C1C1E;padding:4px 12px 4px 0;white-space:nowrap;">Time (PT)</td><td>${now}</td></tr>
      </table>
    </div>
  </div>
</body>
</html>`;
}
