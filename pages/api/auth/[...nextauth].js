import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import { Octokit } from "@octokit/core";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          scope: "repo user"
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken

      const octokit = new Octokit({
        auth: token.accessToken
      })
      const response = await octokit.request('GET /user/repos', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      let publicRepos = []
      let privateRepos = []
      response.data.forEach(repo => {
        if (repo.private)
          privateRepos.push(repo.full_name)
        else
          publicRepos.push(repo.full_name)
      })
      session.publicRepos = publicRepos
      session.privateRepos = privateRepos

      return session
    }
  }
})