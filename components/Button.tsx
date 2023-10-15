import Image from "next/image";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

export function Button({ type, title, icon, variant, full }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${variant} ${
        full && "w-full"
      } flexCenter gap-2 rounded-full border p-4`}
    >
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
}
