import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 btn-glow",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-gray-200",
        primary: "bg-gradient-to-r from-primary-orange to-accent-orange text-white hover:from-accent-orange hover:to-primary-orange hover:scale-105 glow-orange",
        secondary: "bg-gradient-to-r from-primary-violet to-accent-violet text-white hover:from-accent-violet hover:to-primary-violet hover:scale-105 glow-violet",
        accent: "bg-gradient-to-r from-primary-blue to-accent-blue text-white hover:from-accent-blue hover:to-primary-blue hover:scale-105 glow-blue",
        outline: "border-2 border-primary-orange bg-transparent text-primary-orange hover:bg-primary-orange hover:text-white",
        ghost: "bg-transparent text-gray-300 hover:bg-white/10 hover:text-white",
        glass: "glass border-white/20 text-white hover:bg-white/10 backdrop-blur-md hover-lift",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }