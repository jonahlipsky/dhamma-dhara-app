# Authentication

This document is related to the architecture for session authentication in the Dhamma Maintenance App.

## Introduction

Authentication should not slow down a users interaction with the app. Additionally, in the early phases of the project, there will be very few people using the app. They will all be trusted dhamma workers. During this phase, session authentication may not be necessary. Immediately once we start including the app for users who are not long-term dhamma workers, we will need authentication and the ability to log in / log out. That is because the url will be available to a wider group so there will have to be some safety precautions. Additionally, we are going to split the functionality between 'admin', 'servers' and 'superadmin'. 

## Roles 

- The superadmin role is for the creation of regular admins and for the creation of new users. In the early phases of the project, this role will be unnecessary. Only once we start adding new centers will it become relevant.
- The admin role is the role that can edit data on the app. It can create, edit and delete all information on the app.
- The server role is a read-only role. It can access all data on the app, but it can't edit any of it. 

## Architecture

It remains to be decided how exactly to execute session authentication. Some packages that may be useful include: express-session, jwt-express, or passport. There may be other options as well. 

It also remains to be designed how a user is going to low in and how it will look differently to a user that is logged in as one of the different levels of user. 

## Questions

- How can I store a session token in the client's session? What do I need to do to store that session token?
- What do I need to do in order to validate the session token on every request once the user is logged in?
- What do I need to do to verify a user's identity using their login credentials and then create a login token?
