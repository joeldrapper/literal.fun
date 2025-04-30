# Introduction

Literal provides a set of tools to help you write more expressive, confident Ruby, reduce your error rate and get more mileage out of your existing tests by validating input.

Combined with [Strict Ivars](https://github.com/joeldrapper/strict_ivars), Literal can significantly reduce the risk of errors from unexpected `nil`s.

Take this object for example

```ruby
class Name < Literal::Data
  prop :first, _String(length: 1..)
  prop :last, _String(length: 1..)

  def full
    "#{@first} #{@last}"
  end
end
```

If a `Name` object is initialized without raising a `TypeError`, we know the `first` and `last` properties are strings and their length is 1 or more characters. We also know that the `full` method will combine those properties into a new string. If there was a typo in `full` — say we typed `@frst` instead of `@first`, this would be caught by Strict Ivars and raise a `NameError`.
