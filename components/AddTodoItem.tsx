import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface AddTodoItemProps {
  onAdd: (name: string) => void;
}

const AddTodoItem: React.FC<AddTodoItemProps> = ({ onAdd }) => {
  const initialValues = {
    name: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values.name);
        resetForm();
      }}
    >
      <Form className="m-4">
        <div>
          <Field
            className="add-text"
            type="text"
            name="name"
            placeholder="Enter task name"
          />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <button className="mt-4" type="submit">
          Add Task
        </button>
      </Form>
    </Formik>
  );
};

export default AddTodoItem;
