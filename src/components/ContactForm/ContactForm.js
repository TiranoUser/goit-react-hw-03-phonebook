import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),

  number: Yup.number()
    .max(100000000, 'To big')
    .min(0, 'Not negative number')
    .required('Required'),
});

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <Field id="name" name="name" placeholder="add name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <br />
          <Field id="number" name="number" placeholder="add number" />
          <ErrorMessage name="number" />
        </div>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
