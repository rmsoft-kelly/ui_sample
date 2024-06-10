import React from "react";
import { FormField, FormItem } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Textarea, TextareaProps } from "@/components/ui/textarea";

interface Props extends TextareaProps {
  _form: UseFormReturn<any>;
  name: string;
}

const TextareaField = ({ _form, name, ...props }: Props) => {
  return (
    <FormField
      control={_form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Textarea
            isError={!!_form.formState.errors[name]}
            {...field}
            {...props}
          />
        </FormItem>
      )}
    />
  );
};

export default TextareaField;
