export function LogExecutionTime(timeFormat: String = 'ms') {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      const startTime = performance.now();

      console.log('='.repeat(50));
      console.log(`Method: ${propertyKey} , Params: ${JSON.stringify(args)}`);

      const methodReturn = originalMethod.apply(this, args);

      const endTime = performance.now();

      console.log(
        `Method: ${propertyKey} - Total executrion time: ${(endTime - startTime) /
          (timeFormat.toLocaleLowerCase() == 's' ? 1000 : 1)} ${timeFormat}`
      );

      return methodReturn;
    };

    return descriptor;
  };
}
