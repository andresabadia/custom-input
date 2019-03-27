# custom-input

## Web Component setup
### Add dependencies
Add the Vue.js library to the HTML file.
```
<script src="https://unpkg.com/vue"></script>
```

Include the idex-custom-input script. Download the script from [here](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#Browser_compatibility).
```
<script src="./idex-custom-input.js"></script>
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

## Browser compatibility
This Web component uses the `define()` method of the `CustomElementRegistry` interface to define the web component. The compatibility of this method is shown [here](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#Browser_compatibility).
