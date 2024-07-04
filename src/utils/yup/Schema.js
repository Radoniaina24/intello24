import { string } from 'yup';
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const contactSchema = yup.object().shape({
  name: string()
    .min(4, "Il est nécessaire d'avoir au moins 4 caractères.")
    .required('Veuillez entrer votre nom'),
  email: string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'Veuillez entrer une adresse e-mail valide.'
    )
    .required('Veuillez entrer votre adresse e-mail.'),
  phone: string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
      'Veuillez entrer un numéro de téléphone valide'
    )
    .required('Veuillez entrer votre numéro de  téléphone.'),
  message: string().min(
    20,
    "Il est nécessaire d'avoir au moins 20 caractères."
  ),
});
