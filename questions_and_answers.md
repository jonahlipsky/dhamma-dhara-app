# Questions and answers

## Questions
### Architecture
- What does Vimeo need me to save on my video DB model in order to hook into their API? Is it simply a url? What about video series? 
  - Is it possible to do access control with Vimeo? If we keep the videos private on the actual vimeo account, could we then hook into them via API? 
  - Can we upload videos to Vimeo? 
  - Can we manage them organizationally via API? Is that too complicated? 
    - For an item, if we had one video, that could be a stand alone video. Then, once there is more than one video, it could automatically organize the videos into a video series? Can that be done via API?
- should there be a database row for every location in the svg?

### Backend
  - Is there a relationship between selected items and users, or is selected items only a frontend question until persisted to the DB?

### Frontend
  - Do we want to save selected information between sessions? Sort of the 'last state viewed'?
  - How do we represent parent locations in frontend state?

## Answered Questions

### Architecture
- What architectural decisions must be made from the beginning in order to be set up for a React native application?
  - Will there have to be multiple codebases -- one for Native application and one for a regular online app?
  - Answer: There will have to be separate UI components, at least, which will allow use on mobile platform. Apparently, it is not hard to add native functionality once you have the web app, since you can use much of the same React logic, adding some additions for the React Native styling and the Native version of DOM elements. 

### Backend
- How do we represent parent locations on the backend?
  - Answer: a location will have a parent id. That ID will correspond to another location in the same table. 

### Frontend