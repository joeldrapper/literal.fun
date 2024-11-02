
# Literal objects

To make it a little more convenient to create a class with Literal properties, you can subclass `Literal::Object`.

```ruby
class Person < Literal::Object
  prop :name, String
  prop :age, Integer
end
```

This is the same as defining a regular class and extending `Literal::Properties` except you can do it on one line.

If you need to subclass something else, such as `Phlex::HTML`, just extend `Literal::Properties` instead.
