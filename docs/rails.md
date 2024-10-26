
# Rails integration

Literal is useful in Rails applications, especially for small non-db-backed models or view components.

Literal provides a type for `ActiveRecord::Relation` objects, parameterized by the model class. It works great with [Phlex](https://phlex.fun) and [ViewComponent](https://viewcomponent.org).

```ruby
class Components::Base < Phlex::HTML
  extend Literal::Properties
end

class Components::ArticlesList < Components::Base
  prop :articles, ActiveRecord::Relation(Article)
end
```

## Using Literal Enums in ActiveRecord models

```ruby
class Article < ApplicationRecord
  class Status < Literal::Enum(Integer)
    Draft = new(1)
    Published = new(2)
  end

  attribute :status, :literal_enum, type: Status
end
```
