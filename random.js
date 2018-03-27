'use strict';

module.exports.string = (event, context, callback) => {
  
  let str = "";
  const source = "abcdefghijklmnopqrstuvwxyz";
  let size = 5;

  for (let i=0; i<size; i++) {
    str = str + source.charAt(Math.floor(Math.random() * source.length));
  }
  const response = {
    body: {
      error: null,
      response: str
    }
  }
  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.number = (event, context, callback) => {
  
  let num = "";
  const source = "0123456789";
  let size = 5;

  for (let i=0; i<size; i++) {
    num = num + source.charAt(Math.floor(Math.random() * source.length));
  }
  const response = {
    body: {
      error: null,
      response: num
    }
  }
  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
