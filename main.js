const { DynamoDB } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const tryThenLog = async (fn) => {
  try {
    await fn();
  } catch (e) {
    console.error(e);
  }
};

const client = DynamoDBDocumentClient.from(
  new DynamoDB({
    endpoint: "http://localhost:8000",
  })
);

async function main() {
  const a = {
    toJSON() {
      return {
        a: "a",
      };
    },
  };
  a.a = a;

  console.log("With toJSON:\n");

  try {
    await client.send(
      new PutCommand({
        TableName: "test",
        Item: a,
      })
    );
  } catch (e) {
    console.error(e);
  }

  console.log("\n\nWithout toJSON:\n");

  const b = {};
  b.b = b;

  try {
    await client.send(
      new PutCommand({
        TableName: "test",
        Item: b,
      })
    );
  } catch (e) {
    console.error(e);
  }
}

main();
