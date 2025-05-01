import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import clsx from "clsx"

type ValidationType = "error" | "warning" | "success" | null

interface InputWithValidationProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  validationType?: ValidationType
  message?: string
}

export function InputWithValidation({
  label,
  validationType,
  message,
  placeholder,
  ...props
}: InputWithValidationProps) {
  const borderColor = {
    error: "border-red-500 focus-visible:ring-red-500",
    warning: "border-yellow-500 focus-visible:ring-yellow-500",
    success: "border-green-500 focus-visible:ring-green-500",
    null: "",
  }[validationType ?? "null"]

  const textColor = {
    error: "text-red-600",
    warning: "text-yellow-600",
    success: "text-green-600",
    null: "",
  }[validationType ?? "null"]

  return (
    <div className="grid w-full max-w-sm items-start gap-1.5">
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <Input
        id={props.id}
        placeholder={placeholder}
        className={clsx(borderColor)}
        aria-invalid={validationType === "error"}
        {...props}
      />
      {message && <p className={clsx("text-sm", textColor)}>{message}</p>}
    </div>
  )
}
