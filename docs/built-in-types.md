
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

### `_Integer(T)`

Matches if the object is an `Integer` and also matches the type `T`.

```ruby
_Integer(18..)
```

### `_Interface(*M)`

Uses `respond_to?` to check if the object implements all the `M` methods.

```ruby
_Interface(:name, :age)
```

### `_Intersection(*T)`

Matches if all of the given `T` types match.

### `_JSONData`

Matches any object that could have been parsed out from JSON, i.e. it came from `JSON.parse`.

### `_Lambda`

Matches a `Proc` where the `lambda?` predicate is *truthy*.

### `_Map(**K)`

Matches if the object maps each key to the corresponding type.

For example, this type:

```ruby
_Map(name: String, age: Integer)
```

Will check that `[name]` matches `String` and `[age]` matches `Integer`.

### `_Never`

Matches nothing. It will always fail.

### `_Nilable(T)`

Matches `nil` or an object that matches the type `T`.

### `_Not(T)`

Matches if the object does not match the type `T`.

### `_Procable`

Matches any object that responds to `to_proc`.

### `_Range(T)`

Matches if the object is a `Range` of the given type `T`.

### `_Set(T)`

Matches if the object is a `Set` where all elements match the type `T`.

### `_String(*T, **K)`

Matches if the object is a `String` and all of the given `T` types match and the object responds to each `K` key matching the corresponding type. Similar to `_Constraint` but specifically for strings.

```ruby
_String(length: 5..15)
```

If you don’t need to apply any constraints, you should just use `String`.

### `_Symbol(*T, **K)`

Matches if the object is a `Symbol` and all of the given `T` types match and the object responds to each `K` key matching the corresponding type. Similar to `_Constraint` but specifically for symbols.

### `_Truthy`

Matches any object apart from `nil` and `false`.

### `_Tuple(*T)`

Matches if the object is an array with the same number of elements as the given `T` types and each element matches the corresponding type.

### `_Union(*T)`

Matches if any of the given `T` types match. For example, this will match if the object is either a `String` or a `Symbol`.

```ruby
_Union(String, Symbol)
```

### `_Void`

Always matches. This will never fail, it’s the opposite of `_Never`.
