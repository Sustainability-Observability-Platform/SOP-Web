import NextAuth from "next-auth"

const handler = NextAuth({
  providers: [], // At minimum, you need to specify providers
})

export { handler as GET, handler as POST }