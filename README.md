angular-pick-a-color
====================
AngularJS directive for the pick-a-color JQuery plugin.

https://github.com/lauren/pick-a-color

Usage:
Include the ```'pickAColor'``` module in your application and use the following directive in your html. 
pick-a-color options can be placed in the definition as shown below.

```
<pick-a-color id="inputColor" ng-model="color" inline-dropdown="true"></pick-a-color>
```


To set default options, you can use the configuration provider in your apps config method -:

```
.config(function myAppConfig(pickAColorProvider) {
    pickAColorProvider.setOptions({
        inlineDropdown: true
    });
})
```
