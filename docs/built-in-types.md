# Built in types

`Literal::Types` defines a number of built-in types that you can use. This module is included in `Literal::Properties`, `Literal::Object`, `Literal::Struct` and `Literal::Data` already.

Once you’ve created a type — which usually happens at boot time when a class is defined — you can use it as many times as you like with no runtime allocations.

## `_Any`

Matches any object apart from `nil`.

## `_Any?`

`_Nilable(_Any)`.

## `_Array(T)`

Matches an array where all elements match the type `T`.

## `_Array?(T)`

`_Nilable(_Array(T))`.

## `_Boolean`

Matches `true` or `false`.

## `_Boolean?`

`_Nilable(_Boolean)`.

## `_Callable`

Matches any object that responds to `call`.

## `_Callable?`

`_Nilable(_Callable)`.

## `_Class(T)`

Matches if the object is a class and is either the class `T` or a subclass of `T`.

## `_Class?(T)`

`_Nilable(_Class(T))`.

## `_Constraint(*T, **K)`

Matches if all of the given `T` types match and the object responds to each `K` key matching the corresponding type.

This, for example, will check that the object is a `Person`, then it will call `name` on the object and check that the result is a `String`.

```ruby
_Constraint(Person, name: String)
```

## `_Constraint?(*T, **K)`

`_Nilable(_Constraint?(*T, **K))`.

## `_Date(*T, **K)`

`_Constraint(Date, *T, **K)`

## `_Date?(*T, **K)`

`_Nilable(_Date(*T, **K))`

## `_Descendant(T)`

Matches if the object is a module and is descendant of the module `T`. Remember classes are modules too.

## `_Descendant?(T)`

`_Nilable(_Descendant(T))`.

## `_Enumerable(T)`

Matches if the object is an enumerable and all elements match the type `T`.

## `_Enumerable?(T)`

`_Nilable(_Enumerable(T))`.

## `_Falsy`

Matches `nil` or `false`.

## `_Float(T)`

Matches if the object is a `Float` and also matches the type `T`.

```ruby
_Float(10..20)
```

## `_Float?(T)`

`_Nilable(_Float(T))`.

## `_Frozen(T)`

Matches if the object is frozen and matches the type `T`.

## `_Frozen?(T)`

`_Nilable(_Frozen(T))`.

## `_Hash(K, V)`

Matches if the object is a `Hash` where all keys match the type `K` and all values match the type `V`.

## `_Hash?(K, V)`

`_Nilable(_Hash(K, V))`.

## `_Integer(T)`

Matches if the object is an `Integer` and also matches the type `T`.

```ruby
_Integer(18..)
```

## `_Integer?(T)`

`_Nilable(_Integer(T))`.

## `_Interface(*M)`

Uses `respond_to?` to check if the object implements all the `M` methods.

```ruby
_Interface(:name, :age)
```

## `_Interface?(*M)`

`_Nilable(_Interface(*M))`.

## `_Intersection(*T)`

Matches if all of the given `T` types match.

## `_Intersection?(*T)`

`_Nilable(_Intersection(*T))`.

## `_JSONData`

Matches any object that could have been parsed out from JSON, i.e. it came from `JSON.parse`.

## `_JSONData?`

`_Nilable(_JSONData)`.

## `_Lambda`

Matches a `Proc` where the `lambda?` predicate is _truthy_.

## `_Lambda?`

`_Nilable(_Lambda)`.

## `_Map(**K)`

Matches if the object maps each key to the corresponding type.

For example, this type:

```ruby
_Map(name: String, age: Integer)
```

Will check that `[:name]` matches `String` and `[:age]` matches `Integer`.

## `_Map?(**K)`

`_Nilable(_Map(**K))`.

## `_Never`

Matches nothing. It will always fail.

## `_Nilable(T)`

Matches `nil` or an object that matches the type `T`.

## `_Not(T)`

Matches if the object does not match the type `T`.

## `_Procable`

Matches any object that responds to `#to_proc`. This is essentially `_Interface(:to_proc)`.

## `_Procable?`

`_Nilable(_Procable)`.

## `_Range(T)`

Matches if the object is a `Range` of the given type `T`.

## `_Range?(T)`

`_Nilable(_Range(T))`.

## `_Set(T)`

Matches if the object is a `Set` where all elements match the type `T`.

## `_Set?(T)`

`_Nilable(_Set(T))`.

## `_String(*T, **K)`

Matches if the object is a `String` and all of the given `T` types match and the object responds to each `K` key matching the corresponding type. This is like `_Constraint(*T, **K)`, but it’s already constrained to strings.

```ruby
_String(length: 5..15)
```

If you don’t need to apply any constraints, you should just use `String`.

## `_String?(*T, **K)`

`_Nilable(_String(*T, **K))`.

## `_Symbol(*T, **K)`

Matches if the object is a `Symbol` and all of the given `T` types match and the object responds to each `K` key matching the corresponding type. Similar to `_Constraint` but specifically for symbols.

## `_Symbol?(*T, **K)`

`_Nilable(_Symbol(*T, **K))`.

## `_Time(*T, **K)`

`_Constraint(Time, *T, **K)`

## `_Time?(*T, **K)`

`_Nilable(_Time(*T, **K))`

## `_Truthy`

Matches any object apart from `nil` and `false`.

## `_Tuple(*T)`

Matches if the object is an array with the same number of elements as the given `T` types and each element matches the corresponding type.

## `_Tuple?(*T)`

`_Nilable(_Tuple(*T))`.

## `_Union(*T)`

Matches if any of the given `T` types match. For example, this will match if the object is either a `String` or a `Symbol`.

```ruby
_Union(String, Symbol)
```

## `_Union?(*T)`

`_Nilable(_Union(*T))`.

## `_Void`

Always matches. This will never fail, it’s the opposite of `_Never`.
