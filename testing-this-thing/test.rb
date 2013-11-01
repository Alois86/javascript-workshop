require "minitest/autorun"

class Foo
  def great?
    true
  end
end

describe Foo do
  it "is great" do
    Foo.new.great?.must_be true
  end
end
