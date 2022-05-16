## Requirements

### Frontend
- react ^18.1.0
- react-redux ^8.0.1

### Backend
- python 3.9
- venv
- requests

### Warning in advance
- This repo involves AWS free tier so please avoid submitting multiple GET requests in a short interval of time
- A common error that I've been dealing with is this: `REPORT RequestId: d5ab3aff-f959-41cd-80fd-9b1ec1a5f2d8 Duration: 429.93 ms Billed Duration: 430 ms Memory Size: 128 MB Max Memory Used: 48 MB` 
## Running locally
Make sure the following are installed:
- Python3.9
- Node v15+
- Npm
- Git


#### 1. Clone the repository
`https://github.com/jdlee6/stocks-lambda-react.git`

#### 2. Install the required backend dependencies
a. `cd stocks-lambda-react/backend`

b. `virtualenv env`

c. `source env/bin/activate`

d. `pip install -r requirements.txt`


#### 3. (OPTIONAL - look at step 4c.) Build and deploy .zip as AWS 
a. Set environment variable for API_KEY that is used as the API_KEY for the api.polygon.io request 

    a. you can either set it up locally or via AWS Lambda config

b. Zip up the lambda function build by doing the following commands from `stocks-lambda-react/backend`:

- `cd env/lib/python3.9/site-packages zip -r ../../../../api-deployment-package.zip .`
- `cd ../../../../`
-  `zip -g api-deployment-package.zip lambda_function.py`

c. Log in to AWS Lambda and create a function and upload the .zip file 

d. Set up AWS API Gateway so that it points to your AWS Lambda function

e. Now you should be able to hit your AWS lambda via a API Gateway URL


#### 4. Install and run the frontend locally
a. `cd stocks-lambda-react/frontend`

b. `npm install`

c. Set environment variable within .env (need to create this file):
  `REACT_APP_API_URL=https://idcy94qvef.execute-api.us-west-2.amazonaws.com/fetchStock`

  ###### Note `frontend/src/api/constants` defines the dynamic `FETCH_STOCK_API_URL` but is dependent on environment variable `REACT_APP_API_URL`
  ###### Note this is the deployed aws lambda function that I've deployed on my free account 

d. `npm run start`