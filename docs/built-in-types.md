
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

This, for example, will check that the object is a `Person`, then it will call `name` on the object and check that the result is a `String`.

```ruby
_Constraint(Person, name: String)
```

### `_Descendant(T)`

Matches if the object is a module and is descendant of the module `T`. Remember classes are modules too.

### `_Enumerable(T)`

Matches if the object is an enumerable and all elements match the type `T`.

### `_Falsy`

Matches `nil` or `false`.

### `_Float(T)`

Matches if the object is a `Float` and also matches the type `T`.

```ruby
_Float(10..20)
```

### `_Frozen(T)`

Matches if the object is frozen and matches the type `T`.

### `_Hash(K, V)`

Matches if the object is a `Hash` where all keys match the type `K` and all values match the type `V`.
