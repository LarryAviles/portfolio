import { supabase } from "@/lib/supabase";

const ERROR_CODE_ALREADY_EXISTS = "23505";

export const submitForm = async (data: { email: string; message: string }) => {
  const { email, message } = data;
  const { error } = await supabase.from("leads").insert([{ email, message }]);

  if (error?.code === ERROR_CODE_ALREADY_EXISTS) {
    return {
      duplicated: true,
      success: false,
      error: true,
    };
  }

  if (error) {
    return {
      duplicated: false,
      success: false,
      error: true,
    };
  }

  return {
    duplicated: false,
    success: true,
    error: false,
  };
};
