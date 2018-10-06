export function InjectDomElement(selector: string) {
  return function(target: any, propertyKey: string) {
    let element: JQuery;

    const getterFunction = function() {
      if (!element) {
        console.log(`Searching for element ${selector} -> ${propertyKey}`);
        element = $(selector);
      }

      return element;
    };

    Object.defineProperty(target, propertyKey, { get: getterFunction });
  };
}
