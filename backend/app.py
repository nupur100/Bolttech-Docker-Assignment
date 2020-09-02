from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import boto3
import json
app = Flask(__name__)
table_name = 'clientdetails'
CORS(app, support_credentials=True)
dynamodb_local = boto3.resource('dynamodb', endpoint_url="http://dynamodb:8000", region_name='ap-southeast-2')
dynamodb_client = boto3.client('dynamodb', endpoint_url="http://dynamodb:8000", region_name='ap-southeast-2')

# http://52.63.9.130:8000
# http://localhost:8000
CORS(app, support_credentials=True)
def create_table():
    table_name = 'clientdetails'
    existing_tables = dynamodb_client.list_tables()['TableNames']
    if table_name not in existing_tables:
        table = dynamodb_local.create_table(
            TableName='clientdetails',
            KeySchema=[
                {
                    'AttributeName': 'clientName',
                    'KeyType': 'HASH'  # Partition key
                }
            ],
            AttributeDefinitions=[
                {
                    'AttributeName': 'clientName',
                    'AttributeType': 'S'
                },

            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 10,
                'WriteCapacityUnits': 10
            }
        )
        return table
    return 'OK'

CORS(app, support_credentials=True)
def put_data():
    table = dynamodb_local.Table('clientdetails')
    response = table.put_item(
        Item={
            'clientName': 'Alex'
        }
    )
    return 'OK'

@cross_origin(supports_credentials=True)
def get_items():
    response= dynamodb_client.scan(
        TableName='clientdetails'
    )
    items= response['Items']
    return {'clients': items}

@app.route('/clients/get_clients', methods=['GET'])
@cross_origin(supports_credentials=True)
def getClients():
    # response= json.dumps(get_items())
    # response= jsonify(get_items())
    # response.headers.add('Access-Control-Allow-Origin', '*')
    # return jsonify(response)
    # {'clients': get_client()}
    data= get_items()
    return data

@app.route('/clients/add_clients', methods=['POST'])
@cross_origin(supports_credentials=True)
def addClients():
    # return json.dumps(clients)
    table = dynamodb_local.Table('clientdetails')
    req_data = request.get_json()
    name = req_data['clientName']
    response = table.put_item(
        Item={
            'clientName': name
        }
    )
    return response


if __name__ == "__main__":
    create_table()
    put_data()
    app.run(host="0.0.0.0", port=8089, debug=True)

