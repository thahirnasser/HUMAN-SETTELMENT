/**
  * @constructor
  * @extends {ol.control.Control}
  * @param {Object=} opt_options Control options.
  */
 app.drawingapp= function(opt_options) {

   var options = opt_options || {};

   var button = document.createElement('button');
   button.innerHTML = 'N';

   var this_ = this;
   var startstopapp = function() {
    //  this_.getMap().getView().setRotation(0);
    alert ('you clicked control')
   };

   button.addEventListener('click', startstopapp , false);
   button.addEventListener('touchstart', startstopapp , false);

   var element = document.createElement('div');
   element.className = 'draw-app ol-unselectable ol-control';
   element.appendChild(button);

   ol.control.Control.call(this, {
     element: element,
     target: options.target
   });

 };
 ol.inherits(app.drawingapp, ol.control.Control);


 //
 // Create map, giving it a rotate to north control.
 //
