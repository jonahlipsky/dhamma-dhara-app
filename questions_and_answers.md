# Questions and answers

## Questions
### Architecture
- What does Vimeo need me to save on my video DB model in order to hook into their API? Is it simply a url? What about video series? 
  - Is it possible to do access control with Vimeo? If we keep the videos private on the actual vimeo account, could we then hook into them via API? 
  - Can we upload videos to Vimeo? 
  - Can we manage them organizationally via API? Is that too complicated? 
    - For an item, if we had one video, that could be a stand alone video. Then, once there is more than one video, it could automatically organize the videos into a video series? Can that be done via API?
- How can we support websocket updates for multiple sessions using the same app in the same center?

### Backend
- Should there be a relationship between multiple and specific items i.e. water boilers and water boiler in men's residence A?

### Frontend
- How do we represent parent locations in frontend state?

## Answered Questions
### Architecture
- What architectural decisions must be made from the beginning in order to be set up for a React native application?
  - Will there have to be multiple codebases -- one for Native application and one for a regular online app?
  - Answer: There will have to be separate UI components, at least, which will allow use on mobile platform. Apparently, it is not hard to add native functionality once you have the web app, since you can use much of the same React logic, adding some additions for the React Native styling and the Native version of DOM elements. 
    - https://www.cognitiveclouds.com/insights/what-is-the-difference-between-react-js-and-react-native/
    - https://reactnative.dev/docs/tutorial

### Backend
- How do we represent parent locations on the backend?
  - Answer: a location will have a parent id. That ID will correspond to another location in the same table. 
- Is there a relationship between selected items and users, or is selected items only a frontend question until persisted to the DB?
  - Answer: There's no relationship between user and select item. The admin will be the only one to select an item and persist it to the database.
- should there be a database row for every location in the svg?
  - Answer: The backend doesn't need to know about the locations in the SVG until there is a selection that is persisted to the DB.

### Frontend
- Do we want to save selected information between sessions? Sort of the 'last state viewed'?
  - Answer: This is a nice to have.