
# Literal types

In Literal, a type is any object that responds to `===` (tripple-equals case equality) with a *truthy* or *falsy* value. Pretty much every object in Ruby is already a type.

For example, *classes* typically respond to `===` by checking if the given object is an instance of the class or a subclass of it.

```ruby
String === "Hello" # => true
String === 42 # => false
```

Objects typically respond to `===` by checking if the given object is an equivalent object, it’s often essentially an alias for `==` (double-equals).

```ruby
"Hello" === "Hello" # => true
"Hello" === "World" # => false
```

The `===` method on a Range will check if the given object is within the range.

```ruby
(1..10) === 5 # => true
(1..10) === 15 # => false
```

And Procs alias `===` to `call`.

```ruby
is_even = proc { |it| it % 2 == 0 }
is_even === 42 # => true
```

## How Ruby uses types

Ruby uses these types in a few different ways already. For example, in a `case` statement, Ruby will use the `===` method of each object to determine if it matches the case.

```ruby
case 42
when String
  puts "It's a string!"
when Integer
  puts "It's an integer!"
end
```

The above case statement is essentially equivalent to the following.

```ruby
object = 42

if String === object
  puts "It's a string!"
elsif Integer === object
  puts "It's an integer!"
end
```

Ruby also uses types for pattern matching, both in and out of case statements.

```ruby
case [42]
in Array[String]
  puts "It's a string in an array!"
in Array[Integer]
  puts "It's an integer in an array!"
end
```

The above pattern matching is essentially equivalent to the following.

```ruby
object = [42]

if Array === object && String === object.deconstruct[0]
  puts "It's a string in an array!"
elsif Array === object && Integer === object.deconstruct[0]
  puts "It's an integer in an array!"
end
```

Ruby also uses types for methods on Arrays:

```ruby
[1, 2, 3].all?(String) # false
[1, 2, 3].all?(Integer) # true

[1, "2", 3].any?(String) # true
[1, "2", 3].any?(Integer) # true
```

The methods `all?` and `any?` determine if all or any of the elements in the array match the given type by calling its `===` method.

## Generics

If a type is any object that responds to `===`, then we can create generic functions that generate parameterized types.

Let’s make a generic function that generates a type that checks that an object is an array and all of its elements are of a certain type.

For this example, we can just make a method that generates a proc, since as we saw above, procs respond to `===`. It would make sense to call this function `Array`, but since Ruby already has a method called `Array`, we’ll prefix it with an underscore `_Array`.

```ruby
def _Array(type)
  proc { |it| Array === it && it.all?(type) }
end
```

Now we can use this generic function like so:

```ruby
_Array(String) === [1, 2, 3] # false
_Array(Integer) === [1, 2, 3] # true
```

Literal has a number of built-in generics just like this.
