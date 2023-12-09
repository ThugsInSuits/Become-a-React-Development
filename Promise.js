document.body.innerHTML = `
<input type="text" class="js-textfield" />
<button class="js-button">
  Enable the Textfield
</button>` +
document.body.innerHTML;

let parse = function(response) {
  let element = document.querySelector('.js-names');
  element.innerHTML = JSON.parse(response).map(element => element.name).join(',');

}

let errorHandler = function () {
  console.log('error');
}

new Promise(function (resolve,reject) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      resolve(this.response);
    }
  }
  request.onerror = function () {
    reject(new Error(this.statusText));
  }

  request.open('GET','http://jsonplaceholder.typicode.com/users');
  request.send();
}).then(parse).catch(errorHandler);

