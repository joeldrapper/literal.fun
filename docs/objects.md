
# Literal objects

To make it a little more convenient to create a class with Literal properties, you can subclass `Literal::Object`.

```ruby
class Person < Literal::Object
  prop :name, String
  prop :age, Integer
end
```
