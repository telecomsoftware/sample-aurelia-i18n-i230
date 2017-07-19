# sample-aurelia-i18n-i230
Aurelia, JSPM 0.17, SystemJS 0.20 - utilizing aurelia-i18n

## Install packages

```
npm install
jspm install
typings install
```

## Compile, Serve, Run

```
gulp
```
(Default task)

## Steps to reproduce

* After above preparations, open the app in the browser (in most cases http://localhost:9100/).
* Open the browser console.
* Click on one of the __t__ in the box, a context menu (by Kendo UI) opens. Click somewhere else to close the menu.
* Click on _Toggle Panel_, the view changes and the __t__ become __thing__s without context menus.
* Click on _Toggle Panel_ again and examine the exception:

```
Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    at I18N.updateValue (http://localhost:9100/jspm_packages/npm/aurelia-i18n@1.6.2/i18n.js:221:20)
    at TCustomAttribute.bind (http://localhost:9100/jspm_packages/npm/aurelia-i18n@1.6.2/t.js:78:20)
    at Controller.bind (http://localhost:9100/jspm_packages/npm/aurelia-templating@1.4.2/aurelia-templating.js:3458:24)
    at View.bind (http://localhost:9100/jspm_packages/npm/aurelia-templating@1.4.2/aurelia-templating.js:1462:24)
    at If._runValueChanged (http://localhost:9100/jspm_packages/npm/aurelia-templating-resources@1.4.0/if.js:84:19)
    at If.valueChanged (http://localhost:9100/jspm_packages/npm/aurelia-templating-resources@1.4.0/if.js:39:31)
    at BehaviorPropertyObserver.selfSubscriber (http://localhost:9100/jspm_packages/npm/aurelia-templating@1.4.2/aurelia-templating.js:3702:48)
    at BehaviorPropertyObserver.call (http://localhost:9100/jspm_packages/npm/aurelia-templating@1.4.2/aurelia-templating.js:3568:14)
    at BehaviorPropertyObserver.setValue (http://localhost:9100/jspm_packages/npm/aurelia-templating@1.4.2/aurelia-templating.js:3548:18)
    at If.descriptor.set [as value] (http://localhost:9100/jspm_packages/npm/aurelia-templating@1.4.2/aurelia-templating.js:3657:43)
```
