import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend('re_WotQhsE3_ExFBQJaJdFzuxMXSUiyPy8fG');

export async function POST(req) {
  try {
    const requestBody = await req.json();
    const { email, nombreCompleto, pais, ciudad, preguntas } = requestBody;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['sebda06@gmail.com'],
      subject: `Pregunta de ${nombreCompleto}`,
      react: EmailTemplate({ email, nombreCompleto, pais, ciudad, preguntas }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

