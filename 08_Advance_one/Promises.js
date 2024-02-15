const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task Completed");
    resolve();
  }, 1000);
});

promise.then(function () {
  console.log("Resolve is running");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Second Promise");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "dipson", email: "dipson@example.com" });
  }, 1000);
});

PromiseThree.then(function (user) {
  console.log(user);
});

const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "dipson", email: "dipson@example.com" });
    } else {
      reject("ERROR:Something went wrong.");
    }
  }, 1000);
});

PromiseFour.then((user) => {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("The promise is resolved or rejected."));

const PromiseFive = new promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "opop" });
    } else {
      reject("ERROR:JS went wrong.");
    }
  }, 1000);
});
