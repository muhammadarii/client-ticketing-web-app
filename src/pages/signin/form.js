import { Form } from "react-bootstrap";
import { SButton } from "../../component/Button";
import { TextInputWithLabel } from "../../component/TextInputWithLabel";

export const SForm = ({ form, handleChange, handleSubmit, isLoading }) => {
  return (
    <Form>
      <TextInputWithLabel
        label="Email address"
        name="email"
        value={form.email}
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
      />
      <TextInputWithLabel
        label="Password"
        name="password"
        value={form.password}
        type="password"
        placeholder="******"
        onChange={handleChange}
      />

      <SButton
        loading={isLoading}
        disabled={isLoading}
        variant="primary"
        type="submit"
        action={handleSubmit}
      >
        Submit
      </SButton>
    </Form>
  );
};
