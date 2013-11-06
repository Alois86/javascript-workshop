require "minitest/autorun"

class Foo
  def great?
    true
  end
end

describe Foo do
  it "is great" do
    Foo.new.great?.must_equal true
  end
end
