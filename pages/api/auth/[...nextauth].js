import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import { Octokit } from "@octokit/core";

export const authOptions = {
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
        if (!repo.fork) {
          if (repo.private)
            privateRepos.push(repo.full_name)
          else
            publicRepos.push(repo.full_name)
        }
      })
      session.publicRepos = publicRepos
      session.privateRepos = privateRepos

      return session
    }
  }
}

export default NextAuth(authOptions)


/*

{
                "id": 584916213,
                "node_id": "R_kgDOIt0c9Q",
                "name": "GameJam",
                "full_name": "ananyapromi3/GameJam",
                "private": true,
                "owner": {
                    "login": "ananyapromi3",
                    "id": 74833083,
                    "node_id": "MDQ6VXNlcjc0ODMzMDgz",
                    "avatar_url": "https://avatars.githubusercontent.com/u/74833083?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/ananyapromi3",
                    "html_url": "https://github.com/ananyapromi3",
                    "followers_url": "https://api.github.com/users/ananyapromi3/followers",
                    "following_url": "https://api.github.com/users/ananyapromi3/following{/other_user}",
                    "gists_url": "https://api.github.com/users/ananyapromi3/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/ananyapromi3/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/ananyapromi3/subscriptions",
                    "organizations_url": "https://api.github.com/users/ananyapromi3/orgs",
                    "repos_url": "https://api.github.com/users/ananyapromi3/repos",
                    "events_url": "https://api.github.com/users/ananyapromi3/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/ananyapromi3/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "html_url": "https://github.com/ananyapromi3/GameJam",
                "description": null,
                "fork": false,
                "url": "https://api.github.com/repos/ananyapromi3/GameJam",
                "forks_url": "https://api.github.com/repos/ananyapromi3/GameJam/forks",
                "keys_url": "https://api.github.com/repos/ananyapromi3/GameJam/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/ananyapromi3/GameJam/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/ananyapromi3/GameJam/teams",
                "hooks_url": "https://api.github.com/repos/ananyapromi3/GameJam/hooks",
                "issue_events_url": "https://api.github.com/repos/ananyapromi3/GameJam/issues/events{/number}",
                "events_url": "https://api.github.com/repos/ananyapromi3/GameJam/events",
                "assignees_url": "https://api.github.com/repos/ananyapromi3/GameJam/assignees{/user}",
                "branches_url": "https://api.github.com/repos/ananyapromi3/GameJam/branches{/branch}",
                "tags_url": "https://api.github.com/repos/ananyapromi3/GameJam/tags",
                "blobs_url": "https://api.github.com/repos/ananyapromi3/GameJam/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/ananyapromi3/GameJam/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/ananyapromi3/GameJam/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/ananyapromi3/GameJam/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/ananyapromi3/GameJam/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/ananyapromi3/GameJam/languages",
                "stargazers_url": "https://api.github.com/repos/ananyapromi3/GameJam/stargazers",
                "contributors_url": "https://api.github.com/repos/ananyapromi3/GameJam/contributors",
                "subscribers_url": "https://api.github.com/repos/ananyapromi3/GameJam/subscribers",
                "subscription_url": "https://api.github.com/repos/ananyapromi3/GameJam/subscription",
                "commits_url": "https://api.github.com/repos/ananyapromi3/GameJam/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/ananyapromi3/GameJam/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/ananyapromi3/GameJam/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/ananyapromi3/GameJam/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/ananyapromi3/GameJam/contents/{+path}",
                "compare_url": "https://api.github.com/repos/ananyapromi3/GameJam/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/ananyapromi3/GameJam/merges",
                "archive_url": "https://api.github.com/repos/ananyapromi3/GameJam/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/ananyapromi3/GameJam/downloads",
                "issues_url": "https://api.github.com/repos/ananyapromi3/GameJam/issues{/number}",
                "pulls_url": "https://api.github.com/repos/ananyapromi3/GameJam/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/ananyapromi3/GameJam/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/ananyapromi3/GameJam/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/ananyapromi3/GameJam/labels{/name}",
                "releases_url": "https://api.github.com/repos/ananyapromi3/GameJam/releases{/id}",
                "deployments_url": "https://api.github.com/repos/ananyapromi3/GameJam/deployments",
                "created_at": "2023-01-03T21:07:37Z",
                "updated_at": "2023-01-05T07:31:30Z",
                "pushed_at": "2023-01-05T18:13:36Z",
                "git_url": "git://github.com/ananyapromi3/GameJam.git",
                "ssh_url": "git@github.com:ananyapromi3/GameJam.git",
                "clone_url": "https://github.com/ananyapromi3/GameJam.git",
                "svn_url": "https://github.com/ananyapromi3/GameJam",
                "homepage": null,
                "size": 1617,
                "stargazers_count": 0,
                "watchers_count": 0,
                "language": "GDScript",
                "has_issues": true,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": false,
                "has_pages": false,
                "has_discussions": false,
                "forks_count": 0,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 0,
                "license": null,
                "allow_forking": true,
                "is_template": false,
                "web_commit_signoff_required": false,
                "topics": [],
                "visibility": "private",
                "forks": 0,
                "open_issues": 0,
                "watchers": 0,
                "default_branch": "master",
                "permissions": {
                    "admin": false,
                    "maintain": false,
                    "push": true,
                    "triage": true,
                    "pull": true
                }
            },

*/