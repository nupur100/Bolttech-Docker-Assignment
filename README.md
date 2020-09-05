# Bolttech-Docker-Assignment

# Pre-requisites:

```
docker
docker-compose
```

# Application configurations:

```
Backend is written in Python (RESTful API were created using Flask)
Frontend is written in NodeJS and ReactJS
For Database: Integrated amazon DynamoDB Local (On port 8000) by using a docker image with all the DynamoDB local dependencies and necessary configuration built in.

```

# Running the app

### Execute the below command:

```
docker-compose up
```

# Accessing the application

*Backend api call*
```
"Get" call to get client names -> http://localhost:8089/clients/get_clients
"Post" call to add client name -> http://localhost:8089/clients/add_clients
```

*Frontend displaying the list of Clients in a tabular format*
```
http://localhost:8084 
```

## For "Post" call from Postman:

```
URL -> http://localhost:8089/clients/add_clients

Select "JSON" and give body like below:
{
"clientName": "Test-From-Postman"
}

```

*FYI: On executing docker-compose up, pulling the local dynamo db image step takes a bit of time due to the image size!*

***Note: This Application is also running on my Test server -> http://54.66.87.64:8084***
