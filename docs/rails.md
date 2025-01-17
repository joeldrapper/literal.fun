# Rails integration

## A Generic type for ActiveRecord relations

Literal provides a type for `ActiveRecord::Relation` objects, parameterized by the model class. It works great with [Phlex](https://phlex.fun) and [ViewComponent](https://viewcomponent.org).

```ruby
class Components::ArticlesList < Components::Base
  extend Literal::Properties

  prop :articles, ActiveRecord::Relation(Article)
end
```

## Using Literal Enums in ActiveRecord models

Literal provides a `:literal_enum` attribute type for ActiveRecord and ActiveModel models. This allows you to replace Rails’ built-in enums with [Literal enums](enums).

```ruby
class Article < ApplicationRecord
  class Status < Literal::Enum(Integer)
    Draft = new(1)
    Published = new(2)
  end

  attribute :status, :literal_enum, type: Status
end
```

Set `array: true` to allow multiple values. Maks sure the database column is set up to accept an array of your value type.

```ruby
attribute :status, :literal_enum, type: Status, array: true
```
