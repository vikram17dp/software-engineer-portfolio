import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const event = await request.json()

    // Only handle successful email events
    if (event.type === 'email.sent') {
      const { subject, from, to } = event.data

      await resend.emails.send({
        from: 'Portfolio Bot <onboarding@resend.dev>',
        to: ['vikramdp505@gmail.com'], // your real inbox
        subject: `[PORTFOLIO] ${subject}`,
        html: `
          <p><strong>Email forwarded from portfolio</strong></p>
          <p><strong>From:</strong> ${from}</p>
          <p><strong>To:</strong> ${to}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook failed' },
      { status: 500 }
    )
  }
}
