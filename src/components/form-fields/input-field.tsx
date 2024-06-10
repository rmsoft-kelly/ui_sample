import React from "react";
import { FormField, FormItem } from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface Props extends InputProps {
  _form: UseFormReturn<any>;
  name: string;
}

const InputField = ({ _form, name, ...props }: Props) => {
  return (
    <FormField
      control={_form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Input
            isError={!!_form.formState.errors[name]}
            {...field}
            {...props}
          />
        </FormItem>
      )}
    />
  );
};

export default InputField;
