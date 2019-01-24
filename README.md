# Events JS

Send and receive information by events indepedent of the framework you use.

## Depdencies

  [Backbone](http://ivannikolic.com)

## Install

```sh
bower install events-js --save
```

## Usage

Simple send and receive information. 

```js
//listener information
Events.listenTo("myListener", function(data){
  console.log(data);
});

//send information
Events.trigger("myListener", {foo: "bar" });
```

## API

### listenTo(eventId, listener)

Resume: Listener when a trigger is run.

eventId: Comunication id between trigger and listener.

listener: Function than receive infromation.
 

### trigger(eventId, data)

Resume: Send de message to listener.

eventId: Comunication id between trigger and listener.

data: information to send to listener(s). The any format like, but the most used is String or JSON.

### remove(eventId)

Resume: Remove all listeners.

### createId()

Resume: Create a generic idEvent.

return: IdEvent



## License

MIT
