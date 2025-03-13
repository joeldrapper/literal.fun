# `_Array(T)`

The `_Array(T)` type constructor (generic type) describes an array of zero or more elements where each element is a member of the type parameter.

## Parameters

| Name | Description                                              |
| ---- | -------------------------------------------------------- |
| `T`  | The type that each element in the array must conform to. |

## Specification

1. The object must be an `Array`.
2. Each element of the array must be a member of the `T` parameter type.

## Examples

```ruby
_Array(Integer) === [] # true
_Array(Integer) === [1, 2, 3] # true
_Array(Integer) === ["Hello"] # false
```

### Additional constraints

If the array is empty, it is considered valid since no element violates the type constraint. You could use a `_Constraint` type to make an array type that must contain at least one element.

```ruby
_Constraint(_Array(Integer), size: 1..)
```

To make this generic, you could define your own type constructor method that takes the member type as a parameter.

```ruby
def PopulatedArray(type)
  _Constraint(_Array(type), size: 1..)
end
```
