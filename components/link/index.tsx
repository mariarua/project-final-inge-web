import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface LinkProps extends NextLinkProps {
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

const Link = ({
  href,
  children,
  className,
  activeClassName,
  ...props
}: LinkProps) => {
  const router = useRouter();

  const linkClassName = (
    (className || "") +
    " " +
    (router.asPath === href ? activeClassName : "")
  ).trim();

  return (
    <NextLink href={href} {...props} className={linkClassName}>
      {children}
    </NextLink>
  );
};

export default Link;
