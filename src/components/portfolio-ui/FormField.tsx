import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  name: string;
  id?: string;
  type?: "text" | "email" | "tel" | "url";
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  className?: string;
  controlClassName?: string;
};

const controlClasses =
  "w-full border-x-0 border-t-0 border-b border-white/20 bg-transparent px-0 py-3 text-base text-ink outline-none transition-[border-color,color] placeholder:text-subtle focus-visible:border-ink disabled:cursor-not-allowed disabled:opacity-50";

export function FormField({
  autoComplete,
  className,
  controlClassName,
  disabled,
  id: providedId,
  label,
  multiline = false,
  name,
  placeholder,
  required,
  rows = 5,
  type = "text"
}: FormFieldProps) {
  const id = providedId ?? name;

  if (multiline) {
    return (
      <label className={cn("grid gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-subtle", className)} htmlFor={id}>
        {label}
        <textarea
          className={cn(controlClasses, "min-h-36 resize-y", controlClassName)}
          id={id}
          name={name}
          autoComplete={autoComplete}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          rows={rows}
        />
      </label>
    );
  }

  return (
    <label className={cn("grid gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-subtle", className)} htmlFor={id}>
      {label}
      <input
        autoComplete={autoComplete}
        className={cn(controlClasses, controlClassName)}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}
