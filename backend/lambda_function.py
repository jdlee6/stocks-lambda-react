import requests
import json
import os

API_KEY = os.getenv('API_KEY')

def exception_handler(e):
    status_code = 400
    return {
        'statusCode': status_code,
        'body': json.dumps(str(e))
    }

def lambda_handler(event, context):
    ticker = event['queryStringParameters']['ticker']
    url = f"https://api.polygon.io/v2/aggs/ticker/{ticker}/range/1/day/2020-01-01/2020-12-31?apiKey={API_KEY}"

    try:
        response = requests.get(url)
        data = response.json()
        count = data['resultsCount']

        for i, result in enumerate(data['results']):
            if i == 0:
                max_price = result['h']
                min_price = result['l']
                max_vol = result['v']
                min_vol = result['v']
                sum_weighted_price = result['vw']
                sum_vol = result['v']

            if result['h'] > max_price:
                max_price = result['h']
            elif result['l'] < min_price:
                min_price = result['l']
            elif result['v'] > max_vol:
                max_vol = result['v']
            elif result['v'] < min_vol:
                min_vol = result['v']

            sum_weighted_price += result['vw']
            sum_vol += result['v']

        avg_weighted_price = sum_weighted_price / count
        avg_vol = sum_vol / count

        value = {
            "max_price": max_price,
            "min_price": min_price,
            "max_vol": max_vol,
            "min_vol": min_vol,
            "avg_weighted_price": avg_weighted_price,
            "avg_vol": avg_vol,
            "ticker": ticker
        }

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET'
            },
            'body': json.dumps(value)
        }
    except Exception as e:
        raise exception_handler(e)