import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="hover:bg-primary hover:bg-opacity-10 inline-flex items-center justify-center rounded-md border border-primary px-6 py-2 text-center font-medium text-primary lg:px-8 xl:px-10" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      {/* Not signed in <br /> */}
      <button className="hover:bg-primary hover:bg-opacity-10 inline-flex items-center justify-center rounded-md border border-primary px-6 py-2 text-center font-medium text-primary  lg:px-8 xl:px-10" onClick={() => signIn('github', { callbackUrl: `/` })}>Sign in</button>
    </>
  )
}