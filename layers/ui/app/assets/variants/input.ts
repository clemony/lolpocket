export default {
  input: {
    slots: {
      leading: "absolute inset-y-0 start-0 flex items-center",
      leadingAvatar: "shrink-0",
      leadingAvatarSize: "",
      leadingIcon: "shrink-0 text-p5",
      root: "relative inline-flex items-center",
      trailing: "absolute inset-y-0 end-0 flex items-center",
      trailingIcon: "shrink-0 text-p5",
      base: [
        "w-full rounded-md border-0 appearance-none placeholder:text-p5 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
        "transition-colors input",
      ],
    },
    variants: {
      color: {
        error: "",
        info: "",
        neutral: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
      },
      variant: {
        ghost:
          "text-pc bg-transparent hover:bg-p1 focus:bg-p1 disabled:bg-transparent dark:disabled:bg-transparent",
        none: "text-pc bg-transparent",
        outline: "text-pc bg-default ring ring-inset ring-p3",
        soft: "text-pc bg-p1/50 hover:bg-p1 focus:bg-p1 disabled:bg-p1/50",
        subtle: "text-pc bg-p1 ring ring-inset ring-p3",
      },
      fieldGroup: {
        horizontal: {
          base: "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none",
          root: "group has-focus-visible:z-[1]",
        },
        vertical: {
          base: "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none",
          root: "group has-focus-visible:z-[1]",
        },
      },
      highlight: {
        true: "",
      },
      leading: {
        true: "",
      },
      loading: {
        true: "",
      },
      size: {
        lg: {
          base: "px-3 py-2 text-sm gap-2",
          leading: "ps-3",
          leadingAvatarSize: "2xs",
          leadingIcon: "size-5",
          trailing: "pe-3",
          trailingIcon: "size-5",
        },
        md: {
          base: "px-2.5 py-1.5 text-sm gap-1.5",
          leading: "ps-2.5",
          leadingAvatarSize: "2xs",
          leadingIcon: "size-5",
          trailing: "pe-2.5",
          trailingIcon: "size-5",
        },
        sm: {
          base: "px-2.5 py-1.5 text-xs gap-1.5",
          leading: "ps-2.5",
          leadingAvatarSize: "3xs",
          leadingIcon: "size-4",
          trailing: "pe-2.5",
          trailingIcon: "size-4",
        },
        xl: {
          base: "px-3 py-2 text-base gap-2",
          leading: "ps-3",
          leadingAvatarSize: "xs",
          leadingIcon: "size-6",
          trailing: "pe-3",
          trailingIcon: "size-6",
        },
        xs: {
          base: "px-2 py-1 text-xs gap-1",
          leading: "ps-2",
          leadingAvatarSize: "3xs",
          leadingIcon: "size-4",
          trailing: "pe-2",
          trailingIcon: "size-4",
        },
      },
      trailing: {
        true: "",
      },
      type: {
        file: "file:me-1.5 file:font-medium file:text-muted file:outline-none",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: ["outline", "subtle"],
        class:
          "focus-visible:ring focus-visible:ring-inset focus-visible:ring-n4",
      },
      {
        color: "primary",
        class: "ring ring-inset ring-n4",
        highlight: true,
      },
      {
        color: "neutral",
        variant: ["outline", "subtle"],
        class:
          "focus-visible:ring focus-visible:ring-inset focus-visible:ring-nc",
      },
      {
        color: "neutral",
        class: "ring ring-inset ring-nc",
        highlight: true,
      },
      {
        class: "ps-7",
        leading: true,
        size: "xs",
      },
      {
        class: "ps-8",
        leading: true,
        size: "sm",
      },
      {
        class: "ps-9",
        leading: true,
        size: "md",
      },
      {
        class: "ps-10",
        leading: true,
        size: "lg",
      },
      {
        class: "ps-11",
        leading: true,
        size: "xl",
      },
      {
        class: "pe-7",
        size: "xs",
        trailing: true,
      },
      {
        class: "pe-8",
        size: "sm",
        trailing: true,
      },
      {
        class: "pe-9",
        size: "md",
        trailing: true,
      },
      {
        class: "pe-10",
        size: "lg",
        trailing: true,
      },
      {
        class: "pe-11",
        size: "xl",
        trailing: true,
      },
      {
        leading: true,
        loading: true,
        class: {
          leadingIcon: "animate-spin",
        },
      },
      {
        leading: false,
        loading: true,
        trailing: true,
        class: {
          trailingIcon: "animate-spin",
        },
      },
    ],
    defaultVariants: {
      color: "primary",
      variant: "outline",
      size: "md",
    },
  },
}
