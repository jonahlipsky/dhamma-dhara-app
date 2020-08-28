# Minimum Viable Product & Bonus

## MVPs
- Search bar that picks up a list of maintenance appliances.
- Map of the center. You can toggle different levels. 
  - CRUD (create, read, update, destroy) for naming of the rooms. 
- Maintenance appliances. Can select a maintenance appliance and have the room(s) where that appliance exists become highlighted across all levels (and buildings in bonus features). 
  - If you are looking at a level and the appliance exists on a different level as well, a notification should appear that says it also exists on those other levels. 
  - Videos, Google Docs. Selecting a maintenance appliance, you see a short description, and a link to a vimeo set of videos and a link to a google doc for information related to the appliance. 
- Authentication (log in / log out)
- Authorization (server / admin / superadmin access)
  - Admin role and viewer role. Admin can CRUD all of the objects in the system. Viewer can just view.
  - Superadmin role to manage the different centers and admins
- Centers. 
  - Different centers can be opened up and have separate data entirely including user roles and admin roles. 
    - Create a specification document so that a designer from a different center can create a set of SVG files autonomously, upload them, and have them appear correctly. 
- Item upload portal (upload a spreadsheet of maintenance items mapped to rooms)
- SVG upload portal (upload an SVG along with the building/level/room key spreadsheets)

## Bonus Features
- Map maintenance
- Enable / disable a user
- Email change workflow
- Search by rooms
- Reset password workflow
- Maintenance item sub-categories
- Buildings as different SVGs
- Zoom in the map
- Maintenance history
- Access to vimeo and google docs, google sheets, should be controlled by App if possible
- Pinpoint locations -- a location can be added to the map independent of the room that it is in. 
- Track recurring tasks and send notifications when they come due
- “Marauder’s Map” with GPS see where you are on the map in the center in real time
- Messages sent to other users
- Other types of objects other than maintenance ie housekeeping, etc
- Maintenance log - a place to log a maintenance operation i.e. if you serviced the water boiler, log that that happened. 
- Native application so that people can download
- Comments on items
