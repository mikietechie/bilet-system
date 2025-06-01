export const sendMail = async (
  email: string,
  subject: string,
  body: string,
) => {
  console.log('Sending email');
  console.log({ email, subject, body });
};
