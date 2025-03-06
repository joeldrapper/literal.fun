# Example types

## Populated string

Matches strings that are not empty.

```ruby
PopulatedString = _String(length: 1..)
```

## Numeric constraints

```ruby
PositiveInteger = _Integer(1..)
NegativeInteger = _Integer(..-1)

PositiveFloat = _Float(1..)
NegativeFloat = _Float(..-1)

PositiveNumeric = _Constraint(Numeric, 1..)
NegativeNumeric = _Constraint(Numeric, ..-1)

UInt8 = _Integer(0..(2**8))
UInt16 = _Integer(0..(2**16))
UInt32 = _Integer(0..(2**32))
UInt64 = _Integer(0..(2**64))

Int8 = _Integer(-(2**7)..(2**7)-1)
Int16 = _Integer(-(2**15)..(2**15)-1)
Int32 = _Integer(-(2**31)..(2**31)-1)
Int64 = _Integer(-(2**63)..(2**63)-1)
```

## Empty string

To match an empty string, you can just use a string literal.

```ruby
EmptyString = ""
```

## Human age

```ruby
HumanAge = _Integer(0..122)
```

## Adult age

```ruby
AdultAge = _Integer(18..122)
```

## Email address string

This matches most valid email addresses. [Source](https://www.regular-expressions.info/email.html)

```ruby
EmailAddressString = _String(
  /\A[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\z/i
)
```

## Red-green-blue color

Match red-green-blue color values specified as an array of three byte values, e.g. `[123, 4, 56]`.

```ruby
ByteValueInt = _Integer(0..255)

RGBColor = _Tuple(ByteValueInt, ByteValueInt, ByteValueInt)
```
