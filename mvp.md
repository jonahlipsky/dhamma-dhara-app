# Minimum Viable Product & Bonus

## MVPs
  - Search bar that picks up a list of maintenance appliances.
  - Map of the center that can be zoomed into. You can toggle different levels. Should also be able to select a particular building and only view that building.
    - CRUD for naming of the rooms. The map should come with no baked in information. That should all be implemented by the Admin.
  - Maintenance appliances. Can select a maintenance appliance and have the room(s) where that appliance exists become highlighted across all levels and buildings. 
    - If you are zoomed into a level and the appliance exists on a different level as well, a notification should appear that says it also exists on those other levels. 
    - CRUD (create, read, update, destroy) for the maintenance appliance
  - Videos, Google Docs. Selecting a maintenance appliance, you see a short description, and a link to a vimeo set of videos and a link to a google doc for information related to the appliance. 
    - Also a link to a maintenance history
    - Access to vimeo and google docs, google sheets, should be controlled by App
  - Admin role and viewer role. Admin can CRUD all of the objects in the system. Viewer can just view.
  - Native application so that people can download
  - SVG upload portal

## Bonus Features
  - Centers. 
    - Create a specification document so that a designer from a different center can create a set of SVG files autonomously, upload them, and have them appear correctly. 
    - Different centers can be opened up and have separate data entirely including user roles and admin roles. 
  - Superadmin role to manage the different centers and admins
  - Track recurring tasks and send notifications when they come due
  - “Marauder’s Map” with GPS see where you are on the map in the center in real time
  - Messages sent to other users
  - Other types of objects other than maintenance ie housekeeping, etc
  - Maintenance log - a place to log a maintenance operation i.e. if you serviced the water boiler, log that that happened. 


