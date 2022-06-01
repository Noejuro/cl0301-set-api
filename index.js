console.log(`
Set() Creates a new Set object. new Set([1, 2, 3, 4, 5])
Set.prototype.size Returns the number of (unique) elements in a Set object. set1.size
Set.prototype.add() Appends a new element with a specified value to the end of a Set object. set1.add(42); set1.add(13);
Set.prototype.clear() Removes all elements from a Set object. set1.clear();
Set.prototype.delete() Removes a specified value from a Set object, if it is in the set. set1.delete(item);
Set.prototype.entries() Returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. set1.entries(); 
Set.prototype.forEach() Executes a provided function once for each value in the Set object, in insertion order. new Set(['foo', 'bar', undefined]).forEach(logSetElements);
Set.prototype.has() Returns a boolean indicating whether an element with the specified value exists in a Set object or not. set1.has(1)
Set.prototype.values() Returns a new Iterator object that contains the values for each element in the Set object in insertion order. set1.values()
`)