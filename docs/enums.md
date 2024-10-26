
# Literal enums

Literal enums are a way to define a set of named values. Each member of the enum is an instance of the enum class, which also acts as a namespace for the members.

```ruby
class Color < Literal::Enum(Integer)
  Red = new(1)
  Green = new(2)
  Blue = new(3)
end
```

Here, we defined an enum `Color` with three members: `Red`, `Green`, and `Blue`. Each member is an instance of the `Color` class, and has an associated value. The value must match the type specified — in this case `Integer`.

You must specify each value by hand because Enums are usually serialized and stored in a database by their value. If we were to automatically assign values, the order of the members would be significant, and simply changing the order would break things.

::: tip
If you’re using TruffleRuby, you will need to call `__after_defined__` at the end of your enum class, since TruffleRuby doesn’t support `end` TracePoints.
:::

## Enumeration methods

Enums have a few class methods to help you work with them.

### `members`

Returns a Set of all members of the enum.

```ruby
Color.members # => [Color::Red, Color::Green, Color::Blue]
```

### `values`

Returns an Array of all values of the enum.

```ruby
Color.values # => [1, 2, 3]
```

### `[]` or `cast`

Takes a value and return the corresponding member of the enum.

```ruby
Color[1] # => Color::Red
Color.cast(2) # => Color::Green
```

### Enumerable

Enums are Enumerable, so you can use all the methods that come with it.

```ruby
Color.each do |color|
  puts color.name
end
```

## Instance methods

Enums have a few instance methods to help you work with them.

### `value`

Returns the value of the member.

```ruby
Color::Red.value # => 1
```

### `name`

Returns the name of the member.

```ruby
Color::Red.name # => "Color::Red"
```

### Automatic identity predicates

Enums have automatic identity predicate based on each member’s name.

```ruby
color = Color::Red

color.red? # => true
color.green? # => false
```

## Properties

You can define properties on Enums just like other structured Literal objects.

```ruby
class Color < Literal::Enum(Integer)
  prop :hex, String

  Red = new(1, hex: "FF0000")
  Green = new(2, hex: "00FF00")
  Blue = new(3, hex: "0000FF")
end
```

## Methods

Because each member is an instance of its class, you can define instance methods on the class for each member.

```ruby
class Color < Literal::Enum(Integer)
  prop :hex, String

  Red = new(1, hex: "FF0000")
  Green = new(2, hex: "00FF00")
  Blue = new(3, hex: "0000FF")

  def rgb
    hex.scan(/.{2}/).map { |it| it.to_i(16) }
  end
end
```

## Indexing

You can index enums by their value or name.

```ruby
class Color < Literal::Enum(Integer)
  prop :hex, String

  # Index by value
  index :hex, String, unique: true

  # Index with a block
  index :lower_hex, String, unique: true do |color|
    color.hex.downcase
  end

  Red = new(1, hex: "FF0000")
  Green = new(2, hex: "00FF00")
  Blue = new(3, hex: "0000FF")

  def rgb
    hex.scan(/.{2}/).map { |it| it.to_i(16) }
  end
end
```

The index allows you to use `where` for exact-match values.

```ruby
Color.where(lower_hex: "0000ff") # => [Color::Blue]
```

If the index is *unique*, you can use `find_by` for exact-match values.

```ruby
Color.find_by(lower_hex: "0000ff") # => Color::Blue
```
