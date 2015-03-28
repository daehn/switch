# switch

### Setup
In order to controll 433mhz transmitters connected to your Raspberry pi, switch uses [rcswitch-pi](https://github.com/r10r/rcswitch-pi) and [wiringpi](https://projects.drogon.net/raspberry-pi/wiringpi/download-and-install/).

You can `$ rake bootstrap` to install all necessary dependencies automatically,
alternativly you can install the node dependencies and submodules manually:

``` 
$ sudo npm install
$ git submodule init && git submodule update
```
Afterwards follow the instructions on how to build wiringPi and rcswitch-pi via the links above.

### Hardware

I'm using a 433Mhz transmitter like [this](http://www.amazon.com/receiver-Superregeneration-Wireless-Transmitter-Burglar/dp/B008A4UWK6). There are several good tutorials online on how to connect the transmitter to a Raspberry pi. I also will add a sketch for the connections to this readme soon. 

### Controlling the switches

To control a switch you need to pass the id, unit and state of the switch in the request body. An example
__POST__ request JSON body to controll a switch looks like this:

```json
{
  "id" : "10110",
  "unit" : "1",
  "on" : true
}
```

At the moment there is no authentification, so anyone in your network could control the app. This could easily be changed by adding Passport or something similar.
