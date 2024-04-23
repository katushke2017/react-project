import styles from './Field.module.css';

const Field = ({
  title,
  type = 'text',
  name,
  onChange,
  onBlur,
  value,
  placeholder,
  error,
}) => {
  return (
    <>
      <label className={styles.label}>
        {title && <div className={styles.title}>{title}</div>}
        <input
          className={styles.input}
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
        <div className={styles.error}>{error || ''}</div>
      </label>
    </>
  );
};

export default Field;

// <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//             />
//             {errors.email && touched.email && errors.email}
