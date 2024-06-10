import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  _form: UseFormReturn<any>;
  name: string;
}

const SelectField = ({ _form, name }: Props) => {
  return (
    <FormField
      control={_form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex items-center">
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                {field.value ? (
                  <SelectValue placeholder="선택해주세요." />
                ) : (
                  "선택해주세요."
                )}
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default SelectField;
