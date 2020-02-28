Rather than uploading the working code and making you, the reader, figure out the diff, I'll list the errors here.

## Compile Errors:
1. No Closing tag for DecreaseCounterButton on line 36 in index.js
2. No export statement in DecreaseButtonComponent.
3. Index.js is missing an import for DecreaseCounterButton

## Functionality Errors:
1. IncreaseCounter says this.handleClick, instead of this.props.handleClick.
2. increase_counter_button.js has quotes instead of brackets.
3. initial value is 10 instead of globalCounter.
