# Posthuset Menu API

## Introduction

This simple node app scrapes the posthuset.eurest.no website and extracts what's for lunch for the current day.  It then uses express to host a simple API endpoint which you can GET the data from.

The endpoint is currently available at https://posthuset-lunch.azurewebsites.net/

## Calling the API

### Request
```
GET https://posthuset-lunch.azurewebsites.net HTTP/1.1
```

### Response
```
{
    lunch:
    [
        "Kyllinglår med ris og grønnsakker",
        "Kjøttkaker med stekte poteter og ertestuing"
        ...
    ]
}
```

## Development

### Prerequisites
You must have node installed on your local machine in order to run the application locally.

### Running the application

Simply run the following command to start the application.

```
node index.js
```

and then navigate to http://localhost:8080.
