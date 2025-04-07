
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
## Default values

Properties can have defaults that are either `Proc`s or frozen objects.

```ruby
prop :first_name, String, default: -> { "John" }
prop :last_name, String, default: "Doe".freeze
```

## Initializers

When you use properites, Literal will define an initializer that processes the properties you've defined. This means you cannot define your own `initialize` method directly, as it would conflict with the generated one. However, Literal provides an `after_initialize` hook that you can use to perform custom initialization logic after the properties have been set.

```ruby
class Person
  extend Literal::Properties

  prop :name, String
  prop :age, Integer
  
  def after_initialize
    # Initialization logic
  end
end
```
