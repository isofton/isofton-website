import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  compact?: boolean;
  tone?: "light" | "dark";
};

export function Logo({ compact = false, tone = "light" }: LogoProps) {
  const src = tone === "dark" ? "/logo-on-dark.png" : "/logo-full.png";
  return (
    <Link href="/" className="inline-flex items-center" aria-label="iSofton home">
      <Image
        src={src}
        alt="iSofton Software Solutions"
        width={300}
        height={99}
        className={compact ? "h-10 w-auto sm:h-11 lg:h-12" : "h-12 w-auto sm:h-14"}
        priority
      />
    </Link>
  );
}

export function Mark({ className = "h-10 w-auto" }: { className?: string }) {
  return <Image src="/logo.png" alt="" width={102} height={99} className={className} />;
}
