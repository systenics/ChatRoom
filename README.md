# ChatRoom

NodeJS based Text, Image, File Real Time Chat Room.

[**You can see the live demo here**](http://chat.systenics.com)

  - Provides chat messaging using socket.io
  - Allows file sharing of image,doc,pdf,excel,text and mp3.
  - Periodic file deletion to save server space.
  - Quick messaging and file sharing using formadible  


>ChatRoom is a messaging and file sharing project based on angularjs and  node.js which allows users to just enter username(nickname) and start using chat messenger:

### Installation

You need node,npm and bower installed globally:

- Step1: Clone ChatRoom repository locally
```sh
$ git clone https://github.com/systenics/ChatRoom.git 
```
- Step2: cd into cloned directory <Ex : ChatRoom/> 

- Step3: install dependencies using commands 
```sh
$ sudo npm install
```
```sh
$ bower install
```
```sh
- Step4: cd into <your_app_directory/public/app/js/> and edit app.js 
  set $rootScope.baseUrl to <http://your_ip_address:8282>
  set $socketProvider.setConnectionUrl('http://your_ip_address:8282')
```

```sh
- Step5: run project using node app.js in terminal  
```

```sh
- Step6: go to your browser and enter url <http://your_ip_address:8282>
```

> File shared among users will be stored in /public/app/upload
> in respective doc, music and image directory.
> The files in upload directory are stored with some expiry time (8 hours),
> the files will be deleted after expiry time.
> The routine_cleanup function deletes files after every one hour.  

> you can change the file expiry time by changing variable expiryTime
> and routine cleanup time by changing variable routineTime in app.js.

### Version
0.0.1

### Tech

ChatRoom uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Bootstrap] - great UI boilerplate for modern web apps
* [AdminLTE] - great UI based on bootstrap
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [jQuery] - javascript library
* [lightbox] - javascript plugin for image pop-ups 

And of course ChatRoom itself is open source with a [public repository](https://github.com/systenics/ChatRoom) on GitHub.

License
----

MIT

### Contact
- [**www.systenics.com**](http://www.systenics.com)
- [**Other Systenics repositories**](https://github.com/systenics)
