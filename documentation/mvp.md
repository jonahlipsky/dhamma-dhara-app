# Minimum Viable Product & Bonus Features

## MVPs
- Search bar that picks up a list of maintenance appliances.
- Map of the center. You can toggle different levels. 
  - CRUD (create, read, update, destroy) for naming of the rooms. 
- Maintenance appliances. Can select a maintenance appliance and have the room(s) where that appliance exists become highlighted across all levels. 
  - If you are looking at a level and the appliance exists on a different level as well, a visual notification should indicate it also exists on those other levels. 
  - Videos, Docs. Selecting a maintenance appliance, you see a short description, and a link to videos and/or documents for information related to the appliance. 
- Authentication (log in / log out)
- Authorization (server / admin / superadmin access)
  - Superadmin, admin and server role. Admin can CRUD all of the objects in the system. Viewer can just view.
  - Superadmin role to manage the different centers and admins
- Centers. 
  - Different centers can be opened up and have separate data entirely including user roles and admin roles. 
    - Create a specification document so that a designer from a different center can create a set of SVG maps autonomously, upload them, and have them appear correctly. 
- Item upload portal (upload a spreadsheet of maintenance items mapped to rooms)
- SVG upload portal (upload an SVG along with the building/level/room naming key spreadsheets)
- Reset password workflow (a user can reset their password)
- Email change workflow (a user can change their primary email for their account)

## Bonus Features
- Map maintenance (edit and update the map)
- Admin can enable / disable a user
- Search by rooms (can search by room as well as by maintenance item)
- Maintenance item sub-categories (maintenance items can be filtered by sub-category)
- Ability to zoom in the map
- Pinpoint locations -- a location can be added to the map independent of the room that it is in. 
- Comments on items (a user can add comments to a maintenance item.)

## Other Ideas
- Maintenance history
- Access to vimeo and google docs, google sheets, should be controlled by App if possible
- “Marauder’s Map” with GPS see where you are on the map in the center in real time
- Track recurring tasks and send notifications when they come due
- Messages sent to other users
- Other types of objects other than maintenance ie housekeeping, etc
- Maintenance log - a place to log a maintenance operation i.e. if you serviced the water boiler, log that that happened. 
- Native application so that people can download
