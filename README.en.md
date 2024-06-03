## Project "Six Cities (simple)"

“Six Cities (simple)” is a simplified version of the service for travelers who do not want to overpay for rental housing. Choose one of six popular travel cities and get the latest list of rental offers.

## [1.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#task)Task

1.1. Develop an API service for the “Six Cities (simple)” project.

1.2. The service provides a REST API interface and a CLI interface.

2.1. Создание нового предложения.

2.2. Editing a proposal.

2.3. Removing an offer.

2.4. Receive a list of rental offers.

2.5. Receiving detailed information about the offer.

2.6. Get a list of comments for a proposal.

2.7. Adding a comment to a suggestion.

2.8. Creating a new user.

2.9. Login to the private part of the application.

2.10. Checking the user's status.

## [3.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#entity)Entities

### [3.1](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#user-entity)User

3.1.1. The user is represented by a set of information:

-   Name. Mandatory. Min. length 1 character, max. length 15 characters;
-   Email. Mandatory. Valid email address;
-   User avatar. Optional. User image in format`.jpg`or`.png`;
-   Password. Mandatory. Min. length 6 characters, max. length 12 characters;
-   User type. Mandatory. Possible options: regular, pro.

3.1.2. The application cannot have two users with the same email.

3.1.3. Avatar image. Optional. If the user has not uploaded an avatar, the service returns the default avatar image. The choice of default image is at the discretion of the student.

### [3.2.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#offer-entity)Rental offer

3.2.1. The rental offer is represented by a set of information:

-   Name. Mandatory. Min. length 10 characters, max. length 100;
-   Description of the offer. Mandatory. Min. length 20 characters, max. length 1024 characters;
-   Date of publication of the proposal. Mandatory.
-   City. Mandatory. One of six cities.
-   Image preview. Mandatory. Link to the image used as a preview;
-   Photos of housing. Mandatory. List of links to photos of housing. Always 6 photos;
-   Premium flag. Mandatory. A sign of a premium offer;
-   Rating. Mandatory. Number from 1 to 5. Numbers with commas are allowed (1 decimal place);
-   Housing type. Mandatory. One of the options:`apartment`,`house`,`room`,`hotel`;
-   Number of rooms. Mandatory. Min. 1, Max. 8;
-   Number of guests. Mandatory. Min. 1, Max. 10;
-   Rent price. Mandatory. Min. 100, Max. 100,000;
-   Facilities. Mandatory. List of amenities. One or more options from the list:`Breakfast`,`Air conditioning`,`Laptop friendly workspace`,`Baby seat`,`Washer`,`Towels`,`Fridge`;
-   [Author of the proposal](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#user-entity). Mandatory. Link to the “User” entity;
-   Number of comments. Calculated automatically;
-   Coordinates of the offer for rent. Mandatory. Coordinates are represented by latitude and longitude.

3.2.2. List of cities and their geographic coordinates:

-   Paris (latitude: 48.85661, longitude: 2.351499);
-   Cologne (latitude: 50.938361, longitude: 6.959974);
-   Brussels (latitude: 50.846557, longitude: 4.351697);
-   Amsterdam (latitude: 52.370216, longitude: 4.895168);
-   Hamburg (latitude: 53.550341, longitude: 10.000654);
-   Dusseldorf (latitude: 51.225402, longitude: 6.776314).

### [3.3.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#comment-entity)A comment

3.3.1. The comment is represented by a set of information:

-   Comment text. Mandatory. Min. length 5 characters, max. length 1024 characters;
-   Date the comment was published. Mandatory. When creating a comment, this field is not used;
-   Rating. Mandatory. Number from 1 to 5;
-   [Author of the comment](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#user-entity). Mandatory. Link to the “User” entity.

## [4.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#func)Functionality

### [4.1.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#cli)Command Line Interface

4.1.1. The application provides a Command Line Interface (CLI). To launch the CLI there is a separate script in `package.json` —`cli`.

4.1.2. The module responsible for launching the CLI contains the correct shebang.

4.1.3. The CLI supports argument processing:

-   `--version`. Displays information about the application version. Version information is read from `package.json`. Example output:`1.0.1`;
-   `--help`. Lists and describes all supported arguments. The design of the list is at the discretion of the student. An example of the design is shown below.

```jboss
Программа для подготовки данных для REST API сервера. Пример: cli.js --<command> [--arguments] Команды: --version: # выводит номер версии --help: # печатает этот текст --import <path>: # импортирует данные из TSV --generate <n> <path> <url> # генерирует произвольное количество тестовых данных
```

-   `--generate <n> <filepath> <url>`. Creates a file in tsv format with test data. Parameter`n`specifies the number of generated sentences. Parameter`filepath`specifies the path to save the file with suggestions. Parameter`<url>`specifies the address of the server from which data should be taken. Each line in the tsv file contains all the necessary information to create one rental offer (except comments).
-   `--import <filepath>`. Imports information from a tsv file into the database. The path to the file is passed in the parameter`filepath`.

4.1.4. Running the CLI without arguments causes the command to be executed`--help`.

### [4.2.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#rest)REST API

4.2.1. The application provides a REST API interface. The names of resources and routes are at the discretion of the student.

### [4.3.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#service)REST API service

4.3.1. The settings necessary for the launch and operation of the service are transferred using environment variables.

4.3.2. A list of all environment variables is given in the file`readme.md`, which is located at the project root. Description format:`PARAM=value — описание`.

4.3.3. For the convenience of transferring environment parameters, we use`.env`-files. They should not be stored in a version control system.

4.3.4. At the project root is located`.env.example`. It contains a list of all the environment variables needed for the application to run. The variables are set to default values ​​(for example use).

### [4.4.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#service-start)Starting the service

4.4.1. When starting, the service checks the list of installed environment variables. If some variable is not set, the service issues an error message and stops execution. The error information contains enough information to resolve the problem. For example: “The SERVER variable is not set.”

4.4.2. In file`readme.md`Provide a section “Starting a project” and describe in it detailed instructions for starting a project. The format of the description is at the discretion of the student.

4.4.3. In file`readme.md`in the "Scripts" section, list all the scripts available in `package.json`and describe their purpose.

> The file is located in the root directory of the project`docker-compose.yml`for quickly deploying a MongoDB database using Docker (if you use docker in your work).

## [5.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#resource)List of resources

### [5.1.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#create-offer)Create a new offer

5.1.1. The service provides a resource for creating new offers.

5.1.2. Only authorized customers can create offers.

5.1.3. To create a new rental offer, the client provides the information specified in paragraph[3.2](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#offer-entity), with the exception of fields that are calculated automatically.

5.1.4. Before creating an offer, the data received from the client is validated. If validation fails, the service returns an error and the correct status code. In this case, an offer is not created.

5.1.5. If the offer is created successfully, the service returns information about the created offer (offer object) in the response.

### [5.2.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#edit-offer)Editing an offer

5.2.1. The service provides a resource for editing a proposal.

5.2.2. Клиент может редактировать предложения по аренде, созданные им.

5.2.3. When you try to edit someone else's rental offer, the service returns an error and the correct status code.

5.2.4. To edit a rental offer, the client submits a complete set of information on the offer (with the exception of fields whose values ​​are calculated automatically) specified in paragraph[3.2](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#entity-offer), and the ID of the offer being edited.

5.2.5. The data received from the client is validated. If validation fails, the service returns error information and the correct status code.

5.2.6. If the offer update is successful, the service returns the updated offer object to the client.

5.2.7. Only authorized clients can edit rental offers.

### [5.3.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#delete-offer)Removing a rental offer

5.3.1. The service provides a resource for deleting rental offers. The client can only delete his own offers.

5.3.2. When a client tries to delete another user's offer, the service returns an error and the correct status code.

5.3.3. When you delete an offer, comments on the offer are automatically deleted.

5.3.4. Only authorized customers can delete offers.

### [5.4.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#get-offers)List of rental offers

5.4.1. By default, the service returns no more than`60`rental offers.

5.4.2. The client can request more proposals by specifying the desired quantity in the request parameter.

5.4.3. The service always returns a sorted list of offers by publication date (in descending order).

5.4.4. Suggestions do not contain a list of comments. Only information about their quantity. To request comments on a specific proposal, the service provides a separate resource.

5.4.5. The list of rental offers can be requested by anonymous and authorized clients.

5.4.6. List of returned offer fields: rental price, name, type of housing, publication date, city, image preview, Premium flag, rating, number of comments.

### [5.5.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#get-details-offer)Detailed information on the offer

5.5.1. The service provides a resource for obtaining detailed information on one sentence.

5.5.2. Information on the offer contains all the fields listed in paragraph[3.2](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#offer-entity), with the exception of fields that are calculated automatically.

5.5.3. Detailed information on the proposal includes information on the number of comments. The comments themselves are not included.

5.5.4. Detailed information on the offer can be requested by authorized and anonymous clients.

### [5.6.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#get-comments-for-offer)List of comments for the proposal

5.6.1. The service provides a resource for obtaining a list of comments for a specific proposal.

5.6.2. The service always returns a list of `50`(or less) recent comments.

5.6.3. Comments are sorted by publication date (descending). First new ones, then old ones.

5.6.4. A comment in the list is represented by a set of information listed in the paragraph[3.3](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#comment-entity).

5.6.5. Comments may be requested by authorized and anonymous customers.

### [5.7.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#add-comment-to-offer)adding a comment

5.7.1 The service provides a resource for adding comments to a specific rental offer.

5.7.2. Only authorized customers can add comments.

5.7.3. To add a new comment to the proposal, the client transmits the set of information specified in paragraph[3.3](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#comment-entity).

5.7.4. Before adding a comment, the service validates the data. In the event of a validation error, the service returns an error and the correct status code.

5.7.5. If a comment is successfully added, the service returns information about the created comment (comment object).

5.7.6. Deleting or editing comments is not provided.

### [5.8.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#create-user)Creating a new user

5.8.1. The service provides a resource for creating a new user.

5.8.2. To create a new user, the client sends a request and transmits the data specified in paragraph[3.1](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#user-entity).

5.8.3. Only anonymous clients can create new users.

5.8.4. The email of the created user is unique. There cannot be two users in the system with the same email.

5.8.5. Data received from the client is validated. If the check fails, the server returns an error and the correct status code.

5.8.6. If the user is successfully created, the service returns information about the created user (user object). The returned information does not contain sensitive data (such as a password).

5.8.7. The user's password is not stored in the database in clear form. Instead, a hash of the password is stored.

### [5.9](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#user-login)Login to the private part of the application

5.9.1. The service provides a resource for user authentication and authorization.

5.9.2. To enter the closed part of the application, the client provides the user's login (email) and password.

5.9.3. If the login or password is incorrect or the user does not exist, the server returns an error and the corresponding status code.

5.9.4. If the login and password are successfully verified, the service returns a token to the client.

5.9.5. The client uses this token to make any requests. The token is transmitted in headers.

### [5.10](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#user-check)Checking user status

5.11.1. The service provides a resource for checking the client's status - whether it is authorized or not.

5.11.2. The client's status is checked based on the session token.

5.11.3. If the client is authorized, the service returns the corresponding status code and information about the user (see paragraph[3.1](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#user-entity)). User information must not contain sensitive data (for example, a password).

## [6.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#validation)Validation

6.1. Data received from the client is checked before use (cast to the required type, identifiers for related entities are checked, and so on).

6.2. Data that does not satisfy the validation rules cannot be used to create or edit entities. In such situations, the service returns an error and the corresponding status code.

## [7.](https://up.htmlacademy.ru/nodejs-api/2/project/mistakes)Errors

7.1. If the request cannot be completed, the service returns an error or a list of errors to the client. The error response contains a description of the error and the corresponding status code.

7.2. The format for describing errors and their details are at the discretion of the student.

## [8.](https://up.htmlacademy.ru/nodejs-api/2/project/additional)Additionally

8.1. The REST API specification is presented in the OpenAPI format. The specification is saved in the directory`specification`(at the root of the project).  
8.2. YAML is used to describe the REST API specification.

## [9.](https://up.htmlacademy.ru/nodejs-api/2/project/six-cities-simple#requirements)Technical requirements

9.1. The project starts and works in the current version of Node.js.

9.2. TypeScript is used to develop the project.

9.3. MongoDB is used to store data.

9.4. Express.js is used to process requests from clients.

9.5. To work with large files (or files that have the potential to become large), Streams are used.

9.6. The code should not contain data that may change when transferred to the production environment. For example: access to connect to the DBMS, server address for receiving test data, and so on. All of the above data must be set through environment variables.

9.7. Replacement of packages not listed in the technical requirements is permitted by agreement with the mentor.
