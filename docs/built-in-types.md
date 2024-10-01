
# Built in types

`Literal::Types` defines a number of built-in types that you can use. This module is included in `Literal::Properties`, `Literal::Object`, `Literal::Struct` and `Literal::Data` already.

### `_Any`

Matches any object apart from `nil`.

### `_Array(T)`

Matches an array where all elements match the type `T`.

### `_Boolean`

Matches `true` or `false`.

### `_Callable`

Matches any object that responds to `call`.

### `_Class(T)`

Matches if the object is a class and is either the class `T` or a subclass of `T`.

### `_Constraint(*T, **K)`

Matches if all of the given `T` types match and the object responds to each `K` key matching the corresponding type.

This for example will check that the object is a `Person`, then it will call `name` on the object and check that the result is a `String`.

```ruby
_Constraint(Person, name: String)
```
