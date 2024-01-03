# github-bugtracker [ under-development ]
A bugtracker for projects stored in Github repositories. 

Users would be able to:
- Login and Connect their Github account
- Create projects corresponding to Repositories in their account
- In each project, send invites to collaborators in the Repository to join the platform and project.
- Create tickets for tasks/bugs and assign to any specific collaborator(s) to handle it.
- Keep an overview of the project for better development.

This project will be a big project comprising of different components essential in any production level project. The goal is to focus on learning a component by applying it to this project.

## Technologies and overall structure (upto present):
- Frontend: React, Redux, Rematch and NextJs
- Backend: Python, Django, GraphQL, Graphene. Django will handle connection to Database and queries will be made using GraphQL. Graphene helps integrate GraphQL with Django.
- Database: PostgreSQL

## Future thoughts:
- Deployment: Kubernetes, AWS, Terraform
- CI/CD: Jenkins
- Testing and Logging: ?
- Implementation of a Backend using gRPC and Golang microservices. Probably in a separate project or working side by side with Django.
