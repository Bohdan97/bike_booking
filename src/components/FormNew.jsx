import { Form, Field } from 'react-final-form';

const FormNew = ({ onAdd, unicId }) => {
  const onSubmit = (e) => {
    if (!unicId(e.id)) {
      alert('This ID is using');
    } else {
      onAdd({ ...e, status: 'available' });
    }
    console.log(e);
  };

  const validate = (e) => {
    const errors = {};

    if (e.name && e.name.length < 5) {
      errors.name = 'Too short';
    }
    if (e.type && e.type.length < 5) {
      errors.type = 'Too short';
    }
    if (e.color && e.color.length < 5) {
      errors.color = 'Too short';
    }
    if (e.size && e.size < 1) {
      errors.size = 'Too small';
    }
    if (e.price && e.price < 1) {
      errors.price = 'Too small';
    }
    if (e.id && e.id.length < 5) {
      errors.id = 'Too short';
    }
    if (e.description && e.description.length < 5) {
      errors.description = 'Too short';
    }

    return errors;
  };
  return (
    <div className="wrapper_form">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <span className="error_wrapper">
                  <input
                    required
                    className={meta.error ? 'input_error' : ''}
                    type="text"
                    {...input}
                    placeholder="Name"
                  />
                  {meta.touched && meta.error && <span className="error_name">{meta.error}</span>}
                </span>
              )}
            </Field>

            <Field name="type">
              {({ input, meta }) => (
                <span className="error_wrapper">
                  <input
                    required
                    className={meta.error ? 'input_error' : ''}
                    type="text"
                    {...input}
                    placeholder="Type"
                  />
                  {meta.touched && meta.error && <span className="error_type">{meta.error}</span>}
                </span>
              )}
            </Field>

            <Field name="color">
              {({ input, meta }) => (
                <span className="error_wrapper">
                  <input
                    required
                    className={meta.error ? 'input_error' : ''}
                    type="text"
                    {...input}
                    placeholder="Color"
                  />
                  {meta.touched && meta.error && <span className="error_color">{meta.error}</span>}
                </span>
              )}
            </Field>

            <Field name="size">
              {({ input, meta }) => (
                <span className="error_wrapper">
                  <input
                    required
                    className={meta.error ? 'input_error' : ''}
                    type="number"
                    {...input}
                    placeholder="Wheel size"
                  />
                  {meta.touched && meta.error && <span className="error_size">{meta.error}</span>}
                </span>
              )}
            </Field>

            <Field name="price">
              {({ input, meta }) => (
                <span className="error_wrapper">
                  <input
                    required
                    className={meta.error ? 'input_error' : ''}
                    type="number"
                    {...input}
                    placeholder="Price"
                  />
                  {meta.touched && meta.error && <span className="error_price">{meta.error}</span>}
                </span>
              )}
            </Field>

            <Field name="id">
              {({ input, meta }) => (
                <span className="error_wrapper">
                  <input
                    required
                    className={meta.error ? 'input_error' : ''}
                    type="text"
                    {...input}
                    placeholder="Id() XXXXXXXXXXX"
                  />
                  {meta.touched && meta.error && <span className="error_id">{meta.error}</span>}
                </span>
              )}
            </Field>

            <div className="field">
              <Field
                name="description"
                render={({ input, meta }) => (
                  <span>
                    <textarea required {...input} className={meta.error ? 'input_error' : ''} />
                    {meta.touched && meta.error && <span className="desc_error">{meta.error}</span>}
                  </span>
                )}
              />
            </div>

            <div className="field">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default FormNew;
