import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const FormStateSchema = z.object({
  name: z.string().min(4).max(10),
});

const FormTest = () => {
  const form = useForm<z.infer<typeof FormStateSchema>>({
    reValidateMode: "onChange",
    resolver: zodResolver(FormStateSchema),
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Label>4글자 이상 10글자 이하 문자 입력</Label>
              <div className="flex gap-2">
                <Input isError={!!form.formState.errors["name"]} {...field} />
                <Button>Submit</Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default FormTest;
