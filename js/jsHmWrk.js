var x = 9;
function myFunction() 
{ 
    return x * x; 
}

window.onload = function () {
    function job(state) {
        return new Promise(function(resolve, reject) {
        if (state) {
        resolve('success');
        } else {
        reject('error');
        }
        });
        }
        let promise = job(true);
        promise.then(function(data) {
        console.log(data);
        return job(false);})
        .catch(function(error) {
        console.log(error);
        return 'Error caught';
        });
}