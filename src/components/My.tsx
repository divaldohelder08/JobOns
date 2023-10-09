function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}



// import { Icons } from "@/components/icons"
// import { Button } from "@/registry/new-york/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/registry/new-york/ui/card"
// import { Input } from "@/registry/new-york/ui/input"
// import { Label } from "@/registry/new-york/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/registry/new-york/ui/radio-group"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/registry/new-york/ui/select"

// export function DemoPaymentMethod() {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Payment Method</CardTitle>
//         <CardDescription>
//           Add a new payment method to your account.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-6">
//         <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
//           <div>
//             <RadioGroupItem value="card" id="card" className="peer sr-only" />
//             <Label
//               htmlFor="card"
//               className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 className="mb-3 h-6 w-6"
//               >
//                 <rect width="20" height="14" x="2" y="5" rx="2" />
//                 <path d="M2 10h20" />
//               </svg>
//               Card
//             </Label>
//           </div>
//           <div>
//             <RadioGroupItem
//               value="paypal"
//               id="paypal"
//               className="peer sr-only"
//             />
//             <Label
//               htmlFor="paypal"
//               className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
//             >
//               <Icons.paypal className="mb-3 h-6 w-6" />
//               Paypal
//             </Label>
//           </div>
//           <div>
//             <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
//             <Label
//               htmlFor="apple"
//               className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
//             >
//               <Icons.apple className="mb-3 h-6 w-6" />
//               Apple
//             </Label>
//           </div>
//         </RadioGroup>
//         <div className="grid gap-2">
//           <Label htmlFor="name">Name</Label>
//           <Input id="name" placeholder="First Last" />
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="number">Card number</Label>
//           <Input id="number" placeholder="" />
//         </div>
//         <div className="grid grid-cols-3 gap-4">
//           <div className="grid gap-2">
//             <Label htmlFor="month">Expires</Label>
//             <Select>
//               <SelectTrigger id="month">
//                 <SelectValue placeholder="Month" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="1">January</SelectItem>
//                 <SelectItem value="2">February</SelectItem>
//                 <SelectItem value="3">March</SelectItem>
//                 <SelectItem value="4">April</SelectItem>
//                 <SelectItem value="5">May</SelectItem>
//                 <SelectItem value="6">June</SelectItem>
//                 <SelectItem value="7">July</SelectItem>
//                 <SelectItem value="8">August</SelectItem>
//                 <SelectItem value="9">September</SelectItem>
//                 <SelectItem value="10">October</SelectItem>
//                 <SelectItem value="11">November</SelectItem>
//                 <SelectItem value="12">December</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="year">Year</Label>
//             <Select>
//               <SelectTrigger id="year">
//                 <SelectValue placeholder="Year" />
//               </SelectTrigger>
//               <SelectContent>
//                 {Array.from({ length: 10 }, (_, i) => (
//                   <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
//                     {new Date().getFullYear() + i}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="grid gap-2">
//             <Label htmlFor="cvc">CVC</Label>
//             <Input id="cvc" placeholder="CVC" />
//           </div>
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Button className="w-full">Continue</Button>
//       </CardFooter>
//     </Card>
//   )
// }


import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { UserAuthForm } from "@/app/examples/authentication/components/user-auth-form"


export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}









*********************************


"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
    </div>
  )
}