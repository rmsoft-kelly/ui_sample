import { FormField } from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import React from "react";
import { UseFormReturn } from "react-hook-form";

const InputForm = ({
  form,
  inputProps,
}: {
  form: UseFormReturn;
  inputProps: InputProps;
}) => {
  return (
    <FormField
      control={form.control}
      name=""
      render={() => <Input {...inputProps} />}
    />
  );
};

export default InputForm;
