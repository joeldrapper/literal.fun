# Literal arrays <Badge type="warning">edge</Badge>

::: tip
This feature is not yet released. You can see the current in-progress implementation [here](https://github.com/joeldrapper/literal/blob/main/lib/literal/array.rb) and follow the issue [here](https://github.com/joeldrapper/literal/issues/134). Contributions are very welcome.
:::

The `_Array(T)` type can be used to check that an object is an `Array` and all of its elements match the type `T`, but after checking that, there’s nothing to prevent you from unintentionally inserting an invalid element.

Using `_Array(T)` is a good start, but you can take take things further. `Literal::Array(T)` is an object that behaves like an `Array` but continues to maintain the type `T` throughout its lifetime.

## Creating a Literal array

You can create a `Literal::Array(T)` like this:

```ruby
array = Literal::Array(String).new
```

You can also pass in an initial set of elements:

```ruby
array = Literal::Array(String).new("Hello", "World")
```

## Mapping

When mapping a `Literal::Array(T)`, you need to pass in the type for the new Literal::Array.

```ruby
array = Literal::Array(String).new("Hello", "World")

mapped = array.map(Integer) do |it|
  it.length * 10
end
```

`mapped` here will be a `Literal::Array(Integer)` and will have checked the types of each element in the mapping. An invalid mapping will raise a `Literal::TypeError`.

If you map from one basic type to another basic type using a Symbol proc, Literal may be able to skip the type check.

```ruby
array = Literal::Array(String).new("Hello", "World")
mapped = array.map(Integer, &:length)
```

In this example, Literal can see that `&:length` will call `#length` on a `String` and it knows that method always returns an `Integer`.

## Covariance

If both types are modules (or classes), `Literal::Array` generics support covariance. This means a `Literal::Array(Integer)` is a subtype of `Literal::Array(Numeric)`.

Beyond basic module and classes, some of Literal’s built in types support covariance and we’re working on adding more. For example, `Literal::Array(true)` is a subtype of `Literal::Array(_Boolean)`.
