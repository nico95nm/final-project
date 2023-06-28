# Gaming Forum app

- Next.js + REST + Tailwind

## MVP

Please divide your features in 3 priorities

### Prio 1 (must features)

- Profile editing
  - predefined avatar support [-]
- Post a new Topic
- Commenting on the topic
- HTML support (html sanitizer)
- Integration with an html editor/ library/component [-]

### Prio 2 (nice to have features)

- Search feature
- Image upload (cloudinary)
- friends request

### Prio 3 (features for develop after the bootpcamp)

- Role creation
  - moderators
  - Admin
  - only read users
  - user rank
- email integration for password update and notifications

## Wireframes

TODO: create wireframes for the app

## Database Design

- create a database schema
  Please Create an API design as shown in the API lecture and define the endpoints

## Create An API design

TODO: api design
/api/topics/

- POST => topic
- GET => topic[]
  /api/topics/:id/comments
- GET =>
- POST =>
- DELETE =>

## Schedule

Once you have this tasks come back to a mentor/teacher for feedback

## Main functanalaty

1. Create Migration for Topics [-]
2. Create migration for TopicComments[-]
   3.Confrn that it exist in database[-]
   4.Create TopicForm in front end simmilar as AnnouncementForm[]
   if its go to topic page(ask)[]
3. Instide of TopicForm I need title of the topic and need user.id[]
   How do I get user.id? []
   " const cookieStore = cookies();
   const sessionToken = cookieStore.get('sessionToken');

const user = !sessionToken?.value
? undefined
: await getUserBySessionToken(sessionToken.value);
"
6.Create topic API endpoint(rout) []
7.create the topic []
8.database querry topic (same CreateUser) []
9.use querry on the topic rout []
10.display topics on the frontend. []
11.single topic page is the where to user to create a topic>> []
12.user id, topic id, user comment send to announcemnt rout []
