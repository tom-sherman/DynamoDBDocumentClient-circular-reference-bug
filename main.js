const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = DynamoDBDocumentClient.from(
  new DynamoDB({
    endpoint: "http://localhost:8000",
  })
);

const a = {
  toJSON() {
    return {
      a: "a",
    };
  },
};
a.a = a;

client.send(
  new PutCommand({
    TableName: "test",
    Item: a,
  })
);
