/**
 * Created by chinook on 15-03-06.
 */
function WebWorker(taskUrl){
  if(typeof(Worker) !== 'undefined') {
    if(this.instance) {
      this.instance = new Worker(taskUrl);
    }
    this.instance.onmessage = function(event) {
      //resolve promise

    };
  } else {
    alert('Sorry! No Web Worker support.');
  }

}
