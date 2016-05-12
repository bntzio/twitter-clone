class Tweet < ActiveRecord::Base
  belongs_to :user

  validates :body, presence: true, length: { maximum: 140 }

  def as_json(options={})
    super(methods: [:name, :gravatar])
  end

  def name
    user.display_name
  end

  def gravatar
    hash = Digest::MD5.hexdigest(user.email)
    "https://gravatar.com/avatar/#{hash}"
  end
end
