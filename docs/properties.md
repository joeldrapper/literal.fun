
# Literal properties

`Literal::Properties` is a module that you can extend into any class hierarchy to add property macros.

Properties can be defined like this:

```ruby
class Person
  extend Literal::Properties

  prop :name, String
  prop :age, Integer
end
```

The first argument to `prop` is the name of the property, and the second argument is the type. `Person` now has an initializer that takes `name:` and `age:` keyword arguments and assigns them to the instance variables `@name` and `@age`.

## Different kinds of arguments

You can also define properties that take different kinds of arguments.

#### Positional argument:

```ruby
prop :name, String, :positional
```

#### Positional *rest:

```ruby
prop :names, _Array(String), :*
```

#### Keyword **rest:

```ruby
prop :options, _Hash(Symbol, String), :**
```

#### Blocks:

```ruby
prop :block, Proc, :&
```

## Type coercion

You can optionally pass a block to `prop` that will be used to coerce the value to the correct type.

```ruby
prop :age, Integer do |value|
  value.to_i
end
```

The value will pass through the block before being type-checked or assigned to the instance variable.

## Optional properties

All properties are required unless the type is nilable.

```ruby
prop :name, _Nilable(String)
```

Since the type `_Nilable(String)` can be `nil`, the property is optional.

## Attribute accessors

You can also specify that Literal should generate attribute readers/writers for properties.

```ruby
prop :name, String, reader: :public, writer: :protected
```
