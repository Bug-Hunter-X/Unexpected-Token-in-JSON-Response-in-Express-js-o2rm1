# Unexpected Token in JSON Response in Express.js

This repository demonstrates a common yet tricky error in Express.js applications: encountering an unexpected token during a JSON response. The error message itself often lacks context, making debugging challenging.

## Problem

The `bug.js` file contains an Express.js server with an endpoint that attempts to send a JSON response. However, due to improper data formatting (which might not always be apparent), the server throws an 'Unexpected token' error in the JSON response.  This scenario highlights the importance of robust error handling and data validation in Express.js.

## Solution

The `bugSolution.js` provides a corrected version of the server.  Proper JSON data structure and careful handling of potential errors are crucial in preventing this type of issue.   The solution ensures that data sent as a JSON response is accurately formatted, thereby avoiding the 'Unexpected token' error.

## How to run

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `npm install` to install the dependencies.
4. Run `node bug.js` to see the error. 
5. Run `node bugSolution.js` to see the correct response.