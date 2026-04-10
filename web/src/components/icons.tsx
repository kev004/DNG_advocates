import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

function baseProps(props: IconProps) {
  const { className, ...rest } = props;
  return {
    className: className ?? "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };
}

export function IconScale(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3v18M5 8l3-3 3 3M16 16l3 3 3-3" />
      <path d="M5 16h14M5 8h14" />
    </svg>
  );
}

export function IconBuilding(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-4h6v4M9 9h.01M12 9h.01M15 9h.01" />
    </svg>
  );
}

export function IconLandmark(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M3 21h18M6 21V10l6-4 6 4v11M9 21v-4h6v4" />
    </svg>
  );
}

export function IconUsers(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function IconLock(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function IconFileText(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
