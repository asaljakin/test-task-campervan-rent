import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from '../../../assets/sprite.svg';
import styles from './OrderForm.module.css';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  bookingdate: Yup.string().required('Required'),
  comment: Yup.string(),
});

export const OrderForm = () => {
  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Book your campervan now</h3>
      <p className={styles.formDescr}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingdate: '',
          comment: '',
        }}
        validationSchema={FormSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Field
              className={styles.nameField}
              name="name"
              placeholder="Name"
            />
            {touched.name && errors.name ? (
              <ErrorMessage
                className={styles.errorMsg}
                name="name"
                component={'span'}
                visible={touched.name && errors.name}
              />
            ) : null}
            <Field
              className={styles.nameField}
              name="email"
              placeholder="Email"
              type="email"
            />
            {touched.email && errors.email ? (
              <ErrorMessage
                className={styles.errorMsg}
                name="email"
                component={'span'}
              />
            ) : null}
            <div className={styles.dateBox}>
              <Field
                className={styles.dateField}
                name="bookingdate"
                placeholder="Booking date"
              />
              <svg className={styles.calendarSvg} width="24px" height="24px">
                <use xlinkHref={sprite + '#calendar'} />
              </svg>
            </div>
            {touched.bookingdate && errors.bookingdate ? (
              <ErrorMessage
                className={styles.errorMsg}
                name="bookingdate"
                component={'span'}
              />
            ) : null}
            <Field
              className={styles.commentField}
              name="comment"
              placeholder="Comment"
            />
            <button className={styles.submitBtn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
