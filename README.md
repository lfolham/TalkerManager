👨🏼‍💻 Task
- Create a speaker registration application where it will be possible to register, view, search, edit, and delete information. For this purpose, an API following the CRUD (Create, Read, Update, Delete) pattern was developed to manipulate speaker data. The fs module of Node.js was used to read and write data to a file. As a result, the created endpoints provide the necessary functionalities to dynamically and efficiently manage speaker information.

📝 Features
- List speakers: GET endpoint /talker that returns a list of all speakers registered in the system. If there are no registered speakers, it returns an empty array.
- Get speaker by ID: GET endpoint /talker/:id that returns a specific speaker based on the ID passed in the URL. If the ID is not found, it returns a 404 status with a message indicating that the speaker was not found.
- Login: POST endpoint /login that receives an email and password and returns a randomly generated 16-character token.
- Validate login: The /login endpoint should validate if the fields received in the request are valid. If they are not valid, it returns a 400 status with the respective error message.
- Add speaker: POST endpoint /talker that allows adding a new speaker.
- Edit speaker: PUT endpoint /talker/:id that allows editing the information of an already registered speaker based on the ID passed in the URL.
- Delete speaker: DELETE endpoint /talker/:id that allows deleting an already registered speaker based on the ID passed in the URL.
- Search speaker by term: GET endpoint /talker/search?q=searchTerm that returns a list of speakers that contain the term passed in the URL.
- Search speaker by rating: GET endpoint /talker/search?rate=rateNumber that returns a list of speakers with the rating passed in the URL.
- Search speaker by date: GET endpoint /talker/search?date=watchedDate that returns a list of speakers with the presentation date passed in the URL.
- Rate speaker: PATCH endpoint /talker/rate/:id that allows rating an already registered speaker based on the ID passed in the URL.
- List speakers from the database: GET endpoint /talker/db that returns a list of all speakers registered in the database. If there are no registered speakers, it returns an empty array.

💡 Technologies Used
- Node
- Express
- MySQL
- JavaScript
