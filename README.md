# custom-input

## Web Component setup
### Add dependencies
Add the Vue.js library to the HTML file.
```
<script src="https://unpkg.com/vue"></script>
```

Include the idex-custom-input script. Download the script from [here](https://www.id-ex.de/examples/custom-input/idex-custom-input.js).
```
<script src="./idex-custom-input.js"></script>
```

## Using the Web Component
### Add custom Tag
```
<idex-custom-input></idex-custom-input>
```

### Add attributes
* type
    * text
    * email
    * password
    * number
    * button
    * message
* label
* height
* width
```
<idex-custom-input type="text" label="label" width="500"></idex-custom-input>
```

## Example HTML code
```
<meta charset="utf-8">
<title>idex-custom-input demo</title>
<script src="https://unpkg.com/vue"></script>
<script src="./idex-custom-input.js"></script>

<idex-custom-input type="text" label="Name"></idex-custom-input>
<idex-custom-input type="email" label="E-mail" width="250"></idex-custom-input>
<idex-custom-input type="password" label="Password" width="250"></idex-custom-input>
<idex-custom-input type="message" label="Message" height="200" width="350"></idex-custom-input>
<idex-custom-input type="button">Button</idex-custom-input>
```
See this example [here](https://www.id-ex.de/examples/custom-input/)

Modify this example in [JSFiddle](https://jsfiddle.net/andresabadia/cu8qnb5k/ "JSFiddle").

## Browser compatibility
This Web component uses the `define()` method of the `CustomElementRegistry` interface to define the web component. The compatibility of this method is shown [here](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#Browser_compatibility "MND web docs").
