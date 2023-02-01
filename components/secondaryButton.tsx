interface SecondaryButtonProps {
  label: string;
}

export default function SecondaryButton({ label }: SecondaryButtonProps) {
  return (
    <a
      href="#about"
      className="hidden py-2 borderButton px-5 text-center justify-center items-center text-primary-white rounded-md text-sm lg:flex"
    >
      {label}
    </a>
  );
}
