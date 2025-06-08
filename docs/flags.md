
# Literal bit flags

`Literal::Flags` provides an interface for working with bit flags, which are groups of booleans stored in an integer. Bit flags are extremely efficient because each flag takes only one bit of storage.

Here's an example of how you can create a bit flag object.

```ruby
PostFlags < Literal::Flags8
  define(
    published: 0,
    featured: 1,
    deleted: 2,
    paid_only: 3
  )
end
```

Now in your post, you can use an integer for flags

```ruby
class Post < ApplicationRecord
  def flags
    PostFlags.new(super)
  end
end
```

You can get and set flags

```ruby
post.flags.published?
post.flags.published = true
```

You can also use hash style

```ruby
post.flags[:published]
```

