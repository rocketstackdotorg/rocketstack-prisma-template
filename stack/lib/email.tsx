import SendGridMail from '@sendgrid/mail'

SendGridMail.setApiKey(process.env.SENDGRID_API_KEY ?? '')

export enum EmailTemplate {
  WELCOME='welcome',
  SIGNIN='signin',
  INVITE='invite'
}

export interface Email {
  name: string
  subject: string
  html: string
}

export const _sendMail = async (
  to: string,
  subject: string,
  html: string
): Promise<void> => {
  const msg = {
    from: `${String(process.env.NEXT_PUBLIC_HOST_NAME)} Team <${process.env.NEXT_PUBLIC_COMPANY_EMAIL as string}>`,
    to,
    subject,
    html
  }
  await SendGridMail.send(msg)
    .catch(error => {
      console.error(error)
      if (error.response != null) {
        console.error(error.response.body)
      }
    })
}

export const sendMail = async (
  to: string,
  template: EmailTemplate
): Promise<void> => {
  const _template = getEmailTemplateByName(template)
  await _sendMail(
    to,
    _template.subject,
    _template.html
  )
}

export const getEmailTemplateByName: (
  templateName: EmailTemplate,
  data?: Record<string, string>
) => Email = (templateName, data) => {
  const templates: { [x: string]: Email } = {
    [EmailTemplate.WELCOME]: {
      name: EmailTemplate.WELCOME,
      subject: `Welcome to ${process.env.NEXT_PUBLIC_HOST_NAME ?? ''}`,
      html: `<p>Thank you for signing up to ${process.env
        .NEXT_PUBLIC_HOST_NAME ?? ''}.</p>`
    },
    [EmailTemplate.SIGNIN]: {
      name: EmailTemplate.SIGNIN,
      subject: `Sign in to ${process.env.NEXT_PUBLIC_HOST_NAME ?? ''}.io`,
      html: `<pre>Hello,
    
We received a request to sign in to ${process.env.NEXT_PUBLIC_HOST_NAME ??
        ''} using this email address. If you want to sign with ${data?.to as string}, you can open a modern browser (such as Chrome, Safari, Firefox or Brave) and follow this link:

<a href="${data?.url as string}" target="_blank">${data?.url as string}</a>

If you did not, you can safely ignore this email.

Thank you,
${process.env.NEXT_PUBLIC_HOST_NAME ?? ''}</pre>`
    },
    [EmailTemplate.INVITE]: {
      name: EmailTemplate.INVITE,
      subject: `Join ${data?.inviterFirstName as string} ${data?.inviterLastName as string} in ${data?.workspaceName as string}`,
      html: `<pre>Hello,

${data?.inviterFirstName as string} ${data?.inviterLastName as string} invited you to join ${data?.workspaceName as string} on ${process
        .env
        .NEXT_PUBLIC_HOST_NAME as string}. If you want to accept this invitation, you can open a modern browser (such as Chrome, Safari, Firefox or Brave) and follow this link:

<a href="${data?.url as string}" target="_blank">${data?.url as string}</a>

If you do not want to, you can safely ignore this email.

Thank you,
${process.env.NEXT_PUBLIC_HOST_NAME as string}</pre>`
    }
  }

  return templates[templateName]
}
