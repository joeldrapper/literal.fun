
# Rails integration

## Using Literal Enums in ActiveRecord models

```ruby
class Status < Literal::Enum(Integer)
  Draft = new(1)
  Published = new(2)
end

attribute :status, :literal_enum, type: Status
```
