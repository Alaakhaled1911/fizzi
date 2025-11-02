import clsx from "clsx";
import { ElementType, ReactNode, ComponentPropsWithoutRef } from "react";

type BoundedProps<T extends ElementType = "section"> = {
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export const Bounded = <T extends ElementType = "section">({
  as: Comp = "section" as T,
  className,
  children,
  ...restProps
}: BoundedProps<T>) => {
  return (
    <Comp
      className={clsx("px-4 first:pt-10 md:px-6", className)}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </Comp>
  );
};
