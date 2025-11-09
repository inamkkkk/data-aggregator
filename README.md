# Data Aggregator Service

This is a Node.js service that fetches data from multiple APIs and combines it into a single response.

## Project Structure


data-aggregator/
├── server.js
├── routes/
│   └── api.js
├── controllers/
│   └── dataController.js
├── models/
│   └── combinedData.js
├── middlewares/
│   └── errorHandler.js
├── utils/
│   └── apiHelper.js
└── package.json


## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Navigate to the project directory:

    
    cd data-aggregator
    

3.  Install dependencies:

    
    npm install
    

## Configuration

Create a `.env` file in the root directory with the following variables:


API_URL_1=https://api.example.com/data1
API_URL_2=https://api.example.com/data2
PORT=3000


## Usage

Start the server:


npm start


Access the aggregated data endpoint:


GET http://localhost:3000/api/aggregate


## API Endpoints

*   `GET /api/aggregate`: Fetches data from multiple APIs and returns a combined response.

## Error Handling

Errors are handled by the `errorHandler.js` middleware and returned as JSON responses.

## Dependencies

*   express
*   axios
*   dotenv
