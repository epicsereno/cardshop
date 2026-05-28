export async function sendTransactionalEmail({
  to,
  subject,
}: {
  to: string;
  subject: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    return { skipped: true, to, subject };
  }

  return { queued: true, to, subject };
}
