
# Literal structured objects

Literal has two structured object classes that you can inherit from: `Literal::Struct` and `Literal::Data`. These are similar to Ruby’s built in `Struct` and `Data` classes in that `Literal::Struct` is mutable while `Literal::Data` is immutable.

```ruby
class User < Literal::Struct
  prop :name, String
  prop :age, _Integer(13..)
end
```

### Marshallable

Both are marshallable, meaning they can be serialized and deserialized using Ruby’s built-in `Marshal` module.

### Hash-like

Both are hash-like, meaning they can be used in place of a hash in some cases. You can access their properties using the `[]` method. `Literal::Struct` also supports `[]=` to set properties.

### Hash equality

Both implement `hash` based on their properties, so they can be used as keys in a hash.

### Pattern matching

Both implement `deconstruct` and `deconstruct_keys` so you can pattern match on their properties.

### Support for Packwerk

Both implement the interfaces required to be packwerk compatible.
