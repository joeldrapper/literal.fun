# Comparison with dry-rb

Literal plays a similar role to the `dry-rb` family of gems, but there are a number of key differences. This is an overview of some of these differences from Literal’s perspective.

## Types

dry-rb types are objects that encapsulate not just a type but also a default value, fallback value, coercion strategy and failure strategy.

It’s quite difficult to do a direct comparison between dry-rb and Literal types since in Literal, a type is just an interface. Any object that responds to `===(object)` with a _booleanish_ return value is a type predicated by that method.

### Literal types are native to Ruby

Because Literal uses the `===` interface, it supports all the native types that ship with Ruby. Additionally, any type designed for Literal will also work with native Ruby features such as case statements, pattern matching, `Enumerable#all?` and `Enumerable#any?`.

So in Literal, you don’t need to use `Types::Nominal::String` or `Types::Strict::String`. You can just use `String` since `String` itself is a type already.

### Literal has unit types by default

Because almost every object in Ruby responds to `===`, almost every object is already a Literal type. Of these objects, some have special behaviour as a type, but most are just unit types.

The integer `1` is a type that contains exactly one value: `1` and nothing else. The string `"hello"` is a type that contains exactly one value: `"hello"`. It’s the same for symbols, floats, arrays, hashes, etc.

### Making your own types

In Literal, you’re constantly making your own types without even thinking about it.

1. When you define a class, that’s a type. Any instance of that class or a subclass of that class is a member of that type.
2. When you define a module, that’s a type. Any instance of a class that includes that module is a member of that type.
3. When you create an object, that’s a type. `Object#===` gives you a default implementation of `===` which checks for equality so by default all your objects are unit types of themselves.
4. When you create a `Proc`, that’s a type. `Proc#===` is an alias for `Proc#call`.
5. When you define `===` as an instance method, class method, module method, or singleton method, you’re defining a type or perhaps even a type constructor.
6. Finally, one last way you can create types is by composing Literal’s library of type constructors. For example, you could say `Stringy = _Union(String, Symbol)`. Now `Stringy` is a type.

### Literal types compose

Literal types have only the one interface, but you can compose type constructors to create more complex types. Let’s look at an example:

```ruby
MyType = _Nilable(
  _String(
    length: 5..10
  )
)
```

How many types do you see? Let’s start at the top:

1. `MyType` is a type, or at least it will be after this constant assignment.
2. `_Nilable` is a type constructor that takes a type argument and returns a new type that can be either that type or `nil`.
3. `_String` is a type constructor that takes constraints and returns a new type that must be a String and must match those constraints.
4. `5..10` is a type. The `_String` type calls the method `length` on the object and then uses the `===` method on the range type `5..10` to confirm that the string’s length is between `5` and `10`.

::: tip
A type constructor or _generic_ is just a function that returns a type. The function can take arguments and return a type parameterized by those arguments.
:::

### Literal types are highly optimized

All built-in type constructors are highly optimized and designed to do zero allocations at check-time. Additionally, some types use tricks to optimise performance without sacrificing correctness. For example, a union type uses a hash map to optimise type checking when some of its types are primitive unit types.

## Properties

## Structs

## Other features in dry-rb

## Other features in Literal
